# Capítulo 11: Resolução de Problemas

## 11.1 Como Utilizar Este Capítulo

Este capítulo reúne os problemas mais comuns reportados pelos utilizadores, com as causas mais prováveis e as soluções passo a passo. Cada problema é descrito da forma como se manifesta na interface, e não em termos técnicos internos.

Se o problema não estiver nesta lista, consultar os ficheiros de registo na pasta `logs/` (ver o Capítulo 10) e contactar o suporte anexando o registo da sessão em que o problema ocorreu.

---

## Problemas de Feed e Análise

---

### Problema: "Erro de ligação" ou "Tempo limite excedido" durante a análise do feed

**Como se manifesta:** Clica-se em **"Analisar"** e após alguns segundos aparece uma mensagem de erro que indica um tempo limite excedido ou uma falha de ligação. A lista permanece vazia.

**Causas prováveis e soluções:**

*   **O servidor do feed não está disponível.** Abrir o URL do feed no browser. Se o browser devolver um erro (página não encontrada, "Este site não está acessível"), o problema diz respeito ao servidor do podcast: não é possível intervir senão tentando novamente mais tarde.
*   **A ligação à internet não está disponível ou está instável.** Verificar que outros sites são acessíveis. Se a ligação estiver instável, aguardar que se estabilize antes de tentar novamente.
*   **Uma firewall ou proxy empresarial bloqueia o pedido.** Em ambientes empresariais, o tráfego para certos servidores pode ser bloqueado. Tentar a partir da rede doméstica para verificar se o problema é específico da rede empresarial.

---

### Problema: O feed é analisado mas a lista de episódios está vazia

**Como se manifesta:** A análise é concluída sem erros, mas a lista de episódios não mostra nenhum elemento (ou mostra 0 episódios).

**Causas prováveis e soluções:**

*   **O feed não contém episódios.** Abrir o URL no browser e verificar que o documento XML contém etiquetas `<item>` ou `<entry>`. Se não estiverem presentes, o podcast ainda não publicou episódios.
*   **O feed utiliza um formato não padrão.** O FeedDownloader Pro suporta RSS 2.0 e Atom 1.0. Alguns feeds produzidos por plataformas proprietárias podem ter uma estrutura não convencional. Neste caso, o software apresenta um aviso específico na mensagem de análise.
*   **Todos os episódios já estão na base de dados.** Se o feed foi analisado anteriormente, os episódios aparecem com o estado **"Transferido"** (verde suave). Percorrer a lista e verificar a presença deste indicador de estado.

---

### Problema: O feed mostra apenas os últimos N episódios e não todo o catálogo histórico

**Como se manifesta:** Analisa-se um podcast com centenas de episódios conhecidos, mas a lista mostra apenas 50 ou 100.

**Causa:** Este limite é imposto pelo editor do podcast ou pela sua plataforma de alojamento, e não pelo FeedDownloader Pro. Muitas plataformas limitam o feed RSS aos últimos 50–100 episódios para reduzir a carga nos seus servidores. O software transfere exatamente os dados que o feed disponibiliza.

**Alternativas possíveis:**
*   Verificar se o podcast oferece um "feed completo" como URL alternativo (algumas plataformas disponibilizam-no).
*   Consultar o site web do podcast ou a plataforma de distribuição (Spotify, Apple Podcasts) para recuperar as ligações dos episódios mais antigos.
*   Algumas plataformas aceitam parâmetros no URL para solicitar o feed completo (ex.: `?limit=0` ou `?paged=all`): verificar a documentação da plataforma específica.

---

## Problemas de Transferência

---

### Problema: Muitos episódios resultam no estado "Erro 404"

**Como se manifesta:** Após uma transferência em lote, numerosos episódios mostram o estado **"Erro"** com a mensagem `404 Not Found`.

**Causa:** Os episódios ainda estão presentes no feed RSS (no documento XML), mas os ficheiros de áudio para os quais apontam foram removidos do servidor. Esta situação é frequente em podcasts abandonados ou migrados para outras plataformas.

**O que é possível fazer:**
*   Não é possível transferir ficheiros que já não existem no servidor.
*   Se se tratar de um podcast ativo e os erros parecerem excessivos, contactar o editor do podcast: pode tratar-se de uma migração temporária ou de um problema técnico resolúvel.
*   Os episódios com erro 404 são excluídos automaticamente dos lotes seguintes. Não é necessário removê-los da lista.

---

### Problema: As transferências iniciam mas procedem muito lentamente

**Como se manifesta:** A barra de progresso avança, mas a velocidade é muito baixa (poucos KB/s) em relação à largura de banda disponível.

**Causas prováveis e soluções:**

*   **O servidor do podcast aplica limitações de largura de banda.** Muitos servidores de alojamento impõem throttling para controlar os custos. Reduzir as transferências paralelas para 1 pode melhorar a situação com servidores que penalizam as ligações múltiplas.
*   **A ligação Wi-Fi é instável.** Para transferências em lote intensivas, utilizar uma ligação por cabo (Ethernet).
*   **O disco de destino é lento.** A escrita num NAS com ligação Wi-Fi ou em dispositivos USB 2.0 pode constituir o bottleneck. Considerar transferir primeiro para um disco local rápido.
*   **A ligação à internet está efetivamente limitada.** Verificar a velocidade de transferência efetiva com um teste de velocidade. Se o resultado for inferior ao esperado, o problema diz respeito à ligação.

---

### Problema: Um episódio fica bloqueado a uma percentagem elevada e nunca conclui

**Como se manifesta:** Uma única transferência mostra uma percentagem elevada (90%, 95%, 99%) que não chega a 100% e não é atualizada.

**Causa:** O servidor enviou quase todo o ficheiro mas interrompeu a transferência antes da conclusão. A deteção de paragens detetará esta condição dentro de 60 segundos após o último dado recebido e reiniciará a transferência automaticamente.

**Se o problema persistir após várias tentativas:** O ficheiro no servidor pode estar corrompido ou truncado. Após o número máximo de tentativas, o episódio será marcado como **"Erro"** com uma mensagem que indica uma discrepância entre o tamanho declarado e o recebido.

---

### Problema: O software transferiu um ficheiro `.mp3` mas o leitor de áudio indica que está corrompido

**Como se manifesta:** A transferência aparece como concluída (estado verde), mas ao abrir o ficheiro com um leitor de áudio é devolvido um erro ou o ficheiro não é reproduzido.

**Causa:** Isto não deveria ocorrer graças ao mecanismo dos ficheiros `.part` e à verificação do tamanho. Se acontecer, o ficheiro original no servidor pode já estar corrompido (problema do editor), ou ocorreu um erro de escrita no disco.

**Solução:**
1.  Clicar com o botão direito no episódio na lista → **"Forçar nova transferência"**.
2.  Se o ficheiro novamente transferido ainda estiver corrompido, o problema diz respeito ao ficheiro de origem no servidor do podcast. Verificá-lo abrindo diretamente o URL do ficheiro no browser.
3.  Executar um Health Check (ver o Capítulo 9) para verificar se outros ficheiros no arquivo apresentam problemas.

---

## Problemas de NAS e Rede

---

### Problema: "Caminho de rede inacessível" mesmo que o NAS esteja ligado

**Como se manifesta:** O software apresenta o aviso de caminho inacessível, mas o NAS está acessível normalmente a partir do gestor de ficheiros.

**Soluções a verificar na ordem indicada:**

1.  **Verificar que o caminho está exato.** Uma diferença de maiúsculas/minúsculas (`\\MYNAS\podcast` vs `\\MYNAS\Podcast`) pode causar um erro em alguns sistemas.
2.  **As credenciais SMB estão memorizadas?** Abrir o Explorador de Ficheiros e tentar aceder manualmente a `\\MYNAS\NomePartilha`. Se for solicitada a palavra-passe, as credenciais não estão guardadas no Gestor de Credenciais do Windows. Introduzi-las e marcar **"Memorizar"**.
3.  **A firewall do Windows bloqueia o FeedDownloader Pro?** Aceder a `Painel de Controlo → Windows Defender Firewall → Aplicações permitidas` e verificar que o FeedDownloader Pro está listado com acesso permitido.
4.  **O NAS suporta SMBv2/3?** Alguns NAS antigos suportam apenas SMBv1, desativado por predefinição no Windows 11. Atualizar o firmware do NAS ou ativar SMBv1 a partir do painel de administração do NAS.

---

### Problema: As transferências para o NAS interrompem-se após alguns minutos

**Como se manifesta:** O lote inicia normalmente, transfere alguns episódios, depois bloqueia com erros de escrita ou de caminho inacessível.

**Causa:** O NAS entra em modo de suspensão durante a transferência. Alguns NAS domésticos têm uma função de poupança de energia que pode ativar-se mesmo durante transferências ativas, se o dispositivo estiver configurado para monitorizar apenas o tráfego web, ignorando as ligações SMB.

**Soluções:**
*   Desativar temporariamente o modo de suspensão a partir do painel de administração do NAS durante as transferências em lote.
*   Reduzir o número de transferências paralelas para 1: um fluxo de escrita contínuo previne a ativação da suspensão de forma mais eficaz do que rajadas intensas com pausas intermédias.

---

## Problemas Gerais

---

### Problema: A interface responde com atraso

**Como se manifesta:** Os cliques demoram 1–2 segundos a ter resposta, a navegação pela lista é descontínua, o programa parece lento.

**Causas prováveis:**

*   **Base de dados de grandes dimensões.** Com dezenas de milhares de episódios na base de dados, algumas operações podem abrandar. Considerar a utilização de **Repor base de dados** (**Definições → Avançadas**) apenas se o arquivo contiver muitos episódios com erro ou dados que não se pretende recuperar.
*   **Número elevado de transferências paralelas em hardware com pouca RAM.** Com 5 transferências paralelas ativas num sistema com menos de 4 GB de RAM, o processo pode tornar-se lento. Reduzir as transferências paralelas para 1 ou 3.
*   **Antivírus que analisa os ficheiros `.part` em tempo real.** Alguns softwares de segurança intercetam cada operação de escrita no disco, abrandando as transferências. Adicionar a pasta de destino às exclusões do antivírus.

---

### Problema: O software não arranca ou fecha imediatamente ao abrir

**Como se manifesta:** Inicia-se o programa, o processo aparece brevemente no Gestor de Tarefas mas depois desaparece sem que a interface seja apresentada.

**Soluções:**

1.  **Verificar os registos.** Aceder à pasta `%APPDATA%\FeedDownloaderPro\logs\` (Windows) ou `~/.config/FeedDownloaderPro/logs/` (Linux). Abrir o ficheiro de registo mais recente com um editor de texto: a última linha deve indicar a causa do problema.
2.  **Base de dados corrompida.** Se o registo indicar um erro SQLite no arranque, o ficheiro `feeddownloader.db` pode estar corrompido. Substituí-lo por uma cópia de segurança (ver o Capítulo 9). Se não houver cópia de segurança, renomeá-lo para `feeddownloader.db.bak`: o software criará uma nova base de dados vazia no arranque seguinte (com perda do histórico).
3.  **Reinstalar o software.** Desinstalar o FeedDownloader Pro e instalar a versão mais recente. A base de dados e as definições não são eliminadas pela desinstalação.

---

### Problema: Perdi os dados da base de dados — é possível recuperá-los?

**Como se manifesta:** A base de dados foi eliminada acidentalmente, está corrompida, ou foi efetuada uma reposição sem uma cópia de segurança prévia.

**Possibilidades de recuperação:**

*   **Com uma cópia de segurança disponível:** Copiar o ficheiro `feeddownloader.db` de cópia de segurança para a pasta de dados do utilizador da aplicação, com o programa fechado (ver o Capítulo 2 para o caminho da pasta de dados do utilizador).
*   **Sem cópia de segurança:** Os ficheiros de áudio no disco ainda estão presentes: apenas a memória do software foi perdida. É possível reconstruir parcialmente o arquivo analisando novamente os feeds: os episódios cujos ficheiros já estão presentes no disco serão reconhecidos pelo sistema e não serão transferidos novamente.
*   **Prevenção:** Efetuar periodicamente uma cópia manual do ficheiro `feeddownloader.db` para um local seguro, ou exportar a lista de feeds no formato OPML (ver o Capítulo 5) como cópia de segurança da configuração. Recomenda-se efetuar esta cópia de segurança antes de qualquer migração ou atualização do software.

---

*Este é o último capítulo do Manual de Utilização Avançado do Runtime FeedDownloader Pro.*

*Para assistência não coberta por este manual, consultar a página oficial de lançamentos ou contactar o suporte técnico da Ecosystem Runtime | Digital Core.*

---

*Ecosystem Runtime | Digital Core — Ferramentas construídas para durar.*
