import { CreateUserUseCase } from '../useCases/create-User.useCase';
import { DeleteUserUseCase } from '../useCases/delete-User.useCase';
import { GetUserByIdUseCase } from '../useCases/get-User-by-id.useCase';
import { ListUsersUseCase } from '../useCases/list-Users.useCase';
import { UpdateUserUseCase } from '../useCases/update-User.useCase';
import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';
import { User, Prisma } from '@prisma/client';

export class UserController {
  public async create(req: Request, res: Response) {
    try {
      const data: Prisma.UserCreateInput = req.body;

      const result = await new CreateUserUseCase().execute(data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await new ListUsersUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new GetUserByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: Partial<User> = req.body;

      const result = await new UpdateUserUseCase().execute(id, data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new DeleteUserUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}