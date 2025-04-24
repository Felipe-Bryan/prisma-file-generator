
import { Post, Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export class PostRepository {
  async findAll(): Promise<Post[]> {
    return await prisma.post.findMany();
  }

  async findById(id: string): Promise<Post | null> {
    return await prisma.post.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return await prisma.post.create({ data });
  }

  async update(id: string, data: Prisma.PostUpdateInput): Promise<Post> {
    return await prisma.post.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Post> {
    return await prisma.post.delete({
      where: { id },
    });
  }
}
