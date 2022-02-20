# IMPORTANTE

<span style="color:green">
Tudo aqui foi escrito como estratégia de fixação dos conteúdos das aulas. E publicado no Github apenas como um complemento para as aulas da DIO.
</span>
<br>
<span style="color:red">
  Todo material aqui apresentado é devidamente referenciado, e pode ser baixado e modificado por qualquer um. Mediante revisão, uma nova versão será publicada, desde que esteja de acordo com Copyrights das respectivas fontes.
</span>

---

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

## Aula 3: Documentação Java

## Aula 4: Mercado e carreira Java


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
[^7]:
[^8]:
[^9]:
[^10]:
