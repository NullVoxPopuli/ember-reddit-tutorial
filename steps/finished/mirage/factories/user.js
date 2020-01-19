import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

const UserFactory = Factory.extend({
  name() {
    return faker.name.firstName();
  },

  karma() {
    return faker.random.number(200);
  }
});

export default UserFactory;
