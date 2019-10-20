'use strict';

(function () {
  window.utils = {
    generateRandomNumber: function (max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    addElementToDom: function (parentElement, childElement) {
      parentElement.appendChild(childElement);
    }
  };
})();
