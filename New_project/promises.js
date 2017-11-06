

function requestUser() {
	const promise = new Promise(function(resolve,reject) {
		setTimeout(function() {
			const user = {
				name: 'Georgiy',
				id: 123
			};

			if (!user) {
				return reject(new Error('Something wrong'))
			}
			console.log('request User', user);
			resolve(user);
		}, 1500);
	});
	return promise;

}



function requestPayment(user) {
	const promise = new Promise(function(resolve, reject) {
		setTimeout( function() {
			const payment = {
				user: user.name,
				name: 'Privat24',
				quantity: 2000
				
			}
			if (!payment) {
				return reject(new Error('No payment'))
			}
			console.log('request Payment', payment);
			resolve(payment);
		}, 200)
	});
	return promise;

}



function requestCalculation(payment) {
	const promise = new Promise(function(resolve, reject) {
		setTimeout( function() {
			
			const calculation = payment.quantity * 20;
			console.log('User', payment.user, 'Payment name', payment.name,'requestCalculation', calculation);
			resolve(calculation);
		}, 2000)
	});
	return promise;

}




requestUser()
.then(requestPayment)
.then(requestCalculation)
.catch();