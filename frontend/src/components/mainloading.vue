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
	  },
	  methods: {
	    gotoMain(){
        this.$router.push({name: 'Main'})
      }
	  }
	}
</script>
