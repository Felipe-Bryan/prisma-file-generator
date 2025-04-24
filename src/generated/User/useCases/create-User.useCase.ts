
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { UserRepository } from '../repositories/User.repository';

export class CreateUserUseCase {
  constructor(private UserRepo: UserRepository = new UserRepository()) {}

  public async execute(data: Prisma.UserCreateInput): Promise<Result> {
    const result = await this.UserRepo.create(data);

    return Return.created(result, 'User created');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis