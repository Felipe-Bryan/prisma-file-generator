(EN)
# 🛠️ Prisma API File Generator
Automatic file generator for projects based on **Prisma ORM**.
Ideal for speeding up REST API development by automatically creating repositories, routes, controllers, and use cases from your Prisma schema.

---

## 🚀 Overview
This project aims to simplify API creation in Node.js with Prisma by generating the main required files from the schema defined in `schema.prisma`.

With just one command, you get:
- Repositories
- Controllers
- Routes
- Use Cases (Create, List, Get by ID, Update, Delete)
- Typing model for the front-end

---

## 📦 Installation

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

# ⚙️ How to Use
Make sure you have a `schema.prisma` file with your entity definitions.

Run the generator with the command:

```bash
npm run generate
```

--- 

Lines with `@relation` and those starting with `@@` will be ignored in the typing file generation.<br>.
If you want to ignore any other specific line, add a `// ignore` comment at the end of the line.<br>

To ignore an entire model, add `// ignore` after the closing curly brace.

The `schema.prisma` file contains examples.<br>
The `src/generated` folder will contain the files generated according to the current configuration.

Files will be generated in `src/generated/{entity}` with the full structure.<br>

The generated files should be moved into the `modules/` folder of your Prisma API.<br>
In the API folder, the command to update the Prisma client must be run whenever there are changes to the `schema.prisma` file.

```
npx prisma generate
```

---

## 📁 Structure of Generated Files
```
generated/
  entity/
    controllers/
      entity.controller.ts
    repositories/
      entity.repository.ts
    routes/
      entity.routes.ts
    types/
      entityType.ts
    useCases/
      create-entity.usecase.ts
      delete-entity.usecase.ts
      get-entity-by-id.usecase.ts
      list-entity.usecase.ts
      update-entity.usecase.ts
```

## ✨ Example Usage

```
model user {
    id    String @id @default(cuid())
    name  String
    email String @unique
}
```

--- 

The generator will automatically create all files based on this structure.

# 🧩 Customization
You can edit the templates in `src/templates` to adapt the generated files to your coding style or project standards.
You can also change the directory structure in the `configs.ts` file.

---

(PT-BR)
# 🛠️ Prisma API File Generator

Gerador automático de arquivos para projetos baseados em **Prisma ORM**.  
Ideal para acelerar o desenvolvimento de APIs REST, criando automaticamente repositórios, rotas, controllers e usecases a partir do seu schema Prisma.

---

## 🚀 Visão Geral

Este projeto tem como objetivo facilitar a criação de APIs em Node.js com Prisma, gerando os principais arquivos necessários a partir do schema definido no `schema.prisma`.

Com apenas um comando, você obtém:

- Repositórios
- Controllers
- Rotas
- Usecases (Create, List, Get by ID, Update, Delete)
- Modelo de tipagem para o front-end

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

Certifique-se de ter um arquivo `schema.prisma` com as informações da entidade.

Execute o gerador com o comando:

```bash
npm run generate
```

As linhas com `@relation` e iniciadas em `@@` serão ignoradas para a geração do arquivo de tipagem, caso queira que alguma outra linha seja ignorada pelo gerador adicione um comentário `// ignore` na frente da linha.

Para ignorar um model completo adicione `// ignore` após o fechamento da ultima chave.

O arquivo `schema.prisma` contém todos os exemplos.<br>
A pasta `src/generated` contém os arquivos gerados de acordo com a configuração atual.

---

Os arquivos serão gerados na pasta `src/generated/{entity}` com a estrutura completa.<br>

Os arquivos gerados devem ser colados dentro da pasta `modules/` da API Prisma.<br>
Na pasta da API, o comando para atualizar o prisma client deve ser rodado sempre que houver alteração no arquivo `schema.prisma` 

```bash
npm prisma generate
```

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
    types/
      entityType.ts
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

Você também pode alterar os diretórios no arquivo `configs.ts`
