<template>
  <div class="Hyeri__starDetail">
    <div class="HSD__Header">
      <i @click="moveToBack()"class="Hyeri__back fas fa-angle-left"></i>

      <!-- 좋아요 -->
      <div class="HSD__like">
        <div > {{combi.likes}} </div>
        <i v-if="!like" @click="likeMenu()" class="Hyeri__heart far fa-heart"></i>
        <i v-if="like" @click="likeMenu()" class="Hyeri__heart fas fa-heart"></i>
      </div>
    </div>
    <img :src="combi.Image" :alt="combi.title + '사진'">
    <div class="HSD__contents">
      <div class="HSD__title">{{combi.title}}</div>
      <div class="HSD__price"><span class="text-primary">{{combi.price}} 원</span> / Tall 사이즈 기준 </div>
      <p>{{combi.starMenu}} 에</p>
      <p>{{combi.extras}}</p>
      <p>{{combi.Option}}</p>
      <p class="HSD__createby">{{combi.Date}} &nbsp | &nbsp by. <b class="text-primary">{{combi.User}}</b></p>
    </div>
  </div>

</template>

<script>
import '@/components/star/Detail.css'
export default {
  name:'Detail',
  props:['combiId'],
  data() {
    return {
      like: true,
      combi:{
        title: '냠냠커피',
        price: 7000,
        extras: '엑스트라입니다',
        likes: '1232',
        starMenu:'에스프레소프라푸치노',
        starTags:'TagTagTag',
        Image: 'https://i0.wp.com/baristanews.co.kr/wp-content/uploads/Starbucks_Almond_Protein_Blended_Cold_Brew_.jpg?fit=800%2C625',
        Date:'2019년 10월 22일',
        User:'혜리츄',
        Option:'추가 요구사항이요'
      }

    }
  },
  mounted() {
    this.getCombi(this.combiId)


  },
  methods: {
    getCombi(data) {
      // 가져올함수
      console.log('combiId:', data)
    },
    moveToBack(){
      this.$router.push({path: '/Starbucks'})
    },
    // 좋아요함수
    likeMenu(){
      this.like = !this.like
    }

  }
}
</script>

<style>


</style>
