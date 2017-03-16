function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: 54.1847327,
			lng: 27.4873662
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

	var MinskLat = {
		lat: 53.883868,
		lng: 27.5249349
	};
	var MoscowLat = {
		lat: 55.7494733,
		lng: 37.352325
	};
	var KievLat = {
		lat: 50.386215,
		lng: 30.4044319
	};
	var WarsawLat = {
		lat: 52.232855,
		lng: 20.9211131
	};

	var markerImg = "img/markermap.svg";

	var markerMinsk = new google.maps.Marker({
		map: map,
		position: MinskLat,
		title: 'Минск',
		icon: markerImg
	});
	var markerMoscow = new google.maps.Marker({
		map: map,
		position: MoscowLat,
		title: 'Москва',
		icon: markerImg
	});
	var markerKiev = new google.maps.Marker({
		map: map,
		position: KievLat,
		title: 'Киев',
		icon: markerImg
	});
	var markerWarsaw = new google.maps.Marker({
		map: map,
		position: WarsawLat,
		title: 'Варшава',
		icon: markerImg
	});
}
