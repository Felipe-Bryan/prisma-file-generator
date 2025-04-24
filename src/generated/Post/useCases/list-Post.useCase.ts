
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { PostRepository } from '../repositories/Post.repository';

export class ListPostsUseCase {
  constructor(private PostRepo: PostRepository = new PostRepository()) {}

  public async execute(): Promise<Result> {
    const Posts = await this.PostRepo.findAll();

    if (!Posts || Posts.length === 0) {
      return Return.notFound('Posts');
    }

    return Return.success(Posts, 'Posts found');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
