# Runtime FeedDownloader Pro

Versão 1.3.13

A forma mais poderosa de arquivar os seus podcasts.

## O que é

Runtime FeedDownloader Pro é uma ferramenta profissional projetada para arquivistas, editores e entusiastas que precisam baixar catálogos inteiros de podcasts para preservação offline.
Ao contrário dos players comuns, este software é otimizado para download em massa (Batch), resiliência de rede e organização estruturada no sistema de arquivos.

## Principais Funcionalidades

### Gestão de feeds

* **Biblioteca de Feeds Permanente:** Gerencie vários podcasts ao mesmo tempo com uma barra lateral redimensionável, busca e ordenação A–Z; os feeds ficam salvos entre as sessões.
* **Selo «A Baixar»:** Indicador numérico em cada feed mostrando quantos episódios ainda não estão no seu arquivo.
* **Detecção de Novos Episódios:** Baseada nos GUIDs dos episódios, não em uma simples contagem — as notificações permanecem confiáveis mesmo com podcasts de «janela deslizante», que removem episódios antigos.
* **Feeds Paginados (RFC 5005):** Segue automaticamente os links para as páginas seguintes do feed, reconstruindo o catálogo completo mesmo quando o provedor (Apple Podcasts, Libsyn, Blubrry…) publica apenas os episódios recentes na primeira página.
* **Sync All com progresso por feed:** Atualiza todos os feeds em paralelo; cada miniatura mostra seu próprio estado em tempo real.
* **Atualização Automática dos Feeds:** Temporizador em segundo plano (6/12/24 h) com notificação do sistema para os novos episódios.

### Downloads e fila

* **Download em Lote:** Baixe centenas de episódios com um clique, com gestão inteligente da fila e concorrência configurável (1, 3 ou 5 downloads paralelos).
* **Limite de Velocidade:** Largura de banda máxima de download configurável nas Configurações (0 = ilimitado).
* **Painel de Downloads:** Painel lateral com fila, velocidade (KB/s), tempo estimado e registro de erros de cada lote. Botão flutuante para reabri-lo sem perder os downloads.
* **Velocidade e Tempo Estimado:** Exibidos na própria linha de cada episódio em download.
* **Cancelamento Individual:** Cancele um único download da fila sem interromper os demais.
* **Baixar Episódio Novamente:** Possibilidade de baixar novamente um episódio já presente no arquivo.
* **Seleção Múltipla:** Ctrl+clique / Shift+clique para selecionar intervalos de episódios e baixá-los juntos.

### Interface e navegação

* **Design Moderno «Electric Azure on Deep Dark»:** Interface escura completamente redesenhada, rápida e legível.
* **Paleta de Comandos (Ctrl+K):** Acesso rápido a todas as ações principais e aos feeds salvos sem usar o mouse.
* **Painel de Detalhes do Episódio:** Clicar em um episódio abre um painel com metadados completos, dados de arquivo e notas do programa.
* **Ordenação de Episódios:** Ordene a lista por data, título ou duração, além da ordem original do feed.
* **Vista de Arquivo:** Aba dedicada para consultar, pesquisar e ordenar todo o arquivo de episódios baixados.
* **Exportação de Playlists M3U:** Gera playlists locais compatíveis com qualquer player de áudio.
* **Onboarding Guiado:** Dicas na primeira inicialização para começar imediatamente.

### Resiliência e integridade

* **Motor «Database-First»:** O sistema lembra o que você baixou independentemente dos arquivos no disco (SQLite).
* **Downloads Resilientes:** Timeout de conexão (30 s) e detecção de travamento (60 s), novas tentativas automáticas com backoff exponencial, arquivos `.part` anticorrupção.
* **Integridade de Dados:** Cálculo automático de SHA-256 e extração de metadados de áudio (bitrate, taxa de amostragem) após o download.
* **Health Check:** Restauração automática dos episódios ausentes no disco com ressincronização do banco de dados.

### Organização e portabilidade

* **Extensão Real:** Detecta e salva o formato real do arquivo (`.m4a`, `.ogg`, `.opus`, `.flac`…) em vez de forçar sempre `.mp3`.
* **Tags ID3 com Capa:** Grava automaticamente as tags ID3 nos arquivos `.mp3`, priorizando a capa específica do episódio quando disponível.
* **Modelos de Renomeação:** Tokens personalizáveis (`{{title}}`, `{{date}}`, `{{podcast}}`) para nomes de arquivo organizados.
* **Portabilidade de Dados:** Importe e exporte seus feeds pelo padrão OPML. Gere relatórios CSV detalhados do seu arquivo.
* **Migração de Arquivo:** Mova toda a biblioteca para um novo caminho/disco com atualização automática do banco de dados.
* **Suporte a NAS/SMB:** Validação nativa e timeout (8 s) para caminhos de rede, sem travar a interface.

### Sistema e segurança

* **Auto-Update com Notificação:** Atualizações automáticas via GitHub Releases, com notificação do sistema quando uma atualização está disponível e quando está pronta para instalar.
* **Segurança de URL:** Validação anti-SSRF no nível da conexão — bloqueia protocolos perigosos, IPs privados, endereços reservados e redirecionamentos hostis, em cada página do feed.
* **Smart Truncate:** Renomeia automaticamente os arquivos para evitar erros de comprimento de caminho no Windows.
* **Desempenho:** Lista virtualizada — lida com feeds de milhares de episódios sem lentidão.
* **Ajuda Integrada:** Guia do usuário disponível diretamente dentro do aplicativo.

## Certificação Multilíngue

O software oferece suporte completo a **8 idiomas**: Italiano (IT), English (EN), Français (FR), Deutsch (DE), Español (ES), Português (PT), Русский (RU), 中文 (ZH). A interface, as notificações do sistema e a documentação estão disponíveis em todos os idiomas.

## Instruções Rápidas

1. **Analisar:** Cole a URL do feed RSS na barra principal e pressione «Analisar». O feed é adicionado à barra lateral para acessos futuros.
2. **Escolher Pasta:** Em Configurações → Arquivo, defina a pasta onde salvar os arquivos. O caminho fica sempre visível no rodapé da barra lateral.
3. **Baixar:** Use o botão «Baixar Tudo» para o catálogo completo, ou selecione episódios com Ctrl+clique e use «Baixar Selecionados».
4. **Monitorar:** O Painel de Downloads abre automaticamente com a fila, a velocidade e o tempo estimado de cada arquivo.
5. **Gerenciar:** Use Ctrl+K para a Paleta de Comandos, ou as Configurações (⚙) para concorrência, limite de velocidade, modelos, OPML e estatísticas do arquivo.

## Requisitos do Sistema

O software é multiplataforma e roda nativamente em:

* **Windows**: 10/11 (64 bits) — instalador NSIS (`.exe`)
* **Linux**: Distribuições modernas (Ubuntu 20.04+, Debian 11+, Fedora 34+) — `.AppImage` ou `.deb`
* **macOS**: 11.0 (Big Sur) ou superior — suportado pelo código, mas os pacotes para macOS não são distribuídos atualmente
* Conexão ativa com a Internet

## Download

Os pacotes oficiais estão disponíveis em [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) e são gerados via GitHub Actions.

| Plataforma | Formato | Observações |
|---|---|---|
| Windows 10/11 | `.exe` (instalador NSIS) | Software não assinado — veja a nota do SmartScreen |
| Linux | `.AppImage` / `.deb` | Nenhuma assinatura necessária |

**Windows — aviso do SmartScreen:** Na primeira execução, o Windows Defender pode exibir a tela «O Windows protegeu o computador — Fornecedor desconhecido». O software é seguro. Clique em **Mais informações** → **Executar assim mesmo**.

**macOS:** Os pacotes `.dmg` não são publicados atualmente; é possível compilar o aplicativo a partir do código-fonte.

*Desenvolvido com tecnologia Electron e React para garantir desempenho e estabilidade.*
