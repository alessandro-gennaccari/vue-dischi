var app = new Vue({
	el: '#app',
	data: {
		albums: [],
		types: []
	},
	methods: {

		// Funzione per filtrare tutti i vari generi musicali
		filterType(){

			this.albums.forEach(element => {
				if (!this.types.includes(element.genre)){
					this.types.push(element.genre);
				}
			});

		}

	},
	mounted(){

		//Chiamata ajax
		axios
		.get('https://flynn.boolean.careers/exercises/api/array/music')
		.then(result => {

			// Il mio array sarà uguale all'array di oggetti che dovrò utilizzare
			this.albums = result.data.response;

			//Richiamo la funzione
			this.filterType();

		});

	}
}); 