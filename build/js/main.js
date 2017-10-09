/* 
	TABLE OF CONTENTS 

	1. Mobile Header
		a) Navigation
		b) Opening hours
	2. Unslider

*/

/*
	1. Mobile Header
*/

// a) Mobile Menu Toggle

$('#hamburger-menu').click(function(){
	$(this).toggleClass('open');
})

// b) Opening hours toggle
$('.clock-icon').click(function(){
	$('.trading-hours-popup').toggleClass('open');
})

$('.trading-hours-popup .close').click(function(){
	$('.trading-hours-popup').removeClass('open');
})