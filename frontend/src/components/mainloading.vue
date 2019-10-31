<template>
	<div id="mainloading">
		<h1 @click="gotoMain()">HoneyChu</h1>
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
	  },
	  methods: {
	    gotoMain(){
        this.$router.push({name: 'Main'})
      }
	  }
	}
</script>
