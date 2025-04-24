
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { PostRepository } from '../repositories/Post.repository';

export class UpdatePostUseCase {
  constructor(private PostRepo: PostRepository = new PostRepository()) {}

  public async execute(id: string, data: Prisma.PostUpdateInput): Promise<Result> {
    const Post = await this.PostRepo.findById(id);

    if (!Post) {
      return Return.notFound('Post');
    }

    const updatedPost = await this.PostRepo.update(id, data);

    return Return.success(updatedPost, 'Post updated');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
