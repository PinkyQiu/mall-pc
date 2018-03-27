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
          <div id="address" v-if="currentTab === 'address'">
            <div class="address_wrrapper" v-for="i in 3">
              <div class="top">
                <p class="name">
                  <span>欧欧</span>
                  <span>13814242551</span>
                </p>
                <p class="address">广东省深圳市福田区新洲中心村99栋广东省深圳市福田区新洲中心村99栋</p>
              </div>
              <div class="btm">
                <p class="edit">
                  <i class="ico"></i>
                  <span>编辑</span>
                </p>
                <p class="del">
                  <i class="ico"></i>
                  <span>删除</span>
                </p>
              </div>
            </div>
          </div>
          <div id="password" v-if="currentTab === 'password'">
            <div class="pwd_wrapper">
              <span>原密码</span>
              <input type="password" class="old" placeholder="请输入原密码">
            </div>
            <div class="pwd_wrapper">
              <span>新密码</span>
              <input type="password" class="old" placeholder="请输入新密码">
            </div>
            <p class="btn">确认修改</p>
          </div>
          <div id="contact" v-if="currentTab === 'contact'">
            <div class="contact_wrapper">
              <span class="title">联系人</span>
              <span class="name">陈俏霖</span>
            </div>
            <div class="contact_wrapper">
              <span class="title">联系电话</span>
              <span class="num">0662-6636328&nbsp;,&nbsp;&nbsp;13926381516</span>
            </div>
          </div>
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
  },
  methods:{
    switchTab(tab) {
      this.currentTab = tab
    }
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
      .tab_btn{
        .tab_item{
          font-size: 16px;
          color: #444;
          cursor: pointer;
          margin-bottom: 20px;
          &.active,&:hover{
            color: #0059c9;
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
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 20px;
      .top{
        padding: 20px;
        margin: 0 10px;
        border-bottom: 1px dashed #ccc;
      }
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
            color:#0059c9;
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
          color:#0059c9;
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
  #address{
    padding:0 10px;
    .address_wrrapper{
      padding: 20px 20px 0;
      font-size: 14px;
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 20px;
    }
    .top{
      padding-bottom: 14px;
      border-bottom: 1px dashed #eee;
    }
    .name{
      margin-bottom: 4px;
      span{
        margin-right: 4px;
      }
    }
    .btm{
      text-align: right;
      height: 36px;
      line-height: 36px;
    }
    .edit,.del{
      display: inline-block;
      margin-left: 40px;
      cursor: pointer;
      &:hover{
        color:#0059c9;
      };
      .ico{
        display: inline-block;
        width: 22px;
        height: 36px;
        vertical-align: top;
      }
    }
    .edit{
      .ico{
        background: url('../images/edit.png') center no-repeat;
        background-size: 22px 22px;
      }
    }
    .del{
      .ico{
        background: url('../images/cancle.png') center no-repeat;
        background-size: 22px 22px;
      }
    }
  }
  #password{
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    padding: 0 10px 10px;
    font-size: 14px;
    .pwd_wrapper{
      height: 36px;
      line-height: 36px;
      padding: 10px;
      border-bottom: 1px solid #eee;
      span{
        margin-right: 20px;
      }
      input::placeholder{
        color: #999;
      }
    }
    .btn{
      width: 200px;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      text-align: center;
      margin: 10px auto 0;
      border: 1px solid #0059c9;
      color: #0059c9;
      cursor: pointer;
      transition:all .3s;
      &:hover{
        background:#0059c9;
        color: #fff;
      };
    }
  }
  #contact{
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    font-size: 14px;
    padding: 30px 40px;
    height: 160px;
    color: #888;
    .title{
      display: inline-block;
      width: 70px;
      margin:0 12px 12px 0;
    }
    .name{
      color: #333;
      font-size: 18px;
    }
    .num{
      color: #0059c9;
      font-size: 18px;
    }
  }
</style>
