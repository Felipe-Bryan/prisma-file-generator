
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { UserRepository } from '../repositories/User.repository';

export class ListUsersUseCase {
  constructor(private UserRepo: UserRepository = new UserRepository()) {}

  public async execute(): Promise<Result> {
    const Users = await this.UserRepo.findAll();

    if (!Users || Users.length === 0) {
      return Return.notFound('Users');
    }

    return Return.success(Users, 'Users found');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
