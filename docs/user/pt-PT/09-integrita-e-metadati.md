# Capítulo 9: Integridade, Estatísticas e Arquivo

## 9.1 Por que Verificar a Integridade dos Ficheiros

A conclusão de uma transferência não garante que o ficheiro recebido esteja íntegro. Um pacote de rede perdido durante a transferência, um erro de escrita no disco ou uma interrupção no último segundo podem produzir um ficheiro formalmente "presente" mas corrompido. Na ausência de uma verificação explícita, um arquivo aparentemente completo pode conter ficheiros de áudio não reproduzíveis, cuja corrupção só é detetada durante a reprodução.

O FeedDownloader Pro aborda este problema com dois mecanismos complementares: a **verificação do tamanho** (durante a transferência) e a **verificação SHA-256** (no final).

---

## 9.2 A Verificação SHA-256

**SHA-256** (Secure Hash Algorithm 256-bit) é uma função criptográfica que produz uma impressão digital de 64 caracteres hexadecimais para qualquer ficheiro. Dois ficheiros idênticos produzem sempre o mesmo hash; uma diferença de apenas um bit produz um hash completamente diferente.

Para cada ficheiro transferido, o FeedDownloader Pro:
1.  Calcula o hash SHA-256 do ficheiro no final da transferência.
2.  Guarda o hash na base de dados, juntamente com o caminho do ficheiro e a data de cálculo.
3.  Se o feed RSS incluir um hash de referência (alguns feeds modernos incluem o campo `<podcast:integrity>`), compara-o com o calculado. Em caso de discrepância, o ficheiro é marcado como **"Corrompido"** e reinserido na fila para uma nova transferência.

**Utilizações práticas:**
*   É possível verificar em qualquer momento futuro que um ficheiro não foi modificado, corrompido ou substituído: basta recalcular o hash e compará-lo com o registado na base de dados.
*   Após mover os ficheiros para um novo disco ou durante uma migração, o **Health Check** (ver a secção 9.4) permite verificar que todos os ficheiros ainda estão presentes.
*   Em contextos profissionais, o hash SHA-256 constitui uma referência verificável da integridade do conteúdo no momento da transferência.

---

## 9.3 Os Metadados de Áudio Extraídos

No final de cada transferência, o FeedDownloader Pro extrai automaticamente os **metadados técnicos** do ficheiro de áudio. Estas informações são lidas diretamente do ficheiro (e não do feed RSS) e registadas na base de dados.

**Metadados extraídos:**

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **Bitrate** | Qualidade de áudio em quilobits por segundo | `128 kbps`, `320 kbps` |
| **Sample rate** | Frequência de amostragem | `44100 Hz`, `48000 Hz` |
| **Tamanho em disco** | Tamanho real do ficheiro transferido | `67,4 MB` |

Estes valores são registados na base de dados e estão incluídos na exportação CSV (ver a secção 9.6).

---

## 9.4 Health Check: Verificação da Integridade do Arquivo

Com o tempo, um arquivo pode sofrer alterações externas ao software: ficheiros movidos ou eliminados diretamente a partir do sistema de ficheiros. O **Health Check** verifica o estado do arquivo em relação ao que está registado na base de dados.

**Como executar o Health Check:**
Aceder a **Definições → Arquivo → Health Check** e clicar em **"Iniciar verificação"**.

O processo analisa cada ficheiro registado na base de dados e verifica que o ficheiro ainda existe no caminho registado. No final, é apresentado um resumo com três indicadores:

| Indicador | Significado |
|-----------|-------------|
| **Total** | Número total de episódios na base de dados |
| **Presentes** | Ficheiros que existem no caminho registado |
| **Em falta** | Ficheiros não encontrados no caminho registado |

O ecrã mostra também o **espaço em disco total** ocupado pelos ficheiros presentes.

Na presença de ficheiros em falta, o software lista os primeiros 5 com o nome do podcast e o nome do ficheiro. Para recuperar um ficheiro em falta, utilizar a função **"Forçar nova transferência"** disponível no menu de contexto do episódio na lista principal.

---

## 9.5 Estatísticas do Arquivo

A secção de estatísticas está acessível em **Definições → Arquivo** e fornece uma visão geral sintética dos dados registados na base de dados:

*   **Ficheiros transferidos:** Número total de episódios presentes na base de dados.
*   **Podcasts:** Número de feeds distintos representados no arquivo.
*   **Intervalo temporal:** Data do primeiro e do último episódio transferido.

As estatísticas são atualizadas automaticamente a cada abertura do painel Definições.

---

## 9.6 Exportação CSV

A exportação CSV gera um ficheiro com os dados de cada episódio presente na base de dados. É útil para integrar o FeedDownloader Pro com outras ferramentas (folhas de cálculo, sistemas de gestão de conteúdos, scripts de automação).

**Como exportar:**
Aceder a **Definições → Arquivo → Exportar CSV** e escolher o caminho onde guardar o ficheiro.

**Colunas da exportação:**

| Coluna | Conteúdo |
|--------|----------|
| `Podcast` | Nome do podcast |
| `Episode Title` | Título do episódio |
| `Publish Date` | Data de publicação |
| `Downloaded At` | Data e hora da transferência |
| `File Size (bytes)` | Tamanho do ficheiro em bytes |
| `Bitrate (kbps)` | Bitrate de áudio em quilobits por segundo |
| `Sample Rate (Hz)` | Frequência de amostragem em hertz |
| `SHA-256 Checksum` | Hash SHA-256 do ficheiro |
| `Validation Status` | Resultado do último controlo de integridade |
| `GUID` | Identificador único do episódio no feed RSS |

*Formato do ficheiro:* CSV com separador vírgula (`,`), codificação UTF-8 com BOM (para compatibilidade com o Microsoft Excel). Os campos que contêm vírgulas são delimitados por aspas.

---

## 9.7 Migração do Arquivo

Para mover o arquivo para um novo disco ou uma nova pasta, utilizar a função integrada de migração, que mantém a base de dados sincronizada com a nova localização dos ficheiros.

**Procedimento:**
1.  Aceder a **Definições → Arquivo → Migrar arquivo**.
2.  Selecionar a **nova pasta de destino** através da janela de seleção.
3.  O software move fisicamente todos os ficheiros de áudio para a nova pasta e atualiza os caminhos na base de dados.
4.  No final é apresentado um resumo: número de ficheiros movidos e eventuais erros.

*Atenção:* A migração move os ficheiros da pasta atual para a nova. Os ficheiros são removidos da localização original. Verificar que o disco de destino tem espaço suficiente antes de iniciar a operação.

*Transferência para um novo computador:* Copiar tanto a pasta dos ficheiros de áudio como o ficheiro `feeddownloader.db` (da pasta de dados do utilizador descrita no Capítulo 2). No novo computador, instalar o FeedDownloader Pro, copiar a base de dados para a pasta de dados do utilizador e utilizar a função de migração se o caminho do arquivo tiver mudado.

---

*Ver o Capítulo 10 para as definições avançadas do software.*
