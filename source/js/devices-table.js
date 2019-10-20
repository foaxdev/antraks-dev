'use strict';

(function () {
  let elTableRowTemplate = document.querySelector('#table__row').content.querySelector('tr');
  let elDevicesTable = document.querySelector('.table');

  let createDeviceRowElement = function (template, device) {
    var elTableRow = template.cloneNode(true);

    elTableRow.querySelector('.table__cell:nth-child(1)').innerText = device.name;
    elTableRow.querySelector('.table__cell:nth-child(2)').innerText = device.type;
    elTableRow.querySelector('.table__cell:nth-child(3)').innerText = device.location;

    return elTableRow;
  };

  window.data.arrDevicesData.forEach(function (device) {
    window.utils.addElementToDom(elDevicesTable.querySelector('tbody'), createDeviceRowElement(elTableRowTemplate, device));
  });
})();
