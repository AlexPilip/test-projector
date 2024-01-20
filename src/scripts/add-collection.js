class CardsCollection {
  constructor(container) {
    this.container = container
    this.cardsCollection = this.container.querySelectorAll('.card')
    this.initHandler()
  }

  initHandler() {
    this.checkData()
    this.addCollection()
  }

  addCollection() {
    this.cardsCollection.forEach((el) => {
      el.addEventListener('click', (event) => {
        const elementId = event.currentTarget.id
        localStorage.setItem(elementId, 'added')
        event.currentTarget.classList.add('add-collection')
      })
    })
  }

  checkData() {
    this.cardsCollection.forEach((el) => {
      const elementId = el.id
      if (localStorage.getItem(elementId, 'added') === 'added') {
        el.classList.add('add-collection')
      }
    })
  }
}

export default function initCollection(fragment = document) {
  fragment.querySelectorAll('.cards__container').forEach((el) => new CardsCollection(el))
}
