# ⚡ Runtime FeedDownloader Pro: Guia de Início Rápido

Bem-vindo ao **Runtime FeedDownloader Pro**. Este guia irá levá-lo desde o primeiro arranque até ao seu primeiro arquivo de podcast completo em menos de 3 minutos.

---

## 1. Análise do Feed

Primeiro, indique ao software qual podcast pretende arquivar:

1. Copie o **URL RSS** do podcast que pretende descarregar (normalmente encontra-se no site do podcast com etiquetas como "RSS", "Feed" ou "Subscribe").
2. Cole-o na **barra de pesquisa principal** no topo da interface.
3. Clique no botão **"Analisar"** (ou prima `Enter`).
4. O software irá consultar o feed e mostrar a lista completa de episódios disponíveis, com título, duração e data de publicação.

> **Dica:** Pode arrastar e largar o URL diretamente na janela da aplicação (Drag & Drop) sem usar a barra de pesquisa.

---

## 2. Escolha do Destino

Antes de iniciar a transferência, escolha onde guardar os seus ficheiros:

1. Clique no ícone da **pasta** junto ao campo do caminho de destino.
2. Selecione (ou crie) a pasta onde pretende que o arquivo seja organizado.
3. Se estiver a usar um **NAS ou unidade de rede (SMB)**, introduza o caminho de rede (ex. `\\NAS\Podcasts\`). O software verificará automaticamente o acesso de escrita em 8 segundos, sem bloquear a interface.

> **Dica:** Crie uma pasta dedicada para cada podcast (ex. `D:\Arquivo\NomePodcast\`). O FeedDownloader Pro guardará os ficheiros de forma organizada e memoriza a localização na sua base de dados.

---

## 3. Início da Transferência

Tem o feed analisado e a pasta pronta. Agora pode descarregar:

**Opção A — Descarregar o catálogo completo:**
1. Clique no botão principal **"Descarregar Tudo"**.
2. A lista completa de episódios será adicionada à fila de transferência.
3. O software começará a descarregar ficheiros em paralelo (o número de threads é configurável nas Definições).

**Opção B — Transferência seletiva:**
1. Na lista de episódios, encontre o que lhe interessa.
2. Clique no ícone de **transferência** (seta para baixo) junto ao episódio.
3. Pode selecionar vários episódios mantendo `Ctrl` premido e depois iniciá-los juntos.

> **Dica:** O sistema **Stall Detection** monitoriza cada transferência: se um servidor parar de responder durante 60 segundos, a transferência é reiniciada automaticamente. Não precisará de verificar a fila manualmente.

---

## 4. Gestão da Fila

Enquanto o FeedDownloader Pro trabalha, tem o controlo total:

- **Barra de Progresso Global:** Visível na parte inferior da interface, mostra o progresso de todo o lote (ficheiros concluídos / totais, velocidade média).
- **Pausar / Retomar:** Clique em **Pausar** para suspender todas as transferências. Quando estiver pronto, clique em **Retomar**.
- **Parar:** Para o lote. Os ficheiros já concluídos são mantidos na base de dados. No próximo arranque, o FeedDownloader Pro reconhecerá os ficheiros já descarregados e evitará duplicados.
- **Ícone da Bandeja (Área de Notificação):** Pode fechar a janela principal: o software continuará a trabalhar em segundo plano. O ícone na área de notificação (bandeja do sistema) permite-lhe reabrir a aplicação ou parar as transferências a qualquer momento.

---

## 5. Exportação e Estatísticas

Após a conclusão da transferência, aceda às **Definições** (ícone de engrenagem ⚙️) para as funcionalidades avançadas:

- **Exportar CSV:** Gera um ficheiro de folha de cálculo com a lista completa dos episódios descarregados (título, URL, caminho do ficheiro, hash SHA-256, tamanho, bitrate).
- **Importar/Exportar OPML:** Partilhe a sua lista de feeds com outras aplicações ou outros utilizadores do software.
- **Estatísticas do Arquivo:** Visualize o espaço em disco ocupado, o número total de episódios e o resumo de integridade (ficheiros verificados via SHA-256).
- **Modelo de Renomeação:** Personalize o formato do nome do ficheiro usando tokens como `{{title}}`, `{{date}}`, `{{podcast}}` para um arquivo perfeitamente organizado.

---

## Dicas Úteis & Resolução de Problemas

**O feed não é reconhecido:**
Verifique se o URL é diretamente o endereço do ficheiro RSS (normalmente termina em `.xml` ou `.rss`). Alguns sites mostram uma página HTML com um link para o feed real: use esse link.

**Alguns episódios não descarregam (erro 404):**
O episódio foi removido do servidor do podcast. O FeedDownloader Pro registará o erro na base de dados sem bloquear outras transferências. Esta é uma das razões pelas quais o arquivo atempado é essencial.

**Caminho NAS inacessível:**
Certifique-se de que o NAS está ligado e acessível na rede local antes de iniciar a transferência. Se usar credenciais SMB, certifique-se de que a partilha está montada (ou que as credenciais estão configuradas no Windows).

**O software parou a transferência por "espaço em disco insuficiente":**
Liberte espaço no destino e reinicie o lote. Os ficheiros já descarregados não serão re-descarregados graças à base de dados.

---

*Segurança Garantida: Cada URL é filtrado pelo sistema anti-SSRF de 5 níveis antes de ser processado.*

*Parte do Ecosystem Runtime | Digital Core — Ferramentas construídas para durar.*
