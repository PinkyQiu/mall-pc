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
              <li v-if="userInfo.tel" @click="logout" class="head_li">注销</li>
	            <li v-else class="head_li"><router-link to="/login">登录</router-link></li>
	        </ul>
	    </div>
  	</section>
</template>
<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    }
  },
  methods: {
    logout() {
      this.$confirm("确认退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const { commit, dispatch } = this.$store;
        this.showModal = false;
        this.$router.replace({
          path: "/"
        });
        await dispatch("doLogout");
        commit("SET_USER", {});
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.top {
  height: 30px;
  line-height: 30px;
  background-color: #f1f1f1;
  .head_li {
    float: left;
    height: 30px;
    padding: 0 8px;
    cursor: pointer;
  }
}
</style>