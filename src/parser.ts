import fs from 'fs-extra';
import path from 'path';

// Função para ler e retornar o conteúdo do arquivo schema-fragment.prisma
export const readSchema = (filePath: string) => {
  const schemaContent = fs.readFileSync(filePath, 'utf-8');

  return schemaContent;
};

// Função para extrair as tabelas e campos do schema
export const parseSchema = (schemaContent: string) => {
  const regex = /model (\w+) {([^}]*)}/g;
  let match;
  const models = [];

  while ((match = regex.exec(schemaContent)) !== null) {
    const modelName = match[1];

    const fields = match[2]
      .split('\n')
      .map((line) => line.trim().replace(/\s+/g, ' '))
      .filter((line) => line && !line.startsWith('//'))
      .map((line) => {
        const [fieldName, fieldType] = line.split(' ');

        return { fieldName, fieldType };
      });

    models.push({ modelName, fields });
  }

  return models;
};
