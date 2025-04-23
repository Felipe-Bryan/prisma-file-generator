
import { user, Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export class userRepository {
  async findAll(): Promise<user[]> {
    return await prisma.user.findMany();
  }

  async findById(id: string): Promise<user | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.userCreateInput): Promise<user> {
    return await prisma.user.create({ data });
  }

  async update(id: string, data: Prisma.userUpdateInput): Promise<user> {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<user> {
    return await prisma.user.delete({
      where: { id },
    });
  }
}
