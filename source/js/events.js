'use strict';

(function () {
  window.createEventRowElement = function (template, evt) {
    var elTableRow = template.cloneNode(true);

    elTableRow.querySelector('.table__cell:nth-child(1)').innerText = evt.type;
    elTableRow.querySelector('.table__cell:nth-child(2)').innerText = evt.time;
    elTableRow.querySelector('.table__cell:nth-child(3)').querySelector('.table__title--max').innerText = evt.i1.max;
    elTableRow.querySelector('.table__cell:nth-child(3)').querySelector('.table__title--min').innerText = evt.i1.min;
    elTableRow.querySelector('.table__cell:nth-child(4)').querySelector('.table__title--max').innerText = evt.i2.max;
    elTableRow.querySelector('.table__cell:nth-child(4)').querySelector('.table__title--min').innerText = evt.i2.min;
    elTableRow.querySelector('.table__cell:nth-child(5)').querySelector('.table__title--max').innerText = evt.i3.max;
    elTableRow.querySelector('.table__cell:nth-child(5)').querySelector('.table__title--min').innerText = evt.i3.min;
    elTableRow.querySelector('.table__cell:nth-child(6)').querySelector('.table__title--max').innerText = evt.u1.max;
    elTableRow.querySelector('.table__cell:nth-child(6)').querySelector('.table__title--min').innerText = evt.u1.min;
    elTableRow.querySelector('.table__cell:nth-child(7)').querySelector('.table__title--max').innerText = evt.u2.max;
    elTableRow.querySelector('.table__cell:nth-child(7)').querySelector('.table__title--min').innerText = evt.u2.min;
    elTableRow.querySelector('.table__cell:nth-child(8)').querySelector('.table__title--max').innerText = evt.u3.max;
    elTableRow.querySelector('.table__cell:nth-child(8)').querySelector('.table__title--min').innerText = evt.u3.min;

    return elTableRow;
  };
})();
