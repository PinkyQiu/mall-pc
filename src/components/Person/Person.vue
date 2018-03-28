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
              :key="tab.value"
              v-for="tab in tabs" 
              class="tab_item noselect"
              :class="{'active': currentTab === tab.value}"
              @click="switchTab(tab.value)"
            >{{tab.label}}</li>
          </ul>
        </div>
        <div class="content fl">
          <div id="order" v-if="currentTab === 'order'">
            <div class="order_wrapper" v-for="(order, index) in orderList" :key="index">
              <router-link 
                class="prod-item" 
                :to="{name: 'detail', params: {id: item.detail._id}}"
                v-for="(item, innerIndex) in order.items"
                :key="innerIndex"
              >
                <div class="top clearfix">
                  <div class="t_left fl">
                    <img :src="`/img/${item.detail.image_path[0]}`" alt="" class="pic">
                  </div>
                  <div class="t_right fl">
                    <p class="name">{{item.detail.title}}</p>
                    <p class="type">型号：{{item.selectedType.name}}</p>
                    <p class="num">
                      <span>数量：{{item.count}}</span>
                      <span>总价：￥{{item.totalPrice.toFixed(2)}}</span>
                    </p>
                  </div>
                </div>
              </router-link>
              <div class="btm">
                <p class="time">下单时间：2018-11-10</p>
                <p class="cancle" v-if="order.status === 0" @click="cancleOrder" >
                  <i class="ico"></i>
                  <span>取消订单</span>
                </p>
                <p class="cancle" v-if="order.status === 3">
                  <i class="ico"></i>
                  <span>订单已取消</span>
                </p>
              </div>
            </div>
          </div>
          <div id="address" v-if="currentTab === 'address'">
            <p><el-button type="primary" @click="dialogFormVisible = true, addressForm = {}">添加地址</el-button></p>
            <div class="address_wrrapper" v-for="(address, index) in addressList" :key="index">
              <div class="top">
                <p class="name">
                  <span>{{address.name}}</span>
                  <span>{{address.tel}}</span>
                </p>
                <p class="address">{{address.detail}}</p>
              </div>
              <div class="btm">
                <p class="edit" @click="editAddress(address)">
                  <i class="ico"></i>
                  <span>编辑</span>
                </p>
                <p class="del" v-popover:popover5>
                  <i class="ico"></i>
                  <span>删除</span>
                </p>
                <el-popover
                  ref="popover5"
                  placement="top"
                  width="160"
                  v-model="visible2">
                  <p>确定删除该地址吗？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="removeAddress(address._id, index)">确定</el-button>
                  </div>
                </el-popover>
              </div>
            </div>
            <el-dialog :title="addressForm._id ? '修改地址' : '新增地址'" :visible.sync="dialogFormVisible">
              <el-form :model="addressForm">
                <el-form-item label="联系人" :label-width="formLabelWidth">
                  <el-input v-model="addressForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                  <el-input v-model="addressForm.tel" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址详情" :label-width="formLabelWidth">
                  <el-input v-model="addressForm.detail" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitAddress">确 定</el-button>
              </div>
            </el-dialog>
          </div>
          <div id="password" v-if="currentTab === 'password'">
            <div class="pwd_wrapper">
              <span>原密码</span>
              <input type="password" v-model="oldpwd" class="old" placeholder="请输入原密码">
            </div>
            <div class="pwd_wrapper">
              <span>新密码</span>
              <input type="password" v-model="newpwd"  class="old" placeholder="请输入新密码">
            </div>
            <p class="btn" @click="updatePassword">确认修改</p>
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
        }],
        currentTab: 'order',
        formLabelWidth: '120px',
        visible2: false,
        dialogFormVisible: false,
        addressForm: {},
        oldpwd: '',
        newpwd: '',
    }
  },
  computed: {
    orderList() {
      return this.$store.state.order.list
    },
    addressList() {
      return this.$store.state.address.list
    }
  },
  created() {
    const { dispatch } = this.$store
    dispatch('getOrderList')
    dispatch('getAddressList')
  },
  methods:{
    switchTab(tab) {
      this.currentTab = tab
    },
    cancleOrder(id) {
      MessageBox.confirm('确定取消该订单?').then(action => {
        const { dispatch } = this.$store
        dispatch('cancelOrder', {id}).then(() => {
          dispatch('getOrderList')
        })
      })
    },
    submitAddress() {
      const { dispatch } = this.$store
      this.addressForm._id ? 
      dispatch('updateAddress', this.addressForm).then(res => {
        this.dialogFormVisible = false
        dispatch('getAddressList')
      }) : 
      dispatch('addAddress', this.addressForm).then(res => {
        this.dialogFormVisible = false
        dispatch('getAddressList')
      })
    },
    editAddress(address = {}) {
      this.addressForm = address
    },
    removeAddress(id, index) {
      const { dispatch } = this.$store
      dispatch('removeAddress', { id, index }).then(() => {
        dispatch('getAddressList')
      })
    },
    updatePassword () {
      const { oldpwd, newpwd } = this
      if(!oldpwd || !newpwd) {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        });
        return
      }
      const { dispatch } = this.$store
      dispatch('updatePassword', {oldpwd, newpwd}).then((res) => {
        if(res.code === 0) {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
        }
      })
    }
  },
  components:{
    MMenu,
  }
  
}
</script>

<style scoped lang="scss" scoped>
.ban {
  width: 100%;
  height: 170px;
  background: url(../images/detail_pic1.jpg) 50% 0;
}
.avater_wrapper {
  position: relative;
  margin: 5px auto 0;
  height: 70px;
  .avat {
    position: absolute;
    top: -46px;
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
  .name {
    font-size: 18px;
    color: #444;
    margin-left: 112px;
  }
}
.tab_wrapper {
  margin-bottom: 50px;
  background: #ffffff;
  box-sizing: border-box;
  .left {
    width: 120px;
    padding-left: 112px;
    .tab_btn {
      .tab_item {
        font-size: 16px;
        color: #444;
        cursor: pointer;
        margin-bottom: 20px;
        &.active,
        &:hover {
          color: #0059c9;
        }
      }
    }
  }
}
.content {
  width: 900px;
}
#order {
  .order_wrapper {
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    .top {
      padding: 20px;
      margin: 0 10px;
      border-bottom: 1px dashed #ccc;
    }
    .t_left {
      width: 100px;
      .pic {
        width: 80px;
        height: 80px;
      }
    }
    .t_right {
      .name {
        font-size: 18px;
        color: #3c3c3c;
        cursor: pointer;
        &:hover {
          color: #0059c9;
        }
      }
      .type {
        font-size: 16px;
        color: #999;
        margin: 2px 0;
      }
      .num {
        font-size: 16px;
        color: #999;
        span {
          margin-right: 30px;
        }
      }
    }
  }
  .btm {
    height: 36px;
    line-height: 36px;
    text-align: right;
    .time,
    .cancle {
      display: inline-block;
      margin-right: 30px;
      vertical-align: top;
    }
    .cancle {
      cursor: pointer;
      &:hover {
        color: #0059c9;
      }
      .ico {
        display: inline-block;
        width: 22px;
        height: 36px;
        background: url("../images/cancle.png") center no-repeat;
        background-size: 22px 22px;
        vertical-align: top;
      }
    }
  }
}
#address {
  padding: 0 10px;
  .address_wrrapper {
    padding: 20px 20px 0;
    font-size: 14px;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
  .top {
    padding-bottom: 14px;
    border-bottom: 1px dashed #eee;
  }
  .name {
    margin-bottom: 4px;
    span {
      margin-right: 4px;
    }
  }
  .btm {
    text-align: right;
    height: 36px;
    line-height: 36px;
  }
  .edit,
  .del {
    display: inline-block;
    margin-left: 40px;
    cursor: pointer;
    &:hover {
      color: #0059c9;
    }
    .ico {
      display: inline-block;
      width: 22px;
      height: 36px;
      vertical-align: top;
    }
  }
  .edit {
    .ico {
      background: url("../images/edit.png") center no-repeat;
      background-size: 22px 22px;
    }
  }
  .del {
    .ico {
      background: url("../images/cancle.png") center no-repeat;
      background-size: 22px 22px;
    }
  }
}
#password {
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0 10px 10px;
  font-size: 14px;
  .pwd_wrapper {
    height: 36px;
    line-height: 36px;
    padding: 10px;
    border-bottom: 1px solid #eee;
    span {
      margin-right: 20px;
    }
    input::placeholder {
      color: #999;
    }
  }
  .btn {
    width: 200px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    text-align: center;
    margin: 10px auto 0;
    border: 1px solid #0059c9;
    color: #0059c9;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #0059c9;
      color: #fff;
    }
  }
}
#contact {
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 30px 40px;
  height: 160px;
  color: #888;
  .title {
    display: inline-block;
    width: 70px;
    margin: 0 12px 12px 0;
  }
  .name {
    color: #333;
    font-size: 18px;
  }
  .num {
    color: #0059c9;
    font-size: 18px;
  }
}
</style>
