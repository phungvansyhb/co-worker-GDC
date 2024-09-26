$(function () {
	// sign up page js source
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

	//hanle warning button
	const cancelBtn = $('.cancel');
	cancelBtn.on('click', function () {
		const modalWaring = $('#warningModal');
		modalWaring.show();
		const confirmBtn = $('#confirmModal');
		confirmBtn.on('click', function () {
			modalWaring.hide();
			window.location.href = '../index.html';
		});
	});

	$('#registration').on('click', function () {
		const id = $('#id').val();
		const username = $('#username').val();
		const password = $('#password').val();
		const email = $('#email').val();
		const emailDomain = $('#emailDomain').val();
		const teamName = $('#teamName').val();
		const companyAddress = $('#companyAddress').val();

		const isValidId = isFiveDigitNumber(id);
		if (!isValidId) {
			addErrorClass('id');
		} else {
			removeErrorClass('id');
		}

		if (!username) {
			addErrorClass('username');
		} else {
			removeErrorClass('username');
		}

		const isValidPassword = isValidCombination(password);
		if (!isValidPassword) {
			addErrorClass('password');
		} else {
			removeErrorClass('password');
		}

		if (!email) {
			addErrorClass('email');
		} else {
			removeErrorClass('email');
		}

		if (!emailDomain) {
			addErrorClass('emailDomain');
		} else {
			removeErrorClass('emailDomain');
		}

		if (!teamName) {
			addErrorClass('teamName');
		} else {
			removeErrorClass('teamName');
		}

		if (!companyAddress) {
			addErrorClass('companyAddress');
		} else {
			removeErrorClass('companyAddress');
		}
		const isFormValid = () => {
			if ($('.inputErrorClass').length > 0 || $('.labelErrorClass').length > 0) {
				return fasle;
			} else {
				return true;
			}
		};
		if (isFormValid()) {
			const modal = $('#successModal');
			modal.show();
		}
	});
});
