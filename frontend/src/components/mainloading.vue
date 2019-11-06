<template>
	<div id="mainloading" @click="gotoMain()">
		
	</div>
</template>
<script>
	import '@/components/mainloading.css'
	export default {
	  name:'MainLoading',
	  components: {
	  },
	  data() {
	    return {
	    }
	  },
	  mounted() {
		//   setTimeout(function() {
		// 	this.gotoMain()
		// 	}, 1000);
		//   setTimeout(this.gotoMain(), 5000)
		this.gogo()

	  },
	  methods: {
	    gotoMain(){			
        	this.$router.push({name: 'Main'})
		},
		gogo() {			
			setTimeout(() => {this.gotoMain()}, 2000)
		}
	  }
	}
</script>
