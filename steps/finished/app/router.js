import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('subreddit', { path: '/r/:subreddit' }, function() {
    this.route('post', { path: '/:post' });
  });
  this.route('user', { path: '/u/:username' });
});
