
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { CourseRepository } from '../repositories/Course.repository';

export class DeleteCourseUseCase {
  constructor(private CourseRepo: CourseRepository = new CourseRepository()) {}

  public async execute(id: string): Promise<Result> {
    const Course = await this.CourseRepo.findById(id);

    if (!Course) {
      return Return.notFound('Course');
    }

    const result = await this.CourseRepo.delete(id);

    return Return.success(result, 'Course deleted');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis