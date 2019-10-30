<template>

  <div id="starbucks">
    <div class="starbucks__header">
      <div class="starbucks__title">STARBUCKS</div>
      <div class="starbucks_menubar">
        <div class="starbucks__menubutton"
              :class="{ hyeri__smActive : isRcVisible}" @click="showRc()">
           Recommend
        </div>
        <div class="starbucks__menubutton"
        :class="{ hyeri__smActive : !isRcVisible}" @click="showMenu()">
           Menu
        </div>
      </div>
      <div class="hyeri__menuendline"></div>
    </div>
    <div class="starbucks_body">     
      <div class="starbucks_contents">
        <ChuCircle v-if="isRcVisible"></ChuCircle>
        <MenuCircle v-if="!isRcVisible"></MenuCircle>
      </div>

      <!-- 작성 버튼, 로그인시에만 보이게 -->
      <div class="hyeri__addCombi">
        <i class="fas fa-plus"></i>
      </div>
    </div>
  </div>
</template>

<script>

import MenuCircle from '@/components/star/MenuCircle'
import ChuCircle from '@/components/star/ChuCircle'
import '@/components/star/Frame.css'
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
</style>
