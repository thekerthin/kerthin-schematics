import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { AggregateOptions } from './aggregate.schema';

export function main(options: AggregateOptions): Rule {
  const filesDirectory = options?.directory || '';

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
      const [propName, valueObject, isList, isEntity] = rawProperty.split(':');
      return { propName, valueObject, isList: isList === 'true', isEntity: isEntity === 'true' };
    });
}

function importValueObjects(properties) {
  return getProperties(properties)
    .reduce((properties, property) => {
      const valueObjectAlreadyExist = properties
        .some(({ valueObject }) => valueObject === property.valueObject);
      if (valueObjectAlreadyExist) return properties;
      properties.push(property);
      return properties;
    }, [])
    .map(({ valueObject, isEntity }) =>
      `import { ${strings.classify(valueObject)} } from ${isEntity ? `'./${strings.classify(valueObject)}'` : `'./value_objects/${strings.classify(valueObject)}'`};`
    ).join('\n');
}

function addPropValueObjects(properties) {
  return getProperties(properties)
    .map(({ propName, valueObject, isList }) =>
      `  @ValueObjectProp(${isList ? `() => ${valueObject}` : '' })
  ${strings.camelize(propName)}: ${isList ? `Array<${valueObject}>` : `${valueObject}`};`
    ).join('\n\n');
}
