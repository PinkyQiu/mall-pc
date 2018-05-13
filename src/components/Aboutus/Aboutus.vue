<template>
  <div class="aboutus-wrap">
      <m-menu></m-menu>
      <div class="aboutus">
          <div class="banner">
            <img :src="`${config.imgurl}${aboutus.banner}`" alt="" class="left_pic">
        </div>
        <div class="desc">
            {{aboutus.desc}}
        </div>
      </div>
  </div>
</template>
<script>
import MMenu from "../commom/Menu";
import config from "api/config";
export default {
  data() {
      return {config}
  },
  computed: {
      aboutus() {
          return this.$store.state.home.companyInfo.aboutus
      }
  },
  components: {
    MMenu
  }
}
</script>
<style scoped>
.aboutus {
    width: 1210px;
    margin: 0 auto;
}
.aboutus .banner {
    margin-bottom: 40px;
}
.aboutus .banner img {
    width: 1210px;
}
.aboutus .desc {
    padding: 20px 0 100px;
    text-indent: 2em;
    font-size: 16px;
    line-height: 2;
}
</style>


