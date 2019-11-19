const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});
const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
	car('Ford', 'Kuga', 'Max', '2016', '+0 123 456 67 89', 'images/ford.jpg'),
	car('Toyota', 'C-HR Hybrid', 'Dave', '2017', '+0 987 654 32 21', 'images/toyota.jpg'),
	car('Volkswagen', 'Passat', 'Vera', '2018', '+0 321 654 98 87', 'images/volkswagen.jpg')
]

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		selectedCarIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false,
		logs: []
	},
	methods: {
		selectCar(car, index) {
			this.car = car,
			this.selectedCarIndex = index
		},
		newOrder() {
			this.modalVisibility = false
			this.logs.push(
				log(`Success order: ${this.car.name} — ${this.car.model}`, 'OK')
			)
		},
		cancelOrder() {
			this.modalVisibility = false
			this.logs.push(
				log(`Canceled order: ${this.car.name} — ${this.car.model}`, 'CNL')
			)
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredCars() {
			return this.cars.filter(car => {
				return car.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || car.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1
			})
		}
	},
	filters: {
		date(value) {
			return value.toLocaleString()
		}
	}
})
