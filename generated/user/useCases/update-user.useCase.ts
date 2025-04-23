
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { userRepository } from '../repositories/user.repository';

export class UpdateuserUseCase {
  constructor(private userRepo: userRepository = new userRepository()) {}

  public async execute(id: string, data: Prisma.userUpdateInput): Promise<Result> {
    const user = await this.userRepo.findById(id);

    if (!user) {
      return Return.notFound('user');
    }

    const updateduser = await this.userRepo.update(id, data);

    return Return.success(updateduser, 'user updated');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
