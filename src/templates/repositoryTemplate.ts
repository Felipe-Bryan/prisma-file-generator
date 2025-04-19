export const repositoryTemplate = `
import { {{modelName}}, Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export class {{modelName}}Repository {
  async findAll(): Promise<{{modelName}}[]> {
    return await prisma.{{modelName}}.findMany();
  }

  async findById(id: string): Promise<{{modelName}} | null> {
    return await prisma.{{modelName}}.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.{{modelName}}CreateInput): Promise<{{modelName}}> {
    return await prisma.{{modelName}}.create({ data });
  }

  async update(id: string, data: Prisma.{{modelName}}UpdateInput): Promise<{{modelName}}> {
    return await prisma.{{modelName}}.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<{{modelName}}> {
    return await prisma.{{modelName}}.delete({
      where: { id },
    });
  }
}
`;
