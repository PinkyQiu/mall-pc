<template>
  <div id="app" class="home_wrapper">
    <m-header></m-header>
	  <search></search>
    <div class="main">
      <router-view/>
    </div>
    <Footer></Footer>
    <slide-side></slide-side>
  </div>
</template>

<script>
import MHeader from './components/commom/Mheader'
import Search from './components/commom/Search'
import Footer from './components/commom/Footer'
import slideSide from './components/commom/slideSide'
export default {
  name: 'App',
  components: {
  	MHeader,
  	Search,
    Footer,
    slideSide,
  },
  async created() {
    const { dispatch } = this.$store
    const companyInfo = await dispatch('getCompanyInfo', window.location.host)
    document.title = companyInfo.name
    await dispatch('getUserInfo')
  },
}
</script>

<style lang="scss">
	  @import './components/style/mixin.scss';
  	@import './components/style/common.scss';
    .main{
      min-height: 600px;
    }
</style>
