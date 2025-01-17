# Winget List Handler

## 🔎 Sobre

Este projeto foi criado para resolver aquele processo chato de instalar app por app após formatar o sistema. Ele utiliza winget para fazer o processo de instalação e também para obter uma lista com todos os pacotes de apps instalados na sua maquina Windows (não se limita a apps instalados via winget).

A ideia do projeto é automatizar a instalação dos seus aplicativos no sistema formatado e também gerar um relatório de apps que não foi possível automatizar a instalação - permitindo que você tenha noção de o que ainda falta instalar.

- Primeiro você roda a geração dos arquivos com as referências dos seus apps ANTES de formatar.
- Depois você roda apenas a automação de instalação dos apps.

<details><summary><h2>🚀 Como usar</h2></summary>

### Pré-requisitos

![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Passo a passo

1.  Antes de formatar sua maquina, gere os relatórios de apps.

    - Esses relatórios são a lista processada de programas instalados na sua maquina atual.
    - Nesse processo são gerados dois arquivos: apps-com-pacotes.json, apps-prejudicados.json.
      - **apps-com-pacotes.json:** Esse é o arquivo principal para a automatização de instalação de apps. Ele já foi processado e possui como conteúdo apenas apps instalaveis via winget.
      - **app-prejudicados.json:** Esse é uma lista de todos os apps que não poderão ser instalados via winget. São apps que não possuem pacote publicado no winget ou possuem algum erro de formatação causado pela saída do comando `winget list`.
    - O diretório dos arquivos gerados por esta etapa localiza-se na raíz do projeto e é criado ao executa-lo.

    Execute os comando na raíz do projeto.

    Instale as dependências do projeto

        npm install -y

    Execute a criação dos relatórios

        node index.js --generate-files-only

2.  Após gerados os arquivos, copie o diretório _arquivos_gerados_ - ou o projeto inteiro - e mantenha-o em um local seguro contra formatação.
    - Sinta-se livre para ajustar o _apps-com-pacotes.json_, remova o que você bem quiser, mas cuidado para não quebrar a formatação do json.
3.  Agora na sua máquina formatada, clone o projeto novamente e cole o diretório _arquivos_gerados_ na raíz do projeto - ou apenas traga a sua cópia completa do projeto para a máquina - e rode a automatização de instalação de apps.

    Utilize o seguinte comando no terminal na raíz do projeto:

        node index.js --consume-file-only

    Cada pacote será instalado um de cada vez de forma síncrona.

    Para instalar os pacotes de forma assíncrona utilize o comando:

        node index.js --consume-file-only --async

    Após isso basta aguardar o termino do processo.

    A instalação síncrona pode ser muito demorada, mas demanda pouco processamento, RAM e escrita. A instalação assíncrona é muito mais rápida, porém, ainda não está otimizada, por isso pode demandar muito processamento, RAM e gravação de disco se houver um volume muito grande de apps a serem instalados, então evite usa-la em computadores legado.

    Esse processo pode demorar, pois depende da velocidade dos servidores dos pacotes.
