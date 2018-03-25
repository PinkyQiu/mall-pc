<template>
    <ul class="clearfix">
			<li class="item" v-for="i in num">
				<router-link to="../goodsDetail">
					<div class="pic">
						<a href="#">
							<img src="../images/computer.jpg" alt="">
						</a>
					</div>
					<div class="name">
						小新潮7000-14 I58250U 8G 1T+128G 2G 银 高清背光 W10
					</div>
					<div class="price" v-if="showPrice">
						<span>零售价</span>
						<em>5699.00</em>
					</div>
					<div class="handle">
						<router-link to="../Login">登录查看企业专享价</router-link>
					</div>
				</router-link>
			</li>
		</ul>
</template>
<script>
	export default {
		props:{
			num:{
				type:Number,
				default:10,
			},
			showPrice:{
				type:Boolean,
				default:true,
			}
		}
	}
</script>
<style lang="scss" scoped>
  .item {
  	  display: inline-block;
	    width: 220px;
	    height: 260px;
	    background-color: #fff;
	    margin: 10px 0 10px 18px;
	    transition:transform .3s ease-in-out;
	    &:hover{
	    	transform:scale(1.05);
	    };
	    .pic{
				padding-top: 6px;
				img {
				    display: block;
				    margin: 0 auto;
				    width: 150px;
				    height: 150px;
				}
			}
			.name {
			    padding: 0 20px;
			    height: 28px;
			    line-height: 28px;
			    overflow: hidden;
			    text-align: center;
			    font-size: 12px;
			}
			.price {
			    height: 18px;
			    line-height: 18px;
			    overflow: hidden;
			    text-align: center;
			    font-size: 16px;
			    em {
					    color: #e53935;
					}
			}
			.handle {
			    margin: 8px 15px 0;
			    height: 34px;
			    overflow: hidden;
			    cursor: pointer;
			    a {
					    display: block;
					    height: 32px;
					    line-height: 32px;
					    font-size: 14px;
					    text-align: center;
					    border: 1px solid #F7931E;
					    background-color: #fff;
					    color: #F7931E;
					    transition: all .1s ease-in 0s;
					    &:hover{
					    	background-color: #F7931E;
		            color: #fff;
					    };
					}
			}
	}
	
</style>