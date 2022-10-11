const handleOnLoad = () => {
  {
    const buttonGroupElement = document.querySelector('.btn-group-vertical');

    buttonGroupElement.classList.remove('btn-group-vertical');
  }
  {
    const jumbotronElement = document.querySelector('.jumbotron');

    jumbotronElement.classList.add('bg-secondary', 'd-flex', 'flex-column');

    const [h1Element, firstTextElement, , secondTextElement, anchorElement] =
      jumbotronElement.children;

    h1Element.classList.add('text-right', 'text-white');
    firstTextElement.classList.add('text-right', 'text-white');
    secondTextElement.classList.add('text-right', 'text-white');
    anchorElement.classList.add('btn-success', 'align-self-end');
  }
  {
    const parentRowElement = document.querySelector('div.row:nth-child(6)');
    const [headerElement, ...cardsElements] = parentRowElement.children;

    parentRowElement.textContent = '';

    cardsElements[0].children[0].children[1].children[2].classList.remove(
      'btn-primary'
    );
    cardsElements[0].children[0].children[1].children[2].classList.add(
      'btn-success'
    );

    parentRowElement.appendChild(headerElement);
    parentRowElement.appendChild(cardsElements[3]);
    parentRowElement.appendChild(cardsElements[0]);
    parentRowElement.appendChild(cardsElements[2]);
    parentRowElement.appendChild(cardsElements[1]);
  }
  {
    const listGroupElement = document.querySelector('.list-group');

    listGroupElement.children[0].classList.remove('active');

    const fourthElement = document.createElement('li');
    fourthElement.classList.add('list-group-item', 'active');
    fourthElement.textContent = 'Quarto item';

    listGroupElement.appendChild(fourthElement);

    const fifthElement = document.createElement('li');
    fifthElement.classList.add('list-group-item');
    fifthElement.textContent = 'Quinto item';

    listGroupElement.appendChild(fifthElement);
  }
};

window.addEventListener('load', handleOnLoad);
