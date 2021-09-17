import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | reading-time', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders reading-time text', async function (assert) {
    this.set('value', 'test');
    await render(hbs`{{get (reading-time this.value) 'text'}}`);
    assert.deepEqual(this.element.textContent.trim(), '1 min read');

    this.set(
      'value',
      [...Array(1000).keys()].reduce((acc) => acc.concat('value '), '')
    );
    assert.deepEqual(this.element.textContent.trim(), '5 min read');
  });
});
