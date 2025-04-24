
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { PostRepository } from '../repositories/Post.repository';

export class DeletePostUseCase {
  constructor(private PostRepo: PostRepository = new PostRepository()) {}

  public async execute(id: string): Promise<Result> {
    const Post = await this.PostRepo.findById(id);

    if (!Post) {
      return Return.notFound('Post');
    }

    const result = await this.PostRepo.delete(id);

    return Return.success(result, 'Post deleted');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis