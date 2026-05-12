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

## 10.3 Geral

### Idioma

O FeedDownloader Pro está disponível em 8 idiomas: Italiano, English, Deutsch, Español, Français, Português, Русский, 中文.

A mudança de idioma é imediata: a interface é atualizada sem necessidade de reiniciar o software. A aplicação utiliza exclusivamente o tema escuro "Obsidian Command": não está disponível um tema claro nem um seletor de densidade da lista.

### Atualização automática de feeds

Permite sincronizar automaticamente todos os feeds a intervalos regulares, sem intervenção manual. Estão disponíveis quatro predefinições:

| Opção | Comportamento |
|-------|---------------|
| **Desativado** (predefinição) | Sem sincronização automática. |
| **A cada 6 horas** | Sincronização completa a cada 6 horas desde o arranque. |
| **A cada 12 horas** | Sincronização completa a cada 12 horas desde o arranque. |
| **A cada 24 horas** | Sincronização completa a cada 24 horas desde o arranque. |

A alteração é imediata e não requer reiniciar o software. Se durante a sincronização automática forem encontrados novos episódios, é enviada uma notificação do sistema operativo. A sincronização automática não inicia transferências: limita-se a sinalizar a disponibilidade de novos conteúdos. Para uma descrição detalhada do comportamento, ver a secção 5.9.

*Nota:* A barra de filtros da lista de episódios (pesquisa de texto, estado, data, duração) está descrita na secção 3.4, uma vez que faz parte da lista de episódios e não das definições.

---

## 10.4 Segurança: O Sistema Anti-SSRF a 5 Níveis

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

## 10.5 Avançadas

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
