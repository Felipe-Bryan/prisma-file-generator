
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { UserRepository } from '../repositories/User.repository';

export class UpdateUserUseCase {
  constructor(private UserRepo: UserRepository = new UserRepository()) {}

  public async execute(id: string, data: Prisma.UserUpdateInput): Promise<Result> {
    const User = await this.UserRepo.findById(id);

    if (!User) {
      return Return.notFound('User');
    }

    const updatedUser = await this.UserRepo.update(id, data);

    return Return.success(updatedUser, 'User updated');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
