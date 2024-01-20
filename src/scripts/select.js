export default function initSelect(fragment = document) {
    const customSelectElement = fragment.getElementsByClassName('custom-select');
    const customSelectCount = customSelectElement.length;
    for (let i = 0; i < customSelectCount; i++) {
      const selectElement = customSelectElement[ i ].getElementsByTagName('select')[ 0 ];
      const selectCount = selectElement.length;
      const startIndex = selectElement.dataset.type === 'all-option' ? 0 : 1;
      const selectedElement = document.createElement('DIV');
      selectedElement.setAttribute('class', 'select-selected');
      selectedElement.innerHTML = selectElement.options[ selectElement.selectedIndex ].innerHTML;
      customSelectElement[ i ].classList.add('is-initialized');
      customSelectElement[ i ].appendChild(selectedElement);
      const hiddenElement = document.createElement('DIV');
      hiddenElement.setAttribute('class', 'select-items select-hide');
  
      for (let j = startIndex; j < selectCount; j++) {
        const fakeOption = document.createElement('DIV');
        fakeOption.innerHTML = selectElement.options[ j ].innerHTML;
  
        if (selectElement.selectedIndex === j) {
          fakeOption.classList.add('same-as-selected');
        }
  
        fakeOption.addEventListener('click', (e) => {
          for (let m = 0; m < selectCount; m++) {
            if (selectElement.options[ m ].innerHTML === e.target.innerHTML) {
              selectElement.selectedIndex = m;
              selectedElement.innerHTML = e.target.innerHTML;
              const y = e.target.parentNode.getElementsByClassName('same-as-selected');
              const yl = y.length;
              for (let k = 0; k < yl; k++) {
                y[ k ].removeAttribute('class');
              }
              e.target.setAttribute('class', 'same-as-selected');
              break;
            }
          }
          selectedElement.click();
          selectElement.dispatchEvent(new Event('change'));
        });
        hiddenElement.appendChild(fakeOption);
      }
      customSelectElement[ i ].appendChild(hiddenElement);
      selectedElement.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllSelect(e.target);
        e.target.nextSibling.classList.toggle('select-hide');
        e.target.classList.toggle('select-arrow-active');
      });
    }
  
    function closeAllSelect(elmnt) {
      const arrNo = [];
      const items = document.getElementsByClassName('select-items');
      const selectedElement = document.getElementsByClassName('select-selected');
      const itemsCount = items.length;
      const selectedElementCount = selectedElement.length;
      for (let i = 0; i < selectedElementCount; i++) {
        if (elmnt === selectedElement[ i ]) {
          arrNo.push(i);
        } else {
          selectedElement[ i ].classList.remove('select-arrow-active');
        }
      }
      for (let i = 0; i < itemsCount; i++) {
        if (arrNo.indexOf(i)) {
          items[ i ].classList.add('select-hide');
        }
      }
    }
  
    document.addEventListener('click', closeAllSelect);
  }