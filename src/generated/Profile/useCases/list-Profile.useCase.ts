
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { ProfileRepository } from '../repositories/Profile.repository';

export class ListProfilesUseCase {
  constructor(private ProfileRepo: ProfileRepository = new ProfileRepository()) {}

  public async execute(): Promise<Result> {
    const Profiles = await this.ProfileRepo.findAll();

    if (!Profiles || Profiles.length === 0) {
      return Return.notFound('Profiles');
    }

    return Return.success(Profiles, 'Profiles found');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
