'use strict';

(function () {
  let DEVICES_QUANTITY = 50;
  let EVENTS_QUANTITY = 60;
  let SETTINGS_QUANTITY = 30;

  let createDevicesData = function () {
    let arrResult = [];

    for (let i = 0; i < DEVICES_QUANTITY; i++) {
      arrResult.push({
        'name': i,
        'type': 'type ' + (i + 1),
        'location': 'location ' + (i + 2)
      });
    }

    return arrResult;
  };

  let createEventsData = function () {
    let arrResult = [];

    for (let i = 0; i < EVENTS_QUANTITY; i++) {
      arrResult.push({
        'type': 'Событие ' + i,
        'device-type': window.utils.generateRandomNumber(window.data.arrDevicesData.length - 1, 0),
        'time': '05:17',
        'i1': {
          'max': 100,
          'min': 10
        },
        'i2': {
          'max': 10000,
          'min': 20
        },
        'i3': {
          'max': 100,
          'min': 10
        },
        'u1': {
          'max': 10000,
          'min': 20
        },
        'u2': {
          'max': 100,
          'min': 10
        },
        'u3': {
          'max': 10000,
          'min': 20
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
