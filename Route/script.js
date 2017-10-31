/*;(function($) {

	"use strict";


	function initMap() {
    
			var map;
			var mapContainer = $('#map')[0];
			let startPoint = {lat: 47.3479723, lng: 8.5190361};

			map = new google.maps.Map(mapContainer, {
          			center: startPoint,
          			zoom: 7,
          			mapTypeId:google.maps.MapTypeId.ROADMAP
    		});

	$("#btn3").on('click', function(){
	 		let firstPoint = $('#1').val();
			let secondPoint = $('#2').val();
	 		if (firstPoint == '' || secondPoint == '') {
	 			alert ('You need to input information about both points!!!');
	 		} else {

	 		firstPoint = $('#1').val();
			console.log(firstPoint);
			secondPoint = $('#2').val();
			console.log(secondPoint);

			let firstMarker = new google.maps.Marker({
          	position: firstPoint,
          	map: map
        	});

        	let secondMarker = new google.maps.Marker({
          	position: secondPoint,
          	map: map
			});
        	}
		});



		};
    

	$(window).on('load', function() {
		initMap();

	});






})(jQuery);*/

function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 47.3479723, lng: 8.5190361}
        });
        directionsDisplay.setMap(map);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('btn3').addEventListener('click', onChangeHandler);
        document.getElementById('btn3').addEventListener('click', onChangeHandler);
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('p1').value,
          destination: document.getElementById('p2').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }