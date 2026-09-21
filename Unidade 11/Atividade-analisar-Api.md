# Análise de API Pública — ReqRes

## 1. Introdução

Para esta atividade foi escolhida a **ReqRes**, uma API REST pública utilizada para estudos, testes de integração e automação de testes.

A API disponibiliza endpoints que permitem praticar operações HTTP como `GET`, `POST`, `PUT`, `PATCH` e `DELETE`, utilizando dados de usuários.

Documentação oficial:

https://reqres.in/docs

O objetivo desta análise é compreender como cliente e servidor se comunicam e documentar o contrato de integração de dois endpoints:

* `GET /api/users`
* `POST /api/users`

---

# 2. Endpoint GET — Listar usuários

## 2.1 Identificação e Finalidade

### Endpoint/Rota

```text
GET /api/users
```

### Objetivo de Negócio

Esse endpoint permite consultar uma lista de usuários cadastrados no sistema.

Em um sistema real, uma funcionalidade semelhante poderia ser utilizada para exibir uma lista de clientes, funcionários ou usuários em uma tela administrativa.

---

## 2.2 Estrutura do Request

### Método HTTP

```text
GET
```

### URL Completa

```text
https://reqres.in/api/users?page=2
```

O parâmetro `page=2` é utilizado para consultar uma página específica da lista de usuários.

### Headers

Na configuração atual da documentação da ReqRes, as requisições à API utilizam o header:

```text
x-api-key: SUA_API_KEY
```

Exemplo:

```http
x-api-key: SUA_API_KEY
```

Não é necessário enviar `Content-Type` porque o GET não possui corpo JSON.

### Body

```text
N/A
```

O método GET não utiliza corpo para essa requisição.

---

## 2.3 Estrutura do Response

### Status Code Esperado

```text
200 OK
```

O código `200` indica que a requisição foi processada com sucesso.

### Payload de Retorno

Exemplo de resposta documentada pela ReqRes:

```json
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    }
  ]
}
```

A resposta contém informações de paginação e um array chamado `data`, que contém os usuários retornados.

### Principais campos

| Campo               | Tipo   | Descrição                          |
| ------------------- | ------ | ---------------------------------- |
| `page`              | number | Página atual                       |
| `per_page`          | number | Quantidade de registros por página |
| `total`             | number | Quantidade total de usuários       |
| `total_pages`       | number | Quantidade total de páginas        |
| `data`              | array  | Lista de usuários                  |
| `data[].id`         | number | Identificador do usuário           |
| `data[].email`      | string | E-mail do usuário                  |
| `data[].first_name` | string | Primeiro nome                      |
| `data[].last_name`  | string | Sobrenome                          |
| `data[].avatar`     | string | URL da imagem do usuário           |

---

# 3. Endpoint POST — Criar usuário

## 3.1 Identificação e Finalidade

### Endpoint/Rota

```text
POST /api/users
```

### Objetivo de Negócio

Esse endpoint representa a criação de um novo usuário.

Em um sistema real, poderia ser utilizado quando um administrador ou outro sistema cadastra um novo usuário na plataforma.

---

## 3.2 Estrutura do Request

### Método HTTP

```text
POST
```

### URL Completa

```text
https://reqres.in/api/users
```

### Headers

Os principais headers utilizados são:

```http
Content-Type: application/json
x-api-key: SUA_API_KEY
```

O `Content-Type` informa ao servidor que o corpo da requisição está no formato JSON.

A ReqRes documenta o uso desses headers para a criação de usuários.

### Body

O corpo enviado deve conter os dados do novo usuário.

Exemplo:

```json
{
  "name": "Gustavo",
  "job": "QA Engineer"
}
```

---

# 4. Estrutura do Response

## 4.1 Status Code Esperado

```text
201 Created
```

O código `201` indica que o servidor recebeu a solicitação e criou o recurso.

A documentação da ReqRes utiliza `201 Created` para o endpoint de criação de usuário.

## 4.2 Payload de Retorno

Exemplo de resposta documentada:

```json
{
  "name": "Jane",
  "job": "QA Engineer",
  "id": "123",
  "createdAt": "2026-02-06T10:30:00.000Z"
}
```

A resposta retorna os dados enviados juntamente com um identificador e a data/hora de criação.

### Principais campos

| Campo       | Tipo   | Descrição                           |
| ----------- | ------ | ----------------------------------- |
| `name`      | string | Nome enviado na requisição          |
| `job`       | string | Cargo informado                     |
| `id`        | string | Identificador gerado para o usuário |
| `createdAt` | string | Data e horário de criação           |

---

# 5. Comparação dos dois endpoints

| Característica   | GET                | POST               |
| ---------------- | ------------------ | ------------------ |
| Endpoint         | `/api/users`       | `/api/users`       |
| Método           | GET                | POST               |
| Finalidade       | Consultar usuários | Criar usuário      |
| Body             | N/A                | JSON               |
| Content-Type     | Não necessário     | `application/json` |
| Status esperado  | `200 OK`           | `201 Created`      |
| Retorna JSON     | Sim                | Sim                |
| Possui paginação | Sim                | Não                |

---

# 6. Exemplo utilizando TypeScript e fetch

## GET

```typescript
const response = await fetch(
  "https://reqres.in/api/users?page=2",
  {
    headers: {
      "x-api-key": "SUA_API_KEY"
    }
  }
);

console.log("Status:", response.status);

const data = await response.json();

console.log(data);
```

## POST

```typescript
const response = await fetch(
  "https://reqres.in/api/users",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "SUA_API_KEY"
    },
    body: JSON.stringify({
      name: "Gustavo",
      job: "QA Engineer"
    })
  }
);

console.log("Status:", response.status);

const data = await response.json();

console.log(data);
```

---

# 7. Fluxo de comunicação

O fluxo básico de comunicação entre cliente e servidor pode ser representado da seguinte maneira:

```text
CLIENTE
   |
   | HTTP GET /api/users
   |---------------------------->
   |
   |                         SERVIDOR
   |                            |
   |                            | Processa requisição
   |                            |
   |<----------------------------|
   |       HTTP 200 + JSON
   |
   v
Exibe os usuários


CLIENTE
   |
   | HTTP POST /api/users
   | + JSON
   |---------------------------->
   |
   |                         SERVIDOR
   |                            |
   |                            | Processa dados
   |                            | Cria usuário
   |                            |
   |<----------------------------|
   |       HTTP 201 + JSON
   |
   v
Usuário criado
```

---

# 8. Conclusão

A análise dos endpoints permitiu identificar o contrato básico de comunicação entre cliente e servidor.

No endpoint `GET`, o cliente solicita informações e recebe uma resposta `200 OK` contendo uma lista de usuários.

No endpoint `POST`, o cliente envia informações no corpo da requisição em formato JSON. O servidor processa os dados e retorna `201 Created`, juntamente com informações do usuário criado.

Esse entendimento do contrato será importante para a próxima etapa, que consiste na criação de testes automatizados para validar:

* Status codes;
* Estrutura do JSON;
* Campos obrigatórios;
* Tipos dos dados;
* Headers;
* Regras do request;
* Regras do response;
* Cenários de sucesso;
* Cenários de erro.
