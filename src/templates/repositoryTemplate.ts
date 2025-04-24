export function repositoryTemplate(modelName: string, prismaName: string): string {
  return `
import { ${modelName}, Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export class ${modelName}Repository {
  async findAll(): Promise<${modelName}[]> {
    return await prisma.${prismaName}.findMany();
  }

  async findById(id: string): Promise<${modelName} | null> {
    return await prisma.${prismaName}.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.${modelName}CreateInput): Promise<${modelName}> {
    return await prisma.${prismaName}.create({ data });
  }

  async update(id: string, data: Prisma.${modelName}UpdateInput): Promise<${modelName}> {
    return await prisma.${prismaName}.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<${modelName}> {
    return await prisma.${prismaName}.delete({
      where: { id },
    });
  }
}
`;
}
