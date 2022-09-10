## 📋 Seven INC

API Desenvolvida com o intuito de gerenciar funcionários! (Challenge Seven)

## O que foi utilizado no projeto:

- Typescript
- Express
- Postgress
- Prisma
- Nodejs

### Regras de negócio:

- [x] Cadastrar funcionário        [POST] "/employee"
- [x] Editar funcionário           [PUT] "/employee/:id"
- [x] Deletar funcionário          [DELETE] "/employee/:id"
- [x] Listar funcionário           [GET] "/employee/:id"
- [x] Listar todos os funcionários [GET] "/employee/"

### Endpoints:

- [x] [POST] "/employee"
- [x] [PUT] "/employee/:id"
- [x] [DELETE] "/employee/:id"
- [x] [GET] "/employee/:id"
- [x] [GET] "/employee/"

### Project architecture

```
.
├── src/
│   └── database
|   └── environments
|   └── modules
|   └── repositories
|   └── shared
|       └── containers
|       └── errors
|       └── routes
|   └── utils
└── ...
```

### Exemplo API (Criar funcionário)

![image](https://user-images.githubusercontent.com/92350736/189468078-6a5689d6-63a9-48c9-a825-4599621299ce.png)

### Iniciando o Projeto

** Clone o repositório e instale as dependências.
```sh
# install dependencies
> yarn
# or
> yarn install

# copy .env file
> cp .env.example .env

# Generating the migration
> yarn prisma migrate dev

# start project
> yarn dev

# open in
http://localhost:9000/
```
