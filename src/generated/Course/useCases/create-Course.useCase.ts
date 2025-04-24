
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { CourseRepository } from '../repositories/Course.repository';

export class CreateCourseUseCase {
  constructor(private CourseRepo: CourseRepository = new CourseRepository()) {}

  public async execute(data: Prisma.CourseCreateInput): Promise<Result> {
    const result = await this.CourseRepo.create(data);

    return Return.created(result, 'Course created');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis