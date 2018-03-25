<template>
  <ul class="tab"  v-if="!$route.meta.hideslide">
    <li class="item">
      <a href="">
        <img src="../images/ico1.png" alt="" class="ico">
        <span class="txt">主页</span>
      </a>
    </li>
    <li class="item">
      <a href="">
        <img src="../images/ico2.png" alt="" class="ico">
        <span class="txt">购物车</span>
        <span class="num">0</span>
      </a>
    </li>
    <li class="item">
      <a href="">
        <img src="../images/ico3.png" alt="" class="ico">
        <span class="txt">在线客服</span>
      </a>
    </li>
    <li class="item">
      <a href="">
        <img src="../images/ico4.png" alt="" class="ico">
        <span class="txt">我的订单</span>
      </a>
    </li>
    <li class="item">
      <a href="">
        <img src="../images/ico5.png" alt="" class="ico">
        <span class="txt">维修</span>
      </a>
    </li>
    <li class="item">
      <a href="">
        <img src="../images/ico6.png" alt="" class="ico">
        <span class="txt">用户中心</span>
      </a>
    </li>
  </ul>
</template>

<script>


export default {
  data () {
    return {
    }
  },
  
}
</script>

<style scoped lang="scss">
	.tab{
    position: fixed;
    top: 40%;
    z-index: 999;
    right: 0;
    .item{
      width: 35px;
      background: #7a6e6e;
      height: 35px;
      margin-top: 1px;
      cursor: pointer;
      text-align: center;
      line-height: 32px;
      border-radius: 3px;
      position: relative;
      &:hover{
        background: #F7931E;
        .txt{
          width: 100px;
        }
      };
    }
    .ico {
      width: 65%;
      height: 65%;
      display: inline;
    }
    .txt{
      position: absolute;
      padding-left: 5px;
      height: 35px;
      line-height: 35px;
      width: 0px;
      font-size: 15px;
      background: #F7931E;
      color: #FFFFFF;
      top: 0;
      right: 30px;
      z-index: -1;
      border-radius: 3px;
      overflow: hidden;
      transition: all 0.3s;
    }
    .num{
      position: absolute;
      right: 0;
      top:0;
      width: 16px;
      height: 16px;
      line-height: 16px;
      background: #F7931E;
      color: #fff;
      border-radius: 50%;
      text-align: center;
    }
  }
	
</style>
