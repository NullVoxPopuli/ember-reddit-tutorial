import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr name;
  @attr karma;

  @hasMany('comment') comments;
  @hasMany('subreddit', { inverse: 'owner' }) ownedSubreddits;
  @hasMany('subreddit', { inverse: 'subscribers' }) favoriteSubreddits;
}
