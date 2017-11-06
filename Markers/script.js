
/*We create an empty array*/
var arrMarkers = [];

/*Create maps*/
function initMap() {

/*The are coordinates of the markers below*/
         var position1 = {lat: -25.363, lng: 131.044};
         var position2 = {lat: 47.363, lng: 10.044};
         var position3 = {lat: 30.363, lng: 50.044};
         var position4 = {lat: 65.363, lng: 100.044};

         arrMarkers.push(position1);
         arrMarkers.push(position2);
         arrMarkers.push(position3);
         arrMarkers.push(position4);


        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map1 = new google.maps.Map(document.getElementById('map1'), {
          zoom: 7,
          center: position1
        });
        var map2 = new google.maps.Map(document.getElementById('map2'), {
          zoom: 7,
          center: position2
        });
        var map3 = new google.maps.Map(document.getElementById('map3'), {
          zoom: 7,
          center: position3
        });
        var map4 = new google.maps.Map(document.getElementById('map4'), {
          zoom: 7,
          center: position4
        });

        /*Show all maps*/

        directionsDisplay.setMap(map1);
        directionsDisplay.setMap(map2);
        directionsDisplay.setMap(map3);
        directionsDisplay.setMap(map4);

        /*Put markers*/

          var marker1 = new google.maps.Marker({
          position: position1,
          map: map1,        
          });
          var marker2 = new google.maps.Marker({
          position: position2,
          map: map2,          
          });
          var marker3 = new google.maps.Marker({
          position: position3,
          map: map3,          
          });
          var marker4 = new google.maps.Marker({
          position: position4,
          map: map4,         
          });

      }

     

      function changeMarkers() {

  /*Get a random position from array*/

          function compareRandom(a, b) {
          return Math.random() - 0.5;
          }

          arrMarkers.sort(compareRandom);

/*        newPosition1 = arrMarkers[Math.round (0 + Math.random() * (3 - 0 + 1))];
        newPosition2 = arrMarkers[Math.round (0 + Math.random() * (3 - 0 + 1))];
        newPosition3 = arrMarkers[Math.round (0 + Math.random() * (3 - 0 + 1))];
        newPosition4 = arrMarkers[Math.round (0 + Math.random() * (3 - 0 + 1))];*/

        newPosition1 = arrMarkers[0];
        newPosition2 = arrMarkers[1];
        newPosition3 = arrMarkers[2];
        newPosition4 = arrMarkers[3];

        /*console.log(newPosition1);
        console.log(newPosition2);
        console.log(newPosition3);
        console.log(newPosition4);*/

        
        /*Relocate maps and markers*/


         map1 = new google.maps.Map(document.getElementById('map1'), {
          zoom: 7,
          center: newPosition1
        });
         map2 = new google.maps.Map(document.getElementById('map2'), {
          zoom: 7,
          center: newPosition2
        });
         map3 = new google.maps.Map(document.getElementById('map3'), {
          zoom: 7,
          center: newPosition3
        });
         map4 = new google.maps.Map(document.getElementById('map4'), {
          zoom: 7,
          center: newPosition4
        });
 

        /*Put markers*/

           marker1 = new google.maps.Marker({
          position: newPosition1,
          map: map1,        
          });
           marker2 = new google.maps.Marker({
          position: newPosition2,
          map: map2,          
          });
           marker3 = new google.maps.Marker({
          position: newPosition3,
          map: map3,          
          });
          marker4 = new google.maps.Marker({
          position: newPosition4,
          map: map4,         
          });
        
  }

document.getElementById('btn').addEventListener("click", changeMarkers);




