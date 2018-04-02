<template>
  <div class="detail_wrapper">
    <ul class="tab clearfix">
      <li 
        :key="tab.value"
        v-for="tab in tabs" 
        class="tab_item noselect"
        :class="{'active': currentTab === tab.value}"
        @click="switchTab(tab.value)"
      >{{tab.label}}</li>
    </ul>
    <div class="content">
      <div v-if="currentTab === 'desc'" id="desc">
        <img 
          :key="img"
          v-for="img in detailInfo.detailImgs" 
          :src="`${config.imgurl}${img}`" 
          alt="" 
          class="desc_pic"
        >
      </div>
      <div v-if="currentTab === 'property'" id="property">
        <table class="table" width="100%" border="0" cellpadding="3" cellspacing="1" bgcolor="#dddddd">
          <tbody>
            <tr>
              <th colspan="2" bgcolor="#FFFFFF">商品属性</th>
            </tr>
            <tr :key="property._id" v-for="property in detailInfo.properties">
                <td bgcolor="#FFFFFF" align="left" class="f1">{{property.name}}</td>
                <td bgcolor="#FFFFFF" align="left">{{property.content}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="currentTab === 'safe'" id="safe">
        <div class="item clearfix">
          <div class="left fl">
            <img src="../images/servive.png" alt="">
          </div>
          <div class="right fl">
            <p class="title">厂家服务</p>
            <p class="txt">本产品全国联保，享受三包服务，质保期为：二年有限质保。</p>
          </div>
        </div>
        <div class="item clearfix">
          <div class="left fl">
            <img src="../images/quality.png" alt="">
          </div>
          <div class="right fl">
            <p class="title">正品行货</p>
            <p class="txt">胜程在线向您保证所售商品均为正品行货</p>
          </div>
        </div>
        <div class="item clearfix">
          <div class="left fl">
            <img src="../images/guarantee.png" alt="">
          </div>
          <div class="right fl">
            <p class="title">全国联保</p>
            <p class="txt">凭质保证书及发票，可享受全国联保服务 ，享受法定三包售后服务，请您放心购买！ </p>
            <p class="notice">注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</p>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'promise'" id="promise">售后内容：本产品全国联保，享受三包服务。
         <br/>售后服务电话：020-89811669
      </div>
      <!-- <div v-if="currentTab === 'record'" id="record">
        <table class="transaction-record" cellspacing="0px">
          <tbody>
            <tr>
              <th>购买人</th>
              <th>购买价</th>
              <th>交易数量</th>
              <th>交易时间</th>
            </tr>
            <tr class="record-content" v-for="i in 20">
              <td>****</td>
              <td>****</td>
              <td>2</td>
              <td>2018-03-15 17:46:30</td>
            </tr>
          </tbody>
        </table>
      </div> -->
    </div>
  </div>
</template>
<script>
import config from "api/config";
	export default {
    props: ['detailInfo'],
    data(){
      return {
        config,
        tabs: [{
          value: 'desc',
          label: '商品描述'
        },{
          value: 'property',
          label: '商品属性'
        },{
          value: 'safe',
          label: '售后保障'
        },{
          value: 'promise',
          label: '服务承诺'
        },
        // {
        //   value: 'record',
        //   label: '交易记录'
        // }
        ],
        currentTab: 'desc'
      }
    },
		methods:{
      switchTab(tab) {
        this.currentTab = tab
      }
    }
		
	}
</script>
<style lang="scss" scoped>
  .detail_wrapper{
    width: 1000px;
    margin:40px auto;
    border: 1px solid #eee;
  }
  .tab{
    width: 1000px;
    border-bottom: 1px solid #0059c9;
    margin:0 auto;
    background-color: #f7f7f7;
    .tab_item{
      height: 32px;
      line-height: 32px;
      width: 20%;
      text-align: center;
      font-size: 14px;
      float: left;
      color: #333;
      cursor: pointer;
      &:hover{
        color: #0059c9;
      }
      &.active{
        background-color:#0059c9;
        color: #fff;
      };
    }
  }
  .content{
    min-height: 300px;
  }
  #desc{
    width: 1000px;
    margin:0 auto 50px;
    .desc_pic{
      display: block;
      margin: 0 auto;
      // width: 1000px;
      height: auto;
    }
  }
  #property{
    width: 1000px;
    margin:0 auto;
    color: #666;
    table{
      display: table;
      border-collapse: separate;
      border-spacing: 1px;
      border-color: grey;
      th{
        padding: 10px;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
      }
      td{
        padding: 5px;
        width: 50%;
        text-align: center;
        font-size: 14px;
      }
      .f1 {
        color: #E4393C;
        font-weight: bold;
      }
    }
  }
  #safe{
    padding: 40px 0 20px 30px;
    color: #666;
    .item{
      margin-bottom: 30px;
      .left{
        width: 38px;
        height: 38px;
        line-height: 32px;
        text-align: center;
        border-radius: 50%;
        background-color: #e50100;
        margin-right: 10px;
        img{
          width: 24px;
          height: 24px;
        }
      }
      .right{
        width: 800px;
        margin-left: 4px;
        .title{
          color: rgb(228,57,60);
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 4px;
        }
        .notice{
          margin-top: 14px;
        }
      }
    }
  }
  #promise{
    padding: 20px 20px 20px 40px; 
    color: #666;
    font-size: 12px;
    line-height: 20px;
  }
  #record{
    table{
      width: 100%;
      margin-top: 5px;
      color: #666;
    }
    tr{
      height: 30px;
    }
    th{
      width: 25%;
      border-bottom: 1px solid #ccc;
      font-weight: bold;
    }
    .record-content {
      width: 100%;
      background: #f9f9f9;
    }
    td{
      width: 25%;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
  }
  
</style>