# API TEMPLATE

Esta API tem o objetivo de informar como utilizar este servidor.

## Tecnologias Usadas

- Node.js
- Express
- TypeScript
- Prisma
- AWS SES (Simple Email Service)
- Zod
- Swagger

## Configuração do Ambiente

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale as dependências:

```sh
cd seu-repositorio
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais AWS e outras configurações necessárias:

```env
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=your-region
SES_VERIFIED_EMAIL=your-verified-email@example.com
```

## Executando a Aplicação

Para iniciar a aplicação, use o seguinte comando:

```sh
npm start
```

A aplicação estará disponível em `http://localhost:3333`.

## Rotas da API

### Autenticação

#### Login

- **POST** `/login`

  **Body:**
  ```json
  {
    "email": "root_dev_rm@hotmail.com",
    "password": "123456"
  }
  ```

### Conta

#### Criar Conta

- **POST** `/account`

  **Body:**
  ```json
  {
    "name": "Nome do cliente",
    "email": "root_dev_rm@hotmail.com",
    "password": "123456",
    "role": "ADMIN"
  }
  ```

### Sessão

#### Obter Sessão

- **POST** `/sessions`

### Recuperar Senha

#### Recuperar Senha

- **POST** `/forgotPassword`

  **Body:**
  ```json
  {
    "email": "root_dev_rm@hotmail.com"
  }
  ```

### Validar Recuperação de Senha

- **POST** `/validateForgotPassword/{id}`

  **Path Param:**
  - `id`: O ID para validar se o link é válido

### Redefinir Senha

- **POST** `/redefine-password`

  **Query Param:**
  - `id`: O ID do link

  **Body:**
  ```json
  {
    "password": "Password1",
    "verifyPassword": "Password1"
  }
  ```

### Email

#### Enviar Email

- **POST** `/send`

  **Body:**
  ```json
  {
    "to": "example@example.com",
    "subject": "Test Email",
    "body": "This is a test email."
  }
  ```

#### Verificar Identidade de Email

- **POST** `/verify-email`

  **Body:**
  ```json
  {
    "identity": "example@example.com"
  }
  ```

#### Verificar Identidade de Domínio

- **POST** `/verify-domain`

  **Body:**
  ```json
  {
    "identity": "example.com"
  }
  ```

#### Excluir Identidade

- **DELETE** `/delete-identity`

  **Body:**
  ```json
  {
    "identity": "example@example.com"
  }
  ```

#### Obter Detalhes da Identidade

- **GET** `/identity-details/{identity}`

  **Path Param:**
  - `identity`: A identidade a ser consultada

## Testando as Rotas

### Com Postman

1. **Enviar E-mail**
   - URL: `POST /send`
   - Body (JSON):
     ```json
     {
       "to": "example@example.com",
       "subject": "Test Email",
       "body": "This is a test email."
     }
     ```

2. **Verificar Identidade de E-mail**
   - URL: `POST /verify-email`
   - Body (JSON):
     ```json
     {
       "identity": "example@example.com"
     }
     ```

3. **Verificar Identidade de Domínio**
   - URL: `POST /verify-domain`
   - Body (JSON):
     ```json
     {
       "identity": "example.com"
     }
     ```

4. **Excluir Identidade**
   - URL: `DELETE /delete-identity`
   - Body (JSON):
     ```json
     {
       "identity": "example@example.com"
     }
     ```

5. **Obter Detalhes da Identidade**
   - URL: `GET /identity-details/{identity}`
   - Exemplo: `GET /identity-details/example@example.com`

### Com Jest e Supertest

Para criar testes automatizados, você pode utilizar o Jest e o Supertest.

1. Instale as dependências de teste:

```sh
npm install jest supertest ts-jest @types/jest @types/supertest --save-dev
```

2. Crie um arquivo de teste, por exemplo, `src/tests/emailRoutes.test.ts`:

```typescript
import request from 'supertest';
import { app } from '../app'; // Assumindo que o express app está exportado de app.ts

describe('Email Routes', () => {
  it('should send an email', async () => {
    const response = await request(app)
      .post('/send')
      .send({
        to: 'example@example.com',
        subject: 'Test Email',
        body: 'This is a test email.'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Email sent successfully');
  });

  it('should start email identity verification', async () => {
    const response = await request(app)
      .post('/verify-email')
      .send({
        identity: 'example@example.com'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Email identity verification started');
  });

  it('should start domain identity verification', async () => {
    const response = await request(app)
      .post('/verify-domain')
      .send({
        identity: 'example.com'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Domain identity verification started');
  });

  it('should delete an identity', async () => {
    const response = await request(app)
      .delete('/delete-identity')
      .send({
        identity: 'example@example.com'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Identity deleted successfully');
  });

  it('should get identity details', async () => {
    const response = await request(app)
      .get('/identity-details/example@example.com');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('VerificationStatus'); // Ajuste conforme a resposta esperada
  });
});
```

3. Adicione um script para rodar os testes no seu `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

4. Execute os testes:

```sh
npm test
```