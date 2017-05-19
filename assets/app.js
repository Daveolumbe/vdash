'use strict';

let app = new Vue({
	el: '#app',
	data: {
		message: 'My name is ',
		name: '',
		picked: ''
	}
});


axios.get('https://api.github.com/users/' + username)
	.then(function(response){
		console.log(response.data); // ex.: { user: 'Your User'}
		console.log(response.status); // ex.: 200
	});
