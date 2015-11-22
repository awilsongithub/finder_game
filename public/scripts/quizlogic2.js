






//////////////////////////////////////
//      DOM element variables       //
//////////////////////////////////////

// var ui = {}; // object to hold dom variables
// ++++++++++++++ put vars and arrays below in ui object w/ ui.varName
// var quizArea = $('.quizArea');
var quizBackground = $('.quizBackground');
var img = $('img')
var imageLocation = $('#imageLocation');
var p = $('p'); // paragraph text


///////////////////////////////////////
//           FAMILY OBJECTS          //
///////////////////////////////////////
var families = [];
families[0] = {
   objectName: 'grandParents',
   city: 'Dayton',
   state: 'Ohio',
   lat: 39.74354,
   long: -84.07497,
   names: ['Howard', 'Kathy'],
   images: ['<img src="/images/howard.jpg" />', '<img src="/images/kathy.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};
families[1] = {
   objectName: 'Renee',
   city: 'Chicago',
   state: 'Illinois',
   lat: 41.86704,
   long: -87.62465,
   names: ['Renee', 'Adam'],
   images: ['<img src="/images/renee.jpg" />', '<img src="/images/adam.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};
families[2] = {
   objectName: 'Anne',
   city: 'Louisville',
   state: 'Kentucky',
   lat: 38.25266,
   long: -85.75846,
   names: ['Anne', 'Bill', 'Cole', 'Grayson'],
   images: ['<img src="/images/renee.jpg" />', '<img src="/images/adam.jpg" />', '<img src="/images/renee.jpg" />', '<img src="/images/adam.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};
families[3] = {
   objectName: 'Anne',
   city: 'Louisville',
   state: 'Kentucky',
   lat: 38.25266,
   long: -85.75846,
   names: ['Anne', 'Bill', 'Cole', 'Grayson'],
   images: ['<img src="/images/renee.jpg" />', '<img src="/images/adam.jpg" />', '<img src="/images/renee.jpg" />', '<img src="/images/adam.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};


//////////////////////////////////////////
//               FUNCTIONS              //
//////////////////////////////////////////

// play media when called
var playSuccessSound = function () {
  document.getElementById("successSound").play();
};

// map code from chicago.js
 var mapCanvas, mapOptions, map;
 function initialize() {
   mapCanvas = document.getElementById('map-canvas');
   mapOptions = {
       center: new google.maps.LatLng(39.74354, -84.07497),
       zoom: 4,
       mapTypeId: google.maps.MapTypeId.ROADMAP
    } // end options
  //the map object constructor takes two arguments
  // mapCanvas and mapOptions
   map = new google.maps.Map(mapCanvas, mapOptions);
} // end initialize function


// setMarker function takes two coordinate arguments
 function setMarker(lat, long) {
    console.log('test');
    console.log(lat, long);
    // marker is a method with an obj argument?
    var marker = new google.maps.Marker ( {
      position: new google.maps.LatLng(lat, long),
      map: map,
      animation: google.maps.Animation.DROP
  }) // end marker
 } // end setMarker


 //////////////////////////////////////////////
 //        DOCUENT.READY FUNCTION            //
 //             where action happens         //
 // PUT ALL FUNCTION CALLS AND INSTANTIATION //
 // INSIDE OF DOCUMENT. READY TO BE SURE ALL //
 // DOM ELEMENTS ETC THEY NEED ARE LOADED    //
 // BEFORE THEY RUN !!! ///////////////////////

 $(document).ready ( function() {
      var inc = 0; // common incrementor
      // initMap with first family in array coordinates
      // initMap(families[inc].lat, families[inc].long, 8); // didn't work
      initialize(); // initalize map

   /////////button action calls function/////////
    $('button').click ( function () {

      $('.quizBackground').empty(); // empty all appended text

         // welcome to city of current family
         quizBackground.append('<p>Welcome to ' + families[inc].city + '.</p>');
         quizBackground.append('What State is ' + families[inc].city + ' in?');
         playSuccessSound();

         setMarker(families[inc].lat, families[inc].long);
         playSuccessSound();
         // prompt to guess state for that city
         // refactoring will put these in sep. functions
         var stateGuess = prompt(' ');
         // doesn't actually verify match
         quizBackground.append('<p>Yes! ' + families[inc].state + '.</p>');
         playSuccessSound();

         quizBackground.append('<p>Type \'go\' to see family in ' + families[inc].state + '</p>');
         prompt(' ');

         // loop through names and images arrays and append
         for (var i = 0; i < families[inc].names.length; i++) {
            quizBackground.append ('<h4> Hello ' + families[inc].names[i] + ' !</h4>' ) ;
            imageLocation.append ( families[inc].images[i] );
            playSuccessSound();
         } // end names and images for loop

         inc++;  //
         quizBackground.append('<p>Click Find Family button to Find More Family!</p>');

  }) // end button click function
 } ); // end of doc.ready
