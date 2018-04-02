<template>
    <ul class="clearfix">
		<li :key="item._id" class="item" v-for="item in list">
			<router-link :to="`/goodsDetail/${item._id}`">
				<div class="pic">
					<a href="#">
						<img :src="`${config.imgurl}${item.image_path[0]}`" alt="">
					</a>
				</div>
				<div class="name">{{item.title}}</div>
				<div class="price">
					<span>零售价</span>
					<em>￥{{(+item.specs[0].price).toFixed(2)}}</em>
				</div>
				<div v-if="false" class="handle">
					<router-link to="../Login">登录查看企业专享价</router-link>
				</div>
			</router-link>
		</li>
	</ul>
</template>
<script>
import config from "api/config";
export default {
  data() {
    return { config };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    num: {
      type: Number,
      default: 10
    },
    showPrice: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  display: inline-block;
  width: 220px;
  height: 260px;
  background-color: #fff;
  margin: 10px 0 10px 18px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  .pic {
    padding-top: 6px;
    img {
      display: block;
      margin: 0 auto;
      width: 150px;
      height: 150px;
    }
  }
  .name {
    padding: 10px 20px 0;
    height: 56px;
    line-height: 1.6;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    white-space: normal;
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
      border: 1px solid #333;
      background-color: #fff;
      color: #666;
      transition: all 0.1s ease-in 0s;
      &:hover {
        background-color: #0059c9;
        color: #fff;
      }
    }
  }
}
</style>