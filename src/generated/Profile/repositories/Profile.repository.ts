
import { Profile, Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export class ProfileRepository {
  async findAll(): Promise<Profile[]> {
    return await prisma.profile.findMany();
  }

  async findById(id: string): Promise<Profile | null> {
    return await prisma.profile.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.ProfileCreateInput): Promise<Profile> {
    return await prisma.profile.create({ data });
  }

  async update(id: string, data: Prisma.ProfileUpdateInput): Promise<Profile> {
    return await prisma.profile.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Profile> {
    return await prisma.profile.delete({
      where: { id },
    });
  }
}
