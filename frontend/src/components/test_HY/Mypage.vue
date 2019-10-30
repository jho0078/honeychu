<template>
  <div id="app">
    <div>
      <h1>Mypage</h1>
      <hr />
    </div>
    <div>
      <div class="Like_HY">
        <button @click="showLike()">
          <h3>좋아요한메뉴</h3>
        </button>
      </div>

      <div class="Mymenu_HY">
        <button @click="showMyMenu()">
          <h3>내가 작성한 메뉴</h3>
        </button>
      </div>
      <div v-if="isRcVisible">
        <Chu></Chu>
      </div>
      <div v-if="!isRcVisible">나의메뉴</div>
    </div>
  </div>
</template>

<script>
import "@/components/test_HY/Mypage.css";
import MenuCircle from "@/components/star/MenuCircle";
import ChuCircle from "@/components/star/ChuCircle";
import Chu from "@/components/star/Chu";
export default {
  name: "Mypage",
  components: {
    MenuCircle,
    ChuCircle,
    Chu
  },
  data() {
    return {
      isRcVisible: true
    };
  },
  methods: {
    showLike() {
      this.isRcVisible = true;
    },
    showMyMenu() {
      this.isRcVisible = false;
    }
    // toggle1Show() {
    //   this.istoggle1 = !istoggle1;
    //   this.istoogle2 = false;
    // },
    // toggle2Show() {
    //   this.istoggle2 = !istoggle2;
    //   this.istoogle1 = false;
    // }
  }
};
</script>
