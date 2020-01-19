import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

const MiragePost = Model.extend({
  author: belongsTo('user'),
  subreddit: belongsTo('subreddit'),

  comments: hasMany('comment'),
});

export default MiragePost;
