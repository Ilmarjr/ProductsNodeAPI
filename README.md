# Product API

Uma API simples de gerenciamento de produtos, desenvolvida com **Node.js**, **Express** e **MongoDB**.  
Permite criar, ler, atualizar e deletar produtos, com suporte a **paginação** em JSON.

---

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

---

## ⚡ Funcionalidades

- Listar todos os produtos com paginação (`page` e `limit`)
- Buscar um produto pelo ID
- Criar um novo produto
- Atualizar um produto existente
- Deletar um produto
- Tratamento de erros com middleware global

---

## 🚀 Endpoints

| Método | Rota                | Descrição                    |
|--------|-------------------|------------------------------|
| GET    | /api/products      | Listar todos os produtos     |
| GET    | /api/products/:id  | Buscar produto por ID        |
| POST   | /api/products      | Criar um novo produto        |
| PUT    | /api/products/:id  | Atualizar produto existente  |
| DELETE | /api/products/:id  | Deletar produto              |

### Parâmetros de Query

- **page**: número da página (opcional, default = 1)
- **limit**: quantidade de produtos por página (opcional, default = 10)
