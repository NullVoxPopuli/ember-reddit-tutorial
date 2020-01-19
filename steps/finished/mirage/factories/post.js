import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

const PostFactory = Factory.extend({
  author: association(),
  subreddit: association(),

  title() {
    return faker.company.catchPhrase();
  },

  submittedAt() {
    return faker.date.past(1);
  },

  votes() {
    return faker.random.number(1000);
  },

  text() {
    return faker.lorem.paragraphs(5);
  }
})

export default PostFactory;
