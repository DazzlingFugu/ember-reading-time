import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | reading-time', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders reading-time without text', async function (assert) {
    this.set('value', undefined);
    await render(hbs`{{reading-time this.value}}`);
    assert.equal(this.element.textContent.trim(), '1 minute');
  });

  test('it renders reading-time text', async function (assert) {
    this.set('value', 'test');
    await render(hbs`{{reading-time this.value}}`);
    assert.equal(this.element.textContent.trim(), '1 minute');

    this.set(
      'value',
      [...Array(1000).keys()].reduce((acc) => acc.concat('value '), '')
    );
    assert.equal(this.element.textContent.trim(), '5 minutes');
  });

  test('it renders reading-time text in japanese', async function (assert) {
    this.set('value', 'test');
    this.set('options', { language: 'ja' });
    await render(hbs`{{reading-time this.value this.options}}`);
    assert.equal(this.element.textContent.trim(), '1 分');

    this.set(
      'value',
      [...Array(1000).keys()].reduce((acc) => acc.concat('value '), '')
    );
    assert.equal(this.element.textContent.trim(), '5 分');
  });
});
