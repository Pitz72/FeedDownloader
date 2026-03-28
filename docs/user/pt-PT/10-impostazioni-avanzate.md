# Capítulo 10: Definições Avançadas

## 10.1 Visão Geral do Painel de Definições

O painel de definições está acessível em qualquer momento através do ícone de engrenagem (⚙) no canto superior da interface. As definições estão organizadas em cinco separadores temáticos: **Geral**, **Download**, **Metadados**, **Arquivo** e **Avançadas**. Todas as alterações são guardadas automaticamente: não é necessário confirmar com um botão dedicado.

---

## 10.2 Download

Esta secção contém os controlos principais do motor de transferência. Os parâmetros técnicos internos (tempo limite de ligação, número de novas tentativas, deteção de paragens) são fixos no motor e não requerem configuração manual.

### Transferências paralelas

O número de transferências simultâneas. Selecionável entre três valores: **1**, **3** e **5**. Para as diretrizes sobre a escolha do valor, ver o Capítulo 6.

**Valor predefinido:** 3

### Limite de velocidade

Permite limitar a largura de banda agregada utilizada por todas as transferências ativas, para evitar interferências com outras atividades de rede.

**Valores disponíveis:** `0` = sem limite (predefinido); qualquer valor positivo em KB/s. Exemplo: `500` limita o consumo total a cerca de 4 Mbps.

---

## 10.3 Filtro por Palavras-Chave

O filtro de texto permite **restringir a lista de episódios apresentados** com base no texto contido no título. É uma ferramenta de consulta e seleção rápida, útil em particular com catálogos de grandes dimensões.

**Como utilizar o filtro:**
A barra de filtro está posicionada na parte superior da lista de episódios, imediatamente abaixo dos controlos do lote. Ao escrever um ou mais termos, a lista é atualizada em tempo real mostrando apenas os episódios cujo título contém **todos os termos introduzidos** (lógica AND).

*   Para procurar episódios que contêm a palavra "entrevista", escrever `entrevista`.
*   Para procurar episódios que contêm tanto "entrevista" como "2024", escrever `entrevista 2024`.
*   O filtro não distingue maiúsculas de minúsculas: `Bónus` e `bónus` produzem o mesmo resultado.

**Cenários de utilização típicos:**
*   Identificar rapidamente os episódios de uma temporada específica num catálogo extenso.
*   Selecionar um subconjunto de episódios para transferir sem percorrer toda a lista.
*   Verificar se um episódio com um determinado título já está presente na base de dados.

*Nota:* O filtro atua sobre a apresentação da lista atual e não modifica a fila de transferência nem o estado dos episódios na base de dados. Para remover o filtro, esvaziar a barra de texto.

---

## 10.4 Geral

### Idioma

O FeedDownloader Pro está disponível em 8 idiomas: Italiano, English, Deutsch, Español, Français, Português, Русский, 中文.

A mudança de idioma é imediata: a interface é atualizada sem necessidade de reiniciar o software. A aplicação utiliza exclusivamente o tema escuro "Obsidian Command": não está disponível um tema claro nem um seletor de densidade da lista.

---

## 10.5 Segurança: O Sistema Anti-SSRF a 5 Níveis

Esta secção está documentada a título informativo: o sistema de segurança opera de forma completamente automática e não requer configuração por parte do utilizador.

**O que é um ataque SSRF?**
SSRF (Server-Side Request Forgery) é um tipo de ataque em que um URL malicioso, em vez de apontar para um recurso público, aponta para recursos internos da rede (como o painel de administração do router, um NAS ou um servidor local). No contexto de um sistema de transferência, um feed RSS construído de forma maliciosa poderia incluir URLs de áudio que apontam para estes recursos internos.

**Os 5 níveis de validação:**

1.  **Validação do protocolo:** São aceites apenas os protocolos `http://` e `https://`. Protocolos como `file://`, `ftp://`, `data:`, `javascript:` são recusados imediatamente.

2.  **Validação sintática do URL:** O URL é analisado para verificar a conformidade com a norma RFC 3986.

3.  **Resolução DNS com inspeção do IP:** O domínio no URL é resolvido para um endereço IP. Se a resolução falhar, o URL é recusado. Se a resolução for bem-sucedida, o endereço IP resultante é verificado no nível seguinte.

4.  **Bloqueio de endereços IP privados e reservados:** São bloqueados todos os endereços IP pertencentes a intervalos privados ou reservados, incluindo:
    *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` (redes privadas RFC 1918)
    *   `127.0.0.0/8` (loopback)
    *   `169.254.0.0/16` (link-local)
    *   `::1/128` (loopback IPv6)
    *   `fc00::/7` (unique local IPv6)
    *   Qualquer endereço que aponte para o anfitrião local.

5.  **Bloqueio de portas não padrão:** São aceites apenas as portas 80 e 443. Os URLs com portas não padrão (ex.: `:8080`, `:3000`, `:22`) são recusados.

*Nota para ambientes empresariais:* Se a rede empresarial inclui servidores de podcasts internos acessíveis através de endereços IP privados, o sistema anti-SSRF bloqueará estes URLs. Neste caso, contactar o suporte para uma configuração personalizada que inclua intervalos específicos de endereços IP na lista de permissões interna.

---

## 10.6 Avançadas

### Atualizações

O FeedDownloader Pro inclui um sistema de atualização automática integrado.

**Verificação automática no arranque:** Na versão instalada (pacote), o software verifica automaticamente a disponibilidade de novas atualizações 3 segundos após o arranque, consultando o repositório GitHub. Se uma nova versão estiver disponível, a transferência inicia em segundo plano sem requerer qualquer ação.

**Verificação manual:** O botão **"Verificar atualizações"** no separador **Avançadas** força uma verificação imediata em qualquer momento.

Se uma nova versão estiver disponível, o software transfere-a em segundo plano e apresenta o botão **"Instalar e reiniciar"**. A instalação nunca é iniciada automaticamente: a decisão cabe sempre ao utilizador.

**Estados apresentados durante o processo:**
*   **A verificar atualizações…** — o software está a consultar o repositório GitHub.
*   **Está atualizado** — a versão instalada é a mais recente.
*   **Nova versão disponível (vX.Y.Z)** — transferência em curso em segundo plano.
*   **Atualização pronta** — o pacote foi transferido e está pronto para instalação.

### Repor base de dados

Elimina completamente a base de dados e recomeça com um arquivo vazio. **Esta operação é irreversível.** O software solicita uma dupla confirmação explícita antes de continuar. Os ficheiros de áudio no disco não são eliminados: é reposta exclusivamente a memória interna do software (histórico de transferências, metadados, estatísticas).

*Quando utilizar:* Exclusivamente quando se pretende recomeçar com um arquivo completamente vazio, por exemplo após uma migração para um novo sistema ou para remover os dados de um ciclo de testes.

---

*Ver o Capítulo 11 para a resolução dos problemas mais comuns.*
