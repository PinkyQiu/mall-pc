<template>
	<!-- 搜索 -->
  	<section class="header_search" v-if="!$route.meta.hideSearch">
	  	<div class="layout clearfix">
	        <div class="dclogo fl">
			        <router-link to="/">
			            <img :src="`${config.imgurl}${companyInfo.pcLogo}`" alt="">
              </router-link>
	        </div>
	        <div class="head-search fl">
			        <div class="form">
			            <form id="searchForm" name="searchForm">
			                <input 
                        name="keywords" 
                        id="keyword" 
                        v-model="searchText" 
                        type="text" 
                        class="searchText fl ac_input search-input" 
                        autocomplete="off"
                      >
			                <input 
                        @click="search"
                        type="button" 
                        value="搜索" 
                        name="imageField" 
                        class="search-button fl searchBtn" 
                        style="cursor:pointer;"
                      >
			            </form>
			        </div>
			    </div>
			    <div class="shopcart-box fr">
			        <div class="head_cart">
			            <router-link to="../shopcart">
			                我的购物车
			                <i class="cart-left"></i>
			                <i class="cart-right">&gt;</i>
			                <i class="cart-count" style="width: 18px; height: 18px; line-height: 18px;">{{cartList.length}}</i>
			            </router-link>
			        </div>
			        <div class="cart-dropdown">
			        </div>
			    </div>
			    <div class="hotwords fl">
			        <router-link :to="{path: 'goodsList',query: { searchText: log }}" v-for="log in searchLog" :key="log">{{log}}</router-link>
			    </div>
	    </div>
    </section>
</template>
<script>
import config from "api/config";
export default {
  data() {
    return {
      config,
      searchText: "",
      searchLog: JSON.parse(localStorage.getItem("searchLog") || "[]")
    };
  },
  computed: {
    cartList() {
      return this.$store.state.car.list;
    },
    companyInfo() {
      return this.$store.state.home.companyInfo;
    }
  },
  methods: {
    search(e) {
      e.preventDefault();
      const searchLog = JSON.parse(localStorage.getItem("searchLog") || "[]");
      searchLog.push(this.searchText);
      localStorage.setItem("searchLog", JSON.stringify(searchLog));
      this.$router.push({
        path: "goodsList",
        query: { searchText: this.searchText }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.header_search {
  margin-bottom: 20px;
  .dclogo {
    width: 362px;
    height: 60px;
    padding: 10px 0;
    a {
      display: block;
      width: 300px;
      height: 80px;
    }
    img {
      width: 300px;
      height: 80px;
    }
  }
  .head-search {
    margin-top: 32px;
  }
  .search-input {
    width: 446px;
    border-color: rgba(0, 89, 201, 0.9);
    height: 24px;
    line-height: 24px;
    padding: 4px;
    color: #666;
    margin-bottom: 4px;
    border-width: 2px 0 2px 2px;
    border-style: solid;
    outline: 0;
    font-size: 14px;
    font-family: "microsoft yahei";
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 0 2px 0 rgba(6, 111, 244, 0.3);
      border-color: rgba(6, 111, 244, 1);
    }
  }
  .search-button {
    width: 82px;
    height: 36px;
    border: none;
    line-height: 1;
    color: #fff;
    font-size: 16px;
    font-family: " microsoft yahei";
    cursor: pointer;
    background-color: rgba(0, 89, 201, 0.8);
    text-align: center;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(0, 89, 201, 1);
    }
  }
  .shopcart-box {
    height: 36px;
    margin-right: 65px;
    margin-top: 32px;
    position: relative;
  }
  .head_cart {
    width: 75px;
    height: 34px;
    border: 1px solid #dfdfdf;
    padding: 0 28px 0 36px;
    background-color: #f9f9f9;
    text-align: center;
    line-height: 34px;
    i {
      position: absolute;
      display: block;
      overflow: hidden;
    }
    .cart-left {
      top: 9px;
      left: 18px;
      width: 18px;
      height: 16px;
      background: url(../images/shopcart_ico.png);
    }
    .cart-right {
      top: 11px;
      right: 10px;
      width: 7px;
      height: 13px;
      font: 400 13px/13px simsun;
      color: #999;
    }
    .cart-count {
      top: -4px;
      left: 104px;
      padding: 1px 2px;
      line-height: 12px;
      font-size: 12px;
      color: #fff;
      background-color: #0059c9;
      border-radius: 7px 7px 7px 0;
      min-width: 12px;
      text-align: center;
    }
  }
  .hotwords {
    width: 518px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    a {
      margin-right: 10px;
    }
  }
}
</style>