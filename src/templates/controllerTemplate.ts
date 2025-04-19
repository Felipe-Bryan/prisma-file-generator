export const controllerTemplate = `import { Create{{modelName}}UseCase } from '../usecases/create-{{modelName}}.usecase';
import { Delete{{modelName}}UseCase } from '../usecases/delete-{{modelName}}.usecase';
import { Get{{modelName}}ByIdUseCase } from '../usecases/get-{{modelName}}-by-id.usecase';
import { List{{modelName}}sUseCase } from '../usecases/list-{{modelName}}s.usecase';
import { Update{{modelName}}UseCase } from '../usecases/update-{{modelName}}.usecase';
import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';
import { {{modelName}}, Prisma } from '@prisma/client';

export class {{modelName}}Controller {
  public async create(req: Request, res: Response) {
    try {
      const data: Prisma.{{modelName}}CreateInput = req.body;

      const result = await new Create{{modelName}}UseCase().execute(data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await new List{{modelName}}sUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new Get{{modelName}}ByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: Partial<{{modelName}}> = req.body;

      const result = await new Update{{modelName}}UseCase().execute(id, data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new Delete{{modelName}}UseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}`;
