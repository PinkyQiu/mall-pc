<template>
  <div class="home_wrapper">
    <m-menu></m-menu>
    <Slider></Slider>
    <Sale></Sale>
    <Goods></Goods>
  </div>
</template>

<script>
import Slider from './Slider'
import Sale from './Sale'
import Goods from './Goods'
import Recommend from './Recommend'
import MMenu from '../commom/Menu'

export default {
  data () {
    return {
    }
  },
  created() {
    this.$nextTick(() => {
      this.$menu = document.querySelector('#menu-wrap')
      this.$menu.classList.toggle('menu-wrap-show')
    })
  },
  destroyed() {
    this.$menu.classList.toggle('menu-wrap-show')
  },
  components: {
    Sale,
    Goods,
    Recommend,
    Slider,
    MMenu
  }
}
</script>

<style scoped lang="scss">
</style>
