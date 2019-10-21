'use strict';

(function () {
  let elsButtonClose = document.querySelectorAll('.controls__button--close');
  let elsButtonMax = document.querySelectorAll('.controls__button--max');
  let elsButtonMin = document.querySelectorAll('.controls__button--min');

  let elMinFiltersArea = document.querySelector('.min-filters');
  let elFiltersArea = document.querySelector('.filters');

  elsButtonClose.forEach(function (elButtonClose) {
    elButtonClose.addEventListener('click', function () {
      elButtonClose.parentElement.parentElement.parentElement.remove();
    });
  });

  let maximizeWindow = function (elWindow, elButton) {
    elWindow.classList.add('filters__wrap--max');
    elWindow.classList.remove('filters__wrap--min');
    elButton.classList.add('controls__button--min-back');
    elButton.previousElementSibling.classList.remove('controls__button--max-back');
    elFiltersArea.appendChild(elWindow);
  };

  let minimizeWindowBack = function (elWindow, elButton) {
    elWindow.classList.remove('filters__wrap--max');
    elButton.classList.remove('controls__button--min-back');
  };

  elsButtonMax.forEach(function (elButtonMax) {
    elButtonMax.addEventListener('click', function () {
      if (elButtonMax.parentElement.parentElement.parentElement.classList.contains('filters__wrap--max')) {
        minimizeWindowBack(elButtonMax.parentElement.parentElement.parentElement, elButtonMax);
      } else {
        maximizeWindow(elButtonMax.parentElement.parentElement.parentElement, elButtonMax);
      }
    });
  });

  let minimizeWindow = function (elWindow, elButton) {
    elWindow.classList.add('filters__wrap--min');
    elWindow.classList.remove('filters__wrap--max');
    elButton.nextElementSibling.classList.remove('controls__button--min-back');
    elMinFiltersArea.appendChild(elWindow);
    elButton.classList.add('controls__button--max-back');
  };

  let maximizeWindowBack = function (elWindow, elButton) {
    elWindow.classList.remove('filters__wrap--min');
    elFiltersArea.appendChild(elWindow);
    elButton.classList.remove('controls__button--max-back');
  };

  elsButtonMin.forEach(function (elButtonMin) {
    elButtonMin.addEventListener('click', function () {
      if (elButtonMin.parentElement.parentElement.parentElement.classList.contains('filters__wrap--min')) {
        maximizeWindowBack(elButtonMin.parentElement.parentElement.parentElement, elButtonMin);
      } else {
        minimizeWindow(elButtonMin.parentElement.parentElement.parentElement, elButtonMin);
      }
    });
  });
})();
