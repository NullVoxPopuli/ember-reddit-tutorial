import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

const MirageSubreddit = Model.extend({
  owner: belongsTo('user', { inverse: 'ownedSubreddits' }),

  posts: hasMany('post'),
  subscribers: hasMany('user', { inverse: 'favoriteSubs' }),
});

export default MirageSubreddit;
