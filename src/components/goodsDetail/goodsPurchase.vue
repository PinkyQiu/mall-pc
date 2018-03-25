<template>
  <div class="goods_des layout clearfix">
    <div class="left fl">
      <div class="top">
        <img src="../images/goodsDepic.jpg" alt="">
      </div>
      <div class="btm clearfix">
        <i class="arrow fl arrow_left" @click="arrowLeft"></i>
        <div class="pic_wrap fl" ref="picWrap">
            <div class="pic_box">
                <ul class="pic_list clearfix" ref="picList">
                    <li class="item" v-for="i in 8">
                        <img src="../images/goodsDepic2.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <i class="arrow fr arrow_right" @click="arrowRight"></i>
      </div>
    </div>
    <div class="right fl">
      <div class="p_name">小新潮7000-14 I58250U 8G 256G粉 IPS 高清 W10</div>
      <div class="des">【薄出位 潮生活】全面升级intel第八代CPU，性能提升超30% 1小时即可充电80% 窄边框更便携！</div>
      <div class="pur_wrapper">
        <p class="item">
          <span>本店售价：</span>
          <span class="r_p">4999.00</span>
          <span class="same">电商同款<span class="g_p">￥5299</span></span>
          <span class="b_p">降价通知</span>
          <span class="tendency">价格趋势</span>
        </p>
        <p class="item">
          <span class="item_des">商品货号：PC01010114159</span>
          <span class="item_des">商品库存： 有货</span>
          <span class="item_des">商品品牌：联想</span>
        </p>
        <p class="item">
          <span class="item_des">商品点击数：1</span>
          <span class="item_des">销量：100</span>
        </p>
      </div>
      <div class="size_wrapper clearfix">
        <p class="left fl">14寸版本:</p>
        <ul class="type fl clearfix">
          <li class="noselect" v-for="(i,index) in 6" @click="selectItem"
          ref="typeItem">火花银【I5 8G 双硬盘 940MX】</li>
        </ul>
      </div>
      <div class="pur_num noselect">
        <span>购买数量：</span>
        <span class="btn" @click="reduce">-</span>
        <span class="num">{{num}}</span>
        <span class="btn" @click="add">+</span>
      </div>
      <div class="all_price">
        <span>商品总价</span>
        <span class="p">￥5699</span>
      </div>
      <div class="join">加入购物车</div>
      <div class="tip">温馨提示支持7天无理由退货</div>
    </div>
  </div>
</template>
<script>
	export default {
    data() {
      return{
        num:1,
        currentDistance:0
      }
    },
    methods:{
      selectItem(el) {
        let children = el.target.parentNode.children
        let len = children.length;
        for (var i = 0; i < children.length; i++) {
          children[i].classList.remove('active')
        };
        el.target.classList.toggle('active');
      },
      reduce() {
        if (this.num<=1) {
          return
        }
        this.num--
      },
      add() {
        this.num++
      },
      go(isNext) {
        var picWrap = this.$refs.picWrap;
        var picList = this.$refs.picList;
        var itemWidth = 87
        var wrapWidth = picWrap.clientWidth
        var picListWidth = picList.clientWidth
        var newDistance = this.currentDistance
        if(isNext) {
          newDistance -= itemWidth
        } else {
          newDistance += itemWidth
        }
        
        if(newDistance > 0 || (Math.abs(newDistance) + wrapWidth) > picListWidth) {
          return
        }
        picList.style.transform ='translateX('+ newDistance +'px)'

        this.currentDistance = newDistance
      },
      arrowLeft() {
        this.go(false);
      },
      arrowRight() {
        this.go(true);
      },
    }
		
		
	}
</script>
<style lang="scss" scoped>
  .goods_des{
    margin-top: 10px;
    .left{
      width: 450px;
      padding-right: 10px;
      .top{
        width: 452px;
        height: 452px;
        margin-bottom: 20px;
        img{
          width: 450px;
          height: 450px;
          border: 1px solid #eee;
        }
      }
      .btm{
        position: relative;
        margin-bottom: 10px;
        .arrow {
          width: 40px;
          height: 40px;
          cursor: pointer;
          margin-top: 15px;
          &.arrow_left{
            background: url(../images/left.png) 0 0 no-repeat;
            background-size: 100% 100%;
          }
          &.arrow_right{
            background: url(../images/right.png) 0 0 no-repeat;
            background-size: 100% 100%;
          }
        }
        .pic_wrap{
          position: relative;
          width: 330px;
          height: 70px;
          margin:0 20px;
        }
        .pic_box{
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          overflow: hidden;
          font-size: 0;
          white-space: nowrap;
        }
        .pic_list{
          position: absolute;
          left: 0;
          transition:all .3s;
        }
        .item{
          display: inline-block;
          width: 64px;
          height: 64px;
          margin-right: 19px;
          cursor: pointer;
          transition: all .3s;
          border:2px solid transparent;
          &:hover{
            border:2px solid #F7931E;
          };
        }
        img{
          width: 60px;
          height: 60px;
        }
      }
    }
    .right{
      background: #fff;
      width: 738px;
      margin-left: 10px;
      .p_name{
        color: #666;
        padding-top: 10px;
        line-height: 28px;
        margin-bottom: 6px;
        font-size: 20px;
        font-weight: bold;
      }
      .des{
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
      .pur_wrapper{
        padding: 12px 0;
        background: #f3f3f3;
        .item{
          padding: 6px 8px;
          color: #666;
        }
        .r_p{
          font-size: 22px;
          color: #e4393c;
          margin-right: 10px;
        }
        .g_p{
          font-size: 22px;
          text-decoration: line-through;
          color: #999;
          margin-left: 10px;
        }
        .b_p{
          color: #0059c9;
          cursor: pointer;
          font-size: 15px;
          margin:0 10px;
          &:hover{
            color:red;
          };
        }
        .same{
          &:hover{
            color:red;
            .g_p{
              color: red;
            }
          };
        }
        .tendency{
          font-size: 15px;
          cursor: pointer;
          &:hover{
            color:red;
          };
        }
        .item_des{
          display: inline-block;
          width: 33%;
        }
      }
      .size_wrapper{
        border-top: 1px solid #dfdfdf;
        text-align: left;
        padding-top: 10px;
        margin-top: 12px;
        .left{
          width: 74px;
          height: 32px;
          line-height: 32px;
          color: #666;
        }
        .type{
          width: 650px;
          li{
            margin: 0 5px;
            border: 1px solid #cccccc;
            padding: 0 15px;
            display: inline-block;
            height: 32px;
            line-height: 32px;
            margin-top: 5px;
            cursor: pointer;
            &:hover{
              border:1px solid #F7931E;
            }
            &.active{
              background-color: #F7931E;
              color: #fff;
            }
          }
        }
      }
      .pur_num{
        padding: 16px 8px 6px;
        margin-top: 15px;
        border-top: 1px solid #ccc;
        color: #666;
        .btn{
          display: inline-block;
          width: 40px;
          height: 32px;
          line-height: 30px;
          border: 1px solid #ccc;
          text-align: center;
          cursor: pointer;
          font-size: 14px;
        }
        .num{
          display: inline-block;
          width: 60px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #ccc;
          text-align: center;
          padding: 0 10px;
          margin:0 10px;

        }
      }
      .all_price{
        color: #666;
        padding: 6px 8px;
        .p{
          color: #E4393C;
          margin-left: 5px;
          font-weight: bold;
        }
      }
      .join{
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
        transition:all .3s;
        &:hover{
          background-color: rgba(247, 147, 30, 1);
          transform:translateY(-1px);
        };
      }
      .tip{
        padding:6px 8px;
        margin-top: 12px;
        color: #666;
      }

    }

  }
</style>