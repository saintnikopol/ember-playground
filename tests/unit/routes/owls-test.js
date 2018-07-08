import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | owls', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:owls');
    assert.ok(route);
  });
});
