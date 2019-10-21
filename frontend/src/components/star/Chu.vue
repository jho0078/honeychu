<template>
  <div>
    <div>
      <!-- <navbar></navbar> -->
      <!-- <hr /> -->
    </div>
    <div class="Frappuccino_HY">
      <h1>Frappuccino</h1>
      <div v-for="frappuccino in Frappuccinos">
        <div class="border_HY">
          <div>
            <img class="img_HY" :src="frappuccino.coffee_image"/>
          </div>
          <div>
            <p>종류 {{frappuccino.coffee_kind }}</p>
            <p>이름 {{ frappuccino.coffee_name }}</p>
            <p>설명 {{ frappuccino.desciption }}</p>
            <p>가격 {{ frappuccino.coffee_price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="Latte_HY">
      <h1>Latte</h1>
      <div v-for="latte in Lattes">
        <div class="border_HY">
          <div>
            <img class="img_HY" :src="latte.coffee_image"/>
          </div>
          <div>
            <p>종류 {{ latte.coffee_kind }}</p>
            <p>이름 {{ latte.coffee_name }}</p>
            <p>설명 {{ latte.desciption }}</p>
            <p>가격 {{ latte.coffee_price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="CoolLime_HY">
      <h1>Cool Lime</h1>
      <div v-for="coollime in CoolLime">
        <div class="border_HY">
          <div>
            <img class="img_HY" :src="coollime.coffee_image"/>
          </div>
          <div>
            <p>종류 {{ coollime.coffee_kind }}</p>
            <p>이름 {{ coollime.coffee_name }}</p>
            <p>설명 {{ coollime.desciption }}</p>
            <p>가격 {{ coollime.coffee_price }}</p>
          </div>
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
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "페레로로쉐 프라푸치노",
          desciption: "자바칩 프라푸치노, 모카 시럽, 헤이즐넛 시럽",
          coffee_image:
            "https://img.insight.co.kr/static/2019/08/13/700/q7e05i1nas3ibsql092m.jpg",
          coffee_price: "6700원"
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "그린티 프라푸치노",
          desciption: "그린티 프라푸치노, 헤이즐넛 시럽, 카라멜 시럽, 자바칩",
          coffee_image:
            "https://pbs.twimg.com/media/DbN3vblV4AEPHfY.jpg",
          coffee_price: "8100원"
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "바닐라 크림 프라푸치노",
          desciption: "바닐라 프라푸치노, 뿌리는 에스프레소 샷, 헤이즐넛 드리즐",
          coffee_image:
            "data:image/jpeg;base64,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",
          coffee_price: "6000원"
        },
        {
          coffee_kind: "frappuccino",
          coffee_name: "다크 모카 프라푸치노",
          desciption: "다크 모카 프라푸치노, 에스프레소 휘핑, 자바칩, 통자바칩, 카라멜 드리즐",
          coffee_image:
            "http://mblogthumb4.phinf.naver.net/20150624_215/aod0609_1435103783716hsyeW_JPEG/NaverBlog_20150624_085623_03.jpg?type=w2",
          coffee_price: "6800원"
        },
      ],
      Lattes: [
        {
          coffee_kind: "latte",
          coffee_name: "관장라떼",
          desciption:
            "돌체라떼 아이스, 일반우유, 에스프레소 휘핑",
          coffee_image:
            "https://pbs.twimg.com/media/C7Vw7_JU4AEvjYW.jpg",
          coffee_price: "5600원"
        },
        {
          coffee_kind: "latte",
          coffee_name: "슈크림라떼",
          desciption: "슈크림크런치라떼, 두유, 슈크림 휘핑(많이), 얼음(적게), 샷 추가",
          coffee_image:
            "https://t1.daumcdn.net/liveboard/realfood/4dae92f9aabf4c6d98ade36da1eabafa.jpg",
          coffee_price: "6700원"
        },
      ],
      CoolLime: [
        {
          coffee_kind: "coollime",
          coffee_name: "쿨라임 피지오",
          desciption:
            "쿨라임 피지오(물 줄이기), 라임 베이스(많이), 탄산 추가",
          coffee_image:
            "data:image/jpeg;base64,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",
          coffee_price: "5900원"
        },
      ],
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.border_HY {
  display: inline-flex;
  word-break: keep-all;
  text-align: left;
  font-size: 80%;
  width: 100%;
  height: 200px;
  border-width: 2px;
  border-color: black;
  border-style: solid;
}
.img_HY {
  display: inline-flex;
  flex-wrap: wrap;  
  justify-content: center;
  border-right: 4px;
  border-color: black;
  border-style: solid;
  width: 196px;
  height: 196px;
  /* max-width: 100%;
  max-height: 100%; */
}
</style>