<template>
  <div class="">


    <div class="MakeCombi">
      <h1>게시글 작성</h1>
      <select class="namki_MakeCombi_select" v-model="Franchise">
        <option v-for="Franchise in Franchises" v-bind:value="Franchise.value">
          {{ Franchise.Name }}
        </option>
      </select>
      <textarea class="namki_MakeCombi_textarea" v-model="Title" placeholder="제목"></textarea>
      <textarea class="namki_MakeCombi_textarea" v-model="Description" placeholder="한줄설명"></textarea>

      <Accordion theme="purple" style="font-size:80%;">
        <div slot="header">커피</div>
        <div style="margin-top:5px; width=100%;">
          에스프레소 샷
          <button @click="Espresso_shots -= 1"> - </button>
            {{ Espresso_shots }}
          <button @click="Espresso_shots += 1"> + </button>
        </div>
        <hr>
        <div style="line-height:20px;">
          디카페인
            <button class="namki_button" v-for="Decaffein in Decaffeins" @click="inputDecaffein(Decaffein.value)" >{{Decaffein.Name}}</button>
        </div>


      </Accordion>

      <Accordion theme="red">
        <div slot="header">시럽</div>

      </Accordion>
      <Accordion theme="yellow">
        <div slot="header">베이스</div>
        Accordion body
      </Accordion>
      <Accordion theme="gray">
        <div slot="header">얼음</div>
        Accordion body
      </Accordion>
      <Accordion theme="purple">
        <div slot="header">휘핑크림</div>
        <div>

        </div>
      </Accordion>
      <Accordion theme="red">
        <div slot="header">드리즐</div>
        Accordion body
      </Accordion>
      <Accordion theme="yellow">
        <div slot="header">컵&리드 옵션</div>


      </Accordion>



    </div>
  </div>
</template>

<script>
import Accordion from '@/components/star/Accordion'
export default {
    name:'MakeCombi',
    components:{
      Accordion,
    },
    data() {
    return {
        Espresso_shots:0,
        Decaffein:'',

        Description: '',
        Title: '',
        Franchise: '스타벅스',
        Decaffeins: [
          { Name: '기본값', value:''},
          { Name: '디카페인', value:'디카페인'},
          { Name: '1/2 디카페인', value:'1/2 디카페인'}
      ],
        Franchises : [
          { Name: '스타벅스', value: '스타벅스'},
          { Name: '써브웨이', value: '써브웨이'}
      ],

      }
    },

    methods: {
      inputDecaffein(value) {
        this.Decaffein = value
        console.log(value)
      },



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
      max-width: 400px;
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
      /* padding: 8px; */
      overflow-wrap: break-word;
    /*   white-space: pre-wrap; */
    }

    .accordion .header-icon.rotate {
      transform: rotate(180deg);
      transition-duration: 0.3s;
    }

    .accordion.purple {
      background-color: #8c618d;
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

</style>
