<template>
	<div id="main">
		<div class="hyeri_maintitle">HoneyChu</div>
		<div class="hyeri_main_logos">
			<div @click="gotoStarbucks()" class="main__starbucks"><img src="../assets/starbucks_logo.png" alt="스타벅스" width=100px></div>
			<div>Subway</div>
			<div>myPage</div>
		</div>

		<div class="hyeri_loginout"> 
			<div id="kakao-login-btn"></div>
  			<div class="hyeri_logout" @click="logout()">로그아웃</div>
		</div>
		{{username==''}}
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
	    	username:'',
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
		      scope: "account_email",
		      success: function (authObj) {
		        Kakao.API.request({
		          url: "/v2/user/me",
		          success: function (res) {
		          	this.username = res.properties.nickname
		          	console.log(this.username)
		            // console.log('email :',res.kaccount_email);
		            console.log('id :', res.id);
		            console.log('profile_img :', res.properties.profile_image);
		            console.log('nickname :', res.properties.nickname);
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
