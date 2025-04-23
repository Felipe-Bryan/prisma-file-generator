# 🛠️ Prisma API File Generator

Gerador automático de arquivos para projetos baseados em **Prisma ORM**.  
Ideal para acelerar o desenvolvimento de APIs REST, criando automaticamente repositórios, rotas, controllers e usecases a partir do seu schema Prisma.

---

## 🚀 Visão Geral

Este projeto tem como objetivo facilitar a criação de APIs em Node.js com Prisma, gerando os principais arquivos necessários a partir do schema definido no `schema-fragment.prisma`.

Com apenas um comando, você obtém:

- Repositórios
- Controllers
- Rotas
- Usecases (Create, List, Get by ID, Update, Delete)

---

## 📦 Instalação

```bash
git clone https://github.com/Felipe-Bryan/prisma-file-generator.git
```

```bash
cd prisma-file-generator
```

```bash
npm install
```

---

## ⚙️ Como Usar
Certifique-se de ter um arquivo schema-fragment.prisma com as informações da entidade.

Execute o gerador com o comando:

```bash
npm run generate
```

Os arquivos serão gerados na pasta `generated/{entity}` com a estrutura completa.<br>
Os arquivos gerados devem ser colados dentro da pasta `modules/` da API Prisma.

---

## 📁 Estrutura dos Arquivos Gerados

```
generated/
  entity/
    controllers/
      entity.controller.ts
    repositories/
      entity.repository.ts
    routes/
      entity.routes.ts
    useCases/
      create-entity.usecase.ts
      delete-entity.usecase.ts
      get-entity-by-id.usecase.ts
      list-entity.usecase.ts
      update-entity.usecase.ts  
```

---

## ✨ Exemplo de Uso

```
model user {
    id    String @id @default(cuid())
    name  String
    email String @unique
}
```
O gerador criará automaticamente todos os arquivos baseados nessa estrutura.

---

## 🧩 Personalização
Você pode editar os templates localizados em src/templates para adaptar os arquivos gerados ao seu estilo ou padrão de projeto.


