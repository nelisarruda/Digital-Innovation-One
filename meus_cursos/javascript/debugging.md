# Debugging e Error Handling

## Erros
    - ECMAScript Error: erro de tempo de execução.
    - Mensagem
    - Nome
    - Linha
    - Call Stack
    
    - DOMException
    - Document Object Model
        - Erro da estrutura de elementos da página Web

## Tratamento de Erros
Throw, Try/Catch e Finally

- Throw:
  - Uncaught String inválida
- Try/Catch:
  - É possível manipular o error de maneira mais personalizada!
- Finally:
  - é uma instrução que será chamada independente do erro


## Criando erros personalizados!
1. Explicação como manipular o objeto error.

```js
new Erros(message, fileName, lineNumber)
// todos os parâmetros são opcionais

const MeuErro = new Error('Mensagem Inválida');

throw MeuErro;

// Mensagem mostrada:

Uncaught ReferenceError: Erros is not defined
    at <anonymous>:1:1
(anonymous) @ VM290:1
```

```js
const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;

// Mensagem mostrada:

VM277:4 Uncaught InvalidMessage: Mensagem Inválida
    at <anonymous>:1:17
(anonymous) @ VM277:1
```
Comandos para Debbug
```js
MeuErro.name
MeuErro.stack
MeuErro
```