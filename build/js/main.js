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

// a) Navigation

// Hamburger menu toggle

$('#hamburger-menu').click(function(){
	$(this).toggleClass('open');
	$('.main-navigation').toggleClass('active');
})

// Menu view toggle

// Sub Menu indicator
$(".main-navigation > ul > li:has(ul)").addClass("has-sub-menu");
$(".has-sub-menu > a").append("<i class='fa fa-caret-down inline-icon' aria-hidden='true'></i>");

// Mobile submenu toggle
$(".main-navigation .has-sub-menu").click(function(){
	$(this).find("ul").toggleClass("active");
})

// b) Opening hours toggle
$('.clock-icon').click(function(){
	$('.trading-hours-popup').toggleClass('open');
})

$('.trading-hours-popup .close').click(function(){
	$('.trading-hours-popup').removeClass('open');
})