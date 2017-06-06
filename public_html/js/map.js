function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 54.6441727,
      lng: 52.1165615
    },
    scrollwheel: false,
    zoom: 5,
    styles: [{
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": 33
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2e5d4"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c5dac6"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c5c6c6"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e4d7c6"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#fbfaf7"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#acbcc9"
      }]
    }]
  });

  var markerImg = "images/markermap.svg";
  var markerImgMini = "images/markermapmini.svg";

  var MinskLat = {
    lat: 53.883868,
    lng: 27.5249349
  };
  var StolbLat = {
    lat: 53.4824718,
    lng: 26.7337703
  };
  var TomashLat = {
    lat: 51.5535189,
    lng: 23.5920989
  };
  var BrestLat = {
    lat: 52.0873776,
    lng: 23.6377472
  };
  var DershLat = {
    lat: 53.6883223,
    lng: 27.1176481
  };
  var PinskLat = {
    lat: 52.1309018,
    lng: 26.0334131
  };
  var RechkiLat = {
    lat: 54.0306108,
    lng: 30.2295256
  };
  var StolinLat = {
    lat: 51.8914785,
    lng: 26.8144941
  };
  var BudaLat = {
    lat: 52.2653324,
    lng: 31.1525442
  };
  var SkidelLat = {
    lat: 53.582869,
    lng: 24.2148433
  };
  var GrodnoLat = {
    lat: 53.6860924,
    lng: 23.7887466
  };
  var VitebskLat = {
    lat: 55.1910967,
    lng: 30.1253259
  };
  var MogilevLat = {
    lat: 53.883542,
    lng: 30.2815377
  };
  var MoscowLat = {
    lat: 55.7494733,
    lng: 37.352325
  };
  var Moscow2Lat = {
    lat: 55.8086195,
    lng: 38.9394192
  };
  var BryanskLat = {
    lat: 53.2799469,
    lng: 34.2068813
  };
  var SmolenskLat = {
    lat: 54.7801138,
    lng: 31.9299219
  };
  var OmskLat = {
    lat: 54.9857955,
    lng: 73.2160585
  };
  var EkbLat = {
    lat: 56.8138126,
    lng: 60.5148532
  };
  var NovosibLat = {
    lat: 54.9698965,
    lng: 82.8093245
  };
  var AstanaLat = {
    lat: 51.147862,
    lng: 71.3393087
  };
  var PavlodarLat = {
    lat: 52.3165549,
    lng: 76.894763
  };
  var UstLat = {
    lat: 49.9473151,
    lng: 82.683812
  };

  // Всплывашки с текстом
  // Минск
  var contentMinsk = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ООО «Вкусный дом»</b></p>' +
    '<p><b>ООО «ЕВРОТОРГ»</b></p>' +
    '</div>' +
    '</div>';

  var infoMinsk = new google.maps.InfoWindow({
    content: contentMinsk
  });

  var markerMinsk = new google.maps.Marker({
    map: map,
    position: MinskLat,
    icon: markerImgMini
  });
  markerMinsk.addListener('click', function() {
    infoMinsk.open(map, markerMinsk);
  });

  // Столбцы
  var contentStolb = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>СЗАО «Агрокомбинат Колос»</b></p>' +
    '</div>' +
    '</div>';

  var infoStolb = new google.maps.InfoWindow({
    content: contentStolb
  });

  var markerStolb = new google.maps.Marker({
    map: map,
    position: StolbLat,
    icon: markerImgMini
  });
  markerStolb.addListener('click', function() {
    infoStolb.open(map, markerStolb);
  });

  // аг. Томашовка
  var contentTomash = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ОАО «Комаровка», птицефабрика «Дубравский бройлер»</b></p>' +
    '</div>' +
    '</div>';

  var infoTomash = new google.maps.InfoWindow({
    content: contentTomash
  });

  var markerTomash = new google.maps.Marker({
    map: map,
    position: TomashLat,
    icon: markerImgMini
  });
  markerTomash.addListener('click', function() {
    infoTomash.open(map, markerTomash);
  });

  // Витебск
  var contentVitebsk = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ОАО «Витебская бройлерная птицефабрика»</b></p>' +
    '</div>' +
    '</div>';

  var infoVitebsk = new google.maps.InfoWindow({
    content: contentVitebsk
  });

  var markerVitebsk = new google.maps.Marker({
    map: map,
    position: VitebskLat,
    icon: markerImgMini
  });
  markerVitebsk.addListener('click', function() {
    infoVitebsk.open(map, markerVitebsk);
  });

  // Держинск
  var contentDersh = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ОАО «Агрокомбинат «Держинский»</b></p>' +
    '</div>' +
    '</div>';

  var infoDersh = new google.maps.InfoWindow({
    content: contentDersh
  });

  var markerDersh = new google.maps.Marker({
    map: map,
    position: DershLat,
    icon: markerImgMini
  });
  markerDersh.addListener('click', function() {
    infoDersh.open(map, markerDersh);
  });

  // Пинск
  var contentPinsk = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ОАО «Птицефабрика «Дружба»</b></p>' +
    '</div>' +
    '</div>';

  var infoPinsk = new google.maps.InfoWindow({
    content: contentPinsk
  });

  var markerPinsk = new google.maps.Marker({
    map: map,
    position: PinskLat,
    icon: markerImgMini
  });
  markerPinsk.addListener('click', function() {
    infoPinsk.open(map, markerPinsk);
  });

  // аг. Рэчки
  var contentRechki = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ЗАО «Агрокомбинат «Заря»</b></p>' +
    '</div>' +
    '</div>';

  var infoRechki = new google.maps.InfoWindow({
    content: contentRechki
  });

  var markerRechki = new google.maps.Marker({
    map: map,
    position: RechkiLat,
    icon: markerImgMini
  });
  markerRechki.addListener('click', function() {
    infoRechki.open(map, markerRechki);
  });

  // Столин
  var contentStolin = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ООО «Птицефабрика «Западная»</b></p>' +
    '</div>' +
    '</div>';

  var infoStolin = new google.maps.InfoWindow({
    content: contentStolin
  });

  var markerStolin = new google.maps.Marker({
    map: map,
    position: StolinLat,
    icon: markerImgMini
  });
  markerStolin.addListener('click', function() {
    infoStolin.open(map, markerStolin);
  });

  // аг. Buda
  var contentBuda = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ОАО «Птицефабрика «Рассвет»</b></p>' +
    '</div>' +
    '</div>';

  var infoBuda = new google.maps.InfoWindow({
    content: contentBuda
  });

  var markerBuda = new google.maps.Marker({
    map: map,
    position: BudaLat,
    icon: markerImgMini
  });
  markerBuda.addListener('click', function() {
    infoBuda.open(map, markerBuda);
  });

  // Скидель
  var contentSkidel = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">НАШИ КЛИЕНТЫ</h2>' +
    '<div id="bodyContent">' +
    '<p><b>ОАО «Агрокомбинат «Скидельский» <br> Филиал «Скидельская птицефабрика»</b></p>' +
    '</div>' +
    '</div>';

  var infoSkidel = new google.maps.InfoWindow({
    content: contentSkidel
  });

  var markerSkidel = new google.maps.Marker({
    map: map,
    position: SkidelLat,
    icon: markerImgMini
  });
  markerSkidel.addListener('click', function() {
    infoSkidel.open(map, markerSkidel);
  });

  // var markerBrest = new google.maps.Marker({
  //   map: map,
  //   position: BrestLat,
  //   title: 'Брест',
  //   icon: markerImg
  // });
  // var markerGrodno = new google.maps.Marker({
  //   map: map,
  //   position: GrodnoLat,
  //   title: 'Гродно',
  //   icon: markerImg
  // });
  // var markerMogilev = new google.maps.Marker({
  //   map: map,
  //   position: MogilevLat,
  //   title: 'Могилев',
  //   icon: markerImg
  // });
  var markerMoscow = new google.maps.Marker({
    map: map,
    position: MoscowLat,
    title: 'Москва',
    icon: markerImg
  });
  var markerMoscow2 = new google.maps.Marker({
    map: map,
    position: Moscow2Lat,
    title: 'Подмосковье',
    icon: markerImg
  });
  var markerBryansk = new google.maps.Marker({
    map: map,
    position: BryanskLat,
    title: 'Брянск',
    icon: markerImg
  });
  var markerSmolensk = new google.maps.Marker({
    map: map,
    position: SmolenskLat,
    title: 'Смоленск',
    icon: markerImg
  });
  var markerOmsk = new google.maps.Marker({
    map: map,
    position: OmskLat,
    title: 'Омск',
    icon: markerImg
  });
  var markerEkb = new google.maps.Marker({
    map: map,
    position: EkbLat,
    title: 'Екатеринбург',
    icon: markerImg
  });
  var markerNovosib = new google.maps.Marker({
    map: map,
    position: NovosibLat,
    title: 'Новосибирск',
    icon: markerImg
  });
  var markerAstana = new google.maps.Marker({
    map: map,
    position: AstanaLat,
    title: 'Астана',
    icon: markerImg
  });
  var markerPavlodar = new google.maps.Marker({
    map: map,
    position: PavlodarLat,
    title: 'Павлодар',
    icon: markerImg
  });
  var markerUstKamen = new google.maps.Marker({
    map: map,
    position: UstLat,
    title: 'Усть-Каменогорск',
    icon: markerImg
  });
}
