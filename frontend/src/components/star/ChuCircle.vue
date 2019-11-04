<template>
  <div id="ChuCircle">
    <div v-for = "custom in customs" class="namki_blocks">
      <div  @click="goToDetail(custom.starmenu_id)">
        <img :src = "custom.image" class="namki_menuimg">
        <p>{{ custom.name }}</p>
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
      customs: [],
    }
  },
  mounted() {
    this.getCustom()
  },
  methods: {
    getCustom() {
      axios.get('api/star/menu/custom')
      .then(response=>{
        console.log(response.data)
        this.customs = response.data
      })
    },
    goToDetail(combiId) {
      this.$router.push({path: '/Starbucks/' + combiId})
    },


  }
}
</script>

<style>
</style>
