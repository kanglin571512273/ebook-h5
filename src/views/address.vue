<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>


<script>
import Vue from "vue";
import { AddressList } from "vant";

Vue.use(AddressList);
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$router.push({
          path: `/editAds`,
        })
    },
    onEdit(item, index) {
      this.$router.push({
          path: `/editAds`,
        })
    },
  },
};
</script>

<style  scoped>
</style>