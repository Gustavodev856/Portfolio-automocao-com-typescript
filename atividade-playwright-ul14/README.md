# Atividade Prática 2 — Playwright & TypeScript

## Arquitetura E2E: POM, Fixture de Sessão e Data-Driven

Projeto desenvolvido para a Unidade 14, com o objetivo de aplicar boas práticas de automação de testes end-to-end utilizando Playwright e TypeScript.

### Plataforma escolhida

**SauceDemo (Swag Labs)**

URL: https://www.saucedemo.com/

### Tecnologias utilizadas

- Node.js
- TypeScript
- Playwright Test
- Page Object Model (POM)
- Fixtures personalizadas
- Data-Driven Testing

### Estrutura do projeto

- `data/usuarios.data.ts`: massa de dados tipada.
- `pages/LoginPage.ts`: ações e elementos da tela de login.
- `pages/DashboardPage.ts`: ações e elementos da área restrita.
- `fixtures/auth.fixture.ts`: fixture de sessão autenticada.
- `tests/dashboard-sessao.spec.ts`: testes da área restrita e logout.
- `tests/login-data-driven.spec.ts`: cenários dinâmicos de login.

### Credenciais públicas de teste

| Cenário | Usuário | Senha |
|---|---|---|
| Usuário padrão | `standard_user` | `secret_sauce` |
| Usuário bloqueado | `locked_out_user` | `secret_sauce` |
| Senha incorreta | `standard_user` | `senha_errada` |

As credenciais são utilizadas exclusivamente no ambiente público de demonstração do SauceDemo.

### Instalação

Instale as dependências:

```bash
npm install
```

Instale o navegador Chromium:

```bash
npx playwright install chromium
```

### Executar os testes

Executar toda a suíte:

```bash
npx playwright test
```

Executar apenas os testes de login:

```bash
npx playwright test tests/login-data-driven.spec.ts
```

Executar apenas os testes da área restrita:

```bash
npx playwright test tests/dashboard-sessao.spec.ts
```

Executar com o navegador visível:

```bash
npx playwright test --headed
```

### Boas práticas aplicadas

- Separação entre dados, páginas, fixtures e testes.
- Seletores centralizados nos Page Objects.
- Massa de dados tipada com TypeScript.
- Asserções nos arquivos de teste.
- Esperas automáticas com assertions web-first.
- Ausência de `page.waitForTimeout()` arbitrário.

### Objetivo

Demonstrar uma arquitetura de automação reutilizável, organizada e preparada para a evolução de cenários E2E.