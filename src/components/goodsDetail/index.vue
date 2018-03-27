<template>
   <div class="layout">
   	<m-menu :showSort="false"></m-menu>
   	<div class="local">
				<span>当前位置：首页</span>
				<span>&gt;&nbsp;商品详情页</span>
		</div>
    <goods-purchase :detailInfo="detail"></goods-purchase>
    <goods-detail :detailInfo="detail"></goods-detail>
   </div>
</template>
<script>
import MMenu from "../commom/Menu";
import goodsPurchase from "./goodsPurchase";
import goodsDetail from "./goodsDetail";
export default {
  components: {
    MMenu,
    goodsPurchase,
    goodsDetail
  },
  data() {
    return {
      addressId: null,
      showAddress: false,
      count: 1,
      currentTypeIndex: 0,
      bannerSwiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        setWrapperSize: true,
        updateOnImagesReady: true,
        autoplayDisableOnInteraction: false
      }
    };
  },
  computed: {
    detail() {
      return this.$store.state.productDetail.detail;
    }
  },
  created() {
    const { dispatch } = this.$store;
    const { id } = this.$route.params;
    dispatch("getDetail", { id });
  },
  destroyed() {
    const { commit } = this.$store;
    commit("CLEAR_DETAIL");
  }
};
</script>
<style lang="scss" scoped>
.local {
  line-height: 44px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
  padding-left: 10px;
}
</style>