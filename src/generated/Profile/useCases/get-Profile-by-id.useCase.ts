
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { ProfileRepository } from '../repositories/Profile.repository';

export class GetProfileByIdUseCase {
  constructor(private ProfileRepo: ProfileRepository = new ProfileRepository()) {}

  public async execute(id: string): Promise<Result> {
    const Profile = await this.ProfileRepo.findById(id);

    if (!Profile) {
      return Return.notFound('Profile');
    }

    return Return.success(Profile, 'Profile found');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
