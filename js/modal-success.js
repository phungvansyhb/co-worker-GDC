$(document).ready(function () {
	const modal = $('#successModal');

	const closeBtn = $('#closeModalSuccess');

	closeBtn.on('click', function () {
		modal.hide();
		window.location.href = '../index.html';
	});

	// When the user clicks anywhere outside of the modal, close it
	$(window).on('click', function (event) {
		if ($(event.target).is(modal)) {
			modal.hide();
		}
	});
});
