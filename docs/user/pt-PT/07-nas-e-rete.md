# Capítulo 7: NAS, Discos de Rede e Caminhos SMB

## 7.1 Por que os Discos de Rede Requerem uma Abordagem Específica

A maioria das aplicações de transferência de ambiente de trabalho gere corretamente os caminhos locais (`C:\`, `D:\`) e apresenta comportamentos imprevisíveis quando o destino é um NAS, um servidor Windows partilhado ou uma unidade SMB. O motivo é técnico: os discos de rede são intrinsecamente menos fiáveis do que os discos locais. O NAS pode estar desligado, a rede local pode sofrer picos de latência, as credenciais SMB podem expirar. Qualquer operação num caminho de rede que não responde pode bloquear o processo principal da aplicação durante dezenas de segundos, tornando a interface não responsiva.

O FeedDownloader Pro gere corretamente estes cenários. Para os utilizadores que arquivam em NAS, este capítulo é essencial.

---

## 7.2 Como Funciona a Validação do Caminho de Rede

Sempre que é definido um caminho de destino que começa com `\\` (caminho UNC, típico de SMB) ou corresponde a uma unidade de rede mapeada (ex.: `Z:\`), o FeedDownloader Pro ativa automaticamente o **módulo de validação do caminho de rede**.

Este módulo executa três operações numa **transferência separada**, sem nunca envolver o processo da interface:

1.  **Teste de acessibilidade:** Tenta aceder à raiz do caminho de rede. Se o NAS não estiver ligado ou a rede não estiver disponível, esta operação falha.
2.  **Teste de acesso em leitura:** Verifica que a pasta de destino existe e é legível.
3.  **Teste de acesso em escrita:** Cria e depois elimina um ficheiro temporário (`_fdp_write_test_[timestamp].tmp`) na pasta de destino para verificar as permissões de escrita.

Toda a sequência tem um **tempo limite de 8 segundos**. Se dentro deste intervalo não for recebida resposta, o software considera o caminho indisponível e apresenta um aviso, sem bloquear a interface.

*Justificação do tempo limite:* A maioria dos NAS domésticos (Synology, QNAP, WD MyCloud) demora 3–6 segundos a sair do modo de suspensão. 8 segundos é um intervalo suficiente para aguardar este restabelecimento, sendo suficientemente curto para não constituir uma espera percetível para o utilizador.

---

## 7.3 Configurar um Caminho NAS

**Método 1 — Caminho UNC direto:**
Introduzir o caminho no formato `\\NomeServidor\NomePartilha\Pasta`:

```
\\MYNAS\Podcast\Arquivo
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

O caminho pode ser introduzido diretamente no campo de texto do destino, ou através da janela de seleção de pasta, que no Windows suporta a navegação pelos caminhos de rede.

**Método 2 — Unidade de rede mapeada:**
Se o NAS já estiver mapeado como unidade de rede no Windows (ex.: `Z:` → `\\MYNAS\Podcast`), é possível selecionar `Z:\Arquivo` como pasta de destino. O FeedDownloader Pro reconhece automaticamente que se trata de um caminho de rede e ativa a validação.

**Método 3 — macOS e Linux (ponto de montagem):**
No macOS e no Linux, os caminhos de rede SMB são apresentados como pastas normais no sistema de ficheiros após a montagem (ex.: `/Volumes/MYNAS/Podcast` no macOS, `/mnt/nas/podcast` no Linux). Estes caminhos podem ser utilizados diretamente como pasta de destino.

---

## 7.4 Credenciais SMB e Autenticação

As credenciais de acesso ao NAS devem ser configuradas ao nível do sistema operativo, e não dentro do FeedDownloader Pro.

**No Windows:**
1.  Abrir o **Explorador de Ficheiros** e navegar até ao caminho do NAS (`\\MYNAS\`).
2.  Introduzir as credenciais quando solicitadas e marcar **"Memorizar credenciais"**.
3.  As credenciais são guardadas no **Gestor de Credenciais do Windows** (`Painel de Controlo → Gestão de credenciais → Credenciais do Windows`).
4.  O FeedDownloader Pro, como qualquer outra aplicação, acederá ao NAS sem solicitar credenciais adicionais.

**No macOS:**
As credenciais SMB são solicitadas ao montar a partilha (a partir do Finder: **Ir → Ligar ao Servidor** → `smb://192.168.1.100/NomePartilha`). O macOS memoriza-as no Porta-Chaves.

**No Linux:**
Montar a partilha com as credenciais no ficheiro `fstab` ou através de uma ferramenta gráfica como o GNOME Files. Em alternativa, utilizar `smbclient` ou `mount -t cifs` a partir do terminal.

---

## 7.5 Diagnóstico de Problemas com Caminhos de Rede

Em caso de aviso "Caminho de rede inacessível", verificar os seguintes pontos na ordem indicada.

**1. O NAS está ligado e iniciado?**
Verificar as luzes do dispositivo. Muitos NAS domésticos entram em modo de suspensão após um período de inatividade. Antes de iniciar a transferência, abrir o painel de administração do NAS no browser para verificar a sua disponibilidade.

**2. O NAS é acessível a partir da rede?**
A partir da Linha de Comandos (Windows) ou do Terminal (macOS/Linux):
```
ping 192.168.1.100
```
Substituir pelo endereço IP do NAS. Se o comando receber resposta, a conectividade de rede básica está a funcionar.

**3. A partilha SMB é acessível?**
Tentar abrir o caminho `\\192.168.1.100\NomePartilha` diretamente a partir do Explorador de Ficheiros do Windows. Se a operação falhar, o problema reside na configuração SMB do NAS, e não no FeedDownloader Pro.

**4. As permissões de escrita estão corretas?**
Criar manualmente um ficheiro na pasta de destino através do gestor de ficheiros. Se a operação não for permitida, o utilizador com o qual se acede ao NAS não tem permissões de escrita nessa partilha. Configurar as permissões a partir do painel de administração do NAS.

**5. A firewall bloqueia as ligações SMB?**
O protocolo SMB utiliza a porta 445 (e em alguns casos a porta 139). Verificar que a firewall do sistema ou de terceiros não bloqueia estas portas para as ligações na rede local.

---

## 7.6 Desempenho Ideal no NAS

As transferências para NAS apresentam uma complexidade adicional em relação às transferências para disco local: os ficheiros são escritos através da rede e a velocidade depende tanto da largura de banda da LAN como da capacidade de escrita do NAS.

**Indicações operacionais:**

*   **Utilizar uma ligação por cabo (Ethernet):** O Wi-Fi introduz latência e instabilidade nas operações de escrita em rede. Para arquivos de grandes dimensões, uma ligação Gigabit Ethernet por cabo oferece um desempenho significativamente melhor.
*   **Reduzir as transferências paralelas:** A escrita simultânea de muitos ficheiros num NAS pode saturar o seu I/O. Com 2–3 transferências paralelas obtêm-se frequentemente melhores resultados do que utilizando o número máximo disponível.
*   **Evitar sobreposições com as cópias de segurança do NAS:** Se o NAS executa cópias de segurança automáticas, evitar iniciar transferências em lote nas mesmas janelas temporais, pois a competição pelo I/O do disco abranda ambas as operações.
*   **Utilizar uma cache local:** Para arquivos muito grandes, é possível transferir primeiro para um disco local rápido e mover os ficheiros para o NAS no final da transferência.

---

*Ver o Capítulo 8 para a configuração do modelo de renomeação e das funcionalidades de metadados.*
