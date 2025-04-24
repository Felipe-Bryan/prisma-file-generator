
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { ProfileRepository } from '../repositories/Profile.repository';

export class UpdateProfileUseCase {
  constructor(private ProfileRepo: ProfileRepository = new ProfileRepository()) {}

  public async execute(id: string, data: Prisma.ProfileUpdateInput): Promise<Result> {
    const Profile = await this.ProfileRepo.findById(id);

    if (!Profile) {
      return Return.notFound('Profile');
    }

    const updatedProfile = await this.ProfileRepo.update(id, data);

    return Return.success(updatedProfile, 'Profile updated');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
