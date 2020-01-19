import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

const SubredditFactory = Factory.extend({
  owner: association(),

  id() {
    return faker.commerce
      .productName()
      .toLowerCase()
      .replace(/\s/g, '_');
  },


  afterCreate(subreddit, _server) {
    subreddit.update({ name: subreddit.id });
  }
})

export default SubredditFactory;
