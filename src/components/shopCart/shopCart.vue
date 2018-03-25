<template>
  <div class="layout">
    <m-menu></m-menu>
  	<div class="top">
  		<span>当前位置：</span>
  		<span>首页</span>
  		<span>&gt;&nbsp;购物流程</span>
  	</div>
  	<h2 class="tt">商品列表</h2>
  	<div class="shop_wrapper">
  		<table width="99%" align="center" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
        <tbody>
          <tr>
            <th bgcolor="#ffffff">商品名称</th>
            <th bgcolor="#ffffff">商品价格</th>
            <th bgcolor="#ffffff">购买数量</th>
            <th bgcolor="#ffffff">小计</th>
            <th bgcolor="#ffffff">操作</th>
          </tr>
          <tr>
            <td bgcolor="#ffffff" align="center" style="width:300px;">
              <a href="#" target="_blank">
               <img style="width:80px; height:80px;" src="../images/salepic1.jpg" border="0" title="海康录像机DS-7104N-F1/4P">
               </a><br>
              <a href="#" target="_blank" class="f6">海康录像机DS-7104N-F1/4P</a>
            </td>
            <td align="center" bgcolor="#ffffff">350.00</td>
            <td align="center" bgcolor="#ffffff">
	              <input type="text" value="1" size="4" class="inputBg" style="text-align:center ">
	          </td>
            <td align="center" bgcolor="#ffffff">￥350.00</td>
            <td align="center" bgcolor="#ffffff">
                <a href="#" class="f6">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
  	</div>
  	<div class="shop_btn">
  		<span class="clear">清空购物车</span>
  		<span class="update">更新购物车</span>
  	</div>
  	<div class="account clearfix">
      <span class="fl">继续购物</span>
      <span class="fr">结算中心</span> 
    </div>
  </div>

</template>

<script>
import MMenu from '../commom/Menu'
export default {
  data () {
    return {
    }
  },
  components:{
    MMenu,
  }
  
}
</script>

<style scoped lang="scss" scoped>
  .top{
    height: 44px;
    line-height: 44px;
    background-color: #F2F2F2;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    padding-left: 10px;
  }
  .tt{
    background: #ececec;
    color: #333;
    font-weight: bold;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    background: #f6f6f6;
    color: #333;
    border: 1px solid #fff;
    padding-left: 10px;
  }
  .shop_wrapper{
    margin:5px auto;
    th {
      display: table-cell;
      padding: 5px;
    }
    table {
      display: table;
      border-collapse: separate;
      border-spacing: 1px;
      border-color: grey;
    }
    tbody {
        display: table-row-group;
        vertical-align: middle;
    }
  }
  .shop_btn,.account{
    height: 42px;
    line-height: 42px;
    margin: 0 auto;
    text-align: center;
    span{
      display: inline-block;
      height: 30px;
      line-height: 30px;
      width: 100px;
      background: #F7931E;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      transition:all .3s;
      &:hover{
        transform:translateY(-2px);
      };
      
    }
  }
  .shop_btn{
    width:99%;
    border: 1px solid #ddd;
    span{
      margin-right: 5px;
    }
  }
  .account{
    width:50%;
    margin-top: 8px;
  }
  
</style>
