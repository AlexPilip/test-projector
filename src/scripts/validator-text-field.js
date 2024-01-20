class TextValidator {
  constructor(container) {
    this.container = container
    this.TEXT_LENGTH = 10
    this.initHandler()
  }

  initHandler() {
    this.container.addEventListener('input', () => {
      if (this.TEXT_LENGTH < this.container.value.length) {
        this.container.parentElement.classList.add('no-valid')
      } else {
        this.container.parentElement.classList.remove('no-valid')
      }
    })
  }
}

export default function initTextValidator(fragment = document) {
  fragment.querySelectorAll('.input-field-text').forEach((el) => new TextValidator(el))
}
