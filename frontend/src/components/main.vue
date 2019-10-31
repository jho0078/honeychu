<template>
	<div id="main">
		<div>
			<div @click="gotoStarbucks()" class="main__starbucks"><img src="../assets/starbucks_logo.png" alt="스타벅스" width=100px></div>
			<div>Subway</div>
			<div>myPage</div>
		</div>
		<div>
			<div>로그인</div>
			<div>회원가입</div>
		</div>
	</div>
</template>
<script>
	import '@/components/main.css'
	export default {
	  name:'Main',
	  components: {
	  },
	  data() {
	    return {
	    }
	  },
	  mounted() {
	  },
	  methods: {
	    gotoStarbucks(){
	      this.$router.push({name:'Starbucks'})
	    }
	  }
	}
</script>
