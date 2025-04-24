
import { Router } from 'express';
import { CourseController } from '../controllers/Course.controller';

export const CourseRoutes = () => {
  const app = Router();

  app.get('/', new CourseController().list);
  app.get('/:id', new CourseController().get);
  app.post('/', new CourseController().create);
  app.put('/:id', new CourseController().update);
  app.delete('/:id', new CourseController().delete);

  return app;
}; // Necessário configurar os validators e adicionar rotas de acordo com o projeto
