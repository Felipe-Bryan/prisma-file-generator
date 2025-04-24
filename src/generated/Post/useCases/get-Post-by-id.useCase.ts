
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { PostRepository } from '../repositories/Post.repository';

export class GetPostByIdUseCase {
  constructor(private PostRepo: PostRepository = new PostRepository()) {}

  public async execute(id: string): Promise<Result> {
    const Post = await this.PostRepo.findById(id);

    if (!Post) {
      return Return.notFound('Post');
    }

    return Return.success(Post, 'Post found');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
