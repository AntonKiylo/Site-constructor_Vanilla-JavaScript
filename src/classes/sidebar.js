import { TextBlock, ImageBlock } from "./blocks"

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector)
    this.update = update
    
    this.init()
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this))
    this.$el.innerHTML = this.template
  }

  addBlock(event) {
    event.preventDefault()

    const type = event.target.name
    const tag = event.target.tag.value
    const value = event.target.value.value
    const styles = event.target.styles.value
    
    const Constructor = type === "Block" ? TextBlock : ImageBlock

    const newBlock = new Constructor(value, {tag, styles})
    
    tag && value ? this.update(newBlock) : alert("Fill all fields, please!")
    
    event.target.tag.value = ''
    event.target.value.value = ''
    event.target.styles.value = ''
  }

  get template() {
    return [
      block('Block'),
      block('Image')
    ].join('')
  }
}

function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="tag" placeholder="tag" />
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value" />
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles" />
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Create</button>
      <hr />
    </form>
  `
}

