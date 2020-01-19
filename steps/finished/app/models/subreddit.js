import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class SubredditModel extends Model {
  @attr name;
  @attr description;

  @hasMany('user', { inverse: 'favoriteSubreddits' }) subscribers;
  @hasMany('post') posts;
  @belongsTo('user', { inverse: 'ownedSubreddits' }) owner;
}
