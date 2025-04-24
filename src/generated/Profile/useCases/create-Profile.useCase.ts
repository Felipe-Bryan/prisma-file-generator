
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { ProfileRepository } from '../repositories/Profile.repository';

export class CreateProfileUseCase {
  constructor(private ProfileRepo: ProfileRepository = new ProfileRepository()) {}

  public async execute(data: Prisma.ProfileCreateInput): Promise<Result> {
    const result = await this.ProfileRepo.create(data);

    return Return.created(result, 'Profile created');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis