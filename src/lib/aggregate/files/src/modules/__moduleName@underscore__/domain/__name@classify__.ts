import { Aggregate, AggregateRoot, ValueObjectProp } from '@kerthin/domain';
<%= importValueObjects(properties) %>

@Aggregate('<%= underscore(name) %>')
export class <%= classify(name) %> extends AggregateRoot {
<%= addPropValueObjects(properties) %>

  public static create<T>(data: T): <%= classify(name) %> {
    return new <%= classify(name) %>(data);
  }
}
