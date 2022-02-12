# Introdução ao HTTP/HTTPS

## Protocolo HTTP

### Conceitos básicos de segurança

#### Criptografia por chave
- **Assimétrica**
  - Chave privada
    - Assinatura - Criptografia
  - Chave Pública
    - Verificação de autenticidade
- **Simétrica**
  - Chave única privada (Cifra de césar)
    > Conhecimento prévio \
    > Método por substituição
  - **Tipos**
    - Cifra de fluxo
      - Sequência de bits pseudo-aleatório
      - Mapeamento 1 para 1
    - Cifra de bloco
      - **PGP:** troca de email
      - **Ipsec:** tunelamento
      - **SSL:** permutação entre blocos com k número de bits.
      > Ex. quando k= 64 bits | $2^0,2^1,2^2,2^3,2^4,2^5,2^6$
        - Mapeamento por funções/protocolos
          - DES
          - AES
          - 3DES
    - Certificação das chaves
      - Entidades certificadores
        - Verificação de identidade
        - Emissão de certificados
          - Chave única
      - Padrões de autoridades certificadores
        - IETF - recomendação ITUX.509
        > Especificação de um serviço de autenticação e sintaxe de certificados.
        - RFC 1422
        > Gerencia,emtp de chaves baseado em CA em emails seguros
      
### Protocolo SSL
> **S**ecure **S**ocket **L**ayer

- **Segurança para conexões TCP**
  - Confidencialidade
  - Integridade
  - Autenticidade end-point

- **Qual é a importancia do SSL?**
  - Prevenir ataques
    - Cenário 1: Listening
    - Cenário 2: Ataque ativo
- **Operação - fases**
  > Handshake\
  > Key Derivation\
  > Data transfer
- **Estabelecer conexão TCP**
    - TCP starts > TCP response > TCP confirmation
  - Verificação de autenticidade
    - SSL Hello
    - Certification
- **Envio da Master Secret Key**
  - EMS
  - EMS = `KB`+MS
- **Transferência efetiva de dados**
    > Record+Mac
  - Segurança na comunicação - HTTP Over TCP
  - Verificação da autenticidade por cetificados digitais `porta 443`

- **LGPD - Lei Geral de Proteção de Dados**
  > Não pode haver identificação da pessoa.
  - O que a lei protege?
    - Dados de ifentificação dos usuários
    - Dados sensíveis
    - Religião, etnia...
  - Define o tratamento de dados
    > Diversos tipos de operações
    - Livre conssentimento
    - Direitos do titular das informações
    - Sansões aos que descumprem as regras

## API e Padrão REST

### O que é API?
> Application Programming Interface

- É uma coleção de métodos disponibilizados por um serviço para interação indireta. Seja essa interação realizada por, $\textcolor{orange}{Sistema} \Leftrightarrow \textcolor{orange}{Sistema}$, ou $\textcolor{orange}{Sistema}\Leftrightarrow \textcolor{green}{Usuário}$.

![figura01 >](./img/flx01.png)
![figura02 <](./img/exm01.png)

#### Utilidade
- Rotinas e padrões
- Acesso:
  - sistemas ou plataforma web
- Utilização dos serviços da empresa
  - >Ex. Sistema de maps, previsão do tempo, cotação de moedas, etc.

- Recursos disponíveis em uma API padrão Java
- Programas de suporte
- Possui partes funcionais chamadas pacotes (o que nós denominamos bibliotecas)
  - java.io
  - java.applet
  - java.security
  - java.math

### Propriedades de uma API
#### Acesso de dados
> Acesso aos dados do banco de dados do site ou servidor.

 A [API](#o-que-%C3%A9-api) recebe uma [$\textcolor{red}{query}$](../database/glossário.md#Query) do usuário/sistema e a envia para o site/servidor.
 Então o servidor executa a $\textcolor{red}{query}$ e emite uma resposta para o requisitante. A mensagem impressa pode conter, ou não, as informações solicitadas.
#### Esconder complexidade
- Acesso à dados:
  - Arquivos, Banco de dados,...
- Eecutar operações complexas:
  - Rotinas e funções
- Transparente:
  - Comandos hardware
  - funções especificicas do sistema
- Intermédio de execução
  - Dev:
    - Foca na funcionalidade do app



#### Estender funcionalidades
- Comunicação entre software e hardware
  - Comunicação integrada
  ![figura04](https://www.cequens.com/hubfs/Imported_Blog_Media/What%20Are%20Communication%20APIs%20and%20Why%20Are%20They%20Needed-Rectangle-100-1.jpg)
- Comunicação entre aplicativos
  - Exemplo: Site $\leftrightarrow$ [API Google Maps](https://developers.google.com/maps/documentation?hl=pt-br)
  ![figura05](https://www.cequens.com/hubfs/Imported_Blog_Media/communication-apis-2-4.png)

#### Segurança
> Uso de protocolos de segurança para proteção da aplicação/servidor e do usuário final.

Há dados/funcionalidades que são necessários para o funcionamento da aplicação. Quem faz esse gerenciamento de segurança é uma API do SO, que questiona o usuário se ele permite, ou não, que aquela aplicação receba as permissões solicitadas. 
### Padrão REST

![figura03](https://arquivo.devmedia.com.br/artigos/Joel_Rodrigues/Guias/guia-aspnet-webapi-1.png)

- HTTP:
  - Comunicação entre API e Sistema
- Regras:
  - Arquitetura REST
### API HTTP-Java

### Estudo de caso, parte 1

### Estudo de caso, parte 2

## Conclusão do curso

### Certifique seu conhecimento

## Fontes
- Cursos:
  - [DIO](https://web.dio.me/)
    - [Introdução ao HTTP/HTTPS](https://web.dio.me/course/introducao-ao-http-https)
- Imagens:
  - [Medium](https://medium.com/)
    - Figuras = {01, 02}
  - [DevMedia](https://www.devmedia.com.br/)
    - Figuras = {03}
  - [Cequens](https://www.cequens.com/)
    - Figuras = {04, 05}
