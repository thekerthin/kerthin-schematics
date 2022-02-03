import { Event } from '@kerthin/domain';

export class <%= classify(name) %>Event extends Event {
  context = '<%= dasherize(moduleName) %>';
  action = '<%= dasherize(action) %>';
  createdAt = new Date();
}
