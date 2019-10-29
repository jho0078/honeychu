<template>

  <div id="starbucks">
    <h1>STARBUCKS</h1>
    <div class="starbucks_body">
      <div class="starbucks_menubar">
        <div class="starbucks__menubutton text-white"
              :class="{ primary : isRcVisible, gray:!isRcVisible }" @click="showRc()">
           Recommend
        </div>
        <div class="starbucks__menubutton text-white"
        :class="{ primary : !isRcVisible, gray:isRcVisible }" @click="showMenu()">
           Menu
        </div>
      </div>
      <div class="starbucks_contents">
        <ChuCircle v-if="isRcVisible"></ChuCircle>
        <MenuCircle v-if="!isRcVisible"></MenuCircle>
      </div>
    </div>
  </div>
</template>

<script>

import MenuCircle from '@/components/star/MenuCircle'
import ChuCircle from '@/components/star/ChuCircle'
export default {
  name:'Frame',
  components: {
    MenuCircle, ChuCircle
  },
  data() {
    return {
      isRcVisible:true
    }
  },
  mounted() {



  },
  methods: {
    showRc() {
      this.isRcVisible = true
    },
    showMenu() {
      this.isRcVisible = false
    }


  }
}
</script>

<style>
#starbucks {
  position: absolute;
  top:0;
  left: 0;
  font-family: 'Kanit', sans-serif;
}
body {
  /* background: url("../assets/honey.png") no-repeat; */
  background-size: cover;
}
.primary{
  background-color: #0b421a;
}
.gray{
  background-color: #d0d1d1;
}
.text-gray{
  color: #d0d1d1;
}
.text-white{
  color:white;
}
.text-primary{
  color: #0b421a;
}
.starbucks_menubar{
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}
.starbucks__menubutton{
  width:8rem;
  padding: 0.5rem 0;
  border-radius: 0.7rem;
  text-align: center;
}

</style>
