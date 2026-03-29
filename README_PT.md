# Runtime FeedDownloader Pro
**A forma mais poderosa de arquivar os seus podcasts.**

## O que é
Runtime FeedDownloader Pro é uma ferramenta profissional projetada para arquivistas, editores e entusiastas que precisam baixar catálogos inteiros de podcasts para preservação offline.
Ao contrário dos reprodutores padrão, este software é otimizado para download em massa (Batch), resiliência de rede e organização do sistema de arquivos.

## Características Principais
- **Motor "Database-First":** O sistema lembra o que você baixou independentemente dos arquivos no disco.
- **Download em Lote:** Baixe centenas de episódios com um clique, com gestão inteligente da fila.
- **Portabilidade de Dados:** Importe e exporte os seus feeds através do padrão OPML. Gere relatórios CSV detalhados do seu arquivo.
- **Segurança Avançada:** Sistema anticorrupção para discos cheios, modo offline inteligente e validação de feeds de entrada.
- **Ajuda Integrada:** Guia do usuário completo acessível diretamente dentro da aplicação.
- **Smart Truncate:** Renomeia automaticamente os arquivos para evitar erros de comprimento de caminho no Windows.
- **Resiliência:** Tenta novamente os downloads automaticamente se a conexão cair.
- **Desempenho:** Lida com feeds com milhares de episódios sem lentidão.

## Instruções Rápidas
1.  **Analisar:** Cole a URL do feed RSS na barra principal e pressione "Analisar".
2.  **Escolher Pasta:** Clique no ícone da pasta para decidir onde salvar o arquivo.
3.  **Baixar:** Use o botão "Baixar Tudo" para o arquivo inteiro ou baixe episódios individuais manualmente.
4.  **Gerenciar:** Use as Configurações (ícone de engrenagem) para gerenciar o idioma ou redefinir o banco de dados.

## Requisitos do Sistema
O software é multiplataforma e roda nativamente em:
- **Windows**: 10/11 (64 bits)
- **macOS**: 11.0 (Big Sur) ou superior (Intel e Apple Silicon)
- **Linux**: Distribuições modernas (Ubuntu, Debian, Fedora) via AppImage ou .deb
- Conexão ativa com a Internet

## Download

Os pacotes oficiais para todas as plataformas estão disponíveis em [GitHub Releases](https://github.com/Pitz72/FeedDownloader/releases) e são gerados automaticamente via GitHub Actions.

| Plataforma | Formato | Notas |
|---|---|---|
| Windows 10/11 | `.exe` (instalador NSIS) | Não assinado — ver nota SmartScreen |
| macOS 11+ | `.dmg` / `.zip` | Não assinado — ver nota Gatekeeper |
| Linux | `.AppImage` / `.deb` | Nenhuma assinatura necessária |

**Windows — aviso SmartScreen:** No primeiro lançamento, o Windows Defender pode mostrar o ecrã "O Windows protegeu o seu PC — Editor desconhecido". O software é seguro. Clique em **Mais informações** → **Executar mesmo assim**.

**macOS — aviso Gatekeeper:** O pacote não está assinado com um certificado Apple Developer. No primeiro lançamento, o macOS pode bloqueá-lo. Para abrir: clique com o botão direito na app → **Abrir**, ou vá a **Definições do Sistema → Privacidade e Segurança → Abrir mesmo assim**.

*Desenvolvido com tecnologia Electron & React para garantir desempenho e estabilidade.*
