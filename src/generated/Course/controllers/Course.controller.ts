import { CreateCourseUseCase } from '../useCases/create-Course.useCase';
import { DeleteCourseUseCase } from '../useCases/delete-Course.useCase';
import { GetCourseByIdUseCase } from '../useCases/get-Course-by-id.useCase';
import { ListCoursesUseCase } from '../useCases/list-Courses.useCase';
import { UpdateCourseUseCase } from '../useCases/update-Course.useCase';
import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';
import { Course, Prisma } from '@prisma/client';

export class CourseController {
  public async create(req: Request, res: Response) {
    try {
      const data: Prisma.CourseCreateInput = req.body;

      const result = await new CreateCourseUseCase().execute(data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await new ListCoursesUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new GetCourseByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: Partial<Course> = req.body;

      const result = await new UpdateCourseUseCase().execute(id, data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new DeleteCourseUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}