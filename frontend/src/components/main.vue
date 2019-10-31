<template>
	<div id="main">
		<div>
			<div @click="gotoStarbucks()" class="main__starbucks"><img src="../assets/starbucks_logo.png" alt="스타벅스" width=100px></div>
			<div>Subway</div>
			<div>myPage</div>
		</div>
		<div>
			<a id="kakao-login-btn"></a>
  			<a href="http://developers.kakao.com/logout">로그아웃</a>
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
		            console.log(JSON.stringify(res.kaccount_email));
		            console.log(JSON.stringify(res.id));
		            console.log(JSON.stringify(res.properties.profile_image));
		            console.log(JSON.stringify(res.properties.nickname));
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
	    }
	  }
	}
</script>
