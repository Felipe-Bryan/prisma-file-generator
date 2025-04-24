import { CreatePostUseCase } from '../useCases/create-Post.useCase';
import { DeletePostUseCase } from '../useCases/delete-Post.useCase';
import { GetPostByIdUseCase } from '../useCases/get-Post-by-id.useCase';
import { ListPostsUseCase } from '../useCases/list-Posts.useCase';
import { UpdatePostUseCase } from '../useCases/update-Post.useCase';
import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';
import { Post, Prisma } from '@prisma/client';

export class PostController {
  public async create(req: Request, res: Response) {
    try {
      const data: Prisma.PostCreateInput = req.body;

      const result = await new CreatePostUseCase().execute(data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await new ListPostsUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new GetPostByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: Partial<Post> = req.body;

      const result = await new UpdatePostUseCase().execute(id, data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new DeletePostUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}