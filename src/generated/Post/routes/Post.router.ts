
import { Router } from 'express';
import { PostController } from '../controllers/Post.controller';

export const PostRoutes = () => {
  const app = Router();

  app.get('/', new PostController().list);
  app.get('/:id', new PostController().get);
  app.post('/', new PostController().create);
  app.put('/:id', new PostController().update);
  app.delete('/:id', new PostController().delete);

  return app;
}; // Necessário configurar os validators e adicionar rotas de acordo com o projeto
