import { tracked } from '@glimmer/component'
import QriousBase from '../qrious-base/component'

export default class QriousImg extends QriousBase {
  @tracked('options')
  get dataURL() {
    return this.getQrious(this.options).toDataURL()
  }
}
