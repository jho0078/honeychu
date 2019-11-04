<template>
	<div id="main">
		<div class="hyeri_maintitle">HoneyChu</div>
		<div class="hyeri_main_logos">
			<div @click="gotoStarbucks()" class="main__starbucks">
				<img class="hyeri_starbucks_logo"src="../assets/starbucks_logo.png" alt="스타벅스" width=100px> 
			<!-- </div>	 -->
			<!-- <div class="hyeri_main_logos2"> -->
				<img class="hyeri_subway_logo" src="../assets/subway_pact.png" alt="Subway">
				<!-- <div style="background-color: darkorange; padding: 1.5rem; border-radius: 3rem; color: white;">MyPage</div> -->
			</div>
		</div>

		<div class="hyeri_loginout"> 
			<div id="kakao-login-btn"></div>
<<<<<<< HEAD
  			<div class="hyeri_logout" @click="logout()">로그아웃</div>
=======
  			<!-- <div class="hyeri_logout" @click="logout()">로그아웃</div> -->
>>>>>>> 378817d356e69ee6711124bc93db9aaca26d9858
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
	    	username:'1212123',
	    	al:1
	    }
	  },
	  mounted() {	  	
	  	this.kakao_login()
  	},

	  


	methods: {
		
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
<<<<<<< HEAD
		          	this.username = res.properties.nickname
		          	console.log(this.username)
		            // console.log('email :',res.kaccount_email);
=======
		          	console.log('res',res)
		            console.log('email :',res.kakao_account.email);
>>>>>>> 378817d356e69ee6711124bc93db9aaca26d9858
		            console.log('id :', res.id);
		            console.log('nickname :', res.properties.nickname);
		          	axios.post("/api/user",{email: res.kakao_account.email})
		            alert('로그인 되었습니다.')
		            
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
	    	this.username='';
		}
	}
}
</script>
