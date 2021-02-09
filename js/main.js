var app = new Vue({
	el: '#app',
	data: {
		albums: []
	},
	mounted(){

		axios
		.get('https://flynn.boolean.careers/exercises/api/array/music')
		.then(result => {
			console.log(result.data.response);
			this.albums = result.data.response;
			console.log(this.albums);
		});

	}
}); 