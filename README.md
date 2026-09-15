📚 Portfólio de Automação com TypeScript

Projeto desenvolvido como parte dos estudos de Node.js e TypeScript, com o objetivo de praticar conceitos fundamentais da linguagem e a organização de um projeto.

🎯 Objetivo

Criar um repositório remoto contendo uma estrutura básica de projeto Node.js, com exemplos práticos de:

Variáveis;

Funções;

Organização de arquivos;

TypeScript;

Testes automatizados;

Documentação através de um arquivo README.md.

🛠️ Tecnologias utilizadas

Node.js

TypeScript

TSX

Vitest

Git

GitHub

📂 Estrutura do projeto
Portfolio-automocao-com-typescript/
│
├── src/
│   └── nivelamento/
│       └── # Exemplos e exercícios em TypeScript
│
├── tests/
│   └── # Testes automatizados
│
├── utils/
│   └── # Funções e recursos auxiliares
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md

📦 Estrutura básica do Node.js

O projeto possui os arquivos básicos necessários para trabalhar com uma aplicação Node.js utilizando TypeScript.

O arquivo package.json é responsável por armazenar informações do projeto e suas dependências.

Exemplo:

{
  "name": "portfolio-automocao-com-typescript",
  "version": "1.0.0",
  "description": "Projeto de estudos com Node.js e TypeScript"
}

📌 Exemplos de variáveis

O projeto contém exemplos de declaração e utilização de variáveis utilizando TypeScript.

const nome: string = "Gustavo";
const idade: number = 25;
const estudante: boolean = true;

console.log(nome);
console.log(idade);
console.log(estudante);


O TypeScript permite definir o tipo de cada variável, ajudando a evitar erros durante o desenvolvimento.

Alguns tipos utilizados:

string — textos;

number — números;

boolean — verdadeiro ou falso;

array — listas de valores;

object — objetos.

🔧 Exemplos de funções

Também foram desenvolvidos exemplos de funções utilizando TypeScript.

Função simples
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Gustavo"));

Função com números
function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

const resultado = somar(10, 20);

console.log(resultado);


Esses exemplos demonstram a utilização de parâmetros, retorno de funções e tipagem no TypeScript.

🧪 Testes

O projeto utiliza o Vitest para criação de testes automatizados.

Para executar os testes:

npx vitest


Para executar os testes em modo de observação:

npx vitest --watch

🚀 Como executar o projeto
1. Clonar o repositório
git clone https://github.com/Gustavodev856/Portfolio-automocao-com-typescript.git

2. Acessar a pasta
cd Portfolio-automocao-com-typescript

3. Instalar as dependências
npm install

4. Executar um arquivo TypeScript
npx tsx caminho/do/arquivo.ts

📝 O que foi feito

Neste projeto foram realizados os seguintes itens:

✅ Criado um repositório remoto no GitHub;

✅ Criada uma estrutura básica de projeto Node.js;

✅ Configurado o projeto para trabalhar com TypeScript;

✅ Criados exemplos de variáveis;

✅ Criados exemplos de funções;

✅ Adicionados exemplos de testes automatizados;

✅ Organizados os arquivos em diretórios;

✅ Criado este README.md para explicar o projeto.

🎓 Objetivo do aprendizado

O principal objetivo deste projeto é desenvolver uma base sólida nos conceitos fundamentais de Node.js e TypeScript, preparando o ambiente para projetos mais avançados de automação e desenvolvimento de software.

👨‍💻 Autor

Gustavo

GitHub: Gustavodev856

⭐ Projeto desenvolvido para fins de estudo e aprendizado.