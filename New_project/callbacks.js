function requestUser() {
	setTimeout (function() {
		console.log('request User:', 'id:', 123);
		const id = 123;
		requestPayment(id);
	}, 1200)
}

	
function requestPayment(userId) {
	setTimeout(function() {
		console.log('Payment:', 'Privat24');
		if (userId) {
			const payment = {
				name: 'Privat24',
				quantity: 1000,
			}
			requestCalculation(payment);
		}
	}, 500)
}

function requestCalculation(payment) {
	setTimeout(function() {
		const math = Math.round(Math.sqrt(Math.random() * payment.quantity));
		console.log('Type of Payment', payment.name, 'Calculation', math);

	}, 2000)
}


