$(function () {
	function isFiveDigitNumber(input) {
		const regex = /^\d{5}$/;
		return regex.test(input);
	}
	function isValidCombination(input) {
		const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		return regex.test(input);
	}
	function addErrorClass(name) {
		$(`#${name}`).addClass('inputErrorClass');
		$(`label[for=${name}]`).addClass('lableErrorClass');
	}
	function removeErrorClass(name) {
		$(`#${name}`).removeClass('inputErrorClass');
		$(`label[for=${name}]`).removeClass('lableErrorClass');
	}
	// login page js
	$('#loginBtn').on('click', function () {
		const id = $('#id').val();
		const password = $('#password').val();
		const isValidId = isFiveDigitNumber(id);
		const isValidPassword = isValidCombination(password);

		if (!isValidId) {
			addErrorClass('id');
		} else {
			removeErrorClass('id');
		}
		if (!isValidPassword) {
			addErrorClass('password');
		} else {
			removeErrorClass('password');
		}
		if (!isValidId || !isValidPassword) {
			const modal = $('#myModal');
			modal.show();
		} else {
			window.location.href = './facility/list.html';
		}
	});
});
