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

### Propriedade de uma API

### Padrão REST

### API HTTP-Java

### Estudo de caso, parte 1

### Estudo de caso, parte 2

## Conclusão do curso

### Certifique seu conhecimento
