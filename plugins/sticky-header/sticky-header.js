// Sticks to top of page when hit
function stickyElement() {
	var nav = $('.template-header--sticky');
	var navPos = nav.offset().top;
	var navHeight = nav.outerHeight();
	var content = $('.main--sticky');

function makeItStick() {
	if($(this).scrollTop() >= navPos) {
		nav.addClass('sticky-active');
		content.css('margin-top', navHeight); // To avoid content jumps
	} else {
		nav.removeClass('sticky-active');
		content.css('margin-top', '0');
	}
}

$(window).on('scroll', function() {
	  makeItStick();
  });
}

stickyElement();