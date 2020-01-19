import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | r/subreddit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:r/subreddit');
    assert.ok(route);
  });
});
