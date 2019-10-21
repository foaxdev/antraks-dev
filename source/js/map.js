'use strict';

(function () {
  ymaps.ready(init);
  function init() {
    let elMap = document.querySelector(".map__image-wrap");
    elMap.classList.toggle("map__image--hide");

    let elInteractiveMap = document.querySelector(".map__interactive");
    elInteractiveMap.classList.toggle("map__interactive--show");

    let myMap = new ymaps.Map("map", {
        center: [59.939300, 30.329350],
        zoom: 16,
        controls: []
      }, {
        searchControlProvider: "yandex#search"
      }),

      MyIconContentLayout = new ymaps.templateLayoutFactory.createClass(
        "<div style='color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>"
      )
  }
})();
