
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { userRepository } from '../repositories/user.repository';

export class CreateuserUseCase {
  constructor(private userRepo: userRepository = new userRepository()) {}

  public async execute(data: Prisma.userCreateInput): Promise<Result> {
    const result = await this.userRepo.create(data);

    return Return.created(result, 'user created');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis