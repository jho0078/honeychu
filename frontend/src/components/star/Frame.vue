<template>

  <div id="starbucks">
    <div class="starbucks__header">

      <div class="starbucks__title">
        <i class="fas fa-chevron-left" @click="gotoMain()"></i>
          STARBUCKS
        <div></div>
      </div>
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
    </div>
    <div class="starbucks_body">
      <div class="starbucks_contents">
        <ChuCircle v-if="isRcVisible"></ChuCircle>
        <MenuCircle v-if="!isRcVisible"></MenuCircle>
      </div>
<!-- 
      <div @click="check()">
        <i class="fas fa-plus"></i>
      </div>
 -->

      <!-- 작성 버튼, 로그인시에만 보이게 -->
      <div @click="gotoMC()" class="hyeri__addCombi">
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
  name:'Starbucks',
  components: {
    MenuCircle, ChuCircle
  },
  data() {
    return {
      isRcVisible:true,
      likeList: [],
    }
  },
  mounted() {
    axios.get("/api/like")
      .then(response=>{
        this.likeList = response.data
        console.log('likeList check', this.likeList)
      })
    // this.getLikeList()
    // console.log('좀 되라', this.likeList)


  },
  methods: {
    showRc() {
      this.isRcVisible = true
    },
    showMenu() {
      this.isRcVisible = false
    },
    gotoMC(){
      Kakao.Auth.getStatus(statusObj => {
						if (statusObj.status == "not_connected") {
              alert('로그인 해주세요!')
							console.log('xxxxx')
						} else {
              this.$router.push({path:'/makeCombi'})
							console.log('ooooo')
						}
					})
      // this.$router.push({path:'/makeCombi'})
    },
    gotoMain(){
        this.$router.push({name: 'Main'})
    },
    getlikes(){

    },
    check(){
      // Kakao.init("3fba1edc8e21309d5e9c3003264a2b71");
      Kakao.Auth.getStatus(function(statusObj) {
						if (statusObj.status == "not_connected") {
							console.log('xxxxx')
						} else {
							console.log('ooooo')
						}
					})
    },
    // getLikeList() {
    //   axios.get("/api/like")
    //   .then(response=>{
    //     this.likeList = response.data
    //     console.log('likeList check', this.likeList)
    //   })
    // }


  }
}
</script>

<style>
</style>
