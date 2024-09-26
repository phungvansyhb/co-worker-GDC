$(function () {
	function isFiveDigitNumber(input) {
		const regex = /^\d{5}$/;
		return regex.test(input);
	}
	function isValidCombination(input) {
		const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		return regex.test(input);
	}
	// login page js
	$('#loginBtn').on('click', function () {
		const id = $('#id').val();
		const password = $('#password').val();
		const isValidId = isFiveDigitNumber(id);
		const isValidPassword = isValidCombination(password);
		console.log(isValidId, isValidPassword);
		const errorClass = {}
		if (!isValidId) {
			//make label and input outline red
			$('#id').css('border', '2px solid red');
			$('label[for="id"]').css('color', 'red');
		} else {
			$('#id').css('border', '1px solid #949494');
			$('label[for="id"]').css('color', 'black');
		}
		if (!isValidPassword) {
			$('#password').css('border', '2px solid red');
			$('label[for="password"]').css('color', 'red');
		} else {
			$('#password').css('border', '1px solid #949494');
			$('label[for="password"]').css('color', 'black');
		}
		if (!isValidId || !isValidPassword) {
			const modal = $('#myModal');
			modal.show();
		} else {
			window.location.href = './facility/list.html';
		}
	});
});
