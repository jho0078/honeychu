<template>
	<div id="login">
		<h2>로그인</h2>
		<div class="hyeri_loginout"> 
			<div id="kakao-login-btn"></div>
  			<!-- <div class="hyeri_logout" @click="logout()">로그아웃</div> -->
		</div>
	</div>	
</template>
<script>
	import '@/components/login.css'
	export default {
	  name:'Login',
	  components: {
	  },
	  data() {
	    return {
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
		          	console.log('res',res)
		            console.log('email :',res.kakao_account.email);
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
	    logout(){
		}
	}
}

</script>