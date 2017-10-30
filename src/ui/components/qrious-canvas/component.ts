import { tracked } from '@glimmer/component'
import QriousBase, { QRiousOptions } from '../qrious-base/component'

export default class QriousCanvas extends QriousBase {
  didInsertElement() {
    const options: QRiousOptions = {
      ...super.options,
      element: this.element
    }

    this.getQrious(options)
  }
}
