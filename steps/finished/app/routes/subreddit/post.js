import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RSubredditPostRoute extends Route {
  @service store;

  async model({ post: postId } /* : Params */) {
    let post = await this.store.findRecord('post', postId, { include: 'author' });

    return { post };
  }
}
