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
6.  **Adição à biblioteca:** O feed é inserido permanentemente na barra lateral se ainda não estiver presente. Os feeds já na biblioteca são atualizados com a contagem de episódios mais recente.

---

## 5.4 A Biblioteca de Feeds

O FeedDownloader Pro mantém uma **biblioteca permanente de feeds**. Cada feed analisado é guardado na barra lateral e permanece disponível entre as sessões, sem necessidade de reintroduzir o URL a cada arranque.

### Apresentação

Cada elemento da biblioteca mostra: a capa do podcast (miniatura), o título, a data da última sincronização com o servidor e um emblema numérico que indica quantos episódios foram publicados desde a última transferência. O emblema desaparece assim que todos os novos episódios forem transferidos.

Ao clicar num feed na barra lateral, a lista de episódios é imediatamente atualizada na área principal.

### Remover um feed da biblioteca

Para remover um feed, passar o rato sobre o elemento na barra lateral: surge o botão da reciclagem no canto direito da linha. Clicar nele abre uma janela de confirmação. A remoção elimina o feed da biblioteca, mas **não apaga os ficheiros de áudio já transferidos** nem os dados associados na base de dados; os episódios permanecem visíveis na Vista de Arquivo.

### Pesquisa e ordenação

*   **Pesquisa de feeds:** O campo de pesquisa no topo da barra lateral filtra os feeds por nome em tempo real. Útil com bibliotecas de grandes dimensões.
*   **Ordenação A–Z:** O botão de ordenação organiza os feeds alfabeticamente por título. Clicar novamente repõe a ordem original.

*Nota sobre privacidade:* A biblioteca de feeds é guardada exclusivamente na base de dados local. Nenhum dado é transmitido a servidores externos.

---

## 5.5 Importar Feeds de OPML

**OPML** (Outline Processor Markup Language) é o formato padrão para a exportação e importação de listas de podcasts entre diferentes aplicações. Se tiver uma biblioteca de podcasts numa aplicação como Pocket Casts, Overcast, AntennaPod ou qualquer outro cliente, pode exportá-la em OPML e importá-la diretamente no FeedDownloader Pro.

**Como importar um ficheiro OPML:**

1.  Aceder a **Definições → Arquivo**, secção "Dados e portabilidade".
2.  Clicar em **Importar feeds (OPML)** e selecionar o ficheiro `.opml` exportado pela aplicação de podcasts.
3.  O FeedDownloader Pro analisa o ficheiro e adiciona os feeds identificados à biblioteca.

*Nota:* Algumas aplicações de podcast utilizam variantes proprietárias do formato OPML. O FeedDownloader Pro suporta as versões mais comuns. Se um ficheiro não for importado corretamente, abri-lo com um editor de texto e verificar a presença de etiquetas `<outline type="rss" xmlUrl="...">` para cada podcast.

---

## 5.6 Exportar a Biblioteca em OPML

É possível exportar a biblioteca de feeds no formato OPML para:

*   Criar uma cópia de segurança da lista de podcasts.
*   Partilhá-la com outros utilizadores ou com outra instalação do software.
*   Importá-la numa aplicação de podcast para seguir os mesmos feeds.

**Como exportar:**

1.  Aceder a **Definições → Arquivo**, secção "Dados e portabilidade".
2.  Clicar em **Exportar feeds (OPML)** e escolher um nome e uma localização para o ficheiro.
3.  O ficheiro gerado é compatível com qualquer aplicação que suporte a norma OPML.

---

## 5.7 Feeds de Grandes Dimensões

Alguns podcasts históricos ou arquivos de produção radiofónica podem ter feeds com milhares de episódios e ficheiros RSS de dimensões consideráveis. Nestes casos:

*   **A análise inicial demora mais tempo:** Um feed com 2.000 episódios pode requerer 15–30 segundos para a transferência e o parsing. Este comportamento é esperado.
*   **Virtualização da lista:** Com milhares de entradas, a lista carrega apenas as linhas visíveis no ecrã para manter a interface responsiva.
*   **Estimativa do espaço necessário:** Com 2.000 episódios a cerca de 50 MB cada, o volume total é de aproximadamente 100 GB. Verificar a disponibilidade de espaço suficiente antes de continuar.

---

## 5.8 Gestão de Múltiplos Feeds

O FeedDownloader Pro gere nativamente uma biblioteca de múltiplos feeds. Não há limite ao número de podcasts que podem ser adicionados: todos são mantidos na barra lateral e permanecem acessíveis entre uma sessão e outra.

### Navegar entre os feeds

Ao clicar num feed na barra lateral, a lista de episódios da área principal é imediatamente atualizada. O software memoriza qual feed estava selecionado no último encerramento.

### Sincronizar os feeds

*   **Sincronização individual:** Passar o rato sobre um elemento de feed na barra lateral para mostrar o ícone de sincronização. Ao clicar, o software relê esse feed a partir do servidor e atualiza a lista com eventuais novos episódios.
*   **Sincronizar tudo:** O botão "Sincronizar tudo" atualiza todos os feeds em paralelo numa única operação. Durante o processo, cada miniatura da barra lateral mostra o seu próprio estado em tempo real. No final, eventuais novos episódios são destacados com o emblema de novos episódios.

Para a atualização automática programada sem intervenção manual, ver a secção 5.9.

---

## 5.9 Atualização Automática dos Feeds

O FeedDownloader Pro pode sincronizar automaticamente todos os feeds a intervalos regulares, em segundo plano, sem necessidade de qualquer ação por parte do utilizador.

### Configuração

A definição encontra-se em **Definições → Geral → Atualização automática de feeds**. Estão disponíveis quatro opções:

| Opção | Comportamento |
|-------|---------------|
| **Desativado** (predefinição) | Sem sincronização automática. |
| **A cada 6 horas** | O software sincroniza todos os feeds a cada 6 horas desde o arranque. |
| **A cada 12 horas** | O software sincroniza todos os feeds a cada 12 horas desde o arranque. |
| **A cada 24 horas** | O software sincroniza todos os feeds uma vez a cada 24 horas desde o arranque. |

A alteração da definição é imediata e não requer reiniciar o software. O temporizador parte do arranque da aplicação.

### Comportamento

A atualização automática **não inicia transferências**: limita-se a verificar se foram publicados novos episódios. Se durante a sincronização automática forem encontrados novos episódios em um ou mais feeds, o sistema envia uma **notificação do sistema operativo** com o resumo dos conteúdos encontrados (disponível em todas as 8 línguas suportadas).

Para transferir os novos episódios assinalados, abrir o software e usar os controlos habituais do lote.

---

*Ver o Capítulo 6 para uma descrição detalhada do motor de transferência.*
