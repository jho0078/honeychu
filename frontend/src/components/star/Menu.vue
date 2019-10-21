<template>
  <div>


    <div class="namki_blue">
      <h1>Menu</h1>
    </div>

    <div style="width:95vw; border:1px solid;">
      <div class="namki_sidebar" style="width:5%;">
        <div v-for = "coffee in coffees" >
            <button style="border:none; color:white; text-align: center; text-decoration: none; font-size:10px; background-color: #4CAF50;" type="button" name="button" >{{coffee.name}}</button>
        </div>
      </div>


    <div style="width:95%; height:100%; border:4px solid;">
      <h2>콜드 브루 커피</h2>
      <div v-for = "cold in colds" class="namki_blocks">
        <div>
          <img :src = "cold.coffee_image" class="namki_menuimg">
          <p>{{ cold.description }}</p>
        </div>
      </div>

      <h2>프라푸치노</h2>
      <div v-for = "prap in praps" class="namki_blocks">
        <div>
          <img :src = "prap.coffee_image" class="namki_menuimg">
          <p>{{ prap.description }}</p>
        </div>
      </div>
    </div>

    </div>

      <div class="test" style="height:80vh; width:95vw; border:1px solid">
        <div style="height:80vh; width:5%; border:1px solid">
        </div>
        <div style="height:80vh; width:10%; border:4px solid">
        </div>
      </div>




  </div>
</template>

<script>

export default {
  name:'Menu',
  data() {
    return {
      coffees: [
        {
          name : '콜드 브루 커피'
        }, {
          name : '브루드 커피'
        }, {
          name : '에스프레소'
        }, {
          name : '프라푸치노'
        }, {
          name : '블렌디드'
        }, {
          name : '스타벅스 피지오'
        }, {
          name : '티(티바나)'
        }, {
          name : '기타 제조 음료'
        },

      ],
      colds: [
        {
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2019/09/[9200000002487]_20190919181354811.jpg',
          description: '나이트로 바닐라 크림'
        }, {
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2018/04/[9200000001275]_20180409150826087.jpg',
          description: '나이트로 쇼콜라 클라우드'
        },{
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2017/03/[9200000000479]_20170328134443491.jpg',
          description: '나이트로 콜드 브루'
        },{
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909754.jpg',
          description: '돌체 콜드 브루'
        },{
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2017/04/[9200000000487]_20170405152830656.jpg',
          description: '바닐라 크림 콜드 브루'
        },
        {
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2016/04/[9200000000038]_20160408135802583.jpg',
          description: '콜드 브루'
        },
      ],
      espressos: [
        {
          coffee_image: '',
          description: ''
        }, {
          coffee_image: '',
          description: ''
        },{
          coffee_image: '',
          description: ''
        },{
          coffee_image: '',
          description: ''
        },{
          coffee_image: '',
          description: ''
        },
      ],
      praps: [
        {
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[168004]_20150813221231839.jpg',
          description: '모카 프라푸치노'
        }, {
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[168007]_20150813222212580.jpg',
          description: '에스프레소 프라푸치노'
        },{
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[168013]_20150806153343152.jpg',
          description: '화이트 초콜릿 모카 프라푸치노'
        },{
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000001906]_20190423150021926.jpg',
          description: '이천 햅쌀 크림 프라푸치노'
        },{
          coffee_image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2019/02/[9200000002090]_20190221165833026.jpg',
          description: '제주 쑥떡 크림 프라푸치노'
        },
      ],

    }
  },
  mounted() {



  },
  methods: {


  }
}
</script>

<style>

  .namki_sidebar {
    overflow-y:scroll;
    position:fixed;
    height:50%;
    border:1px solid black;
  }

  .namki_blocks{
    word-break: keep-all;
    font-size:70%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content:center;
    width: 30%;
    height: 25%;
    /* border-width: 2px;
    border-color: black;
    border-style: solid; */
  }
  .namki_menuimg {
    margin-bottom:0;
    width: 65%;
    border-radius: 50%;
  }
  .namki_blue {
    color : blue;
  }
</style>
