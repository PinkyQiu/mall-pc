<template>
	<div class="content_wrapper clearfix layout">
    <!-- 中间图片 -->
	  <div class="slider-wrap fl">
	    <!-- 轮播图 -->
			<div class="swipper">
			 	<div class="swiper-container" id="banners">
	          <swiper :options="bannerOption" ref="swiper">
	              <swiper-slide>
	                  <router-link to="#">
	                      <img src="../images/ban1.jpg" alt="">
	                  </router-link>
	              </swiper-slide>
	              <swiper-slide>
	                  <router-link to="#">
	                      <img src="../images/ban2.jpg" alt="">
	                  </router-link>
	              </swiper-slide>
	              <swiper-slide>
	                  <router-link to="#">
	                      <img src="../images/ban3.jpg" alt="">
	                  </router-link>
	              </swiper-slide>
	              <div class="swiper-pagination"  slot="pagination"></div>
							 <div class="swiper-button-prev" slot="button-prev"></div>
							 <div class="swiper-button-next" slot="button-next"></div>
	          </swiper>
		    </div>
			</div>

			<!-- 四组图片 -->
			<ul class="pc_list clearfix">
				<li 
					:key="item._id" 
					class="item" 
					v-for="item in hotList"
				>
					<img :src="`/img/${item.image_path[0]}`" alt="">
				</li>
			</ul>
		</div>

		<!-- 右侧注册 -->
		<div class="login_wrapper">
			<form name="formLogin" class="login-regist">
				<div class="login">
					<div class="login-username item">
					  <p class="ico_wrapper">
						<i class="ico ico_user"></i>
					</p>
    				<input type="text" class="phonenum">
					</div>
					<div class="login-password item">
						<p class="ico_wrapper">
	    				<i class="ico ico_pwd"></i>
	    			</p>
    				<input type="password" class="phonenum">
					</div>
					<div class="login-button">
						<span class="company">企业登录</span>
						<span class="reg">注册</span>
					</div>	
				</div>
			</form>
		</div>
  </div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
			return{
				bannerOption: {
			      notNextTick: true, 
				    autoplay: true,
				    loop: true,
				    direction: 'horizontal',
				    // grabCursor: true,
				    setWrapperSize: true,
				    autoHeight: true,
				    pagination: {
				     el: '.swiper-pagination',
				     clickable:true
				    },
				    centeredSlides: true,
				    paginationClickable: true,
				    navigation: {
				     nextEl: '.swiper-button-next',
				     prevEl: '.swiper-button-prev'
				    },
				    keyboard: true,
				    mousewheelControl: true,
	      },
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		computed: {
			hotList () {
				let list = this.$store.state.home.hotList
				list = list.slice(0, 4)
				return list
			},
			swiper() {
				return this.$refs.swiper.swiper;
			}
		},
		created() {
			const { commit, dispatch } = this.$store
			dispatch('getHotList')
		}
	}
</script>
<style lang="scss" scoped>
	.content_wrapper{
		padding-left: 230px;
		box-sizing:border-box;
	}
	.slider-wrap{
    width: 652px;
    height: 468px;
    padding-top: 10px;
	}
	.swipper{
		position: relative;
    margin-bottom: 10px;
    height: 296px;
    overflow: hidden;
    img{
    	width: 652px;
    	height: 296px;
    }
	}
	.pc_list{
		.item:hover{
			background-color:#cce0ff;
		}
		.item{
			display: inline-block;
			margin: 5px;
			background-color: #f1eded;
			width: 153px;
			height: 153px;
			box-sizing: border-box;
		}
		img {
			width: 153px;
			height: 153px;
		}
	}
	.login_wrapper{
		margin-top: 10px;
    float: left;
    margin-left: 10px;
    width: 315px;
    height: 468px;
    .login-regist {
		    width: 275px;
		    height: 150px;
		    padding: 20px;
		    border: 1px solid #f0f0f0;
		    margin-bottom: 5px;
		}
		.item {
		    border: 1px solid #f0f0f0;
		    height: 38px;
		    width: 275px;
		    margin-bottom: 20px;
		    position: relative;
		}
		.ico.ico_user {
		  background: url('../images/username.png') 0 0 no-repeat;
		  background-size: 20px 20px;
		}
		.ico.ico_pwd {
		  background: url('../images/pwd.png') 0 0 no-repeat;
		  background-size: 20px 20px;
		}
		.ico_wrapper{
			float: left;
			width: 38px;
		  height: 38px;
		  border-right:1px solid #f0f0f0;
		  background-color: #f3f3f3;
		  text-align: center;
		  .ico{
		  	display: inline-block;
		  	width:20px;
		  	height: 20px;
		  	margin-top: 9px;
		  }
		}
		.phonenum {
		  float: left;
		  width: 226px;
		  height: 18px;
		  line-height: 18px;
		  padding: 10px 0 10px 10px;
		  font-size: 14px;
		  color: #444;
		  overflow: hidden;
		  &:placeholder {
			  color: #999;
			}
		}
		.login-button {
		    overflow: hidden;
		    border: 1px solid #f0f0f0;
		    height: 38px;

		    span{
		    	float: left;
		    	width: 136px;
			    height: 38px;
			    line-height: 38px;
			    color: #3a6bed;
			    font-size: 14px;
			    text-align: center;
			    cursor: pointer;
		    }
		    .company{
		    	background-color: #f7f7f7;
		    	border-right: 1px solid #f0f0f0;
		    	&:hover{
		    		background-color: #edebeb;
		    	};
		    }
		    .reg:hover{
		    	background-color: #edebeb;
		    }
		}
	}
	.swiper-pagination {
      bottom: 20px;
  }
  .swiper-pagination-bullet {
      background: #fff;
      opacity: 1;
  }
  .swiper-pagination-bullet-active {
      background: #0075D3;
  }
</style>