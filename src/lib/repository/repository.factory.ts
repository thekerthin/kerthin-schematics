import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { RepositoryOptions } from './repository.schema';

export function main(options: RepositoryOptions): Rule {
  const filesDirectory = options?.directory || '';

  return mergeWith(apply(url('./files'), [
    template({
      ...strings,
      ...options,
    }),
    move(filesDirectory)
  ]));
}
