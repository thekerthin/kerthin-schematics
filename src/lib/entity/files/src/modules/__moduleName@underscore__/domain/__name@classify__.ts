import { DomainEntity, Entity, ValueObjectProp } from '@kerthin/domain';
<%= importValueObjects(properties) %>

@Entity('<%= underscore(name) %>')
export class <%= classify(name) %> extends DomainEntity {
<%= addPropValueObjects(properties) %>

  public static create<T>(data: T): <%= classify(name) %> {
    return new <%= classify(name) %>(data);
  }
}
