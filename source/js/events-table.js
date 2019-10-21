'use strict';

(function () {
  let elTableRowTemplate = document.querySelector('#table__row').content.querySelector('tr');
  let elEventsTable = document.querySelector('.table');

  window.data.arrEventsData.forEach(function (evt) {
    window.utils.addElementToDom(elEventsTable.querySelector('tbody'), window.createEventRowElement(elTableRowTemplate, evt));
  });
})();
