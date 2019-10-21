<template>
  <div>
    <div>
      <navbar></navbar>
      <hr />
    </div>
    <div>
      <img src="#" alt="기본메뉴사진" />
      <h1>아메리카노</h1>
      <hr />
    </div>
    <div class="Frappuccino_HY">
      <div v-for="frappuccino in Frappuccinos">
        <div class="border_HY">
          <img :src="frappuccino.coffee_image" class="image_HY" />
          <p>종류 : {{frappuccino.coffee_kind }}</p>
          <p>이름 : {{ frappuccino.coffee_name }}</p>
          <p>설명 : {{ frappuccino.desciption }}</p>
          <p>가격 : {{ frappuccino.coffee_price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar/navbar";
export default {
  name: "Menu",
  components: {
    navbar
  },
  data() {
    return {
      activeColor: "red",
      fontSize: 30,
      Frappuccinos: [
        {
          coffee_kind: "frappuccino",
          coffee_name: "슈렉 프라푸치노",
          desciption:
            "그린티 프라푸치노, 에스프레소 샷, 자바칩, 초코드리즐, 통 자바칩",
          coffee_image:
            "https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/848a2acf8ffd4bc981bf235d59aca9b3.jpg",
          coffee_price: "8700원"
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "페레로로쉐 프라푸치노",
          desciption: "자바칩 프라푸치노, 모카 시럽, 헤이즐넛 시럽",
          coffee_image:
            "https://t1.daumcdn.net/cfile/tistory/9953AF335C5D726C06",
          coffee_price: "6700원"
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "고디바 프라푸치노",
          desciption:
            "초코 크림 프라푸치노, 헤이즐넛 시럽, 모카 시럽, 초코드리즐, 통 자바칩",
          coffee_image:
            "https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/fe606ebc60724efd974faa43abe8a512.jpg",
          coffee_price: "6300원"
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "돼지바 프라푸치노",
          desciption:
            "딸기 크림 프라푸치노, 딸기시럽, 두유, 초코 드리즐, 자바칩",
          coffee_image:
            "https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/134a6d92a09b4888af4fd957eb6ad98c.jpg",
          coffee_price: "6800원"
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "트윅스 프라푸치노",
          desciption:
            "카라멜 프라푸치노, 헤이즐넛 시럽, 자바칩, 모카(or 카라멜) 드리즐, 통 자바칩",
          coffee_image:
            "https://t1.daumcdn.net/cfile/tistory/990B914E5C5D74A70F",
          coffee_price: "7400원"
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "쿠앤크 프라푸치노",
          desciption: "바닐라 크림 프라푸치노, 자바칩, 초코휘핑, 통자바칩",
          coffee_image:
            "https://t1.daumcdn.net/cfile/tistory/9910594E5C5D754918",
          coffee_price: "5400원"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.border_HY {
  border-width: 2px;
  border-color: black;
  border-style: solid;
}
.image_HY {
  /* display: inline-flex; */
  /* flex-wrap: wrap; */
  justify-content: center;
  width: 25%;
  height: 25%;
}
</style>