
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { userRepository } from '../repositories/user.repository';

export class DeleteuserUseCase {
  constructor(private userRepo: userRepository = new userRepository()) {}

  public async execute(id: string): Promise<Result> {
    const user = await this.userRepo.findById(id);

    if (!user) {
      return Return.notFound('user');
    }

    const result = await this.userRepo.delete(id);

    return Return.success(result, 'user deleted');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis