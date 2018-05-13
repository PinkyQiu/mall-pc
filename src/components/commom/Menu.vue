<template>
	<!-- 导航栏 -->
    <section class="nav_wrapper" v-if="!$route.meta.hideMenu">
      <div class="nav">
		<div class="layout clearfix">
			<div class="fl category_index" v-if="showSort">
				<div class="category-title">商品分类</div>
				<!-- <router-link to="../goodsList" class="menu-wrap"> -->
					<div id="menu-wrap" class="menu-wrap">
						<ul class="menu">
							<li 
								:key="classify._id" 
								v-for="classify in classifyList" 
								class="menu-item"
								@mouseenter="menuhover(classify)"
							>
								<router-link :to="{path: 'goodsList', query:{classify: classify._id}}">
									<h3>{{classify.label}}</h3>
								</router-link>
								<div class="sub-item">
									<router-link v-for="sub in classify.children" :key="sub._id" :to="{path: 'goodsList', query:{classify: sub._id}}">
										<span>{{sub.label}}</span>
									</router-link>
								</div>
								<span class="arrow">&gt;</span>
							</li>
						</ul>
						<div class="sub-menu">
							<ul class="menu_list">
								<li 
									:key="sub._id" 
									class="item clearfix" 
									v-for="sub in subList"
								>
									<h3 class="left fl">{{sub.label}}&nbsp;&gt;</h3>
									<div class="right fl">
										<router-link :key="child._id" v-for="child in sub.children" :to="{path: 'goodsList', query:{classify: child._id}}">
											<span class="right_item">{{child.label}}</span>
										</router-link>
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
						<router-link to="/">
							首页
						</router-link>
					</li>
					<li>
						<router-link to="Person">
							用户中心
						</router-link>
					</li>
					<li>
            <router-link to="Aboutus">
							关于我们
						</router-link>
					</li>
				</ul>
			</div>
			<div class="hotline fr clearfix">
				<i class="fl"></i>
				<span class="fl">采购热线</span>
				<em class="fl">{{companyInfo.hotTel}}</em>
			</div>
		</div>
	</div>
    </section>
</template>
<script>
export default {
  props: {
    showSort: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      subList: []
    };
  },
  computed: {
    classifyList() {
      return this.$store.state.classify.list;
    },
    companyInfo() {
      return this.$store.state.home.companyInfo;
    }
  },
  created() {
    const { commit, dispatch } = this.$store;
    dispatch("getClassifyList");
  },
  methods: {
    menuhover(classify) {
      this.subList = classify.children;
    }
  }
};
</script>
<style lang="scss" scoped>
.nav_wrapper {
  .nav {
    height: 44px;
    width: 100%;
    border-bottom: 2px solid #0059c9;
  }
  .category_index {
    position: relative;
    width: 220px;
    height: 44px;
    overflow: visible;
    background-color: #0059c9;
  }
  .menu {
    position: absolute;
    top: 44px;
    width: 100%;
    background-color: #3a6bed;
    color: #fff;
    height: 482px;
    overflow: hidden;
  }
  .menu-item {
    position: relative;
    padding: 5px 20px;
    height: 60px;
    border-bottom: 1px solid #0059c9;
    box-sizing: border-box;
    &:hover {
      background-color: rgb(0, 84, 189);
    }
    .sub-item {
      white-space: nowrap;
      overflow: hidden;
    }
    .sub-item span {
      padding-right: 3px;
      cursor: pointer;
      color: #fff;
    }
    h3 {
      color: #fff;
      padding: 5px 0;
    }
    .arrow {
      position: absolute;
      top: 20px;
      right: 10px;
    }
  }
  .category_index:hover > .menu-wrap {
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
  .sub-menu {
    display: none;
    position: absolute;
    top: 46px;
    left: 220px;
    width: 680px;
    height: 479px;
    z-index: 10;
    background-color: #fff;
    border-right: 1px solid #1959b1;
    border-bottom: 1px solid #1959b1;
    .menu_list {
      margin-top: 10px;
    }
    .left {
      width: 100px;
      text-align: right;
      padding-right: 10px;
      color: #666;
      font-size: 12px;
      padding-top: 6px;
    }
    .right {
      width: 550px;
      border-bottom: 1px solid #eee;
      font-size: 12px;
      padding: 6px 0 5px;
    }
    .right_item {
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
      &:hover {
        text-decoration: underline;
        color: #3a6bed;
      }
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