export const routerTemplate = `
import { Router } from 'express';
import { {{modelName}}Controller } from '../controllers/{{modelName}}.controller';

export const {{modelName}}Routes = () => {
  const app = Router();

  app.get('/', new {{modelName}}Controller().list);
  app.get('/:id', new {{modelName}}Controller().get);
  app.post('/', new {{modelName}}Controller().create);
  app.put('/:id', new {{modelName}}Controller().update);
  app.delete('/:id', new {{modelName}}Controller().delete);

  return app;
}; // Necessário configurar os validators e adicionar rotas de acordo com o projeto
`;
