<template>
  <div class="footer" v-if="!$route.meta.hideFooter">
    <div class="copyright">© 2005-2018 胜程企业购 版权所有，并保留所有权利。<br>
    广州市天河区天河路518号2105房 <br>
    Tel: 020-89811669<br><br>
    ICP备案证书号:<a href="#" target="_blank">粤ICP备18017210号-1</a>
      <!-- <div>
            <a target="_blank" href="#" class="clearfix">
              <img src="../images/police_logo.jpg" class="police_logo">
              <p class="police">粤公网安备 44010602003836号</p>
            </a>
      </div> -->
    </div>
  </div>
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
  .footer{
    padding: 30px 0;
    text-align: center;
    background: #444;
    color: #fff;
    a{
      color: #fff;
    }
    .police{
      display: inline-block;
      margin-left: 8px;
      color: #c5c4c4;
      vertical-align: middle;
    }
    .police_logo{
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
  }
  .copyright {
    margin: 10px 0;
  }
</style>
