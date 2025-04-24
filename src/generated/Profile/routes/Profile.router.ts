
import { Router } from 'express';
import { ProfileController } from '../controllers/Profile.controller';

export const ProfileRoutes = () => {
  const app = Router();

  app.get('/', new ProfileController().list);
  app.get('/:id', new ProfileController().get);
  app.post('/', new ProfileController().create);
  app.put('/:id', new ProfileController().update);
  app.delete('/:id', new ProfileController().delete);

  return app;
}; // Necessário configurar os validators e adicionar rotas de acordo com o projeto
