<template>
    <div class="MakeCombi">
        <h1>게시글 작성</h1>
        <select v-model="Franchise">
          <option v-for="Franchise in Franchises" v-bind:value="Franchise.value">
            {{ Franchise.Name }}
          </option>
        </select>

        <textarea style="width:100%;" v-model="Title" placeholder="제목"></textarea>



    </div>
</template>

<script>
export default {
    data() {
    return {
        Title: '',
        Franchise: '스타벅스',
        Franchises : [
          { Name: '스타벅스', value: '스타벅스'},
          { Name: '써브웨이', value: '써브웨이'}
      ],

    }

    }
}
</script>

<style>
    .MakeCombi {
        width: 97%;
    }
    select {
      width: 102%; /* 원하는 너비설정 */
      padding: .8em .5em; /* 여백으로 높이 설정 */
      font-family: inherit;  /* 폰트 상속 */
      border: 1px solid #999;
      border-radius: 0px; /* iOS 둥근모서리 제거 */
      -webkit-appearance: none; /* 네이티브 외형 감추기 */
      -moz-appearance: none;
      appearance: none;
      background-color: white;
    }


</style>
