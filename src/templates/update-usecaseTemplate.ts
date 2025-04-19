export const updateUsecaseTemplate = `
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { {{modelName}}Repository } from '../repositories/{{modelName}}.repository';

export class Update{{modelName}}UseCase {
  constructor(private {{modelName}}Repo: {{modelName}}Repository = new {{modelName}}Repository()) {}

  public async execute(id: string, data: Prisma.{{modelName}}UpdateInput): Promise<Result> {
    const {{modelName}} = await this.{{modelName}}Repo.findById(id);

    if (!{{modelName}}) {
      return Return.notFound('{{modelName}}');
    }

    const updated{{modelName}} = await this.{{modelName}}Repo.update(id, data);

    return Return.success(updated{{modelName}}, '{{modelName}} updated');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
`;
