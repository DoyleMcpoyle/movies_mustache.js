// Application start
(function() {

// Local variables
// var movies = [];
var MOVIES_API = 'http://ga-movies.firebaseio.com/movies.json';

var YOUTUBE_IFRAME_SRC = 'http://www.youtube.com/embed/{{id}}?controls=0&showinfo=0';

function bindEventListeners() {
  $('.movie-thumbnail').on('click', function() {
   var currentMask = $(this).children('.preview-mask');
   currentMask.css('transform', 'translateY(0)');
    });

   $('.close-mask').on('click', function(e) {
var currentMask = $(this).parent('.preview-mask');
currentMask.css('transform', 'translateY(-100%)');
e.stopPropagation();
   });
   $('.show-youtube').on('click', function() {
$('#dimmer').fadeIn();
var id = $(this).attr('id');
$('#yt-player').attr('src', YOUTUBE_IFRAME_SRC.replace('{{id}}', id));
   });
}

function getData() {
  $.get('http://ga-movies.firebaseio.com/movies.json', function(data) {
    var rawTemplate = $('#movie-template').html();
for(var key in data) {
var currentMovie = data[key];
var result = Mustache.render(rawTemplate, currentMovie);
console.log(result);
$('#movies-container').append(result);
    }
bindEventListeners();
  });
}

// Local functions
function stampItOut() {
}
// Local functions
// function stampItOut() {
// var rawTemplate = $('#movie-template').html();
// console.log(rawTemplate);

// var firstMovie = {
// poster: 'poster1.jpg',
// title: 'Brave',
// cast: 'Kelly Macdonald, Emma Thompson',
// teaser: "Merida is a skilled archer and impetuous daughter of King Fergus (Billy Connolly) and Queen Elinor (Emma Thompson). Determined to carve her own path in life, Merida defies an age-old custom sacred to the uproarious lords of the land: massive Lord MacGuffin (Kevin McKidd), surly Lord Macintosh (Craig Ferguson) and cantankerous Lord Dingwall (Robbie Coltrane). Merida's actions inadvertently unleash chaos and fury in the kingdom, and when she turns to an eccentric old Witch (Julie Walters) ",
// youtube: 'TEHWDA_6e3M'
// };

// console.log(firstMovie);
// // Stamp out the html
// var result = Mustache.render(rawTemplate, firstMovie);
// $('#movies-container').append(result);


// var secondMovie = {
//   poster: 'poster2.jpg',
//   title: 'Brave',
//   cast: 'Kelly Macdonald, Emma Thompson',
//   teaser: "Merida is a skilled archer and impetuous daughter of King Fergus (Billy Connolly) and Queen Elinor (Emma Thompson). Determined to carve her own path in life, Merida defies an age-old custom sacred to the uproarious lords of the land: massive Lord MacGuffin (Kevin McKidd), surly Lord Macintosh (Craig Ferguson) and cantankerous Lord Dingwall (Robbie Coltrane). Merida's actions inadvertently unleash chaos and fury in the kingdom, and when she turns to an eccentric old Witch (Julie Walters) ",
//   youtube: 'TEHWDA_6e3M'
//   };

//   var result2 = Mustache.render(rawTemplate, secondMovie);
//   $('#movies-container').append(result2);
//   }
 
getData();
})();