<template>
	<!-- 顶部导航栏 -->
  	<section class="top" v-if="!$route.meta.hideTop">
	    <div class="layout">
	        <ul class="fr clearfix">
	            <li class="head_li"><a href="#">首页</a></li>
	            <li class="head_li"><a href="#">我的订单</a></li>
	            <li class="head_li"><a href="#">购物</a></li>
	            <li class="head_li"><a href="#">经销商登录</a></li>
	            <li class="head_li"><a href="#">用户中心</a></li>
	            <li class="head_li"><a href="#">找回密码</a></li>
				      <li class="head_li"><a href="#">维修</a></li>
	            <li class="head_li"><a href="#">注销</a></li>
	        </ul>
	    </div>
  	</section>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	.top{
		height: 30px;
    line-height: 30px;
    background-color: #F1F1F1;
    .head_li{
    	float: left;
	    height: 30px;
	    padding: 0 8px;
	    cursor: pointer;
    }
	}
</style>