import Handlebars from 'handlebars';
import fs from 'fs-extra';
import path from 'path';

interface GenerateProps {
  modelName: string;
  templateContent: string;
  fileFolder: 'repositories' | 'controllers' | 'routes' | 'useCases';
  fileName: string;
}

function compileTemplate(props: GenerateProps) {
  const template = Handlebars.compile(props.templateContent);

  const modelName = props.modelName;

  return template({ modelName });
}

export function generateContent(props: GenerateProps) {
  const content = compileTemplate(props);

  // let fileName = '';

  // if (props.fileFolder === 'useCases') {
  //   fileName = `${props.fileName}-${props.modelName}-useCase`;
  // } else {
  //   fileName = `${props.modelName}.${props.fileName}`;
  // }

  const outputPath = path.join(
    __dirname,
    `../../generated/${props.modelName}/${props.fileFolder}/${props.fileName}.ts`
  );

  fs.outputFileSync(outputPath, content);

  console.log(`Arquivo gerado: ${props.fileName}.ts`);
}
