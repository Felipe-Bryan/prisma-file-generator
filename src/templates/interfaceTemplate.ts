export function interfaceTemplate(modelName: string, fields: { fieldName: string; fieldType: string }[]) {
  let name = modelName.charAt(0).toUpperCase() + modelName.slice(1);
  let line = `export interface ${name}Type {`;

  fields.forEach((field) => {
    const fieldName = field.fieldName;
    let fieldType = field.fieldType.replace(/[\[\]]/g, '').toLowerCase();
    const isArray = field.fieldType.includes('[') && field.fieldType.includes(']');
    const isOptional = field.fieldType.includes('?');
    const isNullable = field.fieldType.includes('| null') || field.fieldType.includes('| undefined');

    let baseType = fieldType.replace(/[\[\]?]/g, '');

    if (baseType === 'datetime') baseType = 'Date';
    else if (['int', 'decimal', 'bigint', 'float'].includes(baseType)) baseType = 'number';

    let finalType = isArray ? `${baseType}[]` : baseType;
    if (isOptional) finalType += ' | undefined';
    if (isNullable) finalType += ' | null';

    line += `\n  ${fieldName}: ${finalType};`;
  });

  line += '\n}';

  return line;
}
