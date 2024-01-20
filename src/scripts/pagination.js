export default function initPagination() {
  const cardsPerPage = window.innerWidth < 590 ? 6 : 8
  const cardsContainer = document.querySelector('.cards__container')
  const cards = Array.from(document.querySelectorAll('.card'))
  cards.forEach((el, index) => {
    el.id = `id-${index}`
  })
  const paginationContainer = document.querySelector('.pagination__container')
  const totalPages = Math.ceil(cards.length / cardsPerPage)
  const urlParams = new URLSearchParams(window.location.search)
  const currentPage = parseInt(urlParams.get('page')) || 1
  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = startIndex + cardsPerPage
  const currentCards = cards.slice(startIndex, endIndex)
  cardsContainer.innerHTML = ''
  currentCards.forEach((card) => {
    cardsContainer.appendChild(card.cloneNode(true))
  })

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement('li')
    const pageLink = document.createElement('a')
    pageLink.href = `index.html?page=${i}`
    pageLink.textContent = i
    pageLink.classList.add('pagination__link')
    pageItem.classList.add('pagination__item')
    if (i === currentPage) {
      pageItem.classList.add('active')
    }
    pageItem.appendChild(pageLink)
    paginationContainer.appendChild(pageItem)
  }
}
