import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @attr title;
  @attr submittedAt;
  @attr votes;
  @attr text;

  @belongsTo('user', { async: false }) author;
  @belongsTo('subreddit', { async: false }) subreddit;
}
