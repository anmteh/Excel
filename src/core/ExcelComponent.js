import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  // returns component layout
  toHTML() {
    return ''
  }

  // initialize default listeners for every component
  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
  }
}
