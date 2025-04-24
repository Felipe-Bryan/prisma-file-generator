
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { CourseRepository } from '../repositories/Course.repository';

export class GetCourseByIdUseCase {
  constructor(private CourseRepo: CourseRepository = new CourseRepository()) {}

  public async execute(id: string): Promise<Result> {
    const Course = await this.CourseRepo.findById(id);

    if (!Course) {
      return Return.notFound('Course');
    }

    return Return.success(Course, 'Course found');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
