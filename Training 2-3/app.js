new Vue({
  el: "#app",
  data: {
		name: 'E500',
    counter: 0,
    link: 'https://google.com'
  },
  // `computed` is not triggered by events irrelevant to it
  computed: {
  	output: function(){
    	return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  // `watch` looks changes relevant to some `data`
  watch: {
  	counter: function(value){
    	var vm = this;
      setTimeout(function(){
      	vm.counter = 0;
      }, 3000)
    }
  }
})
