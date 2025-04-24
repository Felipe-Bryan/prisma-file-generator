
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { PostRepository } from '../repositories/Post.repository';

export class CreatePostUseCase {
  constructor(private PostRepo: PostRepository = new PostRepository()) {}

  public async execute(data: Prisma.PostCreateInput): Promise<Result> {
    const result = await this.PostRepo.create(data);

    return Return.created(result, 'Post created');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis