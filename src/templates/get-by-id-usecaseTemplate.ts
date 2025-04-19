export const getByIdUseCaseTemplate = `
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { {{modelName}}Repository } from '../repositories/{{modelName}}.repository';

export class Get{{modelName}}ByIdUseCase {
  constructor(private {{modelName}}Repo: {{modelName}}Repository = new {{modelName}}Repository()) {}

  public async execute(id: string): Promise<Result> {
    const {{modelName}} = await this.{{modelName}}Repo.findById(id);

    if (!{{modelName}}) {
      return Return.notFound('{{modelName}}');
    }

    return Return.success({{modelName}}, '{{modelName}} found');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
`;
