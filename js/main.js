//CAROSEL//

//Set up an Array for all the images



//Keep track of the current position in the array (variable for index)
//var position = 0

//Every 5 seconds, update current position +1 and change the source, repeat
//$().on(, function () {
	//position = position + 1;
	//$('img').attr('src', imageDisplay[position]);
//});

//SCROLLING SHOPPING BAR MAIN PAGE//
	$('nav a').on('click', function (e) {
			e.preventDefault();

			var target = this.hash;
			var headerHeight = $('header').outerHeight() + 2;

			$('html, body').animate({'scrollTop': $(target).offset().top - headerHeight}, 350, 'swing', function () {
					window.location.hash = target;
			});
		});

//When the user hovers over the images, allow them to scroll over and view additional items


//HAMBURGER MOBILE SCREEN //

//When the user clicks on the hamburger icon, drop down the condensed menu BAR
