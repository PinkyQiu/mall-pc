<template>
  <div>
    <m-menu :showSort="false"></m-menu>

    <section class="ban"></section>

    <!-- 用户名和头像 -->
    <section class="avater_wrapper layout">
        <img src="../images/ico_pwd.png" alt="" class="avat">
        <span class="name">135***2345</span>
    </section>

    <section class="tab_wrapper layout">
        <ul class="tab_btn">
            <li 
              v-for="tab in tabs" 
              class="tab_item noselect"
              :class="{'active': currentTab === tab.value}"
              @click="switchTab(tab.value)"
            >{{tab.label}}</li>
        </ul>
    </section>
  </div>
</template>

<script>
import MMenu from '../commom/Menu'
export default {
  data () {
    return {
      tabs: [{
          value: 'desc',
          label: '我的订单'
        },{
          value: 'property',
          label: '我的收藏'
        },{
          value: 'safe',
          label: '买到的宝贝'
        },{
          value: 'promise',
          label: '我的收货地址'
        },{
          value: 'record',
          label: '我的购物车'
        }],
        currentTab: 'desc'
    }
  },
  components:{
    MMenu,
  }
  
}
</script>

<style scoped lang="scss" scoped>
  .ban{
    width: 100%;
    height: 170px;
    background: url(../images/detail_pic1.jpg) 50% 0;
  }
  .avater_wrapper{
    position: relative;
    margin:5px auto 0;
    height: 70px;
    .avat{
      position: absolute;
      top:-46px;
      width: 96px;
      height: 96px;
      border-radius: 50%;
    }
    .name{
      font-size: 18px;
      color: #444;
      margin-left: 112px;
    }
  }
  .tab_wrapper{
    margin-bottom: 50px;
    background: #FFFFFF;
    padding: 30px 20px;
    box-sizing:border-box;
    box-shadow: 1px 1px 3px 0 rgba(0,0,0,0.20);
    .tab_btn{
      margin-bottom: 50px;
      border-bottom: 1px solid #DFDFDF;
      font-size: 0;
      .tab_item{
        position: relative;
        display: inline-block;
        width: 120px;
        height: 47px;
        font-size: 18px;
        color: #444;
        text-align: center;
        margin-right:142px;
        cursor: pointer;
        &:last-child{
          margin-right:0;
        };
        &.active{
          color: #F7931E;
          &:after{
            position:absolute;
            bottom:-1px;
            content: '';
            left: 0;
            width: 100%;
            border-bottom:3px solid #F7931E;
          }
        }
        &:hover{
          color: #F7931E;
        }
      }
    }
}
</style>
