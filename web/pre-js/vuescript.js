new Vue({
	el: '.app',
	data: {
		title: 'Initial Instruction',
		counter: '1',
		cart: '0'
	},
	methods: {
		updateCart: function(){
			this.cart = this.counter;
		},
		increase: function(){
			this.cart++;
		}

	}
});