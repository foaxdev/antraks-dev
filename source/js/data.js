'use strict';

(function () {
  let DEVICES_QUANTITY = 50;
  let EVENTS_QUANTITY = 260;
  let SETTINGS_QUANTITY = 30;
  let DEVICES_TYPE_QUANTITY = 10;
  let LOCATIONS_QUANTITY = 15;

  let createDevicesData = function () {
    let arrResult = [];

    for (let i = 0; i < DEVICES_QUANTITY; i++) {
      arrResult.push({
        'name': i,
        'type': window.utils.generateRandomNumber(DEVICES_TYPE_QUANTITY, 1),
        'location': window.utils.generateRandomNumber(LOCATIONS_QUANTITY, 1)
      });
    }

    return arrResult;
  };

  let createEventsData = function () {
    let arrResult = [];

    for (let i = 0; i < EVENTS_QUANTITY; i++) {
      arrResult.push({
        'type': 'Событие ' + i,
        'deviceType': window.utils.generateRandomNumber(DEVICES_QUANTITY, 1),
        'time': '05:17',
        'i1': {
          'max': '100',
          'min': '10'
        },
        'i2': {
          'max': '10 000',
          'min': '20'
        },
        'i3': {
          'max': '100',
          'min': '10'
        },
        'u1': {
          'max': '10 000',
          'min': '20'
        },
        'u2': {
          'max': '100',
          'min': '10'
        },
        'u3': {
          'max': '10 000',
          'min': '20'
        }
      });
    }

    return arrResult;
  };

  let createSettingsData = function () {
    let arrResult = [];

    for (let i = 0; i < SETTINGS_QUANTITY; i++) {
      arrResult.push({
        'column1': 'Текст ' + (i + 1),
        'column2': 'Текст ' + (i + 2)
      });
    }

    return arrResult;
  };

  let arrDevicesData = createDevicesData();
  let arrEventsData = createEventsData();
  let arrSettingsData = createSettingsData();

  window.data = {
    arrDevicesData: arrDevicesData,
    arrEventsData: arrEventsData,
    arrSettingsData: arrSettingsData
  };
})();
