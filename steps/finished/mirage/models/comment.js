import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

const MirageComment = Model.extend({
  author: belongsTo('user'),

  comments: hasMany('comment'),
});

export default MirageComment;
