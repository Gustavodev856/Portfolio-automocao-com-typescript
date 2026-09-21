# Documento Técnico — Métodos HTTP e Testes de Integração

## 1. Diferença entre PUT, PATCH e DELETE

Os métodos HTTP são utilizados para indicar qual operação o cliente deseja realizar sobre um recurso da API.

### PUT

O método `PUT` é utilizado para **atualizar um recurso por completo**.

Normalmente, o cliente envia todos os campos que devem compor o recurso.

### Exemplo

```http
PUT /api/users/123
Content-Type: application/json
```

```json
{
  "name": "Gustavo Vasconcelos",
  "email": "gustavo@email.com",
  "job": "Frontend Developer"
}
```

Nesse caso, o recurso do usuário `123` é atualizado com os dados enviados.

---

### PATCH

O método `PATCH` é utilizado para realizar uma **alteração parcial** em um recurso.

Diferentemente do `PUT`, não é necessário enviar todos os campos.

### Exemplo

```http
PATCH /api/users/123
Content-Type: application/json
```

```json
{
  "job": "Full Stack Developer"
}
```

Nesse exemplo, somente o campo `job` será alterado.

### Diferença principal

```text
PUT   → Atualização completa
PATCH → Atualização parcial
```

---

### DELETE

O método `DELETE` é utilizado para **remover um recurso**.

### Exemplo

```http
DELETE /api/users/123
```

O servidor recebe a solicitação e remove o recurso correspondente ao identificador `123`.

Normalmente, uma resposta de sucesso pode utilizar:

```text
204 No Content
```

quando não há conteúdo para retornar no corpo da resposta.

---

## 2. Comparação entre os métodos

| Método | Finalidade              | Body            | Exemplo          |
| ------ | ----------------------- | --------------- | ---------------- |
| GET    | Consultar               | Normalmente não | `/api/users`     |
| POST   | Criar                   | Sim             | `/api/users`     |
| PUT    | Atualizar completamente | Sim             | `/api/users/123` |
| PATCH  | Atualizar parcialmente  | Sim             | `/api/users/123` |
| DELETE | Remover                 | Normalmente não | `/api/users/123` |

---

# 3. Principais Status Codes HTTP

Os status codes informam ao cliente o resultado do processamento da requisição.

## 3.1 Sucesso — 2xx

### 200 OK

A requisição foi processada com sucesso.

Exemplo:

```http
GET /api/users
```

Resposta:

```text
200 OK
```

---

### 201 Created

Indica que um novo recurso foi criado com sucesso.

É comum em requisições `POST`.

```http
POST /api/users
```

Resposta:

```text
201 Created
```

---

### 204 No Content

A requisição foi processada com sucesso, mas não existe conteúdo para retornar.

É bastante utilizado em operações `DELETE`.

```http
DELETE /api/users/123
```

Resposta:

```text
204 No Content
```

---

# 3.2 Erros do cliente — 4xx

### 400 Bad Request

A requisição possui dados inválidos ou está malformada.

Exemplo:

```json
{
  "email": "email-invalido"
}
```

Resposta:

```text
400 Bad Request
```

---

### 401 Unauthorized

Indica que a requisição precisa de autenticação ou que as credenciais fornecidas não são válidas.

```text
401 Unauthorized
```

---

### 403 Forbidden

O servidor entendeu a requisição, mas o cliente não possui permissão para realizar aquela operação.

```text
403 Forbidden
```

---

### 404 Not Found

O recurso solicitado não foi encontrado.

Exemplo:

```http
GET /api/users/99999
```

Resposta:

```text
404 Not Found
```

---

### 409 Conflict

Indica um conflito com o estado atual do recurso.

Um exemplo seria tentar criar um usuário com um identificador ou dado que deveria ser único e já existe.

```text
409 Conflict
```

---

### 422 Unprocessable Content

A estrutura da requisição é válida, mas os dados enviados não atendem às regras de validação da aplicação.

Exemplo:

```json
{
  "email": "usuario-sem-email-valido"
}
```

---

# 3.3 Erros do servidor — 5xx

### 500 Internal Server Error

Ocorreu um erro inesperado no servidor.

```text
500 Internal Server Error
```

---

### 502 Bad Gateway

Um servidor que atua como gateway ou proxy recebeu uma resposta inválida de outro servidor.

```text
502 Bad Gateway
```

---

### 503 Service Unavailable

O serviço está temporariamente indisponível.

```text
503 Service Unavailable
```

---

# 4. Resumo dos principais Status Codes

| Código | Nome                  | Significado                         |
| ------ | --------------------- | ----------------------------------- |
| 200    | OK                    | Requisição processada com sucesso   |
| 201    | Created               | Recurso criado                      |
| 204    | No Content            | Sucesso sem conteúdo no response    |
| 400    | Bad Request           | Requisição inválida                 |
| 401    | Unauthorized          | Autenticação necessária ou inválida |
| 403    | Forbidden             | Acesso não permitido                |
| 404    | Not Found             | Recurso não encontrado              |
| 409    | Conflict              | Conflito com o estado atual         |
| 422    | Unprocessable Content | Dados não passaram na validação     |
| 500    | Internal Server Error | Erro interno do servidor            |
| 502    | Bad Gateway           | Resposta inválida de outro servidor |
| 503    | Service Unavailable   | Serviço indisponível                |

---

# 5. Exemplo de Payload JSON bem estruturado

JSON é um formato muito utilizado na comunicação entre aplicações através de APIs REST.

Um payload bem estruturado deve possuir nomes de propriedades claros e tipos de dados coerentes.

### Exemplo

```json
{
  "name": "Gustavo Vasconcelos",
  "email": "gustavo@email.com",
  "job": "Frontend Developer",
  "active": true,
  "address": {
    "city": "Recife",
    "state": "PE",
    "country": "Brasil"
  },
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js"
  ]
}
```

### Estrutura do payload

| Campo     | Tipo    | Descrição                      |
| --------- | ------- | ------------------------------ |
| `name`    | string  | Nome do usuário                |
| `email`   | string  | E-mail                         |
| `job`     | string  | Cargo                          |
| `active`  | boolean | Indica se o usuário está ativo |
| `address` | object  | Dados de endereço              |
| `skills`  | array   | Lista de habilidades           |

Nesse exemplo é possível observar diferentes tipos de dados:

* `string`
* `boolean`
* `object`
* `array`

Uma estrutura organizada facilita a validação e o consumo dos dados pela aplicação.

---

# 6. Criação de Testes de Integração

Os testes de integração verificam se diferentes partes de um sistema conseguem trabalhar corretamente em conjunto.

No contexto de APIs, podemos testar a comunicação entre o cliente e o servidor, validando o request e o response.

## 6.1 Objetivos dos testes

Os testes devem verificar, por exemplo:

* Se a requisição foi enviada corretamente;
* Se o endpoint está disponível;
* Se o status code está correto;
* Se os headers estão corretos;
* Se o response possui os campos esperados;
* Se os tipos dos dados estão corretos;
* Se dados inválidos são tratados corretamente.

---

# 7. Exemplo de Teste de Integração — GET

Podemos utilizar TypeScript com `fetch`.

```typescript
describe("GET /api/users", () => {
  it("deve retornar uma lista de usuários", async () => {
    const response = await fetch(
      "https://reqres.in/api/users?page=2",
      {
        headers: {
          "x-api-key": "SUA_API_KEY"
        }
      }
    );

    expect(response.status).toBe(200);

    const data = await response.json();

    expect(data).toHaveProperty("page");
    expect(data).toHaveProperty("data");
    expect(Array.isArray(data.data)).toBe(true);
  });
});
```

### O que está sendo validado?

O teste verifica:

1. Se o endpoint responde;
2. Se o status retornado é `200`;
3. Se existe a propriedade `page`;
4. Se existe a propriedade `data`;
5. Se `data` é realmente um array.

---

# 8. Exemplo de Teste de Integração — POST

Também podemos testar a criação de um usuário.

```typescript
describe("POST /api/users", () => {
  it("deve criar um usuário", async () => {
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
          job: "Frontend Developer"
        })
      }
    );

    expect(response.status).toBe(201);

    const data = await response.json();

    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("createdAt");
    expect(data.name).toBe("Gustavo");
    expect(data.job).toBe("Frontend Developer");
  });
});
```

---

# 9. Cenários de Teste

Além dos cenários de sucesso, é importante testar situações de erro.

| Cenário                      | Resultado esperado                   |
| ---------------------------- | ------------------------------------ |
| GET com endpoint válido      | `200 OK`                             |
| POST com dados válidos       | `201 Created`                        |
| GET para recurso inexistente | `404 Not Found`                      |
| POST sem dados obrigatórios  | Erro de validação                    |
| Requisição sem autenticação  | `401 Unauthorized`, quando aplicável |
| Usuário sem permissão        | `403 Forbidden`                      |
| Servidor indisponível        | `5xx`                                |

---

# 10. Conclusão

A utilização correta dos métodos HTTP permite definir claramente a intenção de cada operação realizada através de uma API.

Os métodos `PUT`, `PATCH` e `DELETE` possuem finalidades diferentes:

* `PUT` realiza uma atualização completa;
* `PATCH` realiza uma atualização parcial;
* `DELETE` remove um recurso.

Os status codes permitem que o cliente identifique o resultado da operação, enquanto o JSON define uma estrutura padronizada para troca de dados.

Por fim, os testes de integração permitem verificar se a comunicação entre as diferentes partes do sistema está funcionando conforme o contrato definido pela API.

Esses conceitos são fundamentais para a criação de testes automatizados de APIs e para garantir maior confiabilidade nas integrações entre sistemas.
