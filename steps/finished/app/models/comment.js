import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr text;
  @attr submittedAt;

  @belongsTo('user') user;
  @belongsTo('post') post;
  @belongsTo('comment', { inverse: 'comments' }) parentComment;

  @hasMany('comment', { inverse: 'parentComment' }) comments;
}
