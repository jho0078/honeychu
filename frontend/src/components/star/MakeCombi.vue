<template>
    <div id="MakeCombi">
      <div class="Hyeri__makecombi_header">

        <!-- 뒤로가기 부분입니당 i태그 둘 다 뒤로가게해주센 -->
        <i class="fas fa-angle-left" @click="goBack()"></i>
        <h2>메뉴 추가</h2>
        <i style="color:rgb(118, 254, 84); font-size: 1.3rem" class="fas fa-check" @click="CreateMenu()"></i>
      </div>

      <!-- 사진 업로드 -->
      <div class="Hyeri__uploadbox">
        <img v-if="previewImage" :src="previewImage" class="namki_uploadingimage">
        <div class="Hyeri__filebox">
          <input id="Hyeri__imageupload" type="file" accept="image/jpeg/jpg/png" @change="uploadImage">
          <label for="Hyeri__imageupload" v-if="!previewImage">사진을 추가해주세요</label>
          <label for="Hyeri__imageupload" v-if="previewImage">사진 변경하기</label>
        </div>
      </div>

      <!-- select들 -->
      <select class="namki_MakeCombi_select" v-model="Franchise">
        <option value="" disabled selected hidden>프랜차이즈를 선택해주세요</option>
        <option v-for="Franchise in Franchises" v-bind:value="Franchise.value">
          {{ Franchise.Name }}
        </option>
      </select>

      <select class="namki_MakeCombi_select" v-model="selected_category">
        <option value="" disabled selected hidden>카테고리를 선택해주세요</option>
        <option v-for="category in Object.keys(BasicCoffees)" v-bind:value="category">
          {{ category }}
        </option>
      </select>

      <select @change="ChooseCoffee($event)" class="namki_MakeCombi_select">
        <option disabled selected hidden>음료를 골라주세요</option>
        <option  v-for="BasicCoffee in BasicCoffees[selected_category]" v-bind:value="BasicCoffee.starmenu_id">
          {{ BasicCoffee.name }}
        </option>
      </select>

      <!-- 타이틀 -->
      <input class="namki_MakeCombi_textarea" @change="Result.name=$event.target.value" placeholder="메뉴 이름을 설정해주세요."></input>
      <!-- <input type="text" v-model="Result.tag1"> -->
      <!-- <input type="text" v-model="Result.tag2"> -->

      <!-- 엑스트라 -->
      <h3>엑스트라 변경사항</h3>
      <div v-for= "(v, key) in Extras">
        <Accordion theme="hyeri">
          <div slot="header">{{ key }}</div>
          <div v-for="(item, index) in v">
            <div class="Hyeri__extraitems"v-if="Result[item.value] < 10">
              <div>{{ item.name }}</div>
              <div class="Hyeri__extrabuttons">

                <div @click="PlusMinus(false, item)">-</div>
                  &nbsp;&nbsp;{{ Result[item.value] }}&nbsp;&nbsp;
                <div @click="PlusMinus(true, item)">+</div>

              </div>
            </div>

            <div class="Hyeri__extraitems" v-else>
              <div>{{ item.name }}</div>
              <div  class="Hyeri__extra2buttons">
                  <div v-for="(value, key) in item.type" class="namki_button" :class="{namki_button_active : Result[item.value] == value}" @click="Result[item.value]=value">{{value}}</div>
              </div>
            </div>
            <hr  v-if="index < v.length-1">
          </div>
        </Accordion>
      </div>
      <!-- <button @click="CreateMenu" type="submit" name="button">제출</button> -->
      <!-- <button @click="CreateHash()" type="button" name="button">asd</button> -->
    </div>
</template>

<script>
import Accordion from '@/components/star/Accordion'
import '@/components/star/MakeCombi.css'

export default {
    name:'MakeCombi',
    components:{
      Accordion,

    },
    data() {
      return {
          previewImage:null,
          BasicCoffees: {},
          Result: {},
          Result2: {},
          hash: '',

          Franchise:'',
          selected_category:'',

          Extras: {
            '커피': [
              { name: '에스프레소샷', value: "espresso_shot" },
              { name: '디카페인', value: "decaf_espresso_shot"},
              { name: '0.5디카페인', value: "half_decaf_espresso_shot"},
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
              { name: '카라멜 드리즐', value:'caramel_drizzle', type:['없이', '적게', '보통', '많이']},
              { name: '초콜릿 드리즐', value:'chocolate_drizzle', type:['없이', '적게', '보통', '많이']},
            ],
            '과일&채소': [
              { name: '레몬 슬라이스', value:'lemon_slice', type:['없이', '보통']},
              { name: '로즈마리', value:'rosemary', type:['없이', '보통']},
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
            { Name: '서브웨이', value: '서브웨이'}
          ],


      }
    },

    created: function() {
      this.getBasicCoffees()

    },

    methods: {
      PlusMinus(bool, item) {
        if (bool==true) {
          if (this.Result[item.value]> 8) { return }
          this.Result[item.value] = Number(this.Result[item.value]) + 1
        }
        else {
          if (this.Result[item.value] < 1) {return}
          this.Result[item.value] = Number(this.Result[item.value]) - 1
        }
      },
      goBack() {
        this.$router.replace('Starbucks')
      },
      Test(prop) {
        for (let [key, value] of Object.entries(this.Extras)) {
            for (let [keyy, valuee] of Object.entries(this.Extras[key])){
              // console.log(valuee['value'])
              if (valuee['value'] == prop) {
                return valuee['name']
              }
            }
          }


      },

      uploadImage(e){
          const image = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = e =>{
              this.previewImage = e.target.result;
              console.log(this.previewImage);

          };
      },

      getBasicCoffees() {
        axios.get('/api/star/menu/basic/')
          .then(response=>{
            // console.log(response.data)
            for(let bever of response.data) {
              console.log(bever.category)
              if(bever.category in this.BasicCoffees){
                console.log('있음')
                console.log(bever.category)
                console.log(this.BasicCoffees[bever.category])
                this.BasicCoffees[bever.category].push(bever)
              }else{
                console.log('없음')
                this.BasicCoffees[bever.category] = [bever]
              }
            }
            // this.BasicCoffees = response.data
            console.log(Object.keys(this.BasicCoffees))
          })
      },

      ChooseCoffee(event) {
        axios.get("/api/star/menu/detail/"+event.target.value)
          .then(response=>{
            this.Result = response.data[0]
            this.Result['category'] = this.Result['name']
            this.Result['basic_menu'] = 0

            for (let [key, value] of Object.entries(this.Result)) {
              this.Result2[key] = value
            }
            this.Result2['name'] = null
            delete this.Result2['starmenu_id']
            delete this.Result2['name'],
            delete this.Result2['tag1'],
            delete this.Result2['tag2']
            delete this.Result2['image']
            delete this.Result2['hash']
          })

      },

      CreateHash() {
        this.Result['hash'] = this.Result['category'] + '/'
        for (var prop in this.Result2) {
          if(this.Result2[prop] != this.Result[prop]) {
            const extra = this.Test(prop)
            this.Result['hash'] += extra + ' '
            this.Result['hash'] += this.Result[prop] + '/'
          }
        }
      },

      CreateMenu() {
        this.CreateHash()
        this.Result['image'] = this.previewImage
        axios.post("/api/star/menu/", this.Result)
        .then(function(response){
          if (response.data.success == false) {
              alert('이미 있는 메뉴입니다.')
          }
          else {
            confirm('등록완료')
            window.location.href="Starbucks";
          }
        })
        .catch(function (error) {
        })
      },
      goBack() {
      window.history.back()
      },
    },
}
</script>

<style>
</style>