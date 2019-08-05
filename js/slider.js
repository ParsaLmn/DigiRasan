$(document).ready(function () {
	var sliders = $('[role="slider"]');
	var sliderImgs;
	var Pntr = $('[role="Pointer"]');
	var i, j;
	$(Pntr).append("<div role='Guide' class='fa fa-circle pl-1 text-danger'></div>");
	for (i = 0; i < sliders.length; i++) {
		sliderImgs = $(sliders[i]).find("[tag='image'] div");
		for (j = 1; j < sliderImgs.length; j++) {
			$(sliderImgs[j]).addClass("d-none");
			$(Pntr).append("<div role='Guide' class='fa fa-circle pl-1 text-secondary'></div>");
		}
	}
});

function swiperightHandler(event) {
	$(event.target).ready(function () {

		var gd = $('[role="Guide"]');
		var sliders = $('[role="slider"]');
		var sliderImgs;
		var i, j;
		for (i = 0; i < sliders.length; i++) {
			sliderImgs = $(sliders[i]).find("[tag='image'] div");
			for (j = 0; j < sliderImgs.length; j++) {
				if ($(sliderImgs[j]).hasClass("d-none")) {
					continue;
				} else {
					if (j == 0) {
						//do nothing
					} else {
						$(sliderImgs[j]).addClass("d-none");
						$(sliderImgs[j - 1]).removeClass("d-none");
						$(gd[j]).removeClass("text-danger");
						$(gd[j]).addClass("text-secondary");
						$(gd[j - 1]).addClass("text-danger");
						$(gd[j - 1]).removeClass("text-secondary");
						break;
					}
				}
			}
		}
	});
}

function swipeleftHandler(event) {

	$(event.target).ready(function () {

		var gd = $('[role="Guide"]');
		var sliders = $('[role="slider"]');
		var sliderImgs;
		var i, j;
		for (i = 0; i < sliders.length; i++) {
			sliderImgs = $(sliders[i]).find("[tag='image'] div");
			for (j = 0; j < sliderImgs.length; j++) {
				if ($(sliderImgs[j]).hasClass("d-none")) {
					continue;
				} else {
					if (j == (sliderImgs.length - 1)) {
						//do nothing
					}
					else {
						$(sliderImgs[j]).addClass("d-none");
						$(sliderImgs[j + 1]).removeClass("d-none");
						$(gd[j]).removeClass("text-danger");
						$(gd[j]).addClass("text-secondary");
						$(gd[j + 1]).addClass("text-danger");
						$(gd[j + 1]).removeClass("text-secondary");
						break;
					}
				}
			}
		}
	});
}