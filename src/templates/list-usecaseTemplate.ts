export const listUsecaseTemplate = `
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { {{modelName}}Repository } from '../repositories/{{modelName}}.repository';

export class List{{modelName}}sUseCase {
  constructor(private {{modelName}}Repo: {{modelName}}Repository = new {{modelName}}Repository()) {}

  public async execute(): Promise<Result> {
    const {{modelName}}s = await this.{{modelName}}Repo.findAll();

    if (!{{modelName}}s || {{modelName}}s.length === 0) {
      return Return.notFound('{{modelName}}s');
    }

    return Return.success({{modelName}}s, '{{modelName}}s found');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
`;
