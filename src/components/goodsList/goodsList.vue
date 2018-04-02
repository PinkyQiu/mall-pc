<template>
	<div class="layout">
		<m-menu></m-menu>
		<div class="local">
			<span>当前位置：首页</span>
		</div>
		<!-- <div class="type">
			<h2 class="tt">商品筛选</h2>
			<div class="type_wrapper">
				<div class="item clearfix" v-for="(i,index) in 10" :class="showItem(index)">
					<div class="left fl">品牌:</div>
					<div class="right fl clearfix">
						<span class="all">全部</span>
						<a href="#" v-for="i in 60">联想</a>
					</div>
				</div>
			</div>
			<div class="show">
				<span @click="showOthers" v-if="showBtn">展开</span>
				<span @click="hideOthers" v-if="!showBtn">收起</span>
			</div>
		</div> -->
		<div class="goods" v-if="list.length">
			<h3 class="title">商品列表</h3>
			<div class="list clearfix">
				<item :list="list"></item>
			</div>
		</div>
		<div class="no-data" style="padding: 50px;text-align: center;" v-else>未找到没有相关商品</div>
		<div v-if="list.length" class="pagination" style="text-align:right;padding-bottom: 50px;">
			<el-pagination
				background
				:page-size="20"
				@current-change="changePageIndex"
				layout="prev, pager, next"
				:total="list.length">
			</el-pagination>
		</div>
	</div>
</template>
<script>
import Item from "../commom/Item";
import MMenu from "../commom/Menu";
export default {
  data() {
    return {
      showType: false, //隐藏部门类型
      showBtn: true, //展开按钮
      params: {
        limit: 10,
        offset: 0,
        classifyId: ""
      }
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "getList"
  },
  computed: {
    list() {
      return this.$store.state.product.list;
    },
    total() {
      return this.$store.state.product.total;
    }
  },
  created() {
    const { label, classify, searchText } = this.$route.query;
    this.params.classifyId = classify;
    this.getList(this.params);
  },
  methods: {
    changePageIndex(pageIndex) {
      this.params.offset = this.params.limit * (pageIndex - 1);
      this.getList();
    },
    getList() {
      const { label, classify, searchText } = this.$route.query;
      this.params.classifyId = classify;
      this.params.searchText = searchText
      this.loading = true;
      const { dispatch } = this.$store;
      dispatch("getProductList", this.params);
    },
    // 前四个产品类型出现，其他隐藏
    showItem(index) {
      if (index > 3) {
        return this.showType === true ? "" : "hide";
      } else {
        return "";
      }
    },

    // 点击展开出现其他产品类型
    showOthers() {
      this.showType = true;
      this.showBtn = false;
    },

    // 点击收起隐藏其他产品类型
    hideOthers() {
      this.showType = false;
      this.showBtn = true;
    }
  },
  components: {
    Item,
    MMenu
  }
};
</script>
<style lang="scss" scoped>
.local {
  line-height: 44px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
  padding-left: 10px;
}
.type {
  .tt {
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    background: #f7f7f7;
    padding: 0 12px;
    font-weight: bold;
    color: #666;
  }
  .type_wrapper {
  }
  .item {
    padding: 10px;
    border-bottom: 1px dashed #eee;
    &.hide {
      display: none;
    }
    .left {
      margin-top: 5px;
      width: 115px;
    }
    .right {
      width: 1075px;
    }
    .all {
      background: #0059c9;
      color: #ffffff;
      margin: 5px 0 0 25px;
      padding: 3px 5px;
    }
    a {
      color: #666;
      margin: 5px 0 0 25px;
      padding: 3px 5px 0 1px;
      display: inline-block;
      &:hover {
        color: #0059c9;
      }
    }
  }
  .show {
    position: relative;
    text-align: center;
    top: -1px;
    border-top: 1px solid #ddd;
    transition: border-color 0.15s ease-in-out;
    margin-bottom: 10px;
    &:hover {
      border-top: 1px solid #0059c9;
      span {
        color: #0059c9;
        border-color: #fff #0059c9 #0059c9;
      }
    }
    span {
      position: relative;
      display: inline-block;
      margin-top: -1px;
      height: 28px;
      line-height: 28px;
      padding: 0 40px 0 40px;
      border-width: 1px;
      border-style: solid;
      border-color: #fff #ddd #ddd;
      background: #fff;
      cursor: pointer;
      color: #333;
      transition: border-color 0.15s ease-in-out;
    }
  }
}
.goods {
  border: 1px solid #ddd;
  background-color: #f7f7f7;
  margin-bottom: 20px;
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding-left: 5px;
    background-color: #e7e7e7;
    margin-bottom: 10px;
  }
  .pagination {
    position: relative;
    width: 100%;
    height: 22px;
    margin: 20px -17px 40px;
    text-align: right;
    li {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      border-radius: 2px;
      border: 1px solid #0059c9;
      margin-left: 10px;
      padding: 0 8px;
      color: #0059c9;
      &:hover,
      &.active {
        background-color: #0059c9;
        color: #fff;
      }
    }
  }
}
</style>