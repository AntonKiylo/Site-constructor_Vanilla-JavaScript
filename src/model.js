import { TitleBlock, ImageBlock, TextColumnsBlock, TextBlock } from './classes/blocks'
import { css } from './utils'

const text = "Block form: enter any paired tag in a 'tag input', value for a tag content, and styles<br>Image form: enter 'img' in a 'tag input', image source in a 'value input', and styles."

export const model = [
  new TitleBlock('Pure JavaScript Website Constructor', {
    tag: 'h3',
    styles: css({
      background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(164,215,255,1) 0%, rgba(0,151,200,1) 0%, rgba(0,89,108,1) 100%)',
      color: '#fff',
      'text-align': 'center',
      height: '130px',
      'align-items': 'center',
    }) 
    
  }),

  new TextBlock(text, {
    tag: 'p',
    styles: css({
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      'font-size': '25px',
      color: '#fff',
      padding: '1rem',
      'text-align': 'center',
    })
  }),

  new TextBlock("Push the 'Create' button and see what happen", {
    tag: 'p',
    styles: css({
      background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(164,215,255,1) 0%, rgba(0,151,200,1) 0%, rgba(0,89,108,1) 100%)',
      color: '#fff',
      'text-align': 'center',
      padding: '1rem',
      'align-items': 'center',
      'font-size': '25px'
    })
  })
]