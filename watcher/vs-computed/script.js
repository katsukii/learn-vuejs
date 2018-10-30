// 監視プロパティで記述した場合
/*
var app = new Vue({
	el: '#app', 
	data: {
		firstName: '',
		lastName: '',
		fullName: ''
	},
	watch: {
		firstName: function(value) {
			this.fullName = value + ' ' + this.lastName
		}, 
		lastName: function(value) {
			this.fullName = this.firstName + ' ' + value
		}
	}


})
*/
// 算出プロパティで記述した場合
var app = new Vue({
	el: '#app', 
	data: {
		firstName: '',
		lastName: ''
	},
	computed: {
		fullName: function() {
			return this.firstName + ' ' + this.lastName
		} 
	}


})
