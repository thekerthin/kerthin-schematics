import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { ValueObjectOptions } from './value-object.schema';

export function main(options: ValueObjectOptions): Rule {
  const filesDirectory = options?.directory;

  return mergeWith(apply(url('./files'), [
    template({
      ...strings,
      ...options,
    }),
    move(filesDirectory)
  ]));
}
