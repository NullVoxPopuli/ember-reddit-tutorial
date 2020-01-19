import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store; // ember-data

  async model() {
    let subs = await this.store.findAll('subreddit');
    let posts = await this.store.query('post', { include: 'author,subreddit' });

    return {
      subreddits: subs,
      posts,
    };
  }
}
