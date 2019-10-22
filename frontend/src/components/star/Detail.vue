<template>
  <div class="starDetail">
    <h1>나와라!디테일!{{this.combiId}}</h1>
    <div class="">
      <img :src="combi.Image" alt="">
      <p>{{combi.title}} </p>
      <p>{{combi.price}}원 ( Tall 사이즈 기준 )</p>
      <p>{{combi.likes}} </p>
      <p>{{combi.starMenu}}</p>
      <p>{{combi.extras}}</p>
      <p>{{combi.Date}}</p>
      <p>{{combi.User}}</p>
      <p>{{combi.Option}}</p>
    </div>

  </div>

</template>

<script>


export default {
  name:'Detail',
  props:['combiId'],
  data() {
    return {
      combiId: this.$route.query.combiId,
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
      console.log(data)
    }

  }
}
</script>

<style>


</style>
