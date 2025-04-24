
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { CourseRepository } from '../repositories/Course.repository';

export class ListCoursesUseCase {
  constructor(private CourseRepo: CourseRepository = new CourseRepository()) {}

  public async execute(): Promise<Result> {
    const Courses = await this.CourseRepo.findAll();

    if (!Courses || Courses.length === 0) {
      return Return.notFound('Courses');
    }

    return Return.success(Courses, 'Courses found');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
