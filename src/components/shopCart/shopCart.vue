<template>
  <div class="layout">
    <m-menu></m-menu>
  	<div class="top">
  		<span>当前位置：</span>
  		<span>首页</span>
  		<span>&gt;&nbsp;购物流程</span>
  	</div>
  	<div v-if="cartList.length" class="car-wrap">
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
            <tr v-for="(item, index) in cartList" :key="index">
              <td bgcolor="#ffffff" align="center" style="width:300px;">
                <router-link :to="{name: 'detail', params: {id: item.detail.id}}">
                <img style="width:80px; height:80px;" :src="`/img/${item.detail.image_path[0]}`" border="0" title="海康录像机DS-7104N-F1/4P">
                  <br>
                  <span class="f6">{{item.detail.title}}</span>
                </router-link>
              </td>
              <td align="center" bgcolor="#ffffff">￥{{item.selectedType.price}}</td>
              <td align="center" bgcolor="#ffffff">
                <span>{{item.count}}</span>
              </td>
              <td align="center" bgcolor="#ffffff">￥{{item.totalPrice.toFixed(2)}}</td>
              <td align="center" bgcolor="#ffffff">
                  <span style="cursor: pointer;" @click="remove(index)">删除</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="shop_btn" style="text-align:right;">
        合计：￥123123.00
      </div>
      <div class="shop_btn">
        <span class="clear" @click="clear">清空购物车</span>
        <span class="update" @click="buy">立即下单</span>
      </div>
      <el-dialog title="请选择收货地址" :visible="showAddress">
        <ul class="add-wrap" v-if="addressList.length" >
          <li @click="selectAddress(address._id)" class="add-item" v-for="(address, index) in addressList" :key="index">
            <div class="add-info">
              <span class="name">{{address.name}}</span>
              <span class="tel">{{address.tel}}</span>
              <p class="detail">{{address.detail}}</p>
            </div>
          </li>
        </ul>
      </el-dialog>
    </div>
    <p v-else style="padding: 80px;text-align: center;">您的购物车空空的</p>
  </div>
</template>
<script>
import MMenu from "../commom/Menu";
import SelectAddress from "../commom/SelectAddress";
export default {
  data() {
    return {
      addressId: null,
      showAddress: false
    };
  },
  created() {
    const { dispatch } = this.$store;
    dispatch("getAddressList");
  },
  computed: {
    addressList() {
      return this.$store.state.address.list;
    },
    total() {
      return this.cartList
        .map(item => {
          return item.checked ? item.totalPrice : 0;
        })
        .reduce((total, next) => {
          return total + next;
        }, 0);
    },
    cartList() {
      return this.$store.state.car.list;
    }
  },
  methods: {
    remove(index) {
      this.$confirm("确定从购物车中移除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        const { commit } = this.$store;
        commit("REMOVE_OUT_CAR", index);
      });
    },
    toggleChecked(index) {
      const { commit } = this.$store;
      commit("TOGGLE_CHECKED", index);
    },
    selectAddress(id) {
      this.showAddress = false;
      this.addressId = id;
      const { dispatch } = this.$store;
      const items = this.cartList.filter(item => item.checked).map(order => {
        return {
          detail: order.detail._id,
          typeId: order.selectedType._id,
          count: order.count
        };
      });
      const order = {
        addressId: this.addressId,
        items,
        totalPrice: this.total
      };
      if (items.length) {
        dispatch("buy", { order }).then(res => {
          if (res.code === 0) {
            this.$notify.success({
              title: "成功",
              message: "下单成功，可在个人中心中查看订单"
            });
          }
        });
      } else {
        this.$message({
          message: "请选择商品",
          type: "warning"
        });
      }
    },
    clear() {
      this.$confirm("确定清空购物车?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        const { dispatch } = this.$store;
        dispatch("CLEAR_CART");
      });
    },
    buy() {
      if (this.addressList.length) {
        this.showAddress = true;
      } else {
        this.$notify.error({
          title: "错误",
          message: "请先到个人中心添加收货地址"
        });
      }
    }
  },
  components: {
    MMenu,
    SelectAddress
  }
};
</script>

<style scoped lang="scss" scoped>
.top {
  height: 44px;
  line-height: 44px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
  padding-left: 10px;
}
.tt {
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
.shop_wrapper {
  margin: 5px auto;
  th,
  td {
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
  .inputBg {
    border: 1px solid #b3b3b3;
    width: 60px;
    height: 25px;
    line-height: 25px;
  }
}
.shop_btn,
.account {
  height: 42px;
  line-height: 42px;
  margin: 0 auto;
  text-align: center;
  span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    width: 100px;
    background: #0059c9;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-2px);
    }
  }
}
.shop_btn {
  width: 99%;
  border: 1px solid #ddd;
  span {
    margin-right: 5px;
  }
}
.account {
  width: 50%;
  margin-top: 8px;
}
</style>
