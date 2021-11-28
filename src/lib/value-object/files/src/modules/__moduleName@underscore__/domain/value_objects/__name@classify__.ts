import { ValueObject, DomainValueObject } from '@kerthin/domain';

@ValueObject()
export class <%= classify(name) %> extends DomainValueObject {}
