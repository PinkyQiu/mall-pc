<template>
  <div>
    <m-menu :showSort="false"></m-menu>

    <section class="ban"></section>

    <!-- 用户名和头像 -->
    <section class="avater_wrapper layout">
        <img src="../images/ico_pwd.png" alt="" class="avat">
        <span class="name">135***2345</span>
    </section>

    <section class="tab_wrapper layout clearfix">
        <ul class="tab_btn fl">
            <li 
              v-for="tab in tabs" 
              class="tab_item noselect"
              :class="{'active': currentTab === tab.value}"
              @click="switchTab(tab.value)"
            >{{tab.label}}</li>
        </ul>
        <div class="content fl">
          <div id="order" v-if="currentTab === 'order'">
            <div class="order_wrapper" v-for="i in 3">
              <div class="top clearfix">
                <div class="left fl">
                  <img src="../images/goodsDepic2.jpg" alt="" class="pic">
                </div>
                <div class="right fl">
                  <p class="name">ID520-15 I58250 4G 1T+128G MX150-2G 银 高清W10</p>
                  <p class="type">型号：64寸高清银色</p>
                  <p class="num">
                    <span>数量：3</span>
                    <span>总价：￥1100.00</span>
                  </p>
                </div>
              </div>
              <div class="btm clearfix">
                <p class="time fr">下单时间：2018-11-10</p>
                <p class="cancle fr">
                  <i class="ico"></i>
                  <span>取消订单</span>
                </p>
              </div>
            </div>
          </div>
          <div id="address" v-if="currentTab === 'address'"></div>
          <div id="password" v-if="currentTab === 'password'"></div>
          <div id="contact" v-if="currentTab === 'contact'"></div>
        </div>
    </section>
  </div>
</template>

<script>
import MMenu from '../commom/Menu'
export default {
  data () {
    return {
      tabs: [{
          value: 'order',
          label: '我的订单'
        },{
          value: 'address',
          label: '地址管理'
        },{
          value: 'password',
          label: '修改密码'
        },{
          value: 'contact',
          label: '联系我们'
        }],
        currentTab: 'order'
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
    box-sizing:border-box;
    box-shadow: 1px 1px 3px 0 rgba(0,0,0,0.20);
    .tab_btn{
      margin: 0 20px;
      padding-top: 30px;
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
        margin-right:230px;
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
  
  #order{
    .top{
      padding: 20px;
      .left {
        width: 120px;
        text-align: center;
        .pic{
          width: 80px;
          height: 80px;
        }
      }
      .right{
        padding-top: 10px;
        .name{
          font-size: 18px;
          color: #3c3c3c;
          cursor: pointer;
          &:hover{
            color:#f7931e;
          };
        }
        .type{
          font-size: 16px;
          color: #9e9e9e;
          margin: 2px 0;
        }
        .num{
          font-size: 16px;
          color: #9e9e9e;
          span{
            margin-right: 30px;
          }
        }
      }
    }
    .btm{
      margin-top: 20px;
      border-top:1px solid #ccc; 
      background-color: #f1f1f1;
      height: 30px;
      line-height: 30px;
      .time{
        margin-right: 30px;
        font-size: 14px;

      }
    }
  }
</style>
