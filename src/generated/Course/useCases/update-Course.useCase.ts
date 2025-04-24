
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { CourseRepository } from '../repositories/Course.repository';

export class UpdateCourseUseCase {
  constructor(private CourseRepo: CourseRepository = new CourseRepository()) {}

  public async execute(id: string, data: Prisma.CourseUpdateInput): Promise<Result> {
    const Course = await this.CourseRepo.findById(id);

    if (!Course) {
      return Return.notFound('Course');
    }

    const updatedCourse = await this.CourseRepo.update(id, data);

    return Return.success(updatedCourse, 'Course updated');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
