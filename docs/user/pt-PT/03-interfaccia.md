# Capítulo 3: Visita guiada à interface

## 3.1 Anatomia da janela principal

Ao abrir o FeedDownloader Pro, a janela está organizada em quatro zonas funcionais:

*   **Barra de comandos (topo):** A barra fixa que contém o campo URL, o botão Analisar e o ícone de Definições. Todas as operações para adicionar novos feeds começam aqui.
*   **Barra lateral de feeds (esquerda):** A coluna que contém a biblioteca permanente de feeds guardados, o separador Arquivo, os controlos de sincronização e o rodapé com o caminho de destino. A largura pode ser ajustada arrastando a margem direita.
*   **Área principal (centro):** A área onde se mostram os episódios do feed selecionado, com a barra de filtros, os controlos de lote e a lista de episódios.
*   **Painel de transferências (direita, sobreposto):** O painel que se abre automaticamente quando está em curso um lote de transferências. Quando fechado, permanece visível um botão flutuante na zona inferior direita para o reabrir.

No primeiro arranque, com a biblioteca vazia, a área principal mostra uma mensagem de orientação que explica como adicionar o primeiro feed e onde configurar o caminho de destino. A mensagem desaparece automaticamente ao adicionar o primeiro feed, ou manualmente através do botão ×.

---

## 3.2 A barra de comandos (Topo)

**Campo URL:** A barra de texto onde se introduz o endereço RSS do podcast a analisar. Aceita URL diretos a ficheiros XML/RSS. Suporta **arrastar e largar**: pode arrastar uma ligação diretamente de um navegador para esta área.

**Botão «Analisar»:** Inicia a análise do feed. O software contacta o URL, lê o ficheiro RSS e preenche a lista de episódios. Concluída a análise, o feed é adicionado permanentemente à barra lateral. A operação demora normalmente entre 1 e 5 segundos, conforme o tamanho do feed e a velocidade da ligação.

**Ícone de Definições (⚙):** Abre o painel de definições. Acessível em qualquer momento, mesmo durante uma transferência ativa. Para mais detalhes, consultar o Capítulo 10.

---

## 3.3 A barra lateral de feeds

A barra lateral é o centro de controlo da biblioteca de podcasts. Contém todos os feeds adicionados de forma permanente: os feeds não se perdem ao fechar o software.

### Os separadores Feed e Arquivo

Na zona superior da barra lateral existem dois separadores:

*   **Separador Feed:** Mostra a biblioteca de feeds guardados. É a vista predefinida.
*   **Separador Arquivo:** Mostra a Vista de Arquivo — uma tabela com todos os episódios transferidos em toda a biblioteca. Ver secção 3.10.

### Elementos da biblioteca de feeds

Cada feed na lista é representado por uma linha que mostra:

*   **Miniatura:** A imagem de capa do podcast.
*   **Título:** O nome do podcast tal como é declarado no feed RSS.
*   **Data:** A data da última sincronização com o servidor.
*   **Emblema de episódios novos:** Um indicador numérico que assinala quantos episódios foram publicados desde a última transferência. O emblema desaparece após transferir todos os episódios novos.

Clicar num elemento da lista carrega a lista de episódios desse feed na área principal.

### Adicionar um feed

Colar o URL RSS no campo URL no topo da interface e clicar em «Analisar». Concluída a análise, o feed é adicionado automaticamente à barra lateral e permanece disponível em sessões posteriores.

### Pesquisa e ordenação

*   **Pesquisa de feeds:** O campo de pesquisa na barra lateral filtra os feeds por nome em tempo real. Útil com bibliotecas grandes.
*   **Ordenação A–Z:** O botão de ordenação organiza os feeds alfabeticamente por título. Voltar a clicar restaura a ordem original.

### Sincronização

*   **Sincronização individual:** Ao passar o cursor sobre um elemento do feed, surge o ícone de sincronização. Ao clicar nele, o software relê o feed a partir do servidor e atualiza a lista de episódios com qualquer conteúdo novo.
*   **Sincronizar tudo:** O botão «Sincronizar tudo» no topo da barra lateral atualiza todos os feeds em paralelo. Durante a operação, cada miniatura mostra o seu próprio estado: ícone giratório (em curso), marca de verificação verde (concluído), ícone de erro vermelho (falhou). O botão indica o progresso em tempo real (p. ex. `A sincronizar… 3/7`). Os estados permanecem visíveis durante 2,5 segundos após a operação e depois desaparecem.

### Rodapé: caminho de destino

Na zona inferior da barra lateral é apresentado o caminho da pasta de destino das transferências, abreviado aos dois últimos componentes (p. ex. `Documentos / Podcasts`). Clicar nesta linha abre a pasta no explorador de ficheiros do sistema. Para alterar o caminho, usar **Definições → Arquivo**.

### Redimensionamento

A largura da barra lateral pode ser ajustada arrastando a margem direita (o cursor transforma-se numa seta dupla horizontal). A largura mínima é de 240 px, a máxima de 640 px e o valor predefinido é de 456 px. A configuração é memorizada entre sessões.

---

## 3.4 A lista de episódios

Após selecionar um feed na barra lateral, a área principal é preenchida com a lista de episódios disponíveis para esse podcast.

### Cabeçalho do feed

No topo da área principal está visível o cabeçalho do feed selecionado, com miniatura, título do podcast e contagem de episódios. Os principais controlos de lote estão acessíveis a partir deste cabeçalho (ver secção 3.7).

### Colunas da lista

Cada linha da lista representa um episódio e contém a seguinte informação:

*   **Título:** O nome do episódio tal como é definido no feed RSS.
*   **Data:** A data de publicação original do episódio.
*   **Duração:** A duração do episódio (quando disponível no feed).
*   **Tamanho:** O tamanho do ficheiro. Antes da transferência, o valor é declarativo (retirado do feed); após a transferência, reflete o tamanho real do ficheiro.
*   **Estado:** O indicador visual do estado do episódio individual. Ver secção 3.5.

### Barra de filtros

Por baixo do cabeçalho do feed encontra-se uma barra de filtros que permite restringir os episódios mostrados:

*   **Pesquisa de texto:** Filtra por palavras-chave no título (lógica E: todos os termos introduzidos têm de estar presentes). O filtro é limpo automaticamente ao mudar de feed.
*   **Filtro por estado:** Botões rápidos para mostrar apenas os episódios num determinado estado: Todos, Novos (não transferidos), Transferidos, Erros.
*   **Filtro por data:** Campos de data «De» e «Até» para limitar a lista a um intervalo de datas de publicação.
*   **Filtro por duração:** Limita a lista aos episódios com uma duração entre um mínimo e um máximo (em minutos).
*   **Ordenar:** Abre um painel com cinco opções de ordenação — ordem do feed (predefinido), data mais recente, data mais antiga, duração mais longa, duração mais curta.

Todos os filtros são limpos automaticamente ao selecionar um feed diferente.

### Seleção múltipla

Pode selecionar vários episódios em simultâneo para iniciar a sua transferência em bloco:

*   **Ctrl+clique** (ou Cmd+clique no macOS): adiciona ou remove o episódio da seleção individualmente.
*   **Shift+clique:** seleciona o intervalo entre o último episódio selecionado e aquele em que se clica.
*   Surge uma caixa de verificação ao passar o cursor sobre os episódios não selecionados e está sempre visível nos episódios selecionados.

Quando existe pelo menos um episódio selecionado, surge o botão **«Transferir seleção (N)»** no cabeçalho do feed. A seleção é limpa ao mudar de feed e após iniciar a transferência.

---

## 3.5 Os estados dos episódios

Cada episódio da lista é marcado com um indicador de estado. Compreender estes estados é essencial para interpretar corretamente o estado do arquivo.

| Estado | Cor | Significado |
|--------|-----|-------------|
| **A transferir** | Cinzento | O episódio está presente no feed mas nunca foi transferido. |
| **Em fila** | Azul | O episódio foi adicionado à fila e aguarda a sua vez no Painel de transferências. |
| **Em curso** | Azul claro animado | A transferência está em curso. A linha mostra a percentagem, a velocidade e o tempo estimado em tempo real. |
| **Concluído** | Verde | O ficheiro foi transferido, renomeado e verificado corretamente. |
| **Erro** | Vermelho | A transferência falhou após todas as tentativas automáticas. |
| **Transferido** | Verde esbatido | A base de dados já regista este episódio como transferido numa sessão anterior. |

*Nota sobre o estado **«Transferido»**:* Este estado é o resultado da filosofia Database-First. Ao analisar um feed já processado, a maioria dos episódios aparece neste estado: o software já sabe que estão presentes no arquivo. Apenas os episódios publicados após a última transferência aparecerão como **«A transferir»**.

---

## 3.6 Controlos de transferência individuais

À direita de cada linha da lista, ao passar o cursor, surgem botões de controlo específicos do episódio. Os botões visíveis variam consoante o estado:

**Para todos os episódios:**

*   **Copiar título** (ícone de documento): Copia o título do episódio para a área de transferência do sistema.
*   **Caixa de verificação:** Para a seleção múltipla (ver secção 3.4).

**Para episódios A transferir ou com Erro:**

*   **Transferir** (seta para baixo): Adiciona o episódio individual à fila de transferências.

**Para episódios Concluídos ou Transferidos:**

*   **Voltar a transferir** (seta para baixo): Adiciona novamente o episódio à fila, sobrepondo o ficheiro existente.
*   **Repor estado** (ícone de atualizar): Limpa o estado do episódio, devolvendo-o a «A transferir» sem eliminar o ficheiro do disco. Útil para forçar uma nova análise.
*   **Abrir pasta** (ícone de pasta): Abre o explorador de ficheiros do sistema na localização do ficheiro transferido.

**Interação com o Painel de detalhe:**
Um **clique simples** na linha do episódio abre o Painel de detalhe (ver secção 3.9) com os metadados completos e as ações contextuais. Ctrl+clique e Shift+clique estão reservados exclusivamente para a seleção múltipla e não abrem o painel.

---

## 3.7 Controlos de lote

Os controlos de lote operam sobre toda a fila de transferências, não sobre episódios individuais. Encontram-se no cabeçalho do feed, acima da barra de filtros.

**«Transferir tudo»:** Adiciona à fila todos os episódios no estado **«A transferir»**. Os episódios já presentes na base de dados são excluídos automaticamente. O Painel de transferências abre-se automaticamente ao iniciar.

**«Transferir seleção (N)»:** Surge quando há pelo menos um episódio selecionado. Inicia a transferência exclusivamente para os episódios selecionados.

**«Parar»:** Envia um sinal de cancelamento a todas as transferências ativas e esvazia a fila. Os ficheiros já concluídos permanecem na base de dados. Os ficheiros `.part` são eliminados. Na próxima análise, os episódios interrompidos voltarão a aparecer como **«A transferir»**.

**«Exportar M3U»:** Gera uma lista de reprodução em formato `.m3u` com os caminhos locais absolutos de todos os episódios transferidos para esse podcast. Abre uma caixa de diálogo de gravação nativa. O botão só está disponível quando existem episódios transferidos para o feed atual.

**«Abrir pasta»** (ícone de pasta no cabeçalho): Abre o explorador de ficheiros na pasta de destino do feed atual.

---

## 3.8 O Painel de transferências

O Painel de transferências é o centro de supervisão e controlo de todas as transferências em curso. Substitui a anterior barra de progresso fixa na parte inferior da interface.

### Abertura e fecho

O painel abre-se **automaticamente** ao iniciar cada lote. Quando fechado, o **botão flutuante** (ícone circular) é visível no canto inferior direito da janela: clicar nele reabre o painel. Fechar o painel não interrompe as transferências em curso.

### Estrutura do painel

*   **Cabeçalho:** Mostra o contador de ficheiros concluídos/total (p. ex. `47 / 312`), o botão Parar para interromper todas as transferências e o botão × para fechar o painel.
*   **Lista da fila:** Cada transferência em curso ou em espera é representada por uma linha com: título do episódio, nome do podcast, percentagem de progresso, velocidade atual (KB/s ou MB/s), tempo estimado até à conclusão (p. ex. `2m 30s`), barra de progresso individual. Ao passar o cursor sobre a linha surge o botão × para cancelar essa transferência individual.
*   **Secção de erros:** No final do lote, se uma ou mais transferências tiverem falhado, surge na parte inferior do painel um resumo expansível com a lista de episódios não transferidos e o respetivo código de erro.

---

## 3.9 O Painel de detalhe do episódio

O Painel de detalhe oferece uma vista aprofundada de um episódio individual: metadados, ações e — se o episódio já estiver no arquivo — dados técnicos do ficheiro transferido.

### Abrir o painel de detalhe

Um **clique simples** em qualquer linha da lista de episódios abre o painel, que desliza a partir do lado direito da janela (por baixo da barra de comandos). O painel fecha-se automaticamente quando se seleciona um feed diferente na barra lateral.

*Nota:* Ctrl+clique e Shift+clique estão reservados para a seleção múltipla e não abrem o painel.

### Conteúdo do painel

*   **Metadados básicos:** Data de publicação, duração declarada, tamanho do ficheiro indicado no feed.
*   **Ações contextuais:** Os botões disponíveis variam consoante o estado do episódio: Transferir, Voltar a transferir, Repor estado, Abrir pasta.
*   **Dados do arquivo** (visíveis apenas se o episódio já tiver sido transferido): Data e hora da transferência, tamanho real do ficheiro, taxa de bits, frequência de amostragem, nome do ficheiro no disco, soma de verificação SHA-256.
*   **Ligação de origem:** O URL original do ficheiro de áudio no feed RSS, com um botão para copiar para a área de transferência.
*   **Notas do episódio:** O texto descritivo do episódio extraído do feed (show notes), apresentado em formato de texto limpo.

---

## 3.10 A Vista de Arquivo

A Vista de Arquivo é acessível através do separador **Arquivo** na barra lateral. Ao contrário da lista de episódios, que mostra apenas os episódios de um feed de cada vez, a Vista de Arquivo reúne numa única tabela **todos os episódios transferidos em toda a biblioteca**, independentemente do podcast a que pertencem.

### Funcionalidades

*   **Pesquisa:** O campo de pesquisa filtra por título de episódio ou nome de podcast.
*   **Filtro por podcast:** O menu pendente permite limitar a visualização aos episódios de um único podcast.
*   **Ordenação:** A tabela pode ser ordenada por data de transferência, data de publicação, tamanho do ficheiro e taxa de bits.
*   **Estatísticas:** O cabeçalho da Vista de Arquivo mostra o número total de ficheiros transferidos, o número de podcasts distintos e o tamanho total do arquivo em gigabytes.
*   **Mostrar na pasta:** Ao passar o cursor sobre uma linha, surge o botão que abre o explorador de ficheiros na localização do ficheiro no disco.

A Vista de Arquivo é atualizada automaticamente quando termina cada transferência.

---

## 3.11 A Paleta de comandos (Ctrl+K)

A Paleta de comandos é uma ferramenta de acesso rápido que permite chegar a qualquer função principal do software sem usar o rato.

### Abrir a paleta de comandos

O atalho **Ctrl+K** (a partir de qualquer ponto da aplicação, mesmo durante uma transferência) abre uma sobreposição com um campo de pesquisa central.

### Navegação

*   **Escrever** no campo de pesquisa filtra as ações e os feeds em tempo real.
*   **As setas ↑↓** movem a seleção entre os resultados.
*   **Enter** executa a ação selecionada.
*   **Esc** fecha a paleta sem executar qualquer ação.

### Conteúdo

*   **Grupo Ações:** Cinco comandos fixos sempre disponíveis: *Abrir definições*, *Sincronizar todos os feeds*, *Adicionar feed* (foca o campo URL), *Ir para o separador Arquivo*, *Ir para o separador Feed*.
*   **Grupo Feeds:** Quando o campo de pesquisa está vazio, mostra os primeiros cinco feeds da biblioteca. Ao escrever, filtra os feeds por título. Selecionar um feed a partir da paleta carrega-o diretamente na área principal.

---

## 3.12 O ícone na área de notificação

Quando a janela principal é fechada clicando no X, o FeedDownloader Pro não termina o processo: minimiza-se para a área de notificação do sistema (system tray, junto ao relógio do Windows ou do macOS). Este comportamento é intencional: as transferências continuam em segundo plano enquanto a janela não está visível.

**Menu contextual da área de notificação (clique direito sobre o ícone):**

*   **Abrir FeedDownloader Pro:** Repõe a janela principal em primeiro plano.
*   **Estado das transferências:** Mostra uma linha de resumo da atividade em curso.
*   **Sair:** Encerra o programa e interrompe todas as transferências ativas.

*Nota prática:* Para executar uma transferência grande sem manter a janela aberta, iniciar o lote, fechar a janela e deixar o computador em funcionamento. O arquivo estará disponível quando o processo terminar.

---

*Ir para o Capítulo 4 para um fluxo de trabalho completo desde a primeira análise até à transferência.*
