<template>
  <div>
    <div class="recommend layout" v-for="i in 3">
      <div class="content-title clearfix">
        <h2 class="fl">限时特价</h2>
        <h3 class="fl">/每一天都有惊喜/</h3>
      </div>
      <div class="good_wrapper layout">
        <Item class="good_list clearlfix" :showPrice="false"></Item>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '../commom/Item'
export default {
  data () {
    return {
    }
  },
  components:{
    Item,
  }
  
}
</script>

<style scoped lang="scss">
  .recommend{
    margin-bottom: 20px;
    background-color: #f5f3f3;
  }
  .content-title{
    height: 38px;
    border-bottom: 2px solid #333;
    background-color: #fff;
    h2 {
        font-weight: 300;
        line-height: 1;
        font-size: 24px;
        padding: 10px 0 14px;
        color: #333;
    }
    h3 {
        font-weight: 300;
        line-height: 1;
        font-size: 18px;
        padding: 16px 0 14px;
        font-family: " microsoft yahei";
        color: #333;
        margin-left: 25px;
    }
  }
  .good_wrapper{
    width: 100%;
    border: 1px solid #eee;
    border-top: none;
    overflow: hidden;
    padding: 10px 0;
    .good_list{
      width: 1230px;
      margin-top: -10px;
      .item{
        display: inline-block;
        width: 226px;
        height: 319px;
        cursor: pointer;
        transition: all .3s ease;
        border: 1px solid #fff;
        margin-right: 17.5px;
        text-align: center;
        &:hover{
          border: 1px solid #666;
        };
      }
      .item_pic{
        display: block;
        margin: 0 auto;
        width: 200px;
        height: 200px;
      }
      .item_des{
        padding: 0 28px;
        height: 43px;
        line-height: 20px;
        overflow: hidden;
        text-align: center;
        font-size: 14px;
        margin-top: 3px;
      }
      .item_login{
        margin: 0 9px;
        height: 38px;
        overflow: hidden;
        cursor: pointer;
        span{
          display: block;
          height: 36px;
          line-height: 36px;
          font-size: 14px;
          text-align: center;
          border: 1px dotted #333;
          transition: all .1s ease-in 0s;
          &:hover{
            background-color: #F7931E;
            color: #fff;
          };
        }

      }
    }
  }
	
</style>
