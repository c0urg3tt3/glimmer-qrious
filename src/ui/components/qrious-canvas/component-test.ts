import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

const expectedSrc = "data:image/png;base64,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"

module('Component: qrious-canvas', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<qrious-canvas @value="https://github.com/c0urg3tt3/glimmer-qrious" @alt="qr code" />`);
    const canvas = this.containerElement.querySelector('canvas')

    assert.ok(canvas, "is a canvas");
    assert.ok(canvas.classList.contains("qrious-canvas"), "with a 'qrious-canvas' class");
    assert.equal(canvas.getAttribute('title'), "qr code", "and a 'title' attribute");
    assert.equal(canvas.toDataURL(), expectedSrc, "and a valid dataURL value");
  });
});
