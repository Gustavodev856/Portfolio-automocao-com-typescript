Exemplos Práticos de JavaScript

Este projeto contém exemplos práticos dos principais conceitos de JavaScript, incluindo:

Uso de arrays e objetos

Funções assíncronas com async/await

Simulação de uma Promise

Explicação do fluxo assíncrono através de comentários

Criação de testes unitários

1. Arrays e Objetos

Arrays são utilizados para armazenar uma coleção de valores. Objetos permitem representar entidades com propriedades e valores.

// Array contendo objetos
const usuarios = [
  {
    id: 1,
    nome: "Ana",
    idade: 25
  },
  {
    id: 2,
    nome: "Carlos",
    idade: 30
  },
  {
    id: 3,
    nome: "Marina",
    idade: 22
  }
];

// Percorrendo o array
usuarios.forEach((usuario) => {
  console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
});

// Filtrando usuários com idade maior ou igual a 25
const usuariosMaiores = usuarios.filter((usuario) => usuario.idade >= 25);

console.log(usuariosMaiores);

Exemplo de acesso a propriedades
const usuario = {
  nome: "João",
  email: "joao@email.com",
  endereco: {
    cidade: "Recife",
    estado: "PE"
  }
};

console.log(usuario.nome);
console.log(usuario.email);
console.log(usuario.endereco.cidade);

2. Simulação de uma Promise

Uma Promise representa uma operação que pode ser concluída no futuro.

Podemos simular, por exemplo, uma requisição a uma API utilizando setTimeout.

function buscarUsuario() {
  return new Promise((resolve, reject) => {
    // Simulamos o tempo de resposta de uma API
    setTimeout(() => {
      const sucesso = true;

      if (sucesso) {
        resolve({
          id: 1,
          nome: "Ana",
          email: "ana@email.com"
        });
      } else {
        reject(new Error("Não foi possível buscar o usuário."));
      }
    }, 2000);
  });
}


A Promise pode ser utilizada com .then() e .catch():

buscarUsuario()
  .then((usuario) => {
    console.log("Usuário encontrado:", usuario);
  })
  .catch((erro) => {
    console.error("Erro:", erro.message);
  });

3. Função assíncrona com async/await

O async/await permite escrever código assíncrono de uma maneira mais próxima do código síncrono, facilitando sua leitura.

async function obterUsuario() {
  try {
    console.log("1. Iniciando busca do usuário...");

    // await pausa a execução desta função até a Promise ser resolvida.
    // Enquanto isso, o JavaScript pode continuar executando outras tarefas.
    const usuario = await buscarUsuario();

    console.log("3. Usuário recebido:", usuario);

    return usuario;
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro.message);
  }
}

obterUsuario();

Fluxo assíncrono

O fluxo do exemplo acima acontece da seguinte maneira:

async function exemplo() {
  console.log("1. Antes do await");

  // A Promise começa sua execução.
  // O await aguarda o resultado da Promise dentro desta função.
  // A função é suspensa temporariamente neste ponto.
  const resultado = await buscarUsuario();

  // Esta linha só será executada depois que
  // a Promise for resolvida.
  console.log("2. Depois do await");

  return resultado;
}

console.log("3. Antes de chamar exemplo");

exemplo();

console.log("4. Depois de chamar exemplo");


Uma possível ordem de execução será:

3. Antes de chamar exemplo
1. Antes do await
4. Depois de chamar exemplo
2. Depois do await


Isso acontece porque o await não bloqueia o JavaScript inteiro. Ele suspende a execução da função assíncrona enquanto a Promise não é resolvida.

4. Exemplo completo

Podemos combinar arrays, objetos, Promise e async/await em um único exemplo.

const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Carlos" },
  { id: 3, nome: "Marina" }
];

function buscarUsuarios() {
  return new Promise((resolve) => {
    // Simulando uma chamada para uma API.
    setTimeout(() => {
      resolve(usuarios);
    }, 1000);
  });
}

async function listarUsuarios() {
  console.log("Buscando usuários...");

  // O await aguarda a resolução da Promise.
  // Durante essa espera, o restante do JavaScript
  // pode continuar executando outras tarefas.
  const resultado = await buscarUsuarios();

  console.log("Usuários recebidos!");

  // Trabalhando com o array retornado pela Promise.
  resultado.forEach((usuario) => {
    console.log(`ID: ${usuario.id} - Nome: ${usuario.nome}`);
  });

  return resultado;
}

listarUsuarios();

5. Testes Unitários

Testes unitários verificam se pequenas partes da aplicação, como funções, estão funcionando conforme o esperado.

Neste exemplo será utilizado o Jest.

Instalação
npm install --save-dev jest


No package.json:

{
  "scripts": {
    "test": "jest"
  }
}

6. Função para testar

Crie um arquivo soma.js:

function soma(a, b) {
  return a + b;
}

module.exports = soma;

7. Teste unitário

Crie o arquivo soma.test.js:

const soma = require("./soma");

describe("Função soma", () => {
  test("deve somar dois números corretamente", () => {
    expect(soma(2, 3)).toBe(5);
  });

  test("deve funcionar com números negativos", () => {
    expect(soma(-2, -3)).toBe(-5);
  });

  test("deve retornar o valor correto ao somar zero", () => {
    expect(soma(10, 0)).toBe(10);
  });
});


Execute os testes com:

npm test

8. Testando uma função assíncrona

Também podemos testar uma função que retorna uma Promise.

Arquivo usuario.js:

function buscarUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        nome: "Ana"
      });
    }, 100);
  });
}

module.exports = buscarUsuario;


Teste em usuario.test.js:

const buscarUsuario = require("./usuario");

describe("buscarUsuario", () => {
  test("deve retornar um usuário", async () => {
    // O teste também utiliza async/await porque
    // precisamos aguardar a resolução da Promise.
    const usuario = await buscarUsuario();

    expect(usuario).toEqual({
      id: 1,
      nome: "Ana"
    });
  });

  test("o usuário deve possuir um ID", async () => {
    const usuario = await buscarUsuario();

    expect(usuario.id).toBeDefined();
  });
});

Estrutura sugerida
projeto/
├── soma.js
├── soma.test.js
├── usuario.js
├── usuario.test.js
├── package.json
└── README.md

Resumo

Neste projeto foram demonstrados:

Arrays e objetos
       ↓
Manipulação de dados
       ↓
Promise
       ↓
async/await
       ↓
Fluxo assíncrono
       ↓
Testes unitários


Esses conceitos formam uma base importante para trabalhar com aplicações JavaScript que realizam operações assíncronas, como chamadas para APIs, acesso a bancos de dados e processamento de informações.