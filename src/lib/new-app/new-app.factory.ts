import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { applySpec, compose, ifElse, prop, propOr } from 'ramda';
import { isNotEmptyOrNil } from '@kerthin/utils';
import { NewAppOptions } from './new-app.schema';
import { AUTHOR, VERSION } from '../defaults';

const defaultValues = applySpec<NewAppOptions>({
  name: prop('name'),
  db: prop('db'),
  author: propOr(AUTHOR, 'author'),
  version: propOr(VERSION, 'version'),
  directory: ifElse(
    compose(isNotEmptyOrNil, prop('directory')),
    prop('directory'),
    prop('name')
  )
});

export function main(options: NewAppOptions): Rule {
  const defaultOptions = defaultValues(options);
  const filesDirectory = defaultOptions.directory;

  return mergeWith(apply(url('./files'), [
    template({
      ...strings,
      ...defaultOptions,
    }),
    move(filesDirectory)
  ]));
}
