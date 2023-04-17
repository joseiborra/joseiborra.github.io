// About Me content is the one by default shown
$('#educationContent').hide();
$('#experienceContent').hide();

$(document).ready(function(){

	// Handle 'About Me' content
	$('#aboutme').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active') || !$('#menulateral').hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#aboutmeContent');
			activateDiv('#menulateral');
		}

	});

	// Handle 'Education' content
	$('#education').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Hide menulateral
			clearMenuLateral();

			// Show current content
			activateDiv('#educationContent');
		}
	});

	// Handle 'Experience' content
	$('#experience').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Hide menulateral
			clearMenuLateral();

			// Show current content
			activateDiv('#experienceContent');
		}
	});

	// Sanity check, so we dont have to wait until a resize event
	if( $(window).width() < 751 )
		downscalePage();

	// Control the window size
	$(window).resize(function() {
		if( $(window).width() < 751 ) {

			// Downscales the page
			downscalePage();

		}
		else if($(window).width() >= 751 ) {

			// Upscales the page
			upscalePage();

		}
	  });

	// Whenever you clic on a portfolio image, you should be redirected to the sepecified URL
	$('.clickable').click(function(e) {
		window.open($(e.currentTarget)[0].nextElementSibling.innerHTML);
	});

});

function downscalePage() {
	// Centers the profile picture in mobile's view
	if(!$('#profilepicture').hasClass('mx-auto')) {
		$('#profilepicture').addClass('mx-auto');
		$('#profilepicture').removeClass('me-auto');
	}

	// Center the h4 "Hobbies" for mobile's view
	if(!$('#hobbiesH4').hasClass('text-center')) {
		$('#hobbiesH4').addClass('text-center')
	}

	// Center each of the hobbies divs
	if(!$('#hobbie1').hasClass('text-center')) {
		$('#hobbie1').addClass('text-center mt-2')
		$('#hobbie2').addClass('text-center mt-2')
		$('#hobbie3').addClass('text-center mt-2')
	}
}

function upscalePage() {
	if(!$('#profilepicture').hasClass('me-auto')) {
		$('#profilepicture').addClass('me-auto');
		$('#profilepicture').removeClass('mx-auto');
	}

	if($('#hobbiesH4').hasClass('text-center')) {
		$('#hobbiesH4').removeClass('text-center')
	}

	if($('#hobbie1').hasClass('text-center')) {
		$('#hobbie1').removeClass('text-center mt-2')
		$('#hobbie2').removeClass('text-center mt-2')
		$('#hobbie3').removeClass('text-center mt-2')
	}
}

function clearActiveLinks() {
	$('#navbarList .nav-item .nav-link').each(function() {
		$(this).removeClass('active');
	});
}

function clearActiveDivs() {
	$('.container .content .active').each(function() {
		$(this).removeClass('active');
		$(this).hide();
	});
}

function clearMenuLateral() {
	$('#menulateral').removeClass('active');
	$('#menulateral').hide();
}

function activateLink(e) {
	$(e.target).addClass('active');
}

function activateDiv(divId) {
	$(divId).addClass('active');
	$(divId).show();
}