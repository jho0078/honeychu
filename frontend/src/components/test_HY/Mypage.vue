<template>
  <div id="app">
    <div>
      {{userEmail}}
      <h1>Mypage</h1>
      <hr />
    </div>
    <div>
      <div class="Like_HY">
        <button @click="showLike_HY()">
          <h3>좋아요한메뉴</h3>
        </button>
      </div>

      <div class="Mymenu_HY">
        <button @click="showMyMenu_HY()">
          <h3>내가 작성한 메뉴</h3>
        </button>
      </div>
      <div v-if="isRcVisible">
      </div>
      <div v-if="!isRcVisible">
        나의메뉴
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/test_HY/Mypage.css";
// import MenuCircle from "@/components/star/MenuCircle";
// import ChuCircle from "@/components/star/ChuCircle";
// import Chu from "@/components/star/Chu";
export default {
  name: "Mypage",
  components: {
    // MenuCircle,
    // ChuCircle,
    // Chu
  },
  props:['userEmail'],
  data() {
    return {
      isRcVisible: true,
      likeMenu: [],
      myMenu: []
    };
  },
  mounted() {
    axios.post("/api/user/userid", {email: this.userEmail})
      .then(response => {
        console.log('??', response.data)
        console.log('good', response.data[0].user_id)
      })
    // axios.get("/api/star/menu")
    //   .then(response=>{
    //     this.myMenu = response.data
    //     console.log('myMenu check', this.myMenu)
    //   })
  },
  methods: {
    showLike_HY() {
      this.isRcVisible = true;
    },
    showMyMenu_HY() {
      this.isRcVisible = false;
    },
  }
};
</script>
