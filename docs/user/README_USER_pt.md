# Bem-vindo ao Runtime FeedDownloader Pro
**A forma mais poderosa e resiliente de arquivar os seus podcasts.**

## O que é?
O Runtime FeedDownloader Pro é a ferramenta profissional do **Ecosystem Runtime | Digital Core** concebida para arquivistas, editores e entusiastas que necessitam de descarregar catálogos completos de podcasts para conservação offline.

Ao contrário dos leitores comuns, este software está otimizado para o **descarregamento massivo (Batch)**, a resiliência de rede e a organização estruturada de ficheiros no disco.

---

## A Filosofia: "Database-First"
O coração do FeedDownloader Pro é o seu motor baseado em **SQLite**. Ao contrário de outros softwares que dependem exclusivamente da presença de ficheiros no disco, o nosso sistema:
1.  **Recorda cada descarga:** Mesmo que mova o arquivo para um NAS ou um disco externo, a base de dados mantém o estado da sua coleção.
2.  **Evita duplicados:** Acabou a confusão entre ficheiros `.mp3`, `.m4a` ou episódios descarregados várias vezes.
3.  **Integridade documentada:** Cada ficheiro descarregado é verificado através de hash SHA-256 e os metadados (bitrate, taxa di amostragem) são extraídos automaticamente.

## Características Únicas

### 1. Resiliência de Rede Extrema
Gerir o descarregamento de centenas de ficheiros de áudio requer uma gestão de erros impecável. O FeedDownloader Pro implementa:
- **Tentativas Automáticas:** Com backoff exponencial para não sobrecarregar os servidores.
- **Deteção de Paragem (Stall):** Se o servidor parar de enviar dados durante 60 segundos, a descarga é reiniciada automaticamente.
- **Ficheiros .part Anti-Corrupção:** Os ficheiros são renomeados com a extensão final apenas quando o descarregamento estiver totalmente concluído.

### 2. Segurança e Validação (SSRF)
A aplicação implementa uma validação anti-SSRF de 5 níveis em cada URL introduzido. Bloqueamos protocolos perigosos e endereços IP privados, garantindo a sua segurança mesmo com feeds RSS de fontes desconhecidas.

### 3. Suporte Profissional NAS/SMB
Concebido para arquivistas, o software valida os caminhos de rede com um tempo de espera de 8 segundos, prevenindo os congelamentos da interface comuns ao trabalhar com unidades de rede ou NAS que não estão prontos.

---

## Requisitos do Sistema
- **Windows**: 10/11 (64 bits)
- **macOS**: 11.0 (Big Sur) ou superior
- **Linux**: Distribuições modernas (Ubuntu, Debian, Fedora)
- Ligação à Internet ativa para a análise de feeds.

---
*Parte do Ecosystem Runtime | Digital Core — Ferramentas construídas para durar.*
