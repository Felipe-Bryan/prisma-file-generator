import path from 'path';
import { readSchema, parseSchema } from './parser';
import { generateContent } from './functions/generateContent';
import { repositoryTemplate } from './templates/repositoryTemplate';
import { createUseCaseTemplate } from './templates/create-usecaseTemplate';
import { controllerTemplate } from './templates/controllerTemplate';
import { routerTemplate } from './templates/routerTemplate';
import { deleteUsecaseTemplate } from './templates/delete-usecaseTemplate';
import { getByIdUseCaseTemplate } from './templates/get-by-id-usecaseTemplate';
import { listUsecaseTemplate } from './templates/list-usecaseTemplate';
import { updateUsecaseTemplate } from './templates/update-usecaseTemplate';
import { interfaceTemplate } from './templates/interfaceTemplate';
import { configs } from './configs';

export const generateFiles = (schemaFile: string) => {
  const schemaContent = readSchema(schemaFile);
  const models = parseSchema(schemaContent);

  models.forEach((model) => {
    generateContent({
      modelName: model.modelName,
      templateContent: repositoryTemplate(
        model.modelName,
        model.modelName.charAt(0).toLowerCase() + model.modelName.slice(1)
      ),
      fileFolder: 'repositories',
      fileName: `${model.modelName}.repository`,
    });

    generateContent({
      modelName: model.modelName,
      templateContent: controllerTemplate,
      fileFolder: 'controllers',
      fileName: `${model.modelName}.controller`,
    });

    generateContent({
      modelName: model.modelName,
      templateContent: routerTemplate,
      fileFolder: 'routes',
      fileName: `${model.modelName}.router`,
    });

    generateContent({
      modelName: model.modelName,
      templateContent: createUseCaseTemplate,
      fileFolder: `useCases`,
      fileName: `create-${model.modelName}.useCase`,
    });

    generateContent({
      modelName: model.modelName,
      templateContent: deleteUsecaseTemplate,
      fileFolder: `useCases`,
      fileName: `delete-${model.modelName}.useCase`,
    });

    generateContent({
      modelName: model.modelName,
      templateContent: getByIdUseCaseTemplate,
      fileFolder: `useCases`,
      fileName: `get-${model.modelName}-by-id.useCase`,
    });

    generateContent({
      modelName: model.modelName,
      templateContent: listUsecaseTemplate,
      fileFolder: `useCases`,
      fileName: `list-${model.modelName}.useCase`,
    });

    generateContent({
      modelName: model.modelName,
      templateContent: updateUsecaseTemplate,
      fileFolder: `useCases`,
      fileName: `update-${model.modelName}.useCase`,
    });

    generateContent({
      modelName: model.modelName,
      templateContent: interfaceTemplate(model.modelName, model.fields),
      fileFolder: `types`,
      fileName: `${model.modelName}Type`,
    });
  });
};

const schemaFilePath = path.join(__dirname, configs.schemaPath);

generateFiles(schemaFilePath);
