import Component, { tracked } from '@glimmer/component'
import QRious from 'qrious'

export default class QriousBase extends Component {
  @tracked args: QRiousOptions

  private _options: QRiousOptions = {
    background: 'white',
    backgroundAlpha: 1,
    foreground: 'black',
    foregroundAlpha: 1,
    level: 'H',           // L, M, Q, H
    padding: null,
    mime: 'image/png',
    size: 100,
    value: 'https://github.com/c0urg3tt3/glimmer-qrious'
  }

  @tracked('args')
  get options(): QRiousOptions {
    const _options = this._options

    const {
      background = _options.background,
      backgroundAlpha = _options.backgroundAlpha,
      foreground = _options.foreground,
      foregroundAlpha = _options.foregroundAlpha,
      level = _options.level,
      padding = _options.padding,
      mime = _options.mime,
      size = _options.size,
      value  = _options.value
    } = this.args

    return { background, backgroundAlpha, foreground, foregroundAlpha, level, padding, mime, size, value }
  }

  public getQrious(options: QRiousOptions) {
    return new QRious(options)
  }
}

export interface QRiousOptions {
  background: string,
  backgroundAlpha: number,
  foreground: string,
  foregroundAlpha: number,
  level: string,           // L, M, Q, H
  padding: number | null,
  mime: string,
  size: number,
  value: string,
  alt?: any,
  title?: any,
  element?: any
}
