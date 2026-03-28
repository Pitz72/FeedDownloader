# Capítulo 6: O Motor de Transferência

## 6.1 Arquitetura do Motor

O motor de transferência do FeedDownloader Pro é um sistema assíncrono com múltiplas transferências paralelas. Ao contrário de um sistema de transferência sequencial, o software gere várias transferências em simultâneo através de um sistema de fila central.

**Componentes principais:**

*   **A fila:** Uma lista ordenada de todas as transferências em espera. Cada episódio adicionado ao lote entra nesta fila e aguarda ser atribuído a uma transferência disponível.
*   **As transferências paralelas:** Os processos que executam fisicamente as transferências. O número de transferências ativas é configurável. Cada transferência gere um ficheiro de cada vez, de forma independente das outras.
*   **O gestor de base de dados:** O componente que atualiza em tempo real a base de dados SQLite com o estado de cada transferência (iniciada, concluída, falhada, percentagem de progresso).
*   **O monitor de integridade:** O processo que, no final de cada transferência, calcula e regista o hash SHA-256 do ficheiro transferido.

---

## 6.2 Transferências Paralelas: Configuração

O número de transferências simultâneas é um dos parâmetros mais relevantes a configurar. Um valor insuficiente abranda o processo; um valor excessivo pode saturar a ligação, sobrecarregar o servidor de origem ou gerar erros de rede.

**O valor predefinido é 3 transferências paralelas.** Para a maioria dos utilizadores com ligação doméstica, este valor oferece um bom equilíbrio entre velocidade e estabilidade.

**Diretrizes para a configuração:**

| Cenário | Transferências paralelas recomendadas |
|---------|---------------------------------------|
| Ligação lenta ou servidor com throttling | 1 |
| Ligação doméstica padrão | 3 (predefinido) |
| Ligação de fibra rápida | 5 |
| NAS com ligação de rede lenta | 1 |

**Como alterar o número de transferências paralelas:**
Aceder a **Definições → Download → Transferências paralelas** e selecionar um dos três valores disponíveis: **1**, **3** ou **5**. A alteração é aplicada imediatamente à fila em curso.

*Nota sobre servidores com limites de ligação:* Alguns servidores de alojamento de podcasts aplicam limitações ao número de ligações simultâneas por endereço IP. Na presença de erros frequentes `429 Too Many Requests` ou `503 Service Unavailable`, reduzir o número de transferências paralelas para 1 ou 2. O mecanismo de nova tentativa gere automaticamente as falhas, mas reduzir a carga previne o problema na origem.

---

## 6.3 Gestão de Erros e Sistema de Nova Tentativa

Numa transferência em lote de centenas de ficheiros, os erros de rede são previsíveis. O FeedDownloader Pro utiliza uma estratégia de **nova tentativa com recuo exponencial**: quando uma transferência falha, o sistema aguarda um intervalo crescente antes de tentar novamente, em vez de recolocar imediatamente o episódio na fila.

**Ciclo de nova tentativa:**

| Tentativa | Espera antes da nova tentativa |
|-----------|-------------------------------|
| 1.ª falha | 2 segundos |
| 2.ª falha | 4 segundos |
| 3.ª falha | 8 segundos |
| 4.ª falha | 16 segundos |
| 5.ª falha (última) | O episódio é marcado como **"Erro"** definitivo |

Se um servidor estiver temporariamente sobrecarregado, o sistema dá ao servidor tempo para recuperar antes de tentar novamente. A maioria dos erros transitórios resolve-se na segunda ou terceira tentativa.

**Erros definitivos (não sujeitos a nova tentativa):**
*   `404 Not Found`: O ficheiro não existe no servidor. Novas tentativas não são úteis.
*   `403 Forbidden`: O servidor recusou o pedido por falta de autorização.
*   Erros de validação SSRF: O URL não passou os controlos de segurança internos.

---

## 6.4 Deteção de Paragens

Uma transferência bloqueada é um cenário em que a ligação TCP está tecnicamente ativa e os pacotes continuam a chegar, mas o fluxo de dados foi interrompido. O sistema operativo não sinaliza erros porque a ligação ainda está aberta; o ficheiro continua a aparecer como "em transferência" sem progredir.

Esta condição ocorre frequentemente com:
*   Servidores sob carga que aplicam throttling após enviar os primeiros bytes.
*   Problemas de encaminhamento de rede intermédios.
*   Ficheiros de áudio de grandes dimensões servidos por CDN com limitações de largura de banda.

**Deteção:**
Cada transferência ativa é monitorizada por um processo watchdog que regista os bytes recebidos a cada 10 segundos. Se durante **60 segundos consecutivos** não chegarem novos bytes (ou chegarem menos de 1 KB, limiar que exclui os keep-alive TCP), a transferência é considerada bloqueada e:
1.  A ligação é interrompida.
2.  O ficheiro `.part` parcial é eliminado.
3.  O episódio é reinserido na fila com o ciclo normal de nova tentativa.

O processo é transparente para o utilizador: na barra de progresso individual é visível um breve reposição da percentagem, seguida da retoma da transferência. Se o bloqueio foi causado por uma condição transitória, a nova transferência inicia normalmente. Se o problema persistir além das tentativas máximas, o episódio é marcado como **"Erro"**.

---

## 6.5 Ficheiros `.part`: O Sistema Anti-Corrupção

Cada ficheiro de áudio é transferido com a extensão temporária `.part` durante a transferência. O ficheiro é renomeado com a extensão definitiva (`.mp3`, `.m4a`, `.ogg`, etc.) **apenas** após:

1.  A transferência estar concluída a 100%.
2.  O tamanho do ficheiro corresponder ao declarado no cabeçalho HTTP (`Content-Length`), se disponível.
3.  O hash SHA-256 ter sido calculado e registado na base de dados.

Este mecanismo garante que na pasta de destino nunca existam ficheiros de áudio parciais ou corrompidos com extensão definitiva. Em caso de interrupção repentina do programa ou de desligamento do computador, na pasta encontrar-se-ão ficheiros `.part` residuais: o software eliminá-los-á e transferi-los-á novamente na sessão seguinte.

*Localização dos ficheiros `.part`:* Na mesma pasta de destino dos ficheiros concluídos. Estes ficheiros não devem ser abertos com um leitor de áudio: sendo parciais, causariam erros de leitura.

---

## 6.6 Interrupção e Retoma de Sessões

**Parar o Lote:**
O botão **"Parar"** (na barra de progresso global) interrompe todas as transferências ativas de forma ordenada, esvazia a fila e elimina os ficheiros `.part` parciais. Os ficheiros já concluídos permanecem na base de dados. Na análise seguinte do mesmo feed, os episódios interrompidos aparecerão como **"Por transferir"**.

**Fechar o programa durante uma transferência:**
Se se fechar a janela principal (o programa continua na área de notificação) ou se utilizar **"Sair"** no menu da área de notificação durante uma transferência ativa, o software apresenta um aviso com o número de transferências em curso e solicita confirmação. Ao optar por sair, as transferências ativas são interrompidas de forma controlada e os ficheiros `.part` são mantidos.

**Retomar uma sessão interrompida:**
No arranque, se o FeedDownloader Pro detetar na base de dados episódios no estado **"Em fila de espera"** ou **"Em curso"** da sessão anterior, apresenta uma notificação: *"Foram encontradas X transferências pendentes da sessão anterior. Pretende retomá-las?"*. Ao confirmar, o lote retoma imediatamente.

---

## 6.7 Velocidade de Transferência

A velocidade apresentada na barra inferior é a **soma agregada** de todas as transferências ativas. Com 3 transferências ativas a descarregar cada uma a 2 MB/s, a velocidade total apresentada é de cerca de 6 MB/s.

**Fatores que influenciam a velocidade:**
*   **Largura de banda da ligação:** O limite máximo disponível.
*   **Velocidade do servidor de origem:** Muitos servidores de alojamento de podcasts aplicam limitações de largura de banda para controlar os custos. A velocidade de uma única transferência raramente ultrapassa os 2–5 MB/s nestes servidores.
*   **Número de transferências paralelas:** Um número maior de transferências paralelas compensa a lentidão dos servidores individuais descarregando a partir de múltiplas ligações simultâneas.
*   **Tamanho dos ficheiros:** Ficheiros de tamanho médio (20–80 MB, correspondentes a episódios de 30–60 minutos) oferecem a eficiência ideal, com um overhead de ligação relativo reduzido.

---

*Ver o Capítulo 7 para a configuração de caminhos NAS e de rede.*
