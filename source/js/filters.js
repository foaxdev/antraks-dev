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

  let updateEvents = function (deviceType) {
    clearEvents();

    let events = 0;
    for (let i = 0; i < window.data.arrEventsData.length; i++) {
      if (window.data.arrEventsData[i].deviceType.toString() === deviceType && events < 6) {
        window.utils.addElementToDom(elEventsTable.querySelector('tbody'), window.createEventRowElement(elTableRowTemplate, window.data.arrEventsData[i]));
        events++;
      }
    }
  };

  let removeSelectedStatusFromAllDeviceRows = function () {
    let elDevicesTable = elDevicesIframe.contentDocument.body.querySelector('table');
    let elsDevicesTableRow = elDevicesTable.querySelectorAll('.table__row');
    elsDevicesTableRow.forEach(function (elDeviceTableRow) {
      elDeviceTableRow.classList.remove('table__row--selected');
    });
  };

  let addEventsListenersForDevices = function () {
    let elDevicesTable = elDevicesIframe.contentDocument.body.querySelector('table');
    let elsDevicesTableRow = elDevicesTable.querySelectorAll('.table__row');

    elsDevicesTableRow.forEach(function (elDeviceTableRow, index) {
      if (index !== 0) {
        elDeviceTableRow.addEventListener('click', function () {
          removeSelectedStatusFromAllDeviceRows();
          elDeviceTableRow.classList.add('table__row--selected');
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
    setQuantityOfDevicePages();
    addEventsListenersForDevices();
  });

  elDevicesIframe.addEventListener('load', function () {
    let elDevicesTable = elDevicesIframe.contentDocument.body.querySelector('table');
    let elsDevicesTableRow = elDevicesTable.querySelectorAll('.table__row');

    for (let i = elsDevicesTableRow.length - 1; i > QUANTITY_TO_SHOW; i--) {
      elsDevicesTableRow[i].remove();
    }
    setQuantityOfEventsPages();
  });
})();
