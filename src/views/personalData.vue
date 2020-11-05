<template>
  <div class="layout">
    <div class="topWrapper">
      <div class="avator">
        <!-- <img
          wx:if="{{customerHead}}"
          class="avatorImg"
          src="{{customerHead}}"
        /> -->
        <img class="avatorImg" :src="this.avatorImg2" />
      </div>
    </div>
    <div>
      <van-field
        v-model="value"
        label="笔名"
        placeholder="请输入笔名"
        input-align="right"
      />
      <van-field
        readonly
        clickable
        name="picker"
        input-align="right"
        :value="value2"
        label="性别"
        placeholder="点击选择性别"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="picker"
        input-align="right"
        :value="value3"
        label="地区"
        placeholder="点击选择地区"
        @click="showPicker = true"
      />
    </div>
    <div class="btn-area">
      <button class="btnStyle sumbitBtn">保存信息</button>
    </div>
     <div class="bottomWrapper">
    <button plain="true" class="btnStyle logoutBtn" @click="bindlogouttap">退出账号</button>
  </div>
  </div>
</template>
<script>
import Vue from "vue";
import { RadioGroup, Radio, Field, Picker, Popup } from "vant";
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Field);
Vue.use(Picker);
Vue.use(Popup);
export default {
  data() {
    return {
      avatorImg2:
        "https://wx.kangxukeji.com:443/profile/file/2020/10/14/9cfe672d-5903-4610-9dcb-0bd9ef4151ad.jpg",
      value: "",
      radio: "1",
      value2: "",
      value3: "",
      columns: ["男", "女"],
      showPicker: false,
    };
  },
  methods: {
    onConfirm(value) {
      this.value2 = value;
      this.showPicker = false;
    },
    bindlogouttap(){
       this.$router.push({
          path: `/personal`,
        })
    }
  },
};
</script>

<style scoped>
.topWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 125px;
}
.avator {
  width: 74px;
  height: 74px;
  border: 1px #eee solid;
  margin-bottom: 10px;
  border-radius: 50%;
}
.avatorImg {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
}
.sumbitBtn {
  margin-top: 60px;
  background: linear-gradient(135deg, #576f61 0%, #2f4236 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #576f61;
  border-radius: 5px;
}
.btnStyle {
  width: 100%;
  height: 45px;
}
.logoutBtn {
    margin-top: 40px;
    color: #999999;
    font-size: 16px;
    border: 2px solid #999999;
  border-radius: 5px;

}
</style>