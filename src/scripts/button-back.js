class ButtonBack {
  constructor(container) {
    this.container = container
    this.initHandler()
  }

  initHandler() {
    this.container.addEventListener('click', () => {
      window.history.back()
    })
  }
}

export default function initButtonBack(fragment = document) {
  fragment.querySelectorAll('.button-back').forEach((el) => new ButtonBack(el))
}
