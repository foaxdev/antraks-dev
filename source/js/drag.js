'use strict';

(function () {
  let elsDraggableElements = document.querySelectorAll('.filters__wrap');
  let elFiltersArea = document.querySelector('.filters');

  elsDraggableElements.forEach(function (elDraggableElement) {
    elDraggableElement.addEventListener('dragstart', function (evt) {
      evt.dataTransfer.setData("text", evt.target.id);
    });
  });

  elFiltersArea.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  elFiltersArea.addEventListener('drop', function (evt) {
    evt.preventDefault();
    let data = evt.dataTransfer.getData("text");
    if (evt.target.classList.contains('filters')) {
      evt.target.appendChild(document.getElementById(data));
    }
  });
})();
