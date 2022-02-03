import { Repository } from '@kerthin/domain';
import { <%= classify(entity) %> } from '../domain/<%= classify(entity) %>';

export abstract class <%= classify(name) %>Repository extends Repository<<%= classify(entity) %>> {}
