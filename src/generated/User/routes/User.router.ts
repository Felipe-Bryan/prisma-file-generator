
import { Router } from 'express';
import { UserController } from '../controllers/User.controller';

export const UserRoutes = () => {
  const app = Router();

  app.get('/', new UserController().list);
  app.get('/:id', new UserController().get);
  app.post('/', new UserController().create);
  app.put('/:id', new UserController().update);
  app.delete('/:id', new UserController().delete);

  return app;
}; // Necessário configurar os validators e adicionar rotas de acordo com o projeto
