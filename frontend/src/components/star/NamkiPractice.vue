<template>
    <div class="MakeCombi">
      <h1>게시글 작성</h1>
      <!-- 사진 업로드 -->
      <ImageUpload>
      </ImageUpload>
      <select class="namki_MakeCombi_select" v-model="Franchise">
        <option v-for="Franchise in Franchises" v-bind:value="Franchise.value">
          {{ Franchise.Name }}
        </option>
      </select>
      <textarea class="namki_MakeCombi_textarea" v-model="result.name" placeholder="제목"></textarea>
      <textarea class="namki_MakeCombi_textarea" v-model="result.description" placeholder="한줄설명"></textarea>

      <!-- 엑스트라 -->
      <div v-for= "(value, key) in Extras">
        <Accordion theme="purple">
          <div slot="header">{{ key }}</div>
          <div v-for="item in value">
            <div v-if="result[item.value] < 10">
              {{ item.name }}
              <button @click="result[item.value] = String(Number(result[item.value]) - 1)">-</button>
                {{ result[item.value] }}
              <button @click="result[item.value] = String(Number(result[item.value]) + 1)">+</button>
              <hr>
            </div>

            <div v-else>
              {{ item.name }}
              <div style="display:inline;" v-for="(value, key) in item.type">
                  <button class="namki_button" :class="{namki_button_active : result[item.value] == value}" @click="result[item.value]=value">{{value}}</button>
              </div>
            </div>
          </div>
        </Accordion>
      </div>

    </div>
</template>

<script>
import Accordion from '@/components/star/Accordion'
import ImageUpload from '@/components/star/ImageUpload'

export default {
    name:'NamkiPractice',
    components:{
      Accordion,
      ImageUpload,
    },
    data() {
      return {
          Franchise:'',
          result: {
            "name":"돌체라떼",
            "description":"",
            "price": 6300,
            "category": "에스프레소",
            "tag1": "",
            "tag2": "",
            "image": "",
            "espresso_shot": '1',
            "decaf_espresso_shot": '0',
            "half_decaf_espresso_shot": '0',
            "frappuccino_roast_shot": '0',
            "vanilla_syrup": '0',
            "hazelnut_syrup": '0',
            "caramel_syrup": '2',
            "dolche_syrup": '0',
            "classic_syrup": '4',
            "chocolat_syrup": '0',
            "toffeenut_syrup": '0',
            "mocha_syrup": '0',
            "white_mocha_syrup": '0',
            "brown_sugur_syrup": '0',
            "frappuccino_syrup": '없이',
            "mint_chocolate_sauce": '없이',
            "strawberry_mix": null,
            "black_sesame_syrup": null,
            "honey_grapefruit_sauce": null,
            "chai_syrup": null,
            "water_base": '적게',
            "vanilla_cream_base": null,
            "black_tea_base": null,
            "passion_tango_tea_base": null,
            "cool_lime_bse": null,
            "lemonade_base": null,
            "ice": '적게',
            "milk": null,
            "milk_temp": null,
            "milk_bubble": null,
            "milk_quantity": null,
            "general_whipping": null,
            "espresso_whipping": null,
            "cold_foam": null,
            "mugwort_whipping": null,
            "caramel_drizzle": null,
            "chocolate_drizzle": null,
            "lemon_slice": null,
            "rosemary": null,
            "grapefruit_slice": null,
            "javachip": null,
            "javachip_and_topping": null,
            "tong_javachip_topping": null,
            "toffeenut_topping": null,
            "rice_topping": null,
            "black_soboro_topping": null,
            "ricecake_topping": null,
            "topping": null,
            "mugwort_powder_topping": null,
            "chocolat_topping": null,
            "orange_essence": null,
            "sparkling": null,
            "green_tea_powder": null,
            "rice_powder": null,
            "mugwort_powder": null,
            "black_sesame_rice_cake": null,
            "mango_juice": null,
            "signature_chocolate": null,
            "hash": "12345"
          },


          Extras: {
            '커피': [
              { name: '에스프레소샷', value: "espresso_shot" },
              { name: '디카페인', value: "decaf_espresso_shot"},
              { name: '1/2디카페인', value: "half_decaf_espresso_shot"},
              { name: '프라푸치노 로스트 샷', value: "frappuccino_roast_shot"}
            ],
            '시럽': [
              { name: '바닐라 시럽', value: "vanilla_syrup"},
              { name: '헤이즐넛 시럽', value: "hazelnut_syrup"},
              { name: '카라멜 시럽', value: "caramel_syrup"},
              { name: '돌체 시럽', value: "dolche_syrup"},
              { name: '클래식 시럽', value: "classic_syrup"},
              { name: '쇼콜라 시럽', value: "chocolat_syrup"},
              { name: '토피 넛 시럽', value: "toffeenut_syrup"},
              { name: '모카 시럽', value: "mocha_syrup"},
              { name: '화이트 모카 시럽', value: "white_mocha_syrup"},
              { name: '흑당 시럽', value: "brown_sugur_syrup"},
              { name: '프라푸치노용 시럽', value: "frappuccino_syrup", type:['없이', '일반', '라이트']},
              { name: '민트 초콜릿 소스', value: "mint_chocolate_sauce", type:['없이', '적게', '보통']},
              { name: '딸기 믹스', value: "strawberry_mix"},
              { name: '흑임자 시럽', value: "black_sesame_syrup", type:['없이', '적게', '보통']},
              { name: '허니자몽소스', value: "honey_grapefruit_sauce"},
              { name: '차이 시럽', value: "chai_syrup"},
            ],
            '베이스': [
              { name: '물', value:'water_base', type:['없이', '적게', '보통', '많이']},
              { name: '바닐라 크림 베이스', value:'vanilla_cream_base', type:['없이', '적게', '보통']},
              { name: '블랙 티', value:'black_tea_base', type:['없이', '적게', '보통', '많이']},
              { name: '패션 탱고 티', value:'passion_tango_tea_base', type:['없이', '적게', '보통', '많이']},
              { name: '쿨라임 베이스', value:'cool_lime_bse', type:['없이', '적게', '보통', '많이']},
              { name: '레모네이드', value:'lemonade_base', type:['없이', '적게', '보통', '많이']},
            ],
            '얼음': [
              { name: '얼음', value:'ice', type:['없이', '적게', '보통', '많이']},
            ],
            '우유': [
              { name: '우유', value:'milk', type:['없이', '저지방', '무지방', '두유']},
              { name: '우유 온도', value:'milk_temp', type:['없이', '덜 뜨겁게', '많이 뜨겁게']},
              { name: '우유 거품', value:'milk_bubble', type:['없이', '적게', '많이']},
              { name: '우유양', value:'milk_quantity', type:['없이', '기본', '적게']},
            ],
            '휘핑 크림': [
              { name: '일반 휘핑', value:'general_whipping', type:['없이', '적게', '보통', '많이']},
              { name: '에스프레소 휘핑', value:'espresso_whipping', type:['없이', '적게', '보통', '많이']},
              { name: '콜드 폼(콜드 브루)', value:'cold_foam', type:['없이', '적게', '보통', '많이']},
              { name: '쑥 휘핑', value:'mugwort_whipping', type:['없이', '적게', '보통', '많이']},
            ],
            '드리즐': [
              { name: '카라멘 드리즐', value:'caramel_drizzle', type:['없이', '적게', '보통', '많이']},
              { name: '초콜릿 드리즐', value:'chocolate_drizzle', type:['없이', '적게', '보통', '많이']},
            ],
            '과일&채소': [
              { name: '레몬 슬라이스', value:'lemon_slice', type:['없이', '보통']},
              { name: '로즈마리', value:'rosemary', type:''},
              { name: '자몽 슬라이스', value:'grapefruit_slice', type:['없이', '보통']},
            ],
            '자바칩': [
              { name: '자바칩', value:'javachip'},
              { name: '자바칩 &토핑(반반)', value:'javachip_and_topping'},
              { name: '통 자바칩 토핑', value:'tong_javachip_topping'},

            ],
            '토핑': [
              { name: '토피 넛 토핑', value:'toffeenut_topping', type:['없이', '적게', '보통']},
              { name: '라이스 토핑', value:'rice_topping', type:['없이', '적게', '보통', '많이']},
              { name: '블랙 소보로 토핑', value:'black_soboro_topping', type:['없이', '적게', '보통']},
              { name: '떡 토핑', value:'ricecake_topping', type:['없이', '적게', '보통']},
              { name: '토핑', value:'topping', type:['없이', '적게', '보통', '많이']},
              { name: '쑥 파우더 토핑', value:'mugwort_powder_topping', type:['없이', '적게', '보통']},
              { name: '쇼콜라 토핑', value:'chocolat_topping', type:['없이', '적게', '보통']},
            ],
            '기타': [
              { name: '오렌지 에센스', value:'orange_essence'},
              { name: '스파클링', value:'sparkling', type:['없이', '라이트', '미디엄', '엑스트라']},
              { name: '그린티 파우더 ', value:'green_tea_powder'},
              { name: '라이스 파우더', value:'rice_powder'},
              { name: '쑥 파우더', value:'mugwort_powder', type:['적게', '보통']},
              { name: '흑임자떡 ', value:'black_sesame_rice_cake', type:['없이', '적게', '보통']},
              { name: '망고 주스', value:'mango_juice', type:['적게', '보통', '많이']},
              { name: '시그니처 초콜릿', value:'signature_chocolate', type:['연하게', '진하게', '보통']},
            ],

        },


        Franchises : [
          { Name: '스타벅스', value: '스타벅스'},
          { Name: '써브웨이', value: '써브웨이'}
      ],


        }
      },

    methods: {

    },
}
</script>

<style>
    .namki_button {
      padding: 5px 5px;
      border: 1px solid #ddd;
      color: #333;
      background-color:#fff;
      border-radius: 4px;
      font-size: 10px;
      cursor: pointer;
    }

    .MakeCombi {
        width: 97%;
    }
    .namki_MakeCombi_textarea {
      width:100%;
      border-radius: 6px;
    }
    .namki_MakeCombi_select {
      margin-bottom:5px;
      width: 102%; /* 원하는 너비설정 */
      padding: .8em .5em; /* 여백으로 높이 설정 */
      font-family: inherit;  /* 폰트 상속 */
      border: 1px solid #999;
      border-radius: 6px;
      -webkit-appearance: none; /* 네이티브 외형 감추기 */
      -moz-appearance: none;
      appearance: none;
      background-color: white;
      background: url('https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg') no-repeat 95% 50%;
    }
    .accordion {
      width:95vw;
      font-family: Lato;
      /* margin-bottom: 20px; */

      background-color: #ec5366;
      border-radius: 6px;
    }

    .accordion .header {
      height: 40px;
      line-height: 40px;
      padding: 0 40px 0 8px;
      position: relative;
      color: #fff;
      cursor: pointer;
    }

    .accordion .header-icon {
      position: absolute;
      top: 5px;
      right: 8px;
      transform: rotate(0deg);
      transition-duration: 0.3s;
    }

    .accordion .body {
    /*   display: none; */
      overflow: hidden;
      background-color: #fff;
      border: 10px solid #ec5366;
      border-top: 0;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      transition: 150ms ease-out;
    }

    .accordion .body-inner {
      padding: 8px;
      overflow-wrap: break-word;
      /* white-space: pre-wrap; */
    }

    .accordion .header-icon.rotate {
      transform: rotate(180deg);
      transition-duration: 0.3s;
    }

    .accordion.purple {
      background-color: #8c618d;
      border: 1px solid;

    }

    .accordion.purple .body {
      border-color: #8c618d;
    }
    .accordion.red {
      background-color: #c03333;
    }

    .accordion.red .body {
      border-color: #c03333;
    }
    .accordion.yellow {
      background-color: #e8f719;
    }

    .accordion.yellow .body {
      border-color: #e8f719;
    }
    .accordion.gray {
      background-color: #5c575c;
    }

    .accordion.gray .body {
      border-color: #5c575c;
    }

    .namki_button_active{
      background-color: red;
    }
</style>
