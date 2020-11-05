<template>
<div class="layout">
  <div class="container" @click="bindModuleTap">
    <div class="imgBox">
      <img class="image" :src="this.imgUrl" />
    </div>
    <div class="infoBox">
      <div :class="[isDate == true ? 'infoTop2' : 'infoTop1']">
        <div class="title">{{ bookTitle }}</div>
        <div v-if="isFreeGet">
          <button class="getBtn">免费领取</button>
        </div>
        <span v-if="isDate" class="pDate regFont">{{ pDate }}</span>
      </div>
      <!-- <span class="bookPerson regFont">{{personNameUrl}}</span> -->
      <div class="bookstitle" style="display: flex; align-items: center">
        <span class="bookPerson regFont">荐书人：</span>
        <image
          class="personNameUrl"
          :style="this.personNameUrl ? '' : 'display:none'"
          :src="this.personNameUrl"
        ></image
        ><span
          class="bookPerson regFont"
          :style="this.personNameUrl ? 'display:none' : ''"
          >{{ bookPerson }}</span
        >
      </div>
      <div class="message regFont">{{ bookMsg }}</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "contacts",
  props: {
    imgUrl: String,
    bookTitle: String,
    bookPerson: String,
    personNameUrl: String,
    bookMsg: String,
    isFreeGet: Boolean,
    isDate: Boolean,
    pDate: String,
    bookId: Number,
  },
  methods: {
    bindModuleTap() {
      this.$router.push({
          path: `/bookdetails`,
        })
    },
  },
};
</script>

<style  scoped>
.container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 130px;
  margin: 0 auto;
  background: #f3f3f3;
  border-radius: 10px;
}

.imgBox {
  width: 110px;
  height: 100%;
  margin-right: 20px;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-size: cover;
}

.infoBox {
  height: 100%;
  width: 240px;
  box-sizing: border-box;
}

.infoTop1 {
  display: flex;
  justify-content: flex-start;
}

.infoTop2 {
  display: flex;
  justify-content: space-between;
}

.title {
    text-align: left;
  width: 128px;
  margin-top: 10px;
  color: #333333;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  span-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}

.getBtn {
  width: 65px;
  height: 20px;
  margin-top: 12px;
  margin-left: 6px;
  padding: 5px 0;
  font-size: 9px;
  color: #b73535;
  line-height: 10px;
  border: 1px solid #b73535;
  /* background: transparent; */
}

.pDate {
  align-self: center;
  margin-right: 5px;
}

.regFont {
  margin-top: 10px;
  color: #666666;
  font-size: 12px;
}

.bookPerson {
  font-weight: 600;
}

.message {
  display: -webkit-box;
  width: 239px;
  height: 50px;
  overflow: hidden;
  span-overflow: ellipsis;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: left;
}
.personNameUrl {
  width: 100rpx;
  mix-blend-mode: multiply;
  height: 40rpx;
  margin-top: 20rpx;
  border-radius: 36rpx;
}
</style>