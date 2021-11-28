import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { EventOptions } from './event.schema';

export function main(options: EventOptions): Rule {
  console.log('options', options);

  const filesDirectory = options?.directory;

  return mergeWith(apply(url('./files'), [
    template({
      ...strings,
      ...options,
      importValueObjects,
      addPropValueObjects
    }),
    move(filesDirectory)
  ]));
}

function getProperties(properties) {
  return properties
    .split(',')
    .map((rawProperty) => {
      const [propName, valueObject, isList] = rawProperty.split(':');
      return { propName, valueObject, isList: !!isList };
    });
}

function importValueObjects(properties) {
  return getProperties(properties)
    .map(({ valueObject }) =>
      `import { ${strings.classify(valueObject)} } from './value_objects/${strings.classify(valueObject)}';`
    ).join('\n');
}

function addPropValueObjects(properties) {
  return getProperties(properties)
    .map(({ propName, valueObject, isList }) =>
      `  @ValueObjectProp(${isList ? `() => ${valueObject}` : '' })
  ${propName}: ${isList ? `Array<${valueObject}>` : `${valueObject}`};`
    ).join('\n\n');
}
