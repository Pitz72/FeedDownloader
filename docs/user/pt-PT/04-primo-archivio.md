# Capítulo 4: O Primeiro Arquivo — Guia Passo a Passo

## 4.1 Introdução ao Fluxo de Trabalho

Este capítulo descreve um fluxo de trabalho completo, desde o URL de um podcast até um arquivo organizado no disco. O cenário de referência é o mais comum: transferir todo o catálogo de um podcast pela primeira vez.

Recomenda-se ler o capítulo do início ao fim pelo menos uma vez. Depois de adquirir familiaridade com os passos, iniciar um novo arquivo demora menos de um minuto.

---

## 4.2 Fase 1: Encontrar o URL RSS

O ponto de partida é o URL do feed RSS do podcast a arquivar. Um feed RSS é um ficheiro de texto no formato XML que os serviços de podcast publicam para distribuir a lista dos episódios disponíveis. Cada podcast possui um feed RSS.

**Como encontrar o URL RSS:**

*   **No site web do podcast:** Procurar um ícone laranja com ondas de rádio, ou os textos "RSS", "Feed", "Subscribe" ou "Podcast Feed". Ao clicar no elemento abre-se geralmente o ficheiro XML no browser: o URL apresentado na barra de endereços é o que deve ser utilizado.
*   **A partir de uma aplicação de podcasts:** Aplicações como Pocket Casts, Apple Podcasts e similares mostram frequentemente a ligação RSS nas informações do podcast. Em algumas aplicações a ligação está acessível através da função "Partilhar".
*   **A partir de serviços de alojamento:** Se o podcast estiver alojado no Spreaker, Podbean, Buzzsprout ou plataformas equivalentes, o URL do feed está normalmente disponível no painel do editor ou nas informações públicas do podcast.
*   **A partir de um motor de busca:** Pesquisar `[Nome do Podcast] RSS feed`. O primeiro resultado leva frequentemente diretamente ao URL correto.

*Como reconhecer um URL RSS válido:* Geralmente termina com `.xml` ou `.rss`, ou contém palavras como `feed`, `rss` ou `podcast` no caminho. Exemplos: `https://www.exemplo.pt/feed.xml`, `https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Fase 2: Preparar a Pasta de Destino

Antes de analisar o feed, convém definir a pasta de destino. Recomenda-se criar uma estrutura organizada desde o início.

**Estrutura recomendada:**
```
D:\Arquivo Podcasts\
    ├── O Meu Podcast\
    ├── Podcast de Tecnologia\
    └── Radio Talk Show\
```

Criar a pasta específica para o podcast a arquivar (ex.: `D:\Arquivo Podcasts\O Meu Podcast\`). O FeedDownloader Pro guardará todos os ficheiros desse podcast nessa pasta, com os nomes definidos pelo modelo de renomeação (ver o Capítulo 8).

**Para definir a pasta de destino no FeedDownloader Pro:**

1.  Abrir **Definições → Arquivo** e clicar no ícone de **pasta** junto ao campo do caminho de destino.
2.  Navegar até à pasta criada e selecioná-la.
3.  O caminho configurado é sempre visível no rodapé da barra lateral esquerda; clicar nele abre a pasta diretamente no gestor de ficheiros.

*Nota:* Para caminhos em NAS ou discos de rede, consultar o Capítulo 7 antes de continuar. A configuração para caminhos de rede tem algumas especificidades descritas nesse capítulo.

---

## 4.4 Fase 3: Analisar o Feed

Com o URL pronto e a pasta de destino definida:

1.  Colar o URL RSS no **campo URL** no topo da interface.
2.  Clicar em **"Analisar"** (ou premir `Enter`).
3.  A lista ao centro é preenchida com os episódios. Para um podcast com 200–300 episódios, a operação demora tipicamente 2–5 segundos. Para arquivos muito grandes (1000+ episódios), podem ser necessários até 15–20 segundos, pois o ficheiro XML do feed pode atingir dimensões consideráveis.

**Em caso de erro de análise:**
*   Verificar que o URL está correto (sem espaços no início ou no fim, sem caracteres em falta).
*   Abrir o URL no browser: se o browser devolver um erro ou uma página vazia, o feed pode estar temporariamente indisponível ou o URL pode ter mudado.
*   Alguns feeds requerem cabeçalhos HTTP específicos. Neste caso, o software apresenta uma mensagem de erro com o código HTTP recebido (por exemplo `403 Forbidden`).

---

## 4.5 Fase 4: Ler os Resultados da Análise

Após a análise, a lista mostra todos os episódios do podcast.

**Elementos a verificar:**
*   **Número total de episódios:** Visível no cabeçalho da lista ou no contador em baixo. Um podcast ativo há vários anos pode ter 300–500 episódios ou mais.
*   **Episódios no estado **"Transferido"**:** Se o podcast já foi analisado anteriormente, a maioria dos episódios aparecerá neste estado. A base de dados já regista estes ficheiros como presentes no arquivo.
*   **Episódios com dados em falta:** É possível que alguns episódios não mostrem duração ou tamanho. Isto indica que o produtor do podcast não incluiu estas informações no ficheiro RSS. A transferência é efetuada corretamente em qualquer caso.

---

## 4.6 Fase 5: Iniciar a Transferência

Estão disponíveis dois modos de transferência.

**Modo A — Transferência completa:**
Clicar em **"Transferir tudo"**. O software adiciona à fila todos os episódios no estado **"Por transferir"** e inicia as transferências em paralelo. O número de transferências simultâneas depende da definição das transferências paralelas (ver o Capítulo 10; o valor predefinido é 3).

**Modo B — Transferência seletiva:**
Para transferir apenas determinados episódios:
1.  Selecionar os episódios mantendo premida a tecla `Ctrl` e clicando em cada um.
2.  Para selecionar um intervalo, clicar no primeiro episódio, manter premida a tecla `Shift` e clicar no último.
3.  Clicar no botão **«Transferir seleção (N)»** que surge no cabeçalho do feed quando há pelo menos um episódio selecionado.

---

## 4.7 Fase 6: Monitorizar o Progresso

Durante a transferência:

*   **Painel de transferências:** Abre-se automaticamente no lado direito da janela ao iniciar o lote. Mostra cada episódio em fila com percentagem, velocidade atual e tempo estimado até à conclusão. Para um arquivo de 200 episódios a uma média de 64 kbps, o volume total de dados é de cerca de 2–3 GB.
*   **Estado na lista:** Cada linha é atualizada em tempo real. Os episódios em curso mostram uma barra de progresso individual com a percentagem concluída.
*   **Execução em segundo plano:** Não é necessário manter a janela aberta. É possível fechá-la (o programa continua a operar na área de notificação) e reabri-la no final do processo.

O software gere automaticamente as novas tentativas em caso de erro de rede, a deteção de paragens em caso de servidores lentos e a verificação de integridade no final de cada ficheiro. Se o computador entrar em modo de suspensão, as transferências são interrompidas e retomadas automaticamente ao repor a sessão.

---

## 4.8 Fase 7: Verificar o Arquivo Concluído

Quando o Painel de transferências indica o lote como concluído e todos os episódios surgem em estado verde, o arquivo está pronto.

**Operações recomendadas no final:**

1.  **Verificar os erros:** Se alguns episódios mostram o estado **"Erro"** (vermelho), clicar neles para abrir o Painel de detalhe do episódio e ler o código de erro. Em alternativa, consultar a secção de resumo de erros na parte inferior do Painel de transferências. A causa mais comum é `404 Not Found`, que indica a remoção do ficheiro do servidor do podcast antes da transferência.

2.  **Exportar um resumo CSV:** Aceder a **Definições → Arquivo → Exportar CSV**. O ficheiro gerado lista todos os episódios transferidos com hash SHA-256, tamanhos e metadados (ver o Capítulo 9).

3.  **Verificar os ficheiros no disco:** Abrir a pasta de destino no gestor de ficheiros. Os ficheiros de áudio estão organizados de acordo com o modelo de renomeação configurado (ver o Capítulo 8). A presença de ficheiros `.part` indica transferências interrompidas, que serão concluídas no próximo arranque do lote.

---

## 4.9 Atualizar o Arquivo no Futuro

O sistema Database-First simplifica as atualizações do arquivo. O procedimento varia consoante o feed já esteja na biblioteca ou não.

**Feed já na barra lateral:**

1.  Clicar no feed na barra lateral para o selecionar.
2.  Passar o rato sobre o elemento e clicar no ícone de sincronização, ou usar o botão **«Sincronizar tudo»** para atualizar toda a biblioteca em paralelo.
3.  Os episódios novos aparecem no estado **"Por transferir"**; os já presentes permanecem como **"Transferido"**.
4.  Clicar em **"Transferir tudo"** para transferir apenas os episódios novos.

**Feed ainda não na biblioteca:**

Colar o URL RSS no campo URL no topo da interface e clicar em **"Analisar"**: o feed é adicionado à biblioteca e a lista é preenchida com o estado atual.

O sistema nunca transfere o mesmo episódio duas vezes. Também é possível configurar uma atualização automática periódica (ver o Capítulo 10 e a secção 5.9).

---

*Ver o Capítulo 5 para aprofundar a gestão de feeds e as funcionalidades OPML.*
