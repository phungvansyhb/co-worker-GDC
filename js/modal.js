$(document).ready(function () {
	const modal = $('#myModal');
	
	const closeBtn = $('#closeModal');

	closeBtn.on('click', function () {
		modal.hide();
	});

	// When the user clicks anywhere outside of the modal, close it
	$(window).on('click', function (event) {
		if ($(event.target).is(modal)) {
			modal.hide();
		}
	});
});
