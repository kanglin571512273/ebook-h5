<template>
  <div class="bookslist">
    <van-grid
      :column-num="3"
      gutter="4"
      :border="false"
      style="margin-bottom: 20px"
    >
      <van-grid-item v-for="value in 3" :key="value" @click="clickdetails">
        <img
          src="https://wx.kangxukeji.com:443/profile/avatar/2020/09/18/659c1ee0-d1d5-450d-94e1-677a42cda87e.png"
          alt="book"
          style="width: 100%; height: 126px"
        />
        <span class="booktitle">追风筝的人</span>
        <div class="bookstitle">
          <span class="bookstitle-font">荐书人：</span>
          <span class="bookstitle-font">小三三</span>
        </div>
      </van-grid-item>
    </van-grid>
    <!-- <div class="loading">
			<van-loading size="16px" wx:if="{{loading}}">加载中...</van-loading>
		</div>
		<div class="weui-loadmore__tips_in-line" wx:if="{{noMore}}">没有更多了~</div> -->
    <div class="weui-loadmore__tips_in-line">没有更多了~</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {};
  },
  methods: {
    clickdetails() {
      this.$router.push({
        path: `/bookdetails`,
      });
    },
  },
};
</script>

<style  scoped>
.booktitle {
  width: 68px;
  margin-top: 4px;
  color: #666666;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  text-align: center;
}
.bookstitle {
  display: flex;
  font-size: 12px;
}
.bookstitle-font {
  width: 50px;
  line-height: 26px;
}
</style>