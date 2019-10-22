<template>
  <div class="Hyeri__starDetail">
    <i @click="moveToBack()"class="Hyeri__back fas fa-angle-left"></i>

    <!-- 빈하트 함수 필요-->
    <!-- <i class="Hyeri__heart far fa-heart"></i> -->
    <!-- 찬하트 -->
    <i class="Hyeri__heart fas fa-heart"></i>

    <img :src="combi.Image" alt="">
    <div class="HSD__contents">
      <p class="HSD__title">{{combi.title}} </p>
      <p>{{combi.price}} 원 ( Tall 사이즈 기준 )</p>
      <p>{{combi.likes}} </p>
      <p>{{combi.starMenu}}</p>
      <p>{{combi.extras}}</p>
      <p>{{combi.Option}}</p>
      <p class="HSD__createby">{{combi.Date}} &nbsp | &nbsp by. <b>{{combi.User}}</b></p>
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
      combi:{
        title: '냠냠커피',
        price: 7000,
        extras: '엑스트라입니다',
        likes: '좋아요갯수요',
        starMenu:'베이스메뉴입니다',
        starTags:'TagTagTag',
        Image: 'https://i0.wp.com/baristanews.co.kr/wp-content/uploads/Starbucks_Almond_Protein_Blended_Cold_Brew_.jpg?fit=800%2C625',
        Date:'등록날짜에요',
        User:'등록한사람이요',
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
    }

  }
}
</script>

<style>


</style>
