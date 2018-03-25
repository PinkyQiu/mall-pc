<template>
		<!-- 导航栏 -->
    <section class="nav_wrapper" v-if="!$route.meta.hideMenu">
      <div class="nav">
		    <div class="layout clearfix">
		        <div class="fl category_index" v-if="showSort">
		            <div class="category-title">企业购商品分类</div>
		            <!-- <router-link to="../goodsList" class="menu-wrap"> -->
			            <div id="menu-wrap" class="menu-wrap">
				            	<ul class="menu">
					            	<li v-for="i in 8" class="menu-item">
					            		<h3>整机</h3>
					            		<div class="sub-item">
					            			<span>笔记本</span>
					            			<span>笔记本</span>
					            			<span>笔记本</span>
					            			<span>笔记本</span>
					            		</div>
					            		<span class="arrow">&gt;</span>
					            	</li>
					            </ul>
					            <div class="sub-menu">
					            	<ul class="menu_list">
					            		<li class="item clearfix" v-for="i in 5">
					            			<h3 class="left fl">笔记本&nbsp;&gt;</h3>
					            			<div class="right fl">
					            				<span class="right_item" v-for="i in 8">消费笔记本</span>
					            			</div>
					            		</li>
					            	</ul>
					            </div>
			            </div>
		            <!-- </router-link> -->
		        </div>
		        <div class="navitem fl">
		            <ul class="navitems-group fl">
		                <li>
		                    <a href="#">企业购首页</a>
		                </li>
		                <li>
		                    <a href="#">场景采购</a>
		                </li>
		                <li>
		                    <a href="#">行业解决方案</a>
		                </li>
		                <li>
		                    <a href="#">企业采购特权</a>
		                </li>
		                <li>
		                    <a href="#">用户中心</a>
		                </li>
		                <li>
		                    <a href="#">关于我们</a>
		                </li>
		            </ul>
		        </div>
		        <div class="hotline fr clearfix">
		            <i class="fl"></i>
		            <span class="fl">采购热线</span>
		            <em class="fl">020-38550202</em>
		        </div>
		    </div>
		  </div>
    </section>
</template>
<script>
	export default {
		props:{
			showSort:{
				type:Boolean,
				default:true,
			}
		}
	}
</script>
<style lang="scss" scoped>
	.nav_wrapper{
		.nav {
		    height: 44px;
		    width: 100%;
		    border-bottom: 2px solid #F7931E;
		}
		.category_index {
		    position: relative;
		    width: 220px;
		    height: 44px;
		    overflow: visible;
		    background-color: #F7931E;

		}
		.menu{
			position: absolute;
			top:44px;
			width: 100%;
			background-color: #f99d31;
			color:#fff;
		}
		.menu-item {
			position: relative;
			padding: 5px 20px;
	    height: 60px;
	    border-bottom: 1px solid #F7931E;
	    box-sizing: border-box;
	    &:hover{
	    	background-color:#f7762f;
	    };
	    .sub-item span{
	    	padding-right:3px;
	    	cursor: pointer;
	    }
	    h3{
	    	padding: 5px 0;
	    }
	    .arrow{
	    	position: absolute;
	    	top: 20px;
	    	right: 10px;
	    }
		}
		.category_index:hover > .menu-wrap{
			display: block;
		}
		.menu-wrap {
			display: none;
		}
		.menu-wrap-show {
			display: block;
		}
		.menu-wrap:hover > .sub-menu {
			display: block;
		}
		.sub-menu{
			display: none;
			position: absolute;
			top: 46px;
			left: 220px;
			width: 680px;
			height: 479px;
			z-index: 10;
			background-color: #fff;
			border-right:1px solid #F7931E;
			border-bottom:1px solid #F7931E;
			.menu_list{
				margin-top: 10px;
			}
			.left{
				width: 100px;
				text-align: right;
				padding-right: 10px;
				color: #666;
				font-weight: bold;
				padding-top: 6px;
			}
			.right{
		    width: 550px;
		    border-bottom: 1px solid #eee;
		    font-size: 12px;
		    padding: 6px 0 5px;
			}
			.right_item{
				display: inline-block;
				height: 20px;
				border-left: 1px solid #e0e0e0;
		    padding: 0 9px 0 8px;
		    cursor: pointer;
		    margin-bottom: 4px;
		    color: #666;
			}
		}
		.category-title {
		    padding: 0 20px;
		    font-size: 15px;
		    font-weight: 400;
		    line-height: 44px;
		    color: #fff;
		}
		.navitem {
		    position: relative;
		}
		.navitems-group {
				li {
					float: left;
				}
		    a {
				    padding: 0 15px;
				    height: 44px;
				    text-align: center;
				    font-size: 15px;
				    line-height: 44px;
				    font-weight: 400;
				    color: #333;
				    &:hover{
				    	color: #F7931E;
				    };
				}
		}
		
		.hotline {
		    height: 44px;
		    line-height: 44px;
		    color: #333;
		    overflow: hidden;
		    width: auto;
		    i {
				    margin: 12px 5px 0 0;
				    width: 20px;
				    height: 20px;
				    background: url(../images/phone.png) no-repeat 0 0;
				    background-size: 20px 20px;
				}
				span {
				    padding: 0 10px 0 0;
				    line-height: 44px;
				    font-size: 14px;
				    display: block;
				}
				em {
				    line-height: 44px;
				    font-size: 18px;
				    font-family: verdana;
				    letter-spacing: -1px;
				}
		}
	}
</style>