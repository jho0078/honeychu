<template>
	<div id="main">
		<div>
			<div @click="gotoStarbucks()" class="main__starbucks"><img src="../assets/starbucks_logo.png" alt="스타벅스" width=100px></div>
			<div>Subway</div>
			<div>myPage</div>
		</div>
		<div>
			{{username}}
			<a :v-if="!username" id="kakao-login-btn" @click="login()"></a>
			<div>{{username}}</div>
  			<div :v-if="username" class="logout" @click="logout()">로그아웃</div>
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
		          	this.username = res.properties.nickname;
		          	
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
		    console.log(this.username)
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
