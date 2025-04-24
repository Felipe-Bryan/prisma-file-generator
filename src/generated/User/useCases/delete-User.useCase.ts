
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { UserRepository } from '../repositories/User.repository';

export class DeleteUserUseCase {
  constructor(private UserRepo: UserRepository = new UserRepository()) {}

  public async execute(id: string): Promise<Result> {
    const User = await this.UserRepo.findById(id);

    if (!User) {
      return Return.notFound('User');
    }

    const result = await this.UserRepo.delete(id);

    return Return.success(result, 'User deleted');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis