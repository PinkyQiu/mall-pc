<template>
   <div class="layout">
   	<m-menu :showSort="false"></m-menu>
   	<div class="local">
				<span>当前位置：首页</span>
				<span>&gt;&nbsp;商品详情页</span>
		</div>
    <goods-purchase></goods-purchase>
    <goods-detail></goods-detail>
   </div>
</template>
<script>
  import MMenu from '../commom/Menu'
  import goodsPurchase from './goodsPurchase'
  import goodsDetail from './goodsDetail'
	export default {
		components:{
			MMenu,
      goodsPurchase,
      goodsDetail,
		}
		
	}
</script>
<style lang="scss" scoped>
  .local{
  	line-height: 44px;
    background-color: #F2F2F2;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    padding-left: 10px;
  }
</style>