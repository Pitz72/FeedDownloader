# Capítulo 1: Introdução e Filosofia

## 1.1 O que é o Runtime FeedDownloader Pro?

Para descrever o software, é útil partir do problema que resolve.

Todos os dias são publicados, distribuídos e ouvidos milhares de episódios de podcast. Com o tempo, porém, uma parte considerável destes conteúdos desaparece: o apresentador deixa de pagar o serviço de alojamento, a plataforma de distribuição cessa a atividade, a CDN que alojava os ficheiros áudio é encerrada. Um episódio ouvido há três anos pode hoje ser permanentemente inacessível — não porque tenha sido eliminado intencionalmente, mas porque ninguém guardou uma cópia.

**Runtime FeedDownloader Pro** nasce para responder a este problema. Não é uma simples ferramenta de transferência de podcasts: é uma aplicação profissional para a **conservação e arquivo sistemático** de conteúdos áudio provenientes de feeds RSS. Foi concebida para arquivistas, editores, estações de rádio, produtores de conteúdos e entusiastas para quem a documentação sonora exige o mesmo rigor de conservação reservado a outros tipos de documentos.

---

## 1.2 A Quem Se Destina

O FeedDownloader Pro responde a diferentes necessidades:

*   **O Arquivista:** Quer transferir todo o catálogo de um podcast histórico antes que seja removido. Precisa de um sistema que se recorde dos episódios já transferidos, evite duplicados e verifique a integridade de cada ficheiro.

*   **O Produtor de Rádio:** Gere uma biblioteca de conteúdos num NAS partilhado. Precisa de uma ferramenta que funcione em caminhos de rede sem bloqueios, organize os ficheiros de forma previsível e produza relatórios em formato CSV para a sua equipa.

*   **O Editor:** Quer manter uma cópia local de todos os podcasts da sua rede, exportar metadados para sistemas de gestão de conteúdos e monitorizar o estado do arquivo ao longo do tempo.

*   **O Entusiasta:** Quer conservar os seus podcasts favoritos no disco, organizados de forma ordenada, sem depender da disponibilidade da ligação à internet ou correr o risco de receber ficheiros corrompidos.

---

## 1.3 A Filosofia "Database-First"

A diferença fundamental entre o FeedDownloader Pro e uma ferramenta de transferência genérica é a abordagem à gestão de dados.

A maioria das ferramentas de transferência funciona desta forma: analisa os ficheiros presentes no disco, compara-os com o feed RSS e transfere o que falta. Esta abordagem tem uma limitação crítica: **o disco não é uma fonte de verdade fiável**. Os ficheiros podem ser movidos, renomeados, corrompidos ou eliminados acidentalmente. Se a pasta dos podcasts for movida de `C:\Podcast` para `D:\Arquivo`, a ferramenta perde a referência aos episódios já transferidos e recomeça a transferir todo o catálogo.

O FeedDownloader Pro adota uma abordagem diferente. No centro de cada operação encontra-se uma **base de dados SQLite** que regista cada episódio analisado ou transferido: o URL original, o caminho do ficheiro no disco, a data de transferência, o hash SHA-256 do conteúdo e os metadados áudio. A base de dados é a memória persistente do software. Independentemente da localização física dos ficheiros, a base de dados conserva o estado completo do arquivo.

Esta arquitetura tem consequências práticas diretas:

1.  **Nenhum duplicado.** Mesmo que o mesmo feed seja analisado várias vezes, o sistema reconhece os episódios já presentes na base de dados e não os volta a inserir na fila.
2.  **Resiliência às mudanças de localização.** É possível mover o arquivo para um novo disco ou para um NAS: o histórico permanece intacto na base de dados.
3.  **Estado persistente entre sessões.** Se o programa for fechado durante uma transferência em lote de 300 episódios, ao ser reaberto a fila está disponível no mesmo estado em que foi deixada.
4.  **Registo das operações.** Cada ficheiro transferido está documentado: data de transferência, URL de origem e estado da verificação de integridade.

---

## 1.4 Os Três Pilares do Software

Para além da abordagem Database-First, o FeedDownloader Pro é construído em torno de três princípios técnicos com impacto direto nas funcionalidades.

### Resiliência de Rede

Transferir centenas de ficheiros áudio em sequência pela internet não é uma operação isenta de complexidade. Os servidores podem estar sobrecarregados, as ligações podem interromper-se, as transferências podem corromper o ficheiro. O FeedDownloader Pro gere estes cenários com três mecanismos:

*   **Retry com backoff exponencial:** Quando uma transferência falha, o software não repete a tentativa imediatamente. Em vez disso, aguarda um intervalo crescente: 2 segundos, depois 4, depois 8, até ao limite máximo configurado. Esta abordagem, standard nos sistemas distribuídos, aumenta a probabilidade de sucesso sem agravar a carga no servidor de origem.
*   **Deteção de bloqueio:** Uma transferência bloqueada é mais problemática do que uma transferência falhada. Se um servidor começa a enviar dados e depois se interrompe sem fechar a ligação, um software sem este controlo ficaria à espera indefinidamente. O FeedDownloader Pro monitoriza o fluxo de dados em tempo real: se não chegarem novos bytes durante 60 segundos consecutivos, a transferência é interrompida e reinserida na fila automaticamente.
*   **Ficheiros `.part` anti-corrupção:** Cada ficheiro é transferido com a extensão temporária `.part`. Só após a conclusão total e verificada da transferência é que o ficheiro é renomeado com a extensão definitiva (`.mp3`, `.m4a`, etc.). Em caso de interrupção súbita, na pasta de destino não estarão presentes ficheiros áudio parciais ou corrompidos: apenas ficheiros `.part` residuais, que o software eliminará e voltará a transferir na sessão seguinte.

### Segurança Integrada

O FeedDownloader Pro processa URLs provenientes de fontes externas (os feeds RSS). Um URL construído de forma maliciosa, que aponte para recursos internos da rede (um router, um NAS, um servidor local), poderia ser usado para aceder a informações confidenciais — um ataque conhecido como **SSRF (Server-Side Request Forgery)**.

Para prevenir este risco, cada URL é sujeito a uma validação de **5 níveis** antes do processamento: verificação do protocolo, resolução DNS com inspeção do endereço IP resultante, bloqueio dos intervalos de endereços privados (RFC 1918), bloqueio dos protocolos não HTTP/HTTPS e normalização do caminho. Este procedimento é completamente automático e transparente para o utilizador.

### Suporte a NAS e Caminhos de Rede

O FeedDownloader Pro foi concebido para funcionar com arquivos em discos de rede. A gestão de caminhos SMB — o protocolo utilizado por NAS, servidores Windows e partilhas de rede — é uma fonte frequente de problemas nas aplicações de desktop: um disco de rede inacessível pode causar o bloqueio de toda a interface durante um tempo considerável. O FeedDownloader Pro resolve este problema executando a validação do caminho de rede numa thread separada, com um timeout de 8 segundos. A interface permanece sempre reativa, independentemente do estado do caminho de rede.

---

## 1.5 Conteúdo do Manual

Este manual cobre a utilização completa do FeedDownloader Pro, desde a instalação às funcionalidades mais avançadas. Não é necessário lê-lo em sequência: cada capítulo é autónomo e pode ser consultado de forma independente.

Para uma primeira abordagem ao software, recomenda-se seguir o **Capítulo 4 (O Primeiro Arquivo)**, que ilustra um workflow completo desde a análise do feed até à transferência. Quem já conhece o software pode aceder diretamente ao capítulo de interesse através do índice geral.

---

*Ecosystem Runtime | Digital Core — Ferramentas construídas para durar.*
