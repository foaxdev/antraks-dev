'use strict';

(function () {
  let QUANTITY_TO_SHOW = 6;

  let elDevicesIframe = document.querySelector('#devices').querySelector('iframe');
  let elEventsIframe = document.querySelector('#events').querySelector('iframe');

  let elEventsTable;
  let elTableRowTemplate = document.querySelector('#table__row').content.querySelector('tr');

  let setQuantityOfDevicePages = function () {
    let elPaginationQuantityOfAll = document.querySelector('#devices').querySelector('.pagination__page--all');
    elPaginationQuantityOfAll.innerText = Math.ceil(window.data.arrDevicesData.length / QUANTITY_TO_SHOW);
  };

  let setQuantityOfEventsPages = function () {
    let elPaginationQuantityOfAll = document.querySelector('#events').querySelector('.pagination__page--all');
    elPaginationQuantityOfAll.innerText = Math.ceil(window.data.arrEventsData.length / QUANTITY_TO_SHOW);
  };

  let clearEvents = function () {
    let elEventsTable = elEventsIframe.contentDocument.body.querySelector('table');
    let elsEventsTableRow = elEventsTable.querySelectorAll('.table__row');

    for (let i = elsEventsTableRow.length - 1; i > 0; i--) {
      elsEventsTableRow[i].remove();
    }
  };

  let createEventRowElement = function (template, evt) {
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

  let updateEvents = function (deviceType) {
    clearEvents();

    let events = 0;
    for (let i = 0; i < window.data.arrEventsData.length; i++) {
      if (window.data.arrEventsData[i].deviceType.toString() === deviceType) {
        window.utils.addElementToDom(elEventsTable.querySelector('tbody'), createEventRowElement(elTableRowTemplate, window.data.arrEventsData[i]));
        events++;
      }
    }
  };

  let addEventsListenersForDevices = function () {
    let elDevicesTable = elDevicesIframe.contentDocument.body.querySelector('table');
    let elsDevicesTableRow = elDevicesTable.querySelectorAll('.table__row');

    elsDevicesTableRow.forEach(function (elDeviceTableRow, index) {
      if (index !== 0) {
        elDeviceTableRow.addEventListener('click', function () {
          updateEvents(elDeviceTableRow.querySelectorAll('.table__cell')[1].innerText);
        });
      }
    });
  };

  elEventsIframe.addEventListener('load', function () {
    elEventsTable = elEventsIframe.contentDocument.body.querySelector('table');
    let elsEventsTableRow = elEventsTable.querySelectorAll('.table__row');

    for (let i = elsEventsTableRow.length - 1; i > QUANTITY_TO_SHOW; i--) {
      elsEventsTableRow[i].remove();
    }
  });

  elDevicesIframe.addEventListener('load', function () {
    let elDevicesTable = elDevicesIframe.contentDocument.body.querySelector('table');
    let elsDevicesTableRow = elDevicesTable.querySelectorAll('.table__row');

    for (let i = elsDevicesTableRow.length - 1; i > QUANTITY_TO_SHOW; i--) {
      elsDevicesTableRow[i].remove();
    }

    setQuantityOfDevicePages();
    setQuantityOfEventsPages();
    addEventsListenersForDevices();
  });
})();
