<template>
  <div id="app">
    <div>
      <h1>Mypage</h1>
      <hr />
    </div>
    <div>
      <div class="Like_HY">
        <button @click="showRc">
          <h3>좋아요한메뉴</h3>
        </button>
      </div>

      <div class="Mymenu_HY">
        <button @click="showMenu">
          <h3>내가 작성한 메뉴</h3>
        </button>
      </div>
      <div v-if="!toggle2" v-show="toggle1">좋아요</div>
      <div v-if="toggle1" v-show="toggle2">나의메뉴</div>
    </div>
  </div>
</template>

<script>
import "@/components/test_HY/Mypage.css";
export default {
  name: "Mypage",
  data() {
    return {
      toggle1: false,
      toggle2: false
    };
  },
  methods: {
    showRc() {
      (this.toggle1 = !toggle1), (this.toggle2 = false);
    },
    showMenu() {
      (this.toggle2 = !toggle2), (this.toggle1 = false);
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
