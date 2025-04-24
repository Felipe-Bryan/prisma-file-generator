export function interfaceTemplate(modelName: string, fields: { fieldName: string; fieldType: string }[]) {
  let name = modelName.charAt(0).toUpperCase() + modelName.slice(1);
  let line = `export interface ${name}Type {`;

  fields.forEach((field) => {
    const fieldName = field.fieldName;
    let fieldType = field.fieldType.replace(/[\[\]]/g, '').toLowerCase();
    const isArray = field.fieldType.includes('[') && field.fieldType.includes(']');
    const isOptional = field.fieldType.includes('?');
    const isNullable = field.fieldType.includes('| null') || field.fieldType.includes('| undefined');

    if (fieldType === 'datetime') {
      fieldType = 'Date';
    } else if (fieldType === 'int') {
      fieldType = 'number';
    } else if (fieldType === 'decimal') {
      fieldType = 'number';
    } else if (fieldType === 'bigint') {
      fieldType = 'number';
    } else if (fieldType === 'float') {
      fieldType = 'number';
    } else if (fieldType === 'int[]') {
      fieldType = 'number[]';
    } else if (fieldType === 'decimal[]') {
      fieldType = 'number[]';
    } else if (fieldType === 'bigint[]') {
      fieldType = 'number[]';
    } else if (fieldType === 'float[]') {
      fieldType = 'number[]';
    }

    if (isArray) {
      line += `\n  ${fieldName}: ${fieldType}${isOptional ? ' | undefined' : ''}[];`;
    } else if (isNullable) {
      line += `\n  ${fieldName}: ${fieldType}${isOptional ? ' | undefined' : ''};`;
    } else {
      line += `\n  ${fieldName}: ${fieldType}${isOptional ? ' | undefined' : ''};`;
    }
  });

  line += '\n}';

  return line;
}
