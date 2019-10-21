'use strict';

(function () {
  let elsDraggableElements = document.querySelectorAll('.filters__wrap');
  let elFiltersArea = document.querySelector('.filters');

  let isTransferAreaCorrect = false;

  elsDraggableElements.forEach(function (elDraggableElement) {
    elDraggableElement.addEventListener('dragstart', function (evt) {
      evt.dataTransfer.setData("text", evt.target.id);
    });
  });

  elFiltersArea.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('filters')) {
      elFiltersArea.style.backgroundColor = '#D8FFE9';
    } else {
      elFiltersArea.style.backgroundColor = 'transparent';
    }
  });

  elFiltersArea.addEventListener('drop', function (evt) {
    evt.preventDefault();
    let data = evt.dataTransfer.getData("text");
    isTransferAreaCorrect = evt.target.classList.contains('filters');

    if (evt.target.classList.contains('filters')) {
      evt.target.style.backgroundColor = 'transparent';
      evt.target.appendChild(document.getElementById(data));
    }
  });
})();
