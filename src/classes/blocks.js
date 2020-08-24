import { col, row } from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Error')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {styles} = this.options
    return row(col(`
    <h1>${this.value}</h1>
  `), styles)
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const html = `<${this.options.tag} src="${this.value}" alt="${this.options.alt}" />`
    return row(html, this.options.styles)
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`
      <${this.options.tag}>${this.value}</${this.options.tag}>
    `), this.options.styles)
  }
}