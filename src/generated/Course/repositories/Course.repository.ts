
import { Course, Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export class CourseRepository {
  async findAll(): Promise<Course[]> {
    return await prisma.course.findMany();
  }

  async findById(id: string): Promise<Course | null> {
    return await prisma.course.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.CourseCreateInput): Promise<Course> {
    return await prisma.course.create({ data });
  }

  async update(id: string, data: Prisma.CourseUpdateInput): Promise<Course> {
    return await prisma.course.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Course> {
    return await prisma.course.delete({
      where: { id },
    });
  }
}
