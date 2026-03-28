# Capítulo 5: Gestão de Feeds

## 5.1 O que é um Feed RSS

Um feed RSS é um documento XML publicado por um podcast para permitir que as aplicações leiam automaticamente a lista dos episódios disponíveis. Quando um editor publica um novo episódio, atualiza este documento adicionando uma nova entrada. As aplicações de podcast leem periodicamente estes documentos para identificar os conteúdos mais recentes.

Para o FeedDownloader Pro, o feed RSS é a **fonte primária de dados**: contém a lista dos episódios, os URLs dos ficheiros de áudio, os metadados (título, data, duração, descrição, capa) e as informações gerais sobre o podcast (nome, autor, categoria).

O conhecimento da estrutura interna de um feed RSS não é necessário para utilizar o software, mas facilita a interpretação dos dados apresentados na lista de episódios e a compreensão das causas de eventuais informações em falta ou incompletas.

---

## 5.2 Feeds Válidos e Feeds Problemáticos

Nem todos os feeds RSS respeitam o mesmo nível de conformidade com as normas.

**Feed bem formado:** Segue a norma RSS 2.0 ou Atom, inclui todos os campos obrigatórios (título, ligação, data de publicação, URL de áudio com tipo MIME) e, facultativamente, as etiquetas iTunes/Podcast Index para duração, capa e temporadas. O FeedDownloader Pro lê estes feeds sem problemas.

**Feed parcialmente incompleto:** Faltam alguns campos facultativos (duração, tamanho do ficheiro, capa do episódio). O software transfere os ficheiros de áudio na mesma, mas algumas colunas da lista ficarão vazias.

**Feed com URLs de áudio inacessíveis:** O feed é legível, mas os URLs dos ficheiros de áudio apontam para recursos que já não existem (erro 404). Esta situação é frequente em podcasts abandonados ou migrados para outros servidores. O FeedDownloader Pro assinala estes episódios com o estado **"Erro"** após a tentativa de transferência.

**Feed protegido por autenticação:** Alguns podcasts privados ou pagos requerem credenciais HTTP Basic para aceder ao feed. O software suporta estes feeds: as credenciais são incluídas diretamente no URL no formato `https://utilizador:palavra-passe@www.exemplo.pt/feed.xml`.

---

## 5.3 Analisar um Feed: Detalhe

Quando se clica em **"Analisar"**, o FeedDownloader Pro executa as seguintes operações em sequência:

1.  **Validação do URL:** Verifica que o URL está sintaticamente correto e que passa os 5 controlos anti-SSRF (ver o Capítulo 10 para os detalhes).
2.  **Pedido HTTP:** Contacta o servidor do feed com um agente de utilizador padrão. O tempo limite para esta operação é de 30 segundos.
3.  **Parsing XML:** Lê e analisa o documento RSS ou Atom. O software gere feeds com ligeiros desvios das normas (codificação não declarada, etiquetas em falta, espaços de nomes não convencionais).
4.  **Deduplicação:** Para cada episódio no feed, a base de dados é consultada para verificar se o episódio já foi transferido. O URL de áudio é utilizado como chave de identificação única.
5.  **Preenchimento da lista:** Todos os episódios são apresentados com o seu estado atual.

---

## 5.4 Histórico de Feeds

O FeedDownloader Pro mantém um **histórico dos feeds analisados**. Cada URL introduzido no campo de pesquisa é memorizado juntamente com o nome do podcast e o número de episódios, para simplificar os acessos futuros.

**Aceder ao histórico:**
Clicar na seta à direita do campo URL ou começar a escrever: o software propõe sugestões automáticas com base no histórico.

**Gerir o histórico:**
Nas definições é possível visualizar a lista completa dos feeds no histórico, remover entradas individuais ou esvaziar completamente a lista.

*Nota sobre privacidade:* O histórico é guardado exclusivamente na base de dados local `feeddownloader.db`. Nenhum dado é transmitido a servidores externos.

---

## 5.5 Importar Feeds de OPML

**OPML** (Outline Processor Markup Language) é o formato padrão para a exportação e importação de listas de podcasts entre diferentes aplicações. Se tiver uma biblioteca de podcasts numa aplicação como Pocket Casts, Overcast, AntennaPod ou qualquer outro cliente, pode exportá-la em OPML e importá-la diretamente no FeedDownloader Pro.

**Como importar um ficheiro OPML:**
1.  Aceder a **Definições → Arquivo**, secção "Dados e portabilidade".
2.  Selecionar o ficheiro `.opml` exportado pela aplicação de podcasts.
3.  O FeedDownloader Pro analisa o ficheiro e apresenta a lista dos podcasts identificados, com a possibilidade de selecionar os de interesse.
4.  Os feeds selecionados são adicionados ao histórico e, facultativamente, analisados em sequência automática.

*Nota:* Algumas aplicações de podcast utilizam variantes proprietárias do formato OPML. O FeedDownloader Pro suporta as versões mais comuns. Se um ficheiro não for importado corretamente, abri-lo com um editor de texto e verificar a presença de etiquetas `<outline type="rss" xmlUrl="...">` para cada podcast.

---

## 5.6 Exportar a Biblioteca em OPML

É possível exportar o histórico de feeds no formato OPML para:
*   Criar uma cópia de segurança da lista de podcasts.
*   Partilhá-la com outros utilizadores ou com outra instalação do software.
*   Importá-la numa aplicação de podcast para seguir os mesmos feeds.

**Como exportar:**
1.  Aceder a **Definições → Arquivo**, secção "Dados e portabilidade".
2.  Escolher um nome e uma localização para o ficheiro `.opml`.
3.  O ficheiro gerado é compatível com qualquer aplicação que suporte a norma OPML.

---

## 5.7 Feeds de Grandes Dimensões

Alguns podcasts históricos ou arquivos de produção radiofónica podem ter feeds com milhares de episódios e ficheiros RSS de dimensões consideráveis. Nestes casos:

*   **A análise inicial demora mais tempo:** Um feed com 2.000 episódios pode requerer 15–30 segundos para a transferência e o parsing. Este comportamento é esperado.
*   **Virtualização da lista:** Com milhares de entradas, a lista carrega apenas as linhas visíveis no ecrã para manter a interface responsiva.
*   **Estimativa do espaço necessário:** Com 2.000 episódios a cerca de 50 MB cada, o volume total é de aproximadamente 100 GB. O software apresenta uma estimativa do tamanho total antes do início do lote. Verificar a disponibilidade de espaço suficiente antes de continuar.

---

## 5.8 Limitações do Feed Múltiplo

O FeedDownloader Pro analisa um feed de cada vez. Não dispõe de um gestor de feeds permanentes com atualização automática: o software está otimizado para a transferência em lote, não para a monitorização contínua de múltiplos feeds.

Para gerir vários feeds em sequência, a estratégia recomendada é:
1.  Usar a função OPML para manter a lista de feeds num ficheiro centralizado.
2.  Analisar e transferir um podcast de cada vez, procedendo de forma sistemática.
3.  Usar o histórico de feeds para recuperar rapidamente um podcast já analisado.

---

*Ver o Capítulo 6 para uma descrição detalhada do motor de transferência.*
