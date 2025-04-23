import { CreateuserUseCase } from '../usecases/create-user.usecase';
import { DeleteuserUseCase } from '../usecases/delete-user.usecase';
import { GetuserByIdUseCase } from '../usecases/get-user-by-id.usecase';
import { ListusersUseCase } from '../usecases/list-users.usecase';
import { UpdateuserUseCase } from '../usecases/update-user.usecase';
import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';
import { user, Prisma } from '@prisma/client';

export class userController {
  public async create(req: Request, res: Response) {
    try {
      const data: Prisma.userCreateInput = req.body;

      const result = await new CreateuserUseCase().execute(data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await new ListusersUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new GetuserByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: Partial<user> = req.body;

      const result = await new UpdateuserUseCase().execute(id, data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new DeleteuserUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}