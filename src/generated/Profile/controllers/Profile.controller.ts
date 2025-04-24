import { CreateProfileUseCase } from '../useCases/create-Profile.useCase';
import { DeleteProfileUseCase } from '../useCases/delete-Profile.useCase';
import { GetProfileByIdUseCase } from '../useCases/get-Profile-by-id.useCase';
import { ListProfilesUseCase } from '../useCases/list-Profiles.useCase';
import { UpdateProfileUseCase } from '../useCases/update-Profile.useCase';
import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';
import { Profile, Prisma } from '@prisma/client';

export class ProfileController {
  public async create(req: Request, res: Response) {
    try {
      const data: Prisma.ProfileCreateInput = req.body;

      const result = await new CreateProfileUseCase().execute(data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await new ListProfilesUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new GetProfileByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: Partial<Profile> = req.body;

      const result = await new UpdateProfileUseCase().execute(id, data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new DeleteProfileUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}