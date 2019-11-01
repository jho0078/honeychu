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
      <div class="HSD__price">
        <div>{{combi.price}} 원</div>
        <div>( Tall 사이즈 기준 )</div>
      </div>
      <div class="HSD__recipe">
        <p><span class="HSD__base">{{combi.starMenu}}</span>에</p>
        <div class="HSD__extras" v-for="extra in combi.extras">{{extra.name}}</div>
        <div>추가해주세요.</div>
        <p class="HSD__option">" {{combi.Option}} "</p>
      </div>
      <p class="HSD__createby">{{combi.Date}} &nbsp | &nbsp; by.
        <!-- user link 달기 -->
        <b class="text-primary">{{combi.User}}</b></p>
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
        extras: [
          {
            id: 1,
            name: '에스프레소 샷 2'
          },
          {
            id: 2,
            name: '에스프레소 휘핑 적게'
          },
          {
            id: 7,
            name: '바닐라 시럽 2펌핑'
          }
        ],
        likes: '1232',
        starMenu:'에스프레소 프라푸치노',
        starTags:'TagTagTag',
        Image: 'https://i0.wp.com/baristanews.co.kr/wp-content/uploads/Starbucks_Almond_Protein_Blended_Cold_Brew_.jpg?fit=800%2C625',
        Date:'2019년 10월 22일',
        User:'혜리츄',
        Option:'얼음은 살짝만 갈아주세요'
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
