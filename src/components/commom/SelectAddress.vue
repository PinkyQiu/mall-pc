<template>
  <div>
      <el-popover
        ref="addressPopover"
        placement="right"
        width="400"
        v-model="addressPopoverVisiable">
        <p class="title">请选择收货地址 ({{addressList.length}})</p>
        <ul class="add-wrap" v-if="addressList.length" >
            <li @click="select(address._id)" class="add-item" v-for="(address, index) in addressList" :key="index">
            <div class="add-info">
                <span class="name">{{address.name}}</span>
                <span class="tel">{{address.tel}}</span>
                <p class="detail">{{address.detail}}</p>
            </div>
            </li>
        </ul>
    </el-popover>
    <div v-popover:addressPopover>
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["onselect"],
  data() {
    return {
      addressPopoverVisiable: false
    };
  },
  computed: {
    addressList() {
      return this.$store.state.address.list;
    }
  },
  created() {
    const { dispatch } = this.$store;
    dispatch("getAddressList");
  },
  methods: {
    select(id) {
      this.addressPopoverVisiable = true;
      this.onselect(id);
    }
  }
};
</script>

