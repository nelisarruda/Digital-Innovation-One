# IMPORTANTE

<span style="color:green">
Tudo aqui foi escrito como estratégia de fixação dos conteúdos das aulas e publicado no Github apenas como um complemento para as aulas da DIO.
</span>
<br>
<span style="color:red">
  Todo material aqui apresentado é devidamente referenciado, e pode ser baixado e modificado por qualquer um. Mediante revisão, uma nova versão será publicada, desde que esteja de acordo com Copyrights das respectivas fontes.
</span>

---

<!-- TOC -->

- [IMPORTANTE](#importante)
- [Curso: Instrodução ao Ecossistema e Documentação Java](#curso-instrodução-ao-ecossistema-e-documentação-java)
  - [Requisitos para o curso](#requisitos-para-o-curso)
  - [Aula 1: Introdução ao ecossistema Java](#aula-1-introdução-ao-ecossistema-java)
    - [Introdução ao JAVA](#introdução-ao-java)
    - [Entendendo a JVM](#entendendo-a-jvm)
      - [O que é a JVM?](#o-que-é-a-jvm)
      - [Quais as diferenças entre JRE e JDK?](#quais-as-diferenças-entre-jre-e-jdk)
      - [Quais são os tipos de plataformas Java?](#quais-são-os-tipos-de-plataformas-java)
      - [Quais são as implementações Java SE?](#quais-são-as-implementações-java-se)
    - [Instalando a JVM](#instalando-a-jvm)
    - [Executando um programa Java](#executando-um-programa-java)
  - [Aula 2: Contextualização de uso do Java 11](#aula-2-contextualização-de-uso-do-java-11)
    - [Declaração de classes](#declaração-de-classes)
    - [Estrutura completa de uma classe](#estrutura-completa-de-uma-classe)
    - [Modificadores de acesso](#modificadores-de-acesso)
    - [Métodos](#métodos)
    - [Estrutura de condição](#estrutura-de-condição)
    - [Estrutura de repetição](#estrutura-de-repetição)
      - [Tipos de estrutura de repetição?](#tipos-de-estrutura-de-repetição)
  - [Aula 3: Documentação Java](#aula-3-documentação-java)
    - [Criando a documentação](#criando-a-documentação)
  - [Aula 4: Mercado e carreira Java](#aula-4-mercado-e-carreira-java)
    - [Comunidade Java](#comunidade-java)
    - [Carreira](#carreira)
    - [Mercado atual](#mercado-atual)
    - [Requisitos do profissional](#requisitos-do-profissional)
  - [Final: Certifique seu conhecimento](#final-certifique-seu-conhecimento)

<!-- /TOC -->

# Curso: Instrodução ao Ecossistema e Documentação Java

**Oferecimento:** [Digital Innovation One - (DIO)](https://www.dio.me/)     \
**Tipo de curso:** <span style="color:red">Grátis</span>  \
**Ministrado por:** [Daniel Hatanaka](https://linkedin.com/in/hatanakadaniel)
> Especialista em Softaware

## Requisitos para o curso
- Distribuição Linux ([Ubuntu](https://linux.ime.usp.br/~lucasmmg/livecd/documentacao/documentos/terminal/Terminal_basico.html#sessao2), [Mint](https://canaltech.com.br/linux/10-comandos-essenciais-do-linux/), [etc](https://guialinux.uniriotec.br/distribuicoes-linux/))
- Conhecimento em comandos básicos para terminal linux [^1]
- [Conhecimentos em lógica de programação](https://web.dio.me/course/logica-de-programacao-essencial/learning/aea1ea26-fd56-417d-8272-6e15253f4405/?ref=nelis_expert)
- Conhecimento básico de linguagem de programação
- [Programação Orientada a Objetos](https://web.dio.me/course/programacao-orientada-a-objetos/learning/ff0c41a5-8adc-496c-8ff7-7ae1f83ffa49?ref=nelis_expert)


## Aula 1: Introdução ao ecossistema Java

### Introdução ao JAVA
Caracteristicas da linguagem:

- Compilada
- Interpretada
- Fortemente tipada
- Linguagem de alto nível
- Executada em uma máquina virtu\l - JVM (Java Virtual Machine)

![Imagem01](https://i.imgur.com/lXzMvAH.png)

O código fonte em `.java` é compilado para um arquivo "Bytecode" `.class` e é intepretado pela JVM!

### Entendendo a JVM

#### O que é a JVM?

> JVM (Java Virtual Machine) é uma máquina virtual responsável pela tradução dos ByteCOdes oriundos do compilador Javac (Java Compilar) em código de máquina de cada sistema operacional.

**Caracteristicas:**
- Execução de pilhas[^2]
- Gerenciamento de memória
- Gerenciamento de threads[^3]
- Otimização de código (Compilação JIT - Just In Time)[^4]
- Garbage Collector(GC)[^5]

Em java, uma mesma aplicação pode ser executava em diferentes sistemas operacionais. Pois ela é compilada apenas uma vez, e então é intepretada para o sistema operacional ao qual a aplicação será utilizada.

![Imagem02](https://i.imgur.com/dGP6hlt.png)

<details><summary>Saiba mais</summary>

  - [C++ versus Java](https://www.javatpoint.com/pt/cpp-versus-java)
  - [C++ vs java vs Python](https://www.geeksforgeeks.org/c-vs-java-vs-python/)
  - [Java ou C++ - Qual você deve escolher?](https://br.bitdegree.org/tutoriais/java-c-plus-plus/)

</details>

#### Quais as diferenças entre JRE e JDK?

- JRE (java Runtime Environment): é responsáel por executar os programas em Java.
  
- JDK (Java Development Kit): um "kit/conjunto" de utilitários que permitem o desenvolvimento de programas em java. Este já possui a JVM para executar os programas.

#### Quais são os tipos de plataformas Java?
- **Existem 3 tipos de plataforma Java:**
  - Java SE (Java Standar Edition): contém as especificações do Java e pode ser implementado por diversas empresas como Oracle, OpenJDK, Azul Zule, etc.
  - Java EE (Java Enterprise Etition): contém todas as especificações do Java SE e um número de programas úteis para que exetam em servidores. Em 2019 foi renomeado para Jakarta EE[^6].
  - Java ME (Java Micro Edition): contém especificações para desenvolvimento de programas para dispositivos pequenos como Smartphones, PDAs, etc.

#### Quais são as implementações Java SE?
  - OpenJDK
  - Oracle JDK
  - AdoptOpenJDK
  - Amazon Corretto
  - GraalVM CE
  - Azul Zulu

### Instalando a JVM

- Instale o Curl:
  ```bash
  sudo apt install curl
  ```

- Instalando Java Version Manager:
  ```bash
  curl -sL https://github.com/shyiko/jabba/raw/master/install.sh | bash && . ~/.jabba/jabba.sh
  ```
- Usando Java Version Manager:
  ```bash
  jabba ls-remote                      #retorna todas implementações do JDK existentes
  jabba install openjdk@1.11           #Instala a versão openjdk@1.11
  jabba ls                             #verifica as versões instaladas
  jabba use openjdk@1.11               #Usa a versão openjdk@1.11
  java -version                        #Verifica a versão que está sendo usada
  ```

### Executando um programa Java

- Criando o programa
- Compilando o programa

```bash
jabba use openjdk@1.11
javac -d target/ -sourcepath src/ src/com/dio/MyFirstProgram.java
```

- Executando:
```bash
cd target/

java com.dio.MyFirstProgram
```

## Aula 2: Contextualização de uso do Java 11
- **Palavras reservadas:** são palavras[^7] que não podem ser utilizadas para definição de uma classe, atributo ou método.
### Declaração de classes
  ```java
  public class Order{
    //Atributo
    private final String code;
    private final BigDecimal totalValue;

    //metodos
    public BigDecimal calculateFee(){
    }
  }
  ```
### Estrutura completa de uma classe
  
```java
package com.dio.base;
  
import java.math.BigDecimal;

public class Order {
      
    Private final String code;
    private final BigDecimal totalValue;

    public Order(String code, BigDecimal totalValue) {
      this.code = code;
      this.totalValue = totalValue;
    }

    public BigDecimal calculateFee() {
      return this.totalValue.multiply(new BigDecimal("0.99"));
    }

}
```
### Modificadores de acesso
- **public:** qualquer classe de qualquer pacote poderá acessar o atributo ou método;
- **protected:** qualquer classe definida no mesmo pacote ou subclasse poderá ter acesso;
- **Sem modificador:** apenas classes definidas no mesmo pacote poderá ter acesso;
- **private:** apenas a própria classe poderá ter acesso.
### Métodos
O que são métodos?
> Métodos são funções que definem o comportamento de uma classe.

- **Métodos construtores:** definem como uma classe será instanciada("construída").
- **Métodos comuns:** definem comportamentos que podem ou não estar atribuídas às regras de negócio. Ex. calcular taxas de um pedido, etc. 
### Estrutura de condição
O que é estrutura de condição?
> Estrutura de condição é responsável por fazer o desvio do fluxo de uma excecução do código de acordo com uma dada condição.

Estem dois tipos de estrutura de condição no java: if-else, e switch case.
- <details><summary>if-else:</summary>

  ```java
  //imports
  public class Order {
    //outros atributos
    private final double totalValue;

    //outros metodos

    public double calculateFee(){
      if (this.totalValue > 100){
        return this.totalValue * 0.99;
      }else{
        rturn this.totalValue;
      }
    }
  }
  ```
  </details>


- <details><summary>switch - case:</summary>

  ```java
  // imports
  public class Order{
    // outros atributos

    private final int totalValue;

    // outros metodos

    public double calculateFee(){
      switch (this.totalValue){
        case 100:
          return totalValue * 0.99;
        case 200:
          return totalValue * 1.99;
        default:
          return totalValue;
      }

    }

  }
  ```
  </details>
### Estrutura de repetição

O que é estrutura de repetição?
> é uma estrutura de código responsável por executar repetitivamente uma instrução ou bloco de instruções até uma condição ser satisfeita.

#### Tipos de estrutura de repetição?
- <details><summary>while</summary>

  ```java
  //imports
  public class Order{

    // outros atributos

    private final String[] items;

    // outros metodos

    public void printItems() {
      int i = 0;

      while (i < items.length) {
        Sytem.outprintln(items[i]);
        i++;
      }
    }
  }
  ```

</details>

- <details><summary>do - while</summary>

  ```java
    //imports
  public class Order{

    // outros atributos

    private final String[] items;

    // outros metodos

    public void printItems() {
      int i = 0;

      do {
        Sytem.outprintln(items[i]);
        i++;
      } while (i < items.length);
    }
  }
  ```
</details>

- <details><summary>for</summary>

  ```java
    //imports
  public class Order{

    // outros atributos

    private final String[] items;

    // outros metodos

    public void printItems() {
      
      for (int i = 0; i < items.lenght; i++>){
        System.out.println(items[i]);
      }
    }
  }
  ```
</details>

- <details><summary>enhanced for</summary>

  ```java
    //imports
  public class Order{

    // outros atributos

    private final String[] items;

    // outros metodos

    public void printItems() {
      
      for (int i = 0; i < items.lenght; i++>){
        System.out.println(i);
      }
    }
  }
  ```
</details>

## Aula 3: Documentação Java
Tipos de comentários.

1) Comentários em linha: `//`
2) Comentários em bloco: Começa com `/**` e termina com `*/`
3) Javadoc: o que é o Javadoc? \
   1) É uma ferramenta para documentação no formato HTML que se baseia nos comentários do código-fonte.
   2) Os comentários preisam conter tags para que a documentação fique legível.
4) Tipos de tag: 
   1) @author: especifia o autor da classe ou do método;
   2) @deprecated: identifica classes ou métodos obsoletos;
   3) @link: possibilita a definição de um link para um outro documento local ou remoto através de um URL;
   4) param: descreve um parâmetro que será passado a um método;
   5) return: decreve qual o tipo de retorno de um método.
   6) @see: associa a outras classes ou métodos;
   7) @since: descreve desde quando uma classe ou métodos foram adicionados;
   8) @throws: descreve os tipos de exceções que podem ser lançadas por um método;
   9) @version: descreve a versão da classe ou método.

### Criando a documentação

Feito as modificações acima, seu projeto está pronto para gerar os arquivos de documentação. Para isso, utilize o comando a seguir: 
```bash
javadoc -d javadoc/ -sourcepath src/ -subpackages com.dio
```


## Aula 4: Mercado e carreira Java

### Comunidade Java
- O tamanho da comunidade auxilia na escolha de uma linguagem de programação de uma empresa.
- Qualidade e facilidade para encontrar informações sobre a linguagem diminuem a curva de aprendizado[^8];
- Atualmente existem comunidade de tecnologias onde é possível encontrar um grupo voltado para a linguagem.
- Exemplos:
  - OpenSanca: https://opensanc.com.br
  - SouJava: https://soujava.org.br
  - DevOpsPBS: https://devopspbs.ord
### Carreira
- Muitas empresas de tecnologia aplicam a carreiga em `Y`;
![imagem03](https://i.imgur.com/JgRPfK8.png)
- É importante se especializar em uma área: backend, frontend, SRE (Site Reabiality Engineering), Data Enginner, etc;
- Escolher e focar em uma plataforma de desenvolvimento Java: web, desktop, mobile.


### Mercado atual

- Atualmente o mercado para profissionais de T.I. em geral está em alta;
- O mercado está carente de profissionais qualificados;
- Startups de diversos ramos adotaram a linguagem Java: PagSeguro, iFood, AWS, Mercado Livre, Itaú, C6 Bank, Dafiti, Luizalabs, etc.

### Requisitos do profissional
- Ao evoluir na carreira de Java ou em qualquer carreira de T.I. é necessário desenvolver tanto a Soft Skills quanto Hard Skills;
- Cada vez mais Soft Skills estãos se tornando mais prioritárias que Hard Skills;
- Exemplo de Soft Skills (habilidades interpessoais):
  - Resolução de Problemas Complexos
  - Pensamento Crítico
  - Criatividade
  - Gestão de Pessoas
  - Coordenação em equipe
  - Liderança
- Exemplos de Hard Skills (Habilidades técnicas em determindas ferramentas):
  - Spring Boot[^9]
  - Spring Cloud[^10]
  - Apache Kafka[^11]
  - RabbitMQ[^12]
  - Arquiteatura Cloud[^13]
  - Banco de dados relacional e não relacional[^14]
## Final: Certifique seu conhecimento

[Certificado obtido!](https://hermes.digitalinnovation.one/certificates/DEDBD4DB.pdf)

<!-- Referencias -->

[^1]:<details><summary>Saiba mais</summary>

    - [USP: Terminal básico](https://linux.ime.usp.br/~lucasmmg/livecd/documentacao/documentos/terminal/Terminal_basico.html#sessao2)
    - [Canaltech: 10 comandos essenciais do Linux](https://canaltech.com.br/linux/10-comandos-essenciais-do-linux/)

  </details>

[^2]:https://www.ime.usp.br/~pf/estruturas-de-dados/aulas/stack.html
[^3]:http://www-di.inf.puc-rio.br/~endler/courses/inf1019/transp/aulas-teoricas/Cap-2-Proc-Sched.pdf
[^4]:https://www.ibm.com/docs/pt-br/sdk-java-technology/7?topic=jc-jit-compiler-overview-2
[^5]:https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html
[^6]:https://stringfixer.com/pt/Java_EE
[^7]:https://www.codificante.com.br/voce-conhece-todas-as-palavras-reservadas-do-java
[^8]:https://imaginex.vc/curva-de-aprendizagem/
[^9]:https://spring.io/projects/spring-boot
[^10]:https://spring.io/projects/spring-cloud
[^11]:https://kafka.apache.org/intro
[^12]:https://www.rabbitmq.com/
[^13]:https://www.redhat.com/pt-br/topics/cloud-computing/what-is-cloud-architecture
[^14]:https://4linux.com.br/diferenca-banco-dados-relacional-nosql/
[^15]:
