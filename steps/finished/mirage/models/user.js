import { Model, hasMany } from 'ember-cli-mirage';

const MirageUser = Model.extend({
  favoriteSubs: hasMany('subreddit', { inverse: 'subscribers' }),
  ownedSubreddits: hasMany('subreddit', { inverse: 'owner' }),

  comments: hasMany('comment'),
  posts: hasMany('post'),
})

export default MirageUser;
