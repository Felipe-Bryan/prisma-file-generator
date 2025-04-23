export const controllerTemplate = `import { Create{{modelName}}UseCase } from '../useCases/create-{{modelName}}.useCase';
import { Delete{{modelName}}UseCase } from '../useCases/delete-{{modelName}}.useCase';
import { Get{{modelName}}ByIdUseCase } from '../useCases/get-{{modelName}}-by-id.useCase';
import { List{{modelName}}sUseCase } from '../useCases/list-{{modelName}}s.useCase';
import { Update{{modelName}}UseCase } from '../useCases/update-{{modelName}}.useCase';
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
