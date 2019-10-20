'use strict';

(function () {
  let elTableRowTemplate = document.querySelector('#table__row').content.querySelector('tr');
  let elSettingsTable = document.querySelector('.table');

  let createDeviceRowElement = function (template, setting) {
    var elTableRow = template.cloneNode(true);

    elTableRow.querySelector('.table__cell:nth-child(1)').innerText = setting.column1;
    elTableRow.querySelector('.table__cell:nth-child(2)').innerText = setting.column2;

    return elTableRow;
  };

  window.data.arrSettingsData.forEach(function (setting) {
    window.utils.addElementToDom(elSettingsTable.querySelector('tbody'), createDeviceRowElement(elTableRowTemplate, setting));
  });
})();
