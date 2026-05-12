# Capítulo 2: Instalação e Primeiro Arranque

## 2.1 Requisitos do Sistema

Runtime FeedDownloader Pro é uma aplicação de ambiente de trabalho baseada na tecnologia Electron. É autónoma e não requer a instalação de runtimes adicionais (Node.js, .NET, Java): tudo o que é necessário está incluído no pacote de instalação.

**Requisitos mínimos:**

| Sistema Operativo | Versão Mínima | Arquitetura |
|-------------------|---------------|-------------|
| Windows | 10 (build 1903) ou Windows 11 | 64-bit (x64) |
| macOS | 11.0 Big Sur | Intel x64 ou Apple Silicon (M1/M2/M3) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 ou distribuições equivalentes | 64-bit (x64) |

**Requisitos de hardware recomendados:**
*   **RAM:** 4 GB (8 GB recomendados para arquivos de grandes dimensões com múltiplas transferências paralelas ativas)
*   **Espaço em disco:** 200 MB para a instalação do programa, mais o espaço necessário para o arquivo de áudio
*   **Ligação:** Banda larga (pelo menos 10 Mbps para utilizar as transferências paralelas de forma eficaz)

*Nota para utilizadores Linux:* O software é distribuído no formato `.AppImage`, autocontido e utilizável em qualquer distribuição moderna com bibliotecas glibc atualizadas, sem procedimento de instalação tradicional.

---

## 2.2 Instalação no Windows

1.  Transferir o ficheiro de instalação `Runtime-FeedDownloader-Pro-Setup-1.2.4.exe` a partir da página de lançamentos oficial.
2.  Fazer duplo clique no ficheiro transferido para iniciar o programa de instalação.
3.  Se o Windows mostrar um aviso **"O Windows protegeu o PC"** (SmartScreen), clicar em **"Mais informações"** e depois em **"Executar mesmo assim"**. Este aviso é padrão para software distribuído fora da Microsoft Store que ainda não atingiu um limiar suficiente de adoção para o sistema de reputação do Windows.
4.  Seguir as instruções no ecrã: aceitar o contrato de licença, escolher a pasta de instalação e clicar em **"Instalar"**.
5.  No final, estarão disponíveis um atalho no **Ambiente de trabalho** e uma entrada no menu **Iniciar**.

**Caminhos de instalação e dados:**
O programa é instalado em `C:\Program Files\Runtime FeedDownloader Pro\`. A base de dados e os ficheiros de configuração são guardados separadamente em `C:\Users\[SeuNome]\AppData\Roaming\FeedDownloaderPro\`. Esta separação garante que a desinstalação do programa não afete os dados do arquivo.

---

## 2.3 Instalação no macOS

1.  Transferir o ficheiro `Runtime-FeedDownloader-Pro-1.2.4.dmg`.
2.  Abrir o ficheiro `.dmg` com um duplo clique. Será apresentada uma janela com o ícone da aplicação.
3.  Arrastar o ícone do **FeedDownloader Pro** para a pasta **Aplicações**, conforme indicado pela seta na janela do `.dmg`.
4.  **Primeiro arranque no macOS:** Como o software não é distribuído através da Mac App Store, o macOS apresentará um aviso de segurança na primeira abertura. Para continuar:
    *   Aceder a **Definições do Sistema → Privacidade e Segurança**.
    *   Na secção "Segurança" será visível a mensagem *"O FeedDownloader Pro foi bloqueado..."*.
    *   Clicar em **"Abrir mesmo assim"** e depois em **"Abrir"** na janela de confirmação.
    *   Nos arranques seguintes, o software abrirá normalmente com um duplo clique.

*Nota para utilizadores Apple Silicon (M1/M2/M3):* Está disponível uma versão ARM nativa. Para desempenho ideal, transferir o ficheiro `.dmg` com o sufixo `-arm64`. A versão x64 pode ser utilizada através do Rosetta 2, mas a versão ARM é mais eficiente.

---

## 2.4 Instalação no Linux

1.  Transferir o ficheiro `Runtime-FeedDownloader-Pro-1.2.4.AppImage`.
2.  Tornar o ficheiro executável. As opções disponíveis são:
    *   **Através da interface gráfica:** clique direito no ficheiro → Propriedades → separador Permissões → marcar "Permitir executar o ficheiro como programa".
    *   **Através do terminal:** `chmod +x Runtime-FeedDownloader-Pro-1.2.4.AppImage`
3.  Iniciar o ficheiro com um duplo clique ou a partir do terminal: `./Runtime-FeedDownloader-Pro-1.2.4.AppImage`

**Integração com o ambiente de trabalho (opcional):**
Para adicionar o FeedDownloader Pro ao lançador e ao menu de aplicações, pode utilizar o **AppImageLauncher** (disponível nos repositórios da maioria das distribuições), que integra automaticamente os ficheiros AppImage no sistema.

*Nota para ambientes sandbox:* Em distribuições com **Flatpak** ou ambientes com restrições de acesso ao sistema de ficheiros, o software pode não conseguir aceder a caminhos de rede SMB. Nesse caso, verificar que o sistema de ficheiros de rede está montado e acessível a partir do gestor de ficheiros antes de iniciar o programa.

---

## 2.5 O Primeiro Arranque

Na primeira abertura, o software está imediatamente operacional. Não é necessária qualquer configuração inicial, nem a criação de uma conta ou a introdução de uma licença. A interface apresenta-se com a barra de introdução de URL ao centro e a lista de episódios vazia.

**Ficheiros criados no primeiro arranque:**
O programa gera automaticamente na pasta de dados do utilizador os seguintes ficheiros:
*   `feeddownloader.db` — A base de dados SQLite principal. Contém todo o histórico de transferências, os metadados dos episódios e o estado do arquivo. **Este ficheiro não deve ser eliminado.**
*   `settings.json` — As preferências do utilizador (idioma, número de transferências paralelas, pasta de destino predefinida, etc.).
*   `logs/` — A pasta dos ficheiros de registo, útil para diagnóstico em caso de problemas.

---

## 2.6 Atualizações

Quando está disponível uma nova versão, o software apresenta uma notificação na barra inferior da interface. A instalação da atualização requer sempre o consentimento explícito do utilizador.

Antes de atualizar, o software executa automaticamente uma cópia de segurança da base de dados. Em qualquer caso, os dados do arquivo não são modificados durante uma atualização: são substituídos exclusivamente os ficheiros do programa.

*Nota:* Antes de atualizar para uma versão major (por exemplo, de 1.2.x para 1.3.x), recomenda-se fazer uma cópia manual do ficheiro `feeddownloader.db` para um local seguro.

---

*Ver o Capítulo 3 para uma descrição detalhada dos elementos da interface.*
