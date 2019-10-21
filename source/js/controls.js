'use strict';

(function () {
  let elsButtonClose = document.querySelectorAll('.controls__button--close');

  elsButtonClose.forEach(function (elButtonClose) {
    elButtonClose.addEventListener('click', function () {
      elButtonClose.parentElement.parentElement.parentElement.remove();
    });
  });
})();
