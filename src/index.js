import '@/styles/index.scss'
import initCollection from './scripts/add-collection'
import initButtonBack from './scripts/button-back'
import initPagination from './scripts/pagination'
import initSelect from './scripts/select'
import initTextValidator from './scripts/validator-text-field'

initTextValidator()
initButtonBack()
initSelect()

document.addEventListener('DOMContentLoaded', () => {
  initPagination()
  initCollection()
})
