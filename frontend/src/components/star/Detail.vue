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
    <img :src="detail.image" :alt="detail.name + '사진'">
    <div class="HSD__contents">
      <div class="HSD__title">{{detail.name}}</div>
      <div class="HSD__price">
        <div>{{detail.price}} 원</div>
        <div>( Tall 사이즈 기준 )</div>
      </div>
      <div class="HSD__recipe">
        <p><span class="HSD__base">{{detail.category}}</span>에</p>
        <div v-for="(value, index) in this.extras">
          <div  v-if= "index !=0" class="HSD__extras">{{value}}</div>
        </div>
        <div>추가해주세요.</div>
      </div>

        <p class="HSD__option">" {{combi.Option}} "</p>

      <p class="HSD__createby">{{combi.Date}} &nbsp | &nbsp; by.
        <!-- user link 달기 -->
        <b class="text-primary">{{combi.User}}</b></p>
    </div>
  </div>

</template>

<script>
import EventBus from '../../../src/EventBus.js'
// import EventBus from '../../EventBus.js'
import '@/components/star/Detail.css'
export default {
  name:'Detail',
  props:['combiId'],
  data() {
    return {
      likeEmail: '',
      likeId: '',
      like: true,
      detail: {},
      extras:[],
      combi:{
        title: '냠냠커피',
        price: 7000,
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
    Kakao.init("3fba1edc8e21309d5e9c3003264a2b71");
  },
  methods: {
    getCombi(data) {
      // 가져올함수
      axios.get("/api/star/menu/detail/" + this.combiId)
      .then(response=>{
        this.detail = response.data[0]
        this.sepHash(this.detail['hash'])
      })
    },
    sepHash(words) {
      this.extras = words.split('/')
      // console.log(this.extras)
    },
    moveToBack(){
      this.$router.push({path: '/Starbucks'})
    },
    // 좋아요함수
    likeMenu(){
      this.like = !this.like
      console.log(this.like)
      
      // // EventBus
      // EventBus.$on('getEmail', function(email){
      //   console.log('제발', email)
      // })

      Kakao.API.request({
		          url: "/v2/user/me",
		          // success: function (res) {
		          success: res => {
                console.log('2email :', res.kakao_account.email);
                this.likeEmail = res.kakao_account.email
                console.log('?', this.likeEmail)
                // this.getCombi(this.data)
                console.log('333333', this.likeId)
                // axios.post("/api/user",{email: res.kakao_account.email})
                // axios.get("api/like/menu/"+this.combiId)
				  }
      })
      console.log('555555', this.likeId)
      console.log('666666', this.likeEmail)
      axios.post("/api/like/add", {like_user_id: this.likeEmail, like_starmenu_id: this.likeId})
      .then(function(response){
          console.log('추가')
          // console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })


    }

  }
}
</script>

<style>
</style>
