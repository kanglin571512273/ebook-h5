<template>
  <div class="layout">
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value1"
        name="pattern"
        placeholder="正则校验"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="value2"
        name="validator"
        placeholder="函数校验"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field
        v-model="value3"
        name="asyncValidator"
        placeholder="异步函数校验"
        :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
      />
      <van-field
        readonly
        clickable
        name="area"
        :value="value"
        placeholder="点击选择省市区"
        @click="showArea = true"
      />
      <van-popup v-model="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirm"
          @cancel="showArea = false"
        />
      </van-popup>
           <van-field
        v-model="value"
        placeholder="请输入笔名"
      />
      <van-field name="switch" label="设置为默认地址">
        <template #input>
          <van-switch v-model="switchChecked" size="20" />
        </template>
      </van-field>
 
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>


<script>
import Vue from "vue";
import address from "../request/address.js";
import { Form, Button, Switch, Area } from "vant";
Vue.use(Form);
Vue.use(Button);
Vue.use(Switch);
Vue.use(Area);
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      pattern: /\d{6}/,
      switchChecked: false,
      value: "",
      showArea: false,
      areaList: address,
      // 数据格式见 Area 组件文档
    };
  },
  created() {
    //   this.areaList =address
    console.log(address, 222222);
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    onConfirm(values) {
      this.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");

      this.showArea = false;
    },
  },
};
</script>
<style >
.van-field__label{
    width: 270px !important
}
</style>