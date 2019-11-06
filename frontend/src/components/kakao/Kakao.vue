<template>
  <div>
    <h1>Kakao_HY</h1>
    <a id="kakao-login-btn" @click="login()"></a>
    <a href="http://developers.kakao.com/logout">로그아웃</a>
  </div>
</template>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script>
export default {
  name: "kakao",
  components: {},
  data() {
    return {};
  },
  metaInfo: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
      }
    ]
  },
  mounted() {},
  methods: {
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    login() {
      Kakao.init("3fba1edc8e21309d5e9c3003264a2b71");
      // 카카오 로그인 버튼을 생성합니다.
      Kakao.Auth.createLoginButton({
        container: "#kakao-login-btn",
        scope: "account_email",
        success: function(authObj) {
          Kakao.API.request({
            url: "/v2/user/me",
            success: function(res) {
              console.log(JSON.stringify(res.kaccount_email));
              console.log(JSON.stringify(res.id));
              console.log(JSON.stringify(res.properties.profile_image));
              console.log(JSON.stringify(res.properties.nickname));
            },
            fail: function(error) {
              alert(JSON.stringify(error));
            }
          });
        },
        fail: function(err) {
          alert(JSON.stringify(err));
        }
      });
    }
  }
};
</script>