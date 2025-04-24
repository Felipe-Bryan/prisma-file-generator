
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { UserRepository } from '../repositories/User.repository';

export class GetUserByIdUseCase {
  constructor(private UserRepo: UserRepository = new UserRepository()) {}

  public async execute(id: string): Promise<Result> {
    const User = await this.UserRepo.findById(id);

    if (!User) {
      return Return.notFound('User');
    }

    return Return.success(User, 'User found');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
