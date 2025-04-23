import Handlebars from 'handlebars';
import fs from 'fs-extra';
import path from 'path';
import { configs } from '../configs';

interface GenerateProps {
  modelName: string;
  templateContent: string;
  fileFolder: 'repositories' | 'controllers' | 'routes' | 'useCases' | 'types';
  fileName: string;
}

function compileTemplate(props: GenerateProps) {
  const template = Handlebars.compile(props.templateContent);

  const modelName = props.modelName;

  return template({ modelName });
}

export function generateContent(props: GenerateProps) {
  const content = compileTemplate(props);

  const outputPath = path.join(
    __dirname,
    `${configs.outputPath}/${props.modelName}/${props.fileFolder}/${props.fileName}.ts`
  );

  fs.outputFileSync(outputPath, content);

  console.log(`Arquivo gerado: ${props.fileName}.ts`);
}
