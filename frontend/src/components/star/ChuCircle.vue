<template>
  <div id="ChuCircle">
    <div v-for = "cold in colds" class="namki_blocks">
      <div  @click="goToDetail(cold.id)">
        <img :src = "cold.coffee_image" class="namki_menuimg">
        <p>{{ cold.description }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import '@/components/star/ChuCircle.css'
export default {
  name:'Menu',
  data() {
    return {
      colds: [
        {
          id:1,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2019/09/[9200000002487]_20190919181354811.jpg',
          description: '나이트로 바닐라 크림'
        }, {
          id:2,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2018/04/[9200000001275]_20180409150826087.jpg',
          description: '나이트로 쇼콜라 클라우드'
        },{
          id:3,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2017/03/[9200000000479]_20170328134443491.jpg',
          description: '나이트로 콜드 브루'
        },{
          id:4,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909754.jpg',
          description: '돌체 콜드 브루'
        },{
          id:5,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2017/04/[9200000000487]_20170405152830656.jpg',
          description: '바닐라 크림 콜드 브루'
        },
        {
          id:6,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2016/04/[9200000000038]_20160408135802583.jpg',
          description: '콜드 브루'
        },
        {
          id:7,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[168004]_20150813221231839.jpg',
          description: '모카 프라푸치노'
        }, {
          id:7,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[168007]_20150813222212580.jpg',
          description: '에스프레소 프라푸치노'
        },{
          id:7,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[168013]_20150806153343152.jpg',
          description: '화이트 초콜릿 모카 프라푸치노'
        },{
          id:7,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000001906]_20190423150021926.jpg',
          description: '이천 햅쌀 크림 프라푸치노'
        },{
          id:7,
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2019/02/[9200000002090]_20190221165833026.jpg',
          description: '제주 쑥떡 크림 프라푸치노'
        },
      ],
    }
  },
  mounted() {
  },
  methods: {

    goToDetail(combiId) {
      this.$router.push({path: '/Starbucks/' + combiId})
    },
  }
}
</script>

<style>
</style>
