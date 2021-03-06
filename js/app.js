$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
	$('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate(
  		{"left": "1020px"},
  		500,
  		function() {
  			$(this).hide();
  			$(this).css("left", "565px");
  		} );
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {
    // ryu goes back to his ready position
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
	});

  $(document).keydown(function(e) { 
        if (e.which == 88) {
            $('.ryu-still').hide();
            $('.ryu-cool').show();
        }
    })
  $(document).keyup(function(e) {
  		if (e.which == 88) {
  			$('.ryu-still').show();
            $('.ryu-cool').hide();
  		}
  });
});



function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}