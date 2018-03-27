<template>
	<!-- 顶部导航栏 -->
  	<section class="top" v-if="!$route.meta.hideTop">
	    <div class="layout">
	        <ul class="fr clearfix">
	            <li class="head_li"><router-link to="/">首页</router-link></li>
	            <li class="head_li"><router-link to="Person">我的订单</router-link></li>
	            <li class="head_li"><router-link to="/shopCart">购物车</router-link></li>
	            <!-- <li class="head_li"><router-link to="/">经销商登录</router-link></li> -->
	            <li class="head_li"><router-link to="/Person">用户中心</router-link></li>
	            <!-- <li class="head_li"><router-link to="/">找回密码</router-link></li> -->
				      <!-- <li class="head_li"><router-link to="/">维修</router-link></li> -->
	            <li class="head_li"><router-link to="/">注销</router-link></li>
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