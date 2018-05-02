<template>
  <div>
  	<!-- 头部 -->
		<header class="header">
	    <div class="header_wrapper">
	      <div class="layout">
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
    	    				<input 
										type="text" 
										class="phonenum" 
										v-model="tel" 
										:placeholder="tips.tel"
									>
              </div>
	    			</div>
	    			<div class="login_text">
              <div class="input_login">
                  <p class="ico_wrapper">
	    	    				<i class="ico ico_pwd"></i>
	    	    			</p>
    	    				<input 
										type="password" 
										class="phonenum" 
										v-model="password" 
										:placeholder="tips.pwd"
									>
              </div>
	    			</div>
	    			<input @click="submit" class="login_btn" type="button" :value="`立即${tips.submit}`">
	    			<div class="login_register">
		    			<span href="" class="register" @click="toggleMode">立即{{tips.btn}}</span>
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
  data() {
    return {
      isLoginMode: true,
      tel: "",
      password: "",
      loginTips: {
        tel: "请输入手机号码",
        pwd: "请输入密码",
        submit: "登录",
        btn: "注册"
      },
      registTips: {
        tel: "手机号码作为登录账号",
        pwd: "请输入6-18位密码",
        submit: "注册",
        btn: "登录"
      }
    };
  },
  computed: {
    tips() {
      return this.isLoginMode ? this.loginTips : this.registTips;
    }
  },
  methods: {
    toggleMode() {
      this.isLoginMode = !this.isLoginMode;
    },
    doLogin() {
      this.$store
        .dispatch("doLogin", {
          tel: this.tel,
          password: this.password
        })
        .then(res => {
          this.$message({
            showClose: true,
            message: '登录成功',
            type: 'success'
          });
          const { redirect } = this.$route.query;
          if (redirect) {
            this.$router.replace(redirect);
          } else {
            this.$router.replace("/");
          }
        });
    },
    valid() {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)) {
        this.$message("请输入正确的手机号码");
        return false;
      }
      if (!/^[^\s]{4,18}$/.test(this.password)) {
        this.$message("请输入正确的4-18位的密码");
        return false;
      }
      return true;
    },
    doRegist() {
      if (this.valid()) {
        this.$store
          .dispatch("doRegist", {
            tel: this.tel,
            password: this.password
          })
          .then(res => {
            this.$message({
              showClose: true,
              message: '注册成功，请登录',
              type: 'success'
            });
            this.tel = "";
            this.password = "";
            this.isLoginMode = true;
          }, err => {
            console.log(err)
          })
      }
    },
    submit() {
      if (!this.valid()) return;
      this.isLoginMode ? this.doLogin() : this.doRegist();
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 88px;
  width: 100%;
  .header_wrapper {
    background: #ffffff;
    height: 88px;
  }
  .login {
    height: 88px;
    line-height: 88px;
    font-size: 20px;
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
  background: url("../images/bg.jpeg") 50% 0 no-repeat;
  background-size: cover;
  .login_list {
    position: relative;
    height: 560px;
  }
  .login_wrapper {
    width: 360px;
    padding: 30px 30px 20px;
    background: #fff;
    box-sizing: border-box;
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
    border: 1px solid #ccc;
    margin-top: 15px;
    &.active {
      box-shadow: 0 0 0 1px #f23244;
    }
  }
  .ico {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-top: 9px;
  }
  .ico.ico_user {
    background: url("../images/username.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .ico.ico_pwd {
    background: url("../images/pwd.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .ico_wrapper {
    float: left;
    width: 44px;
    height: 44px;
    border-right: 1px solid #ccc;
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
    &::placeholder {
      color: #999;
    }
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
    transition: all 0.3s;
    &:hover {
      background: #ddd;
    }
  }
  .login_register {
    width: 300px;
    height: 40px;
    line-height: 40px;
    padding-right: 30px;
    text-align: right;
  }
  .register {
    cursor: pointer;
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