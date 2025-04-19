export const createUseCaseTemplate = `
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { {{modelName}}Repository } from '../repositories/{{modelName}}.repository';

export class Create{{modelName}}UseCase {
  constructor(private {{modelName}}Repo: {{modelName}}Repository = new {{modelName}}Repository()) {}

  public async execute(data: Prisma.{{modelName}}CreateInput): Promise<Result> {
    const result = await this.{{modelName}}Repo.create(data);

    return Return.created(result, '{{modelName}} created');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis`;
