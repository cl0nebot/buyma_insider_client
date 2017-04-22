import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/form/-modal-confirm-button', 'Integration | Component | ui/form/ modal confirm button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/form/-modal-confirm-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/form/-modal-confirm-button}}
      template block text
    {{/ui/form/-modal-confirm-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
