# Capítulo 8: Organização de Ficheiros, Modelos e Metadados

## 8.1 O Problema dos Nomes Sem Significado

Quando um ficheiro de áudio é publicado num servidor de podcasts, o seu nome original é frequentemente pouco legível: `ep_2024_03_15_FINAL_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, ou mesmo apenas `abc123def456.mp3` são exemplos comuns. Estes nomes fazem sentido para os sistemas do produtor, mas tornam um arquivo difícil de consultar.

O FeedDownloader Pro resolve este problema através do **sistema de modelos de renomeação**: um mecanismo que permite definir um formato de nome personalizado para todos os ficheiros transferidos, utilizando informações extraídas diretamente do feed RSS.

---

## 8.2 Como Funciona o Modelo

Um modelo de renomeação é uma cadeia de texto que pode conter texto fixo e **tokens** — variáveis entre chavetas simples (`{ }`). No final de cada transferência, o software substitui cada token pelo valor correspondente do episódio.

**Exemplo:**

Modelo configurado: `{date} - {podcast} - {title}`

Resultado: `2024-03-15 - O Podcast do Mário - Episódio 187: A inteligência artificial explicada.mp3`

A extensão do ficheiro (`.mp3`, `.m4a`, etc.) é adicionada automaticamente com base no formato do ficheiro original: não faz parte do modelo.

---

## 8.3 Os Tokens Disponíveis

| Token | Descrição | Exemplo |
|-------|-----------|---------|
| `{title}` | Título do episódio do feed RSS | `Episódio 187: A IA explicada` |
| `{podcast}` | Nome do podcast (título do canal RSS) | `O Podcast do Mário` |
| `{date}` | Data de publicação no formato `YYYY-MM-DD` | `2024-03-15` |
| `{year}` | Ano de publicação | `2024` |
| `{month}` | Mês de publicação (2 dígitos) | `03` |
| `{day}` | Dia de publicação (2 dígitos) | `15` |

*Nota:* Se no modelo for inserido um texto entre chavetas que não corresponde a nenhum dos tokens listados (por exemplo `{episode}`), o texto é mantido inalterado no nome do ficheiro resultante.

---

## 8.4 Modelos Recomendados

**Modelo predefinido:**
```
{title}
```
O modelo predefinido utiliza apenas o título do episódio. É adequado para catálogos com títulos descritivos.

**Para uso geral (recomendado):**
```
{date} - {title}
```
Resultado: `2024-03-15 - Episódio 187: A IA explicada.mp3`

Este formato é recomendado porque a ordenação alfabética dos ficheiros coincide com a ordenação cronológica.

**Para arquivos com múltiplos podcasts (pasta partilhada):**
```
{podcast} - {date} - {title}
```
Resultado: `O Podcast do Mário - 2024-03-15 - Episódio 187.mp3`

Útil quando todos os podcasts são guardados na mesma pasta de destino.

**Para organização em subpastas por ano e mês:**
```
{year}/{month}/{date} - {title}
```
Cria uma estrutura de subpastas automática (ver a secção 8.7).

---

## 8.5 Normalização Automática dos Nomes

Alguns caracteres não são permitidos nos nomes de ficheiros nos principais sistemas operativos: `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|` no Windows.

O FeedDownloader Pro aplica automaticamente uma **normalização** ao nome resultante do modelo:

*   Os caracteres não permitidos são substituídos por um hífen (`-`) ou removidos.
*   Os espaços duplos são reduzidos a um espaço único.
*   Os hífens ou espaços iniciais e finais são eliminados.
*   O nome é truncado a 240 caracteres se ultrapassar o limite do sistema de ficheiros.

*Nota sobre títulos longos:* Alguns podcasts utilizam títulos muito descritivos (mais de 150 caracteres). A utilização do token `{title}` no modelo pode produzir nomes de ficheiros muito longos. Nestes casos, combinar `{date}` como elemento cronológico principal pode limitar o comprimento total do nome.

---

## 8.6 Configurar o Modelo

O modelo de renomeação configura-se em **Definições → Metadados**.

O campo de texto aceita qualquer combinação de texto e tokens. Sob o campo está disponível uma pré-visualização em tempo real que mostra o resultado do modelo aplicado a um episódio de exemplo, para verificar o formato antes de guardar.

O modelo predefinido é `{title}`.

---

## 8.7 Organização em Subpastas

No modelo é possível utilizar o carácter `/` para criar uma estrutura de **subpastas** automática dentro da pasta de destino.

**Exemplo — organização por ano e mês:**
```
{year}/{month}/{date} - {title}
```

Com uma pasta de destino `D:\Arquivo Podcasts\O Podcast do Mário\`, o resultado será:
```
D:\Arquivo Podcasts\O Podcast do Mário\
    ├── 2024\
    │   ├── 01\
    │   │   ├── 2024-01-08 - Primeiro Episódio do Ano.mp3
    │   │   └── 2024-01-22 - Segundo Episódio.mp3
    │   └── 03\
    │       └── 2024-03-15 - Episódio 187.mp3
    └── 2023\
        └── 12\
            └── 2023-12-20 - Último Episódio de 2023.mp3
```

As subpastas são criadas automaticamente se não existirem.

*Atenção:* O carácter `\` (barra invertida) não é suportado como separador de caminho no modelo. Utilizar sempre `/` (barra oblíqua), que o software traduz corretamente para o sistema operativo em uso.

---

## 8.8 Ficheiro Sidecar .json

No separador **Definições → Metadados** está disponível o botão de alternância **"Ficheiro sidecar .json"**.

Quando ativado, para cada ficheiro de áudio transferido é criado um ficheiro `.json` com o mesmo nome na mesma pasta. O ficheiro contém os metadados do episódio em formato estruturado:

```json
{
  "title": "Episódio 187: A IA explicada",
  "podcast": "O Podcast do Mário",
  "date": "2024-03-15",
  "sourceUrl": "https://media.exemplo.pt/ep187.mp3"
}
```

**Cenários de utilização:**
*   Integração com scripts de automação ou sistemas que leem os metadados diretamente do sistema de ficheiros sem consultar a base de dados.
*   Conservação dos metadados de forma independente da base de dados, útil em caso de migração ou reconstrução do arquivo.

Esta opção está desativada por predefinição.

---

## 8.9 Etiquetagem ID3

No separador **Definições → Metadados** está disponível o botão de alternância **"Etiquetagem ID3"**.

Quando ativado, no final de cada transferência o software escreve os metadados diretamente dentro do ficheiro `.mp3`, nas etiquetas ID3 padrão:

*   **Título:** O título do episódio
*   **Artista:** O nome do podcast
*   **Ano:** O ano de publicação
*   **Capa:** A imagem do podcast (se disponível no feed RSS)

As etiquetas ID3 são reconhecidas pelos principais leitores de áudio (Windows Media Player, VLC, iTunes, Foobar2000) e permitem visualizar as informações do episódio independentemente do nome do ficheiro.

*Nota:* A etiquetagem ID3 aplica-se exclusivamente aos ficheiros `.mp3`. Os ficheiros noutros formatos (`.m4a`, `.ogg`, `.opus`) não são modificados, mesmo com esta opção ativa.

Esta opção está desativada por predefinição.

---

*Ver o Capítulo 9 para a verificação de integridade e a gestão do arquivo.*
