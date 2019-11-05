<template>
  <div id="main">
    <div class="hyeri_maintitle">
      <img src="../assets/honeychu_main.png" />
      HoneyChu
    </div>
    <ul class="hyeri_fran_list">
      <li>
        <img src="../assets/user.png" />
        <div>MY PAGE</div>
      </li>
      <li class="hyeri_starbucks_logo" @click="gotoStarbucks()">
        <img src="../assets/starbucks_logo.png" alt="스타벅스" width="100px" />
        STARBUCKS
      </li>
      <li class="hyeri_subway_logo">
        <img src="../assets/subway_pact.png" alt="Subway" />
        <div>SUBWAY</div>
      </li>
    </ul>

		<button v-on:click="getEmail">getEmail</button>


		<div class="hyeri_loginout"> 
			<div id="kakao-login-btn"></div>
  			<div class="hyeri_logout" @click="logout()">로그아웃</div>
		</div>
	</div>
</template>
<script>
	import EventBus from '../../src/EventBus.js'
	// import EventBus from '../EventBus.js'
	import '@/components/main.css'
	export default {
	  name:'Main',
	  components: {
	  },
	  data() {
	    return {
	    	username:'1212123',
	    	al:1
	    }
	  },
	  mounted() {	  	
		  this.kakao_login()
		  Kakao.Auth.getStatus(function(statusObj) {
						if (statusObj.status == "not_connected") {
							console.log('xxxxx')
						} else {
							console.log('ooooo')
						}
					})
  	},

	  


	methods: {
		getEmail() {
			Kakao.API.request({
		          url: "/v2/user/me",
		          success: function (res) {
		          	// this.username = res.properties.nickname
		          	console.log('1', this.username)
		            // console.log('email :',res.kaccount_email);
		            console.log('2id :', res.id);
					// console.log('nickname :', res.properties.nickname);
					
					// EventBus
					EventBus.$emit('getEmail', res.kakao_account.email)
				  }
			})
		},
	  	kakao_login() {  		
	  		Kakao.init("3fba1edc8e21309d5e9c3003264a2b71");
		    // 카카오 로그인 버튼을 생성합니다.
		    Kakao.Auth.createLoginButton({          
		      container: "#kakao-login-btn",
		      // scope: "account_email",
		      success: function (authObj) {
		        Kakao.API.request({
		          url: "/v2/user/me",
		          success: function (res) {
		          	// this.username = res.properties.nickname
		          	console.log(this.username)
		            // console.log('email :',res.kaccount_email);
		            console.log('id :', res.id);
					// console.log('nickname :', res.properties.nickname);
					
					// // EventBus
					// EventBus.$emit('getEmail', res.kakao_account.email)



		          	axios.post("/api/user",{email: res.kakao_account.email})
		          	axios.post("/api/user/login",{email: res.kakao_account.email})
		            alert('로그인 되었습니다.')
		            Kakao.Auth.getStatus(function(statusObj) {
						if (statusObj.status == "not_connected") {
							console.log('xxxxx')
						} else {
							console.log('ooooo')
						}
					})
   		          },
		          fail: function (error) {
		            alert(JSON.stringify(error));
		          }
		        });
		      },
		      fail: function (err) {
		        alert(JSON.stringify(err));
		      }
		    });
	  	},	
	    gotoStarbucks(){
	      this.$router.push({name:'Starbucks'})
	    },
	    logout(){
			Kakao.Auth.logout(function () {
				setTimeout(function(){
					location.href="http://localhost:8080"
				}, 1000);
		
				})
			Kakao.Auth.getStatus(function(statusObj) {
						if (statusObj.status == "not_connected") {
							console.log('xxxxx')
						} else {
							console.log('ooooo')
						}
					})
	    	this.username='';
		}
	}
}
</script>