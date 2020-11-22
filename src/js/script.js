$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1200,
		draggable: false,
		touchThreshold: 3,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right.png"></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
});		