'use strict';

(function () {
  let elTableRowTemplate = document.querySelector('#table__row').content.querySelector('tr');
  let elEventsTable = document.querySelector('.table');

  let createDeviceRowElement = function (template, event) {
    var elTableRow = template.cloneNode(true);

    elTableRow.querySelector('.table__cell:nth-child(1)').innerText = event.type;
    elTableRow.querySelector('.table__cell:nth-child(2)').innerText = event.time;
    elTableRow.querySelector('.table__cell:nth-child(3)').querySelector('.table__title--max').innerText = event.i1.max;
    elTableRow.querySelector('.table__cell:nth-child(3)').querySelector('.table__title--min').innerText = event.i1.min;
    elTableRow.querySelector('.table__cell:nth-child(4)').querySelector('.table__title--max').innerText = event.i2.max;
    elTableRow.querySelector('.table__cell:nth-child(4)').querySelector('.table__title--min').innerText = event.i2.min;
    elTableRow.querySelector('.table__cell:nth-child(5)').querySelector('.table__title--max').innerText = event.i3.max;
    elTableRow.querySelector('.table__cell:nth-child(5)').querySelector('.table__title--min').innerText = event.i3.min;
    elTableRow.querySelector('.table__cell:nth-child(6)').querySelector('.table__title--max').innerText = event.u1.max;
    elTableRow.querySelector('.table__cell:nth-child(6)').querySelector('.table__title--min').innerText = event.u1.min;
    elTableRow.querySelector('.table__cell:nth-child(7)').querySelector('.table__title--max').innerText = event.u2.max;
    elTableRow.querySelector('.table__cell:nth-child(7)').querySelector('.table__title--min').innerText = event.u2.min;
    elTableRow.querySelector('.table__cell:nth-child(8)').querySelector('.table__title--max').innerText = event.u3.max;
    elTableRow.querySelector('.table__cell:nth-child(8)').querySelector('.table__title--min').innerText = event.u3.min;

    return elTableRow;
  };

  window.data.arrEventsData.forEach(function (event) {
    window.utils.addElementToDom(elEventsTable.querySelector('tbody'), createDeviceRowElement(elTableRowTemplate, event));
  });
})();
