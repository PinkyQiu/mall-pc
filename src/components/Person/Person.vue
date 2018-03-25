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
        <div class="left fl">
          <p class="all">全部功能</p>
          <ul class="tab_btn">
            <li 
              v-for="tab in tabs" 
              class="tab_item noselect"
              :class="{'active': currentTab === tab.value}"
              @click="switchTab(tab.value)"
            >{{tab.label}}</li>
          </ul>
        </div>
        <div class="content fl">
          <div id="order" v-if="currentTab === 'order'">
            <div class="order_wrapper" v-for="i in 3">
              <div class="top clearfix" v-for="i in 3">
                <div class="t_left fl">
                  <img src="../images/goodsDepic2.jpg" alt="" class="pic">
                </div>
                <div class="t_right fl">
                  <p class="name">ID520-15 I58250 4G 1T+128G MX150-2G 银 高清W10</p>
                  <p class="type">型号：64寸高清银色</p>
                  <p class="num">
                    <span>数量：3</span>
                    <span>总价：￥1100.00</span>
                  </p>
                </div>
              </div>
              <div class="btm">
                <p class="time">下单时间：2018-11-10</p>
                <p class="cancle">
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
    .left{
      width: 120px;
      padding-left: 112px;
      .all{
        color: #F7931E;
        height: 30px;
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 14px;
      }
      .tab_btn{
        .tab_item{
          font-size: 16px;
          color: #444;
          cursor: pointer;
          margin-bottom: 10px;
          &.active,&:hover{
            color: #F7931E;
          }
        }
      }
    }
  }
  .content{
    width: 900px;
  }
  #order{
    .order_wrapper{
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
    .top{
      padding: 20px;
      border-bottom: 1px solid #ccc;
      .t_left {
        width: 100px;
        .pic{
          width: 80px;
          height: 80px;
        }
      }
      .t_right{
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
          color: #999;
          margin: 2px 0;
        }
        .num{
          font-size: 16px;
          color: #999;
          span{
            margin-right: 30px;
          }
        }
      }
    }
    .btm{
      border-top:1px solid #ccc; 
      background-color: #f1f1f1;
      height: 36px;
      line-height: 36px;
      text-align: right;
      .time,.cancle{
        display: inline-block;
        margin-right: 30px;
        vertical-align: top;
      }
      .cancle{
        cursor: pointer;
        &:hover{
          color:#f7931e;
        };
        .ico{
          display: inline-block;
          width: 22px;
          height: 36px;
          background:url('../images/cancle.png') center no-repeat;
          background-size: 22px 22px;
          vertical-align: top;
        }
      }
      
    }
  }
</style>
