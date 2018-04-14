<template>
  <div>
	  <div 
	  	:key="floor._id" 
		class="goods layout" 
		v-for="floor in floorList"
	  >
	  	<div class="content-title clearfix">
			<h2 class="tt fl">{{floor.label}} {{floor.children[0].label}}</h2>
      <div class="tab-wrap" ref="wrapper">
        <ul class="tab-nav clearfix fr">
          <li 
            :key="child._id" 
            v-if="index < 7"
            v-for="(child, index) in floor.children[0].children" 
            class="item"
            :class="{'active': activeTabs[floor._id] === child._id}"
            @mouseenter="tabChange(child._id, floor._id)"
          >{{child.label}}</li>
        </ul>
      </div>
		</div>
		<div class="content_main layout clearfix">
			<div class="left fl">
				<img src="../images/left_pic.jpg" alt="" class="left_pic">
				<ul class="category">
					<li 
						:key="child._id" 
						v-for="(child) in floor.children[0].children" 
					>
            <router-link :to="{path: 'goodsList', query:{classify: child._id}}">
              {{child.label}}
            </router-link>
          </li>
				</ul>
			</div>
			<div class="right fr">
				<div class="right_list">
					<Item :list="activeTabData[activeTabs[floor._id]]"></Item>
				</div>
			</div>
		</div>
	  </div>
  </div>
</template>

<script>
import Item from "../commom/Item";
import BScroll from "better-scroll";
import api from "api";
export default {
  data() {
    return {
      activeTabs: {},
      activeTabData: {},
      loadedTabData: {}
    };
  },
  watch: {
    floorList(list) {
      this.initActiveTabs(list);
      // this.$nextTick(() => {
      //   this.scroll = new BScroll(this.$refs.wrapper, {});
      // });
    }
  },
  created() {},
  computed: {
    floorList() {
      let list = this.$store.state.classify.list;
      list = [...list].splice(0, 4);
      return list;
    }
  },
  methods: {
    tabChange(activetab, floor) {
      this.$set(this.activeTabs, [floor], activetab);
      this.$nextTick(() => {
        this.fetchTabData(activetab).then(list => {
          this.$set(this.activeTabData, [activetab], list);
        });
      });
    },
    initActiveTabs(list = []) {
      list.forEach(item => {
        const tab = item.children[0].children[0]._id;
        this.$set(this.activeTabs, [item._id], tab);
        this.fetchTabData(tab).then(list => {
          this.$set(this.activeTabData, [tab], list);
        });
      });
    },
    fetchTabData(tab) {
      const params = {
        limit: 8,
        offset: 0,
        classifyId: tab
      };
      const exitList = this.loadedTabData[tab] || [];
      if (exitList.length) {
        return new Promise(resolve => resolve(exitList));
      } else {
        return api.getProductList(params).then(res => {
          this.$set(this.loadedTabData, [tab], res.data.list);
          return res.data.list;
        });
      }
    }
  },
  components: {
    Item
  }
};
</script>

<style scoped lang="scss">
.goods {
  padding: 20px 0;
}
.content-title {
  height: 38px;
  border-bottom: 2px solid #333;
}
.tt {
  font-weight: 300;
  line-height: 1;
  font-size: 24px;
  padding: 10px 0 6px;
  color: #333;
}
.tab-wrap {
  overflow: hidden;
}
.tab-nav {
  padding-top: 6px;
  max-width: 976px;
  height: 32px;
  overflow: hidden;
  white-space: nowrap;
  .item {
    display: inline-block;
    font-size: 16px;
    margin: 0 5px;
    padding: 0 10px;
    line-height: 32px;
    text-align: center;
    cursor: default;
    color: #333;
    background-color: #fff;
    &:hover,
    &.active {
      background-color: #333;
      color: #fff;
    }
  }
}
.content_main {
  .left {
    position: relative;
    width: 234px;
    height: 570px;
  }
  .left_pic {
    width: 234px;
    width: 234px;
    height: 570px;
  }
  .category {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    padding: 17px 14px 0 10px;
    width: 210px;
    // height: 107px;
    background: rgba(255, 255, 255, 0.5);
    li {
      float: left;
      margin-bottom: 10px;
      padding: 0 9px;
      height: 15px;
      line-height: 15px;
      border-right: 1px solid #333;
      white-space: nowrap;
      font-size: 14px;
      color: #333;
    }
  }
  .right {
    width: 976px;
    height: 570px;
    overflow: hidden;
    .right_list {
      background-color: #f5f3f3;
      padding-top: 6px;
      height: 564px;
    }
  }
}
</style>
