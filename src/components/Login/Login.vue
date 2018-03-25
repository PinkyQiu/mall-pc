<template>
  <div>
  	<!-- 头部 -->
		<header class="header">
	    <div class="header_wrapper">
	      <div class="layout">
	        <a href="/" class="logo" title="猎诚财富">猎诚财富</a>
	        <span class="login">欢迎登录</span>
	      </div>
	    </div>
	  </header>
    
    <!-- banner -->
    <section class="login_banner">
    	<div class="login_list layout clearfix">
    		<!-- 登录 -->
    		<form action="" class="login_form" id="loginForm">
    			<!-- 登录 -->
    			<div class="login_wrapper">
	    			<h3 class="login_tt">账户登录</h3>
	    			<div class="login_text">
              <div class="input_login">
                  <p class="ico_wrapper">
                  	<i class="ico ico_user"></i>
                  </p>
    	    				<input type="text" class="phonenum">
              </div>
	    			</div>
	    			<div class="login_text">
              <div class="input_login">
                  <p class="ico_wrapper">
	    	    				<i class="ico ico_pwd"></i>
	    	    			</p>
    	    				<input type="password" class="phonenum">
              </div>
	    			</div>
	    			<input class="login_btn" type="submit" value="企业登录">
	    			<div class="login_register">
		    			<a href="" class="register">立即注册</a>
		    		</div>
	    		</div>
	    		<!-- 注册 -->
	    		
    		</form>
    	</div>
    </section>
  </div>
</template>
<script>
	export default {
		
		
	}
</script>
<style lang="scss" scoped>
  .header{
	  height: 88px;
	  width: 100%;
	  .header_wrapper {
		  background: #FFFFFF;
		  height: 88px;
		}
		.login {
		  height: 88px;
		  line-height: 88px;
		  margin-left: 190px;
		  font-size: 18px;
		  color: #666666;
		}
		.layout {
		  position: relative;
		  height: 88px;
		  .logo {
			  position: absolute;
			  top: 0;
			  left: 0;
			  width: 180px;
			  height: 88px;
			  background: url(../images/logo.jpg) 0 50% no-repeat;
			  overflow: hidden;
			  text-indent: -99999px;
			}
		}
	}
	.login_banner {
	  width: 100%;
	  height: 560px;
	  background: url('../images/detail_pic1.jpg') 50% 0 no-repeat;
	  background-size: cover;
	  .login_list {
		  position: relative;
		  height: 560px;
		}
		.login_wrapper {
		  width: 360px;
		  padding: 30px 30px 20px;
		  background: #fff;
		  box-sizing:border-box;
		}
		.login_tt {
		  font-size: 18px;
		  color: #666;
		  margin-bottom: 5px;
		  text-align: center;
		}
		.login_text {
		  position: relative;
		}
		.input_login {
		  width: 300px;
		  height: 44px;
		  line-height: 44px;
		  border:1px solid #ccc;
		  margin-top: 15px;
		  &.active {
			  box-shadow: 0 0 0 1px #F23244;
			}
		}
		.ico {
			display: inline-block;
		  width: 26px;
		  height: 26px;
		  margin-top:9px;
		}
		.ico.ico_user {
		  background: url('../images/username.png') 0 0 no-repeat;
		  background-size: 100% 100%;
		}
		.ico.ico_pwd {
		  background: url('../images/pwd.png') 0 0 no-repeat;
		  background-size: 100% 100%;
		}
		.ico_wrapper{
			float: left;
			width: 44px;
		  height: 44px;
		  border-right:1px solid #ccc;
		  background-color: #f3f3f3;
		  text-align: center;
		}
		.phonenum {
		  float: left;
		  width: 254px;
		  height: 45px;
		  text-indent: 15px;
		  font-size: 14px;
		  color: #444;
		}
		
		.login_btn {
		  width: 300px;
		  height: 45px;
		  background: #f3f3f3;
		  border-radius: 2px;
		  border: 1px solid #ccc;
		  font-size: 14px;
		  color: #3a6bed;
		  margin-top: 30px;
		  transition:all .3s;
		  &:hover{
		  	background: #ddd;
		  };
		}
		.login_register {
		  width: 300px;
		  height: 40px;
		  line-height: 40px;
		  padding-right: 30px;
		  text-align: right;
		}
		.register {
		  font-size: 14px;
		  color: #3a6bed;
		  &:hover {
			  text-decoration: underline;
			}
		}
	}
	@media screen and (min-width: 1200px) {
	  .login_banner .login_form {
	    position: absolute;
	    right: 0;
	    top: 50%;
	    transform: translateY(-50%);
	    width: 400px;
	  }
	  .login_banner .reg_form {
	    position: absolute;
	    right: 0;
	    top: 50%;
	    transform: translateY(-50%);
	    width: 400px;
	  }
	}
	@media screen and (max-width: 1200px) {
	  .login_banner .login_form {
	    position: fixed;
	    right: 20%;
	    top: 50%;
	    transform: translateY(-50%);
	    width: 400px;
	  }
	  .login_banner .reg_form {
	    position: fixed;
	    right: 20%;
	    top: 50%;
	    transform: translateY(-50%);
	    width: 400px;
	  }
	}

</style>