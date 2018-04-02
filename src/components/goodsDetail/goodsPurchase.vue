<template>
  <div class="goods_des layout clearfix">
    <div class="left fl">
      <div class="top">
        <img :src="`${config.imgurl}${detailInfo.image_path && detailInfo.image_path[currentImgIndex]}`" alt="">
      </div>
      <div class="btm clearfix">
        <i class="arrow fl arrow_left" @click="arrowLeft"></i>
        <div class="pic_wrap fl" ref="picWrap">
            <div class="pic_box">
                <ul class="pic_list clearfix" ref="picList">
                    <li 
                      :key="img" 
                      class="item"
                      :class="{'active': currentImgIndex === index}"
                      v-for="(img, index) in detailInfo.image_path"
                      @click="currentImgIndex = index"
                    >
                        <img :src="`${config.imgurl}${img}`" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <i class="arrow fr arrow_right" @click="arrowRight"></i>
      </div>
    </div>
    <div class="right fl">
      <div class="p_name">{{detailInfo.title}}</div>
      <div class="des">{{detailInfo.subTitle || detailInfo.title}}</div>
      <div class="pur_wrapper">
        <p class="item">
          <span>本店售价：</span>
          <span class="r_p">￥{{(+currentSpec.price).toFixed(2)}}</span>
          <span class="same">电商同款<span class="g_p">￥{{(+currentSpec.price).toFixed(2)}}</span></span>
        </p>
        <p class="item">
          <span class="item_des">商品货号：{{currentSpec.name}}</span>
          <span class="item_des">商品库存： {{currentSpec.count}}</span>
          <!-- <span class="item_des">销量：100</span> -->
        </p>
        <!-- <p class="item">
          <span class="item_des">商品品牌：{{currentSpec.name}}</span>
          <span class="item_des">商品点击数：1</span>
        </p> -->
      </div>
      <div class="size_wrapper clearfix">
        <p class="left fl">选择规格:</p>
        <ul class="type fl clearfix">
          <li 
            class="noselect"
            :class="{'active': currentSpecIndex === index}"
            v-for="(spec, index) in detailInfo.specs" 
            @click="currentSpec = spec, currentSpecIndex = index"
            ref="typeItem"
            :key="spec._id"
          >{{spec.name}}</li>
        </ul>
      </div>
      <div class="pur_count noselect">
        <span>购买数量：</span>
        <span class="btn" @click="reduce">-</span>
        <span class="count">{{count}}</span>
        <span class="btn" @click="add">+</span>
      </div>
      <div class="all_price">
        <span>商品总价</span>
        <span class="p">￥{{(+totalPrice).toFixed(2)}}</span>
      </div>
      <div class="join" @click="addToCar">加入购物车</div>
      <div class="tip">温馨提示支持7天无理由退货</div>
    </div>
  </div>
</template>
<script>
import config from "api/config";
export default {
  props: ["detailInfo"],
  data() {
    return {
      config,
      currentImgIndex: 0,
      currentSpecIndex: 0,
      currentSpec: {},
      count: 1,
      addressId: null,
      showAddress: false,
      currentDistance: 0
    };
  },
  computed: {
    totalPrice() {
      return this.count * this.currentSpec.price;
    },
    selectedType() {
      const type = this.detailInfo.specs[this.currentTypeIndex];
      if (type) {
        return type;
      } else {
        return { price: 0 };
      }
    },
    orderInfo() {
      const { currentSpec: selectedType, count, detailInfo: detail, totalPrice, addressId } = this;
      return {
        selectedType,
        count,
        detail,
        totalPrice,
        checked: true,
        addressId
      };
    }
  },
  watch: {
    detailInfo() {
      if (this.detailInfo.specs) {
        this.currentSpec = this.detailInfo.specs[this.currentSpecIndex];
      }
    }
  },
  methods: {
    reduce() {
      if (this.count <= 1) {
        return;
      }
      this.count--;
    },
    add() {
      this.count++;
    },
    go(isNext) {
      var picWrap = this.$refs.picWrap;
      var picList = this.$refs.picList;
      var itemWidth = 87;
      var wrapWidth = picWrap.clientWidth;
      var picListWidth = picList.clientWidth;
      var newDistance = this.currentDistance;
      if (isNext) {
        newDistance -= itemWidth;
      } else {
        newDistance += itemWidth;
      }

      if (newDistance > 0 || Math.abs(newDistance) + wrapWidth > picListWidth) {
        return;
      }
      picList.style.transform = "translateX(" + newDistance + "px)";

      this.currentDistance = newDistance;
    },
    arrowLeft() {
      this.go(false);
    },
    arrowRight() {
      this.go(true);
    },
    changeType(index) {
      this.currentTypeIndex = index;
    },
    changeCount() {
      this.count = Math.max(this.count, 1);
    },
    addToCar() {
      const { commit } = this.$store;
      commit("ADD_TO_CAR", this.orderInfo);
      this.$notify({
        title: '成功',
        message: '添加购物车成功',
        type: 'success'
      });
    },
    buy() {
      this.showAddress = true;
    },
    selectAddress(id) {
      this.showAddress = false;
      this.addressId = id;
      const { dispatch } = this.$store;
      const order = {
        addressId: this.orderInfo.addressId,
        items: [
          {
            detail: this.orderInfo.detail._id,
            typeId: this.orderInfo.selectedType._id,
            count: this.orderInfo.count
          }
        ],
        totalPrice: this.totalPrice
      };
      dispatch("buy", { order, clearCart: false });
    }
  }
};
</script>
<style lang="scss" scoped>
.goods_des {
  margin-top: 10px;
  .left {
    width: 450px;
    padding-right: 10px;
    .top {
      width: 452px;
      height: 452px;
      margin-bottom: 20px;
      img {
        width: 450px;
        height: 450px;
        border: 1px solid #eee;
      }
    }
    .btm {
      position: relative;
      margin-bottom: 10px;
      .arrow {
        width: 40px;
        height: 40px;
        cursor: pointer;
        margin-top: 15px;
        &.arrow_left {
          background: url(../images/left.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.arrow_right {
          background: url(../images/right.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
      }
      .pic_wrap {
        position: relative;
        width: 330px;
        height: 70px;
        margin: 0 20px;
      }
      .pic_box {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        font-size: 0;
        white-space: nowrap;
      }
      .pic_list {
        position: absolute;
        left: 0;
        transition: all 0.3s;
      }
      .item {
        display: inline-block;
        width: 64px;
        height: 64px;
        margin-right: 19px;
        cursor: pointer;
        transition: all 0.3s;
        border: 2px solid transparent;
        &:hover {
          border: 2px solid #f7931e;
        }
        &.active {
          border: 2px solid #f7931e;
        }
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
  .right {
    background: #fff;
    width: 738px;
    margin-left: 10px;
    .p_name {
      color: #666;
      padding-top: 10px;
      line-height: 28px;
      margin-bottom: 6px;
      font-size: 20px;
      font-weight: bold;
    }
    .des {
      margin-bottom: 6px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 618px;
      max-height: 1.5em;
      line-height: 1.5em;
      color: #e4393c;
      font-size: 14px;
    }
    .pur_wrapper {
      padding: 12px 0;
      background: #f3f3f3;
      .item {
        padding: 6px 8px;
        color: #666;
      }
      .r_p {
        font-size: 22px;
        color: #e4393c;
        margin-right: 10px;
      }
      .g_p {
        font-size: 22px;
        text-decoration: line-through;
        color: #999;
        margin-left: 10px;
      }
      .b_p {
        color: #0059c9;
        cursor: pointer;
        font-size: 15px;
        margin: 0 10px;
        &:hover {
          color: red;
        }
      }
      .same {
        &:hover {
          color: red;
          .g_p {
            color: red;
          }
        }
      }
      .tendency {
        font-size: 15px;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .item_des {
        display: inline-block;
        width: 33%;
      }
    }
    .size_wrapper {
      border-top: 1px solid #dfdfdf;
      text-align: left;
      padding-top: 10px;
      margin-top: 12px;
      .left {
        width: 74px;
        height: 32px;
        line-height: 32px;
        color: #666;
      }
      .type {
        width: 650px;
        li {
          margin: 0 5px;
          border: 1px solid #cccccc;
          padding: 0 15px;
          display: inline-block;
          height: 32px;
          line-height: 32px;
          margin-top: 5px;
          cursor: pointer;
          &:hover {
            border: 1px solid #f7931e;
          }
          &.active {
            background-color: #f7931e;
            color: #fff;
            border: 1px solid #f7931e;
          }
        }
      }
    }
    .pur_count {
      padding: 16px 8px 6px;
      margin-top: 15px;
      border-top: 1px solid #ccc;
      color: #666;
      .btn {
        display: inline-block;
        width: 40px;
        height: 32px;
        line-height: 30px;
        border: 1px solid #ccc;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
      }
      .count {
        display: inline-block;
        width: 60px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #ccc;
        text-align: center;
        padding: 0 10px;
        margin: 0 10px;
      }
    }
    .all_price {
      color: #666;
      padding: 6px 8px;
      .p {
        color: #e4393c;
        margin-left: 5px;
        font-weight: bold;
      }
    }
    .join {
      width: 140px;
      height: 40px;
      background-color: rgba(247, 147, 30, 0.8);
      padding: 5px 20px;
      display: inline-block;
      text-decoration: none;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
      color: #ffffff;
      margin: 16px 0 0 8px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: rgba(247, 147, 30, 1);
        transform: translateY(-1px);
      }
    }
    .tip {
      padding: 6px 8px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>