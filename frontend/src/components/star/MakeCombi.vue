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

      <!-- 커피 -->
      <Accordion theme="purple">
        <div slot="header">커피</div>
        <div v-for="item in coffee">
          <div v-if="typeof(item.value) === 'number'">
            {{ item.name }}
            <button @click="item.value--">-</button>
              {{ item.value }}
            <button @click="item.value++">+</button>
            <hr>
          </div>

          <div v-if="typeof(item.value) === 'object'">
            {{ item.name }}
            <div style="display:inline;" v-for="i in item.value">
              <button class="namki_button"  @click="Decaffein=i.value" >{{i.Name}}</button>
            </div>
          </div>
        </div>
      </Accordion>

      <!-- 시럽 -->
      <Accordion theme="red">
        <div slot="header">시럽</div>
        <div v-for="item in syrup">
          <div v-if="typeof(item.value) === 'number'">
            {{ item.name }}
            <button @click="item.value--">-</button>
              {{ item.value }}
            <button @click="item.value++">+</button>
            <hr>
          </div>

          <div v-if="typeof(item.value) === 'object'">
            {{ item.name }}
            <div style="display:inline;" v-for="i in item.value">
              <button class="namki_button"  @click="Decaffein=i.value" >{{i.Name}}</button>
            </div>
          </div>
        </div>
      </Accordion>

      <!-- 베이스 -->
      <Accordion theme="yellow">
        <div slot="header">베이스</div>
        <div v-for="item in base">
          <div v-if="typeof(item.value) === 'number'">
            {{ item.name }}
            <button @click="item.value--">-</button>
              {{ item.value }}
            <button @click="item.value++">+</button>
            <hr>
          </div>

          <div v-if="typeof(item.value) === 'object'">
            {{ item.name }}
            <div style="display:inline;" v-for="i in item.value">
              <button class="namki_button"  @click="Base=i.value" >{{i.Name}}</button>
            </div>
            <hr>
          </div>
        </div>
      </Accordion>

      <!-- 얼음 -->
      <Accordion theme="gray">
        <div slot="header">얼음</div>
        <div v-for="item in ice">
          <div v-if="typeof(item.value) === 'number'">
            {{ item.name }}
            <button @click="item.value--">-</button>
              {{ item.value }}
            <button @click="item.value++">+</button>
            <hr>
          </div>

          <div v-if="typeof(item.value) === 'object'">
            {{ item.name }}
            <div style="display:inline;" v-for="i in item.value">
              <button class="namki_button"  @click="Ice=i.value" >{{i.Name}}</button>
            </div>
            <hr>
          </div>
        </div>
      </Accordion>

      <!-- 휘핑크림 -->
      <Accordion theme="purple">
        <div slot="header">휘핑크림</div>
        <div v-for="item in whippedcream">
          <div v-if="typeof(item.value) === 'number'">
            {{ item.name }}
            <button @click="item.value--">-</button>
              {{ item.value }}
            <button @click="item.value++">+</button>
            <hr>
          </div>

          <div v-if="typeof(item.value) === 'object'">
            {{ item.name }}
            <div style="display:inline;" v-for="i in item.value">
              <button class="namki_button"  @click="Ice=i.value" >{{i.Name}}</button>
            </div>
            <hr>
          </div>
        </div>
      </Accordion>

      <!-- 드리즐 -->
      <Accordion theme="red">
        <div slot="header">드리즐</div>
        <div v-for="item in drizzle">
          <div v-if="typeof(item.value) === 'number'">
            {{ item.name }}
            <button @click="item.value--">-</button>
              {{ item.value }}
            <button @click="item.value++">+</button>
            <hr>
          </div>

          <div v-if="typeof(item.value) === 'object'">
            {{ item.name }}
            <div style="display:inline;" v-for="i in item.value">
              <button class="namki_button"  @click="Ice=i.value" >{{i.Name}}</button>
            </div>
            <hr>
          </div>
        </div>
      </Accordion>


      <!-- 컵 & 리드 옵션 -->
      <Accordion theme="yellow">
        <div slot="header">컵&리드 옵션</div>
        <div v-for="item in domereed">
          <div v-if="typeof(item.value) === 'number'">
            {{ item.name }}
            <button @click="item.value--">-</button>
              {{ item.value }}
            <button @click="item.value++">+</button>
            <hr>
          </div>

          <div v-if="typeof(item.value) === 'object'">
            {{ item.name }}
            <div style="display:inline;" v-for="i in item.value">
              <button class="namki_button"  @click="Ice=i.value" >{{i.Name}}</button>
            </div>
            <hr>
          </div>
        </div>

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
        Extras: {
          Espresso_shots:0,
          Decaffein:'',
          Base:'',
          Ice:'',
      },

        Description: '',
        Title: '',
        Franchise: '스타벅스',
        coffee: [
          { name: '에스프레소샷', value: 0 },
          { name: '디카페인', value: [
            { Name: '기본값', value:'default'},
            { Name: '디카페인', value:'디카페인'},
            { Name: '1/2 디카페인', value:'1/2 디카페인'}
          ]},
        ],

        syrup: [
          { name: '바닐라시럽', value: 0 },
          { name: '헤이즐넛시럽', value: 0 },
          { name: '카라멜시럽', value: 0 },
          { name: '클래식시럽', value: 0 },
          { name: '에스프레소샷', value: 0 },
        ],

        base: [
          { name: '물', value:[
            { Name: '없이', value: '없이' },
            { Name: '적게', value: '적게' },
            { Name: '보통', value: '보통' },
            { Name: '많이', value: '많이' },
          ]}
        ],

        ice: [
          { name: '얼음', value:[
            { Name: '없이', value: '없이' },
            { Name: '적게', value: '적게' },
            { Name: '보통', value: '보통' },
            { Name: '많이', value: '많이' },
          ]}
        ],

        whippedcream: [
          { name: '일반 휘핑', value:[
            { Name: '적게', value: '적게' },
            { Name: '보통', value: '보통' },
            { Name: '많이', value: '많이' },
          ]},
          { name: '에스프레소 휘핑', value:[
            { Name: '적게', value: '적게' },
            { Name: '보통', value: '보통' },
            { Name: '많이', value: '많이' },
          ]}
        ],

        drizzle: [
          { name: '카라멜 드리즐', value:[
            { Name: '적게', value: '적게' },
            { Name: '보통', value: '보통' },
            { Name: '많이', value: '많이' },
          ]},
          { name: '초콜릿 드리즐', value:[
            { Name: '적게', value: '적게' },
            { Name: '보통', value: '보통' },
            { Name: '많이', value: '많이' },
          ]}
        ],

        domereed: [
          { name: '컵 & 리드 옵션', value:[
            { Name: '리드', value: '리드' },
            { Name: '돔 리드로 변경', value: '돔 리드로 변경' },
          ]},
        ],




      //   Decaffeins: [
      //     { Name: '기본값', value:''},
      //     { Name: '디카페인', value:'디카페인'},
      //     { Name: '1/2 디카페인', value:'1/2 디카페인'}
      // ],

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
