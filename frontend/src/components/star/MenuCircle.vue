<template>
  <div id="MenuCircle">
    <div class="namki_sidebar">
      <div v-for = "(coffee, index) in coffees" >
        <div @click="scrollTo(index)" class="namki_sidebar_button" :class="{hyeri__button_active: index==now }">{{ coffee.name }}</div>
      </div>
    </div>

    <div v-for="(coffee, index) in coffees">


      <div class="Hyeri__Menubody">
        <h2 :id=index>{{coffee.name}}</h2>
        <div v-for = "list in coffee['lists']" class="namki_blocks">
          <div @click="goToCombs(list.name, list.image)">
            <img :src = "list.image" class="namki_menuimg">
            <p>{{ list.name }}</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import '@/components/star/MenuCircle.css'
import EventBus from '../../EventBus.js'
export default {
  name:'Menu',
  data() {
    return {
      now : '',
      coffees: [
        {name:'에스프레소', lists: []},
        {name:'프라푸치노', lists: []},
      ]

    }
  },
  created: function() {
    this.getCategory()
  },
  methods: {
    scrollTo(locationId) {
      const element = document.getElementById(locationId)
      const elemRect = element.getBoundingClientRect()
      const offset = elemRect.top + window.pageYOffset - 160
      window.scrollTo({top: offset, behavior: 'smooth'})
      this.now = locationId
    },
    getCategory() {
      for (const [key, value] of this.coffees.entries()) {
      axios.post("/api/star/menu/category/", {'category':value.name})
      .then(response=> {
        this.coffees[key]['lists'] = response.data
      })
    }

    },
    goToCombs(menu, img) {
      // EventBus.$emit('getimg', img)
      this.$router.push({path: '/Starmenulist/' + menu})
    }



  }
}
</script>
<style>
</style>
