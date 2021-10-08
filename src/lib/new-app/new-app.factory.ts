import { apply, mergeWith, Rule, template, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { NewAppOptions } from './new-app.schema';

export function main(options: NewAppOptions): Rule {
  return mergeWith(apply(url('./files'), [
    template({
      ...strings,
      ...options,
    }),
  ]));
}
