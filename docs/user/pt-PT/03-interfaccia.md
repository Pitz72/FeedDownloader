# Capítulo 3: Visita Guiada à Interface

## 3.1 Anatomia da Janela Principal

Ao abrir o FeedDownloader Pro, a interface está organizada verticalmente em três zonas funcionais:

*   **Zona de comando (em cima):** A barra de introdução de URL e os controlos principais. A partir daqui iniciam-se todas as operações.
*   **Zona de trabalho (ao centro):** A área principal, onde são apresentados os episódios analisados com as respetivas informações e os controlos de transferência individuais.
*   **Zona de estado (em baixo):** A barra de progresso global com as informações sobre o lote em curso.

---

## 3.2 A Barra de Comando (Em Cima)

**Campo URL:** A barra de texto onde se introduz o endereço RSS do podcast a analisar. Aceita URLs diretos para ficheiros XML/RSS. Suporta **arrastar e largar**: é possível arrastar uma ligação diretamente de um browser para esta área.

**Botão "Analisar":** Inicia a análise do feed. O software contacta o URL, lê o ficheiro RSS e preenche a lista de episódios. A operação demora geralmente entre 1 e 5 segundos, dependendo do tamanho do feed e da velocidade da ligação.

**Campo Caminho de Destino:** Indica a pasta onde serão guardados os ficheiros transferidos. Ao clicar no ícone de pasta adjacente abre-se a janela de seleção. O caminho definido é mantido entre sessões.

**Ícone Definições (⚙):** Abre o painel de definições. Está acessível em qualquer momento, mesmo durante uma transferência em curso. Para mais detalhes, ver o Capítulo 10.

---

## 3.3 A Lista de Episódios (Ao Centro)

Após a análise de um feed, esta área é preenchida com a lista dos episódios disponíveis. Cada linha representa um episódio e contém as seguintes informações.

**Colunas principais:**

*   **Título:** O nome do episódio conforme definido no feed RSS.
*   **Data:** A data de publicação original do episódio.
*   **Duração:** A duração do episódio (quando disponível no feed).
*   **Tamanho:** O tamanho estimado do ficheiro (quando disponível no feed). Antes da transferência, o dado é declarativo; após a transferência, reflete o tamanho real do ficheiro.
*   **Estado:** O indicador visual do estado do episódio individual. Ver a secção 3.4.
*   **Ações:** Os botões de controlo individuais para cada episódio.

**Ordenação:**
Os cabeçalhos das colunas são clicáveis para ordenar a lista (por data, por título, por tamanho). O comportamento predefinido é a apresentação com os episódios mais recentes no topo.

**Seleção múltipla:**
Mantendo premida a tecla `Ctrl` e clicando em vários episódios é possível selecioná-los individualmente. `Shift` + clique seleciona um intervalo. Nos episódios selecionados é possível aplicar ações coletivas (iniciar transferência, remover da lista).

---

## 3.4 Os Estados dos Episódios

Cada episódio na lista está assinalado com um indicador de estado colorido. Compreender estes estados é essencial para interpretar corretamente a situação do arquivo.

| Estado | Cor | Significado |
|--------|-----|-------------|
| **Por transferir** | Cinzento | O episódio está presente no feed mas nunca foi transferido. |
| **Em fila de espera** | Azul | O episódio foi adicionado à fila e aguarda a sua vez. |
| **Em curso** | Azul claro animado | A transferência está em curso. A célula mostra também a percentagem de progresso. |
| **Concluído** | Verde | O ficheiro foi transferido, renomeado e verificado corretamente. |
| **Erro** | Vermelho | A transferência falhou após todas as tentativas automáticas. A dica de ferramenta mostra o código de erro. |
| **Transferido** | Verde suave | A base de dados já regista este episódio como transferido. Não será transferido novamente. |

*Nota sobre o estado **"Transferido"**:* Este estado é o resultado da filosofia Database-First. Quando se analisa um feed já processado anteriormente, a maioria dos episódios aparece neste estado: o software já sabe que estão presentes no arquivo. Apenas os episódios publicados após a última transferência aparecerão como **"Por transferir"**.

---

## 3.5 Os Controlos de Transferência Individuais

À direita de cada linha na lista estão presentes dois botões.

**Ícone Transferência (↓):** Adiciona o episódio individual à fila de transferência. Se o episódio já estiver no estado **"Concluído"** ou **"Transferido"**, o sistema solicita confirmação antes de proceder a uma nova transferência forçada.

**Ícone Informações (ℹ):** Abre um painel com os detalhes completos do episódio: URL original do áudio, URL da imagem de capa, descrição alargada, caminho do ficheiro no disco (se já transferido), hash SHA-256 e metadados técnicos. Este painel é útil para a verificação e o diagnóstico do arquivo.

---

## 3.6 Os Controlos do Lote (Em Cima, Área Direita)

Estes botões operam sobre toda a fila de transferência, e não sobre episódios individuais.

**"Transferir tudo":** Adiciona à fila todos os episódios no estado **"Por transferir"**. Os episódios já presentes na base de dados são excluídos automaticamente.

**"Parar":** Interrompe o lote e esvazia a fila. Os ficheiros já concluídos permanecem na base de dados. Os ficheiros `.part` são eliminados. Na análise seguinte do mesmo feed, os episódios interrompidos aparecerão novamente como **"Por transferir"**.

---

## 3.7 A Barra de Progresso Global (Em Baixo)

A barra inferior está sempre visível e mostra o estado geral do lote em curso:

*   **Barra de progresso:** Preenchimento proporcional ao número de ficheiros concluídos sobre o total da fila.
*   **Contador de ficheiros:** Por exemplo `47 / 312 episódios` — número de ficheiros concluídos sobre o total da fila.
*   **Velocidade média:** Velocidade de transferência agregada de todas as transferências paralelas ativas, expressa em MB/s ou KB/s.
*   **Tempo estimado:** Estimativa do tempo restante para concluir o lote, calculada com base na velocidade média dos últimos 30 segundos.

*Nota:* A estimativa do tempo restante pode variar significativamente nas primeiras fases de uma transferência, quando os dados disponíveis para o cálculo são ainda limitados. Torna-se mais fiável após os primeiros 10–15 ficheiros concluídos.

---

## 3.8 O Ícone na Área de Notificação

Quando se fecha a janela principal clicando no X, o FeedDownloader Pro não termina o processo: reduz-se para a área de notificação do sistema (junto ao relógio do Windows ou macOS). Este comportamento é intencional: as transferências prosseguem em segundo plano enquanto a janela não está visível.

**Menu de contexto da área de notificação (clique direito no ícone):**
*   **Abrir FeedDownloader Pro:** Traz a janela principal para primeiro plano.
*   **Estado da Transferência:** Mostra uma linha de resumo (ex.: `Downloading: 3 active, 47/312 completed`).
*   **Sair:** Fecha o programa e interrompe todas as transferências ativas.

*Nota prática:* Para executar uma transferência de grandes dimensões sem manter a janela aberta, iniciar o lote, fechar a janela e deixar o computador em funcionamento. O arquivo estará disponível no final do processo.

---

*Ver o Capítulo 4 para um fluxo de trabalho completo desde a primeira análise até à transferência.*
