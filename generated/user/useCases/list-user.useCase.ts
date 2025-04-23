
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { userRepository } from '../repositories/user.repository';

export class ListusersUseCase {
  constructor(private userRepo: userRepository = new userRepository()) {}

  public async execute(): Promise<Result> {
    const users = await this.userRepo.findAll();

    if (!users || users.length === 0) {
      return Return.notFound('users');
    }

    return Return.success(users, 'users found');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
