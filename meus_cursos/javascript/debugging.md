# Debugging e Error Handling

## Erros
    - ECMAScript Error: erro de tempo de execu��o.
    - Mensagem
    - Nome
    - Linha
    - Call Stack
    
    - DOMException
    - Document Object Model
        - Erro da estrutura de elementos da p�gina Web

## Tratamento de Erros
Throw, Try/Catch e Finally

- Throw:
  - Uncaught String inv�lida
- Try/Catch:
  - � poss�vel manipular o error de maneira mais personalizada!
- Finally:
  - � uma instru��o que ser� chamada independente do erro


## Criando erros personalizados!
1. Explica��o como manipular o objeto error.

```js
new Erros(message, fileName, lineNumber)
// todos os par�metros s�o opcionais

const MeuErro = new Error('Mensagem Inv�lida');

throw MeuErro;

// Mensagem mostrada:

Uncaught ReferenceError: Erros is not defined
    at <anonymous>:1:1
(anonymous) @ VM290:1
```

```js
const MeuErro = new Error('Mensagem Inv�lida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;

// Mensagem mostrada:

VM277:4 Uncaught InvalidMessage: Mensagem Inv�lida
    at <anonymous>:1:17
(anonymous) @ VM277:1
```
Comandos para Debbug
```js
MeuErro.name
MeuErro.stack
MeuErro
```