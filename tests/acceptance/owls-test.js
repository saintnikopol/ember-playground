import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | owls', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /owls', async function(assert) {
    await visit('/owls');

    assert.equal(currentURL(), '/owls');
  });
});
