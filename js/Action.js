/* for side bar menu */
var click = false;
var resized = false;

$(document).ready(function () {
	$("#aplication").click(function () { //id of the btn
		click = true;
		menuToggler();
		click = false;
	});
});


$(window).resize(function () {
	resized = true;
	menuToggler(); /*for responsive side bar menu on resizing the page */
	showModal(); /*for responsive modal on resizing the page */
	resized = false;
});

function menuToggler() {
	var navheight = $("#topnav").height();
	if ((navheight == 55 && click) || (navheight != 55 && resized)) {
		$("#topnav").height(window.innerHeight);
		$("#topnav").css({
			'z-index': '10000',
			'transition': 'height 0.7s ease-in-out'
		}); /*for openning the menu*/
		$("#topnav").find(".d-none").addClass("d-block"); /*for visibleing the help icon*/
		$("#basket").toggleClass("d-none"); /*for invisibleing the basket icon*/
	} else if (click) {
		$("#topnav").height(55); /*for closeing the menu*/
		$("#topnav").find(".d-none").removeClass("d-block"); /*for invisibleing the help icon*/
		$("#basket").toggleClass("d-none"); /*for invisibleing the basket icon*/
	}
}
/* end for side bar menu */



/* modal style on page load*/
$(document).ready(function () {
	$("#modal")
		.css({
			'z-index': '10000',
			'transition': 'all 0.7s ease-in-out',
			'opacity': '0.9',
			'position': 'fixed',
			'top': 0,
			'width': 0,
			'height': 0,
			'overflow': 'hidden'
		});
});
/* end modal style on page load*/

/*for showing modal*/
function showModal() {
	var modalheight = $("#modal").height();
	if ((modalheight == 0 && resized == false) /* its for when user click on a btn then modal shows */ ||
		(modalheight > 0 && resized) /* its for when modal is open and page is resizing */ ) {
		$("#modal")
			.css({
				'width': (window.innerWidth),
				'height': (window.innerHeight)
			});
	}
}
/*end for showing modal*/

/*for closeing modal*/
function closeModal() {
	$("#modal")
		.css({
			'width': 0,
			'height': 0
		});
}
/* end for closeing modal*/


/* for rotateing the arrow icon in menu */
function rotate(x) {
	$(x).find("i").toggleClass("rotate-tag pt-2").css("transition","all 0.7s");
}
/* end for rotateing the arrow icon in menu */