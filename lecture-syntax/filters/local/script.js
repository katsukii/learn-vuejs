var app = new Vue({
	el: '#app', 
	data: {
		price: 298000
	}, 
	filters: {
		numberFormat: function(value) {
			return value.toLocaleString()
		}
	}
})
