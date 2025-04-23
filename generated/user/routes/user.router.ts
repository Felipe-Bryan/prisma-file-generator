
import { Router } from 'express';
import { userController } from '../controllers/user.controller';

export const userRoutes = () => {
  const app = Router();

  app.get('/', new userController().list);
  app.get('/:id', new userController().get);
  app.post('/', new userController().create);
  app.put('/:id', new userController().update);
  app.delete('/:id', new userController().delete);

  return app;
}; // Necessário configurar os validators e adicionar rotas de acordo com o projeto
