<template>
  <div class="layout">
    <div class="topWrapper bottomWrapper">
      <div class="avatorBox" @click="handleEditUserClick">
        <div class="avator">
          <img class="avatorImg" :src="this.avatorImg2" />
        </div>
        <span class="avatorName">Taylor</span>
      </div>
      <div class="infoWrapper">
        <div class="leftInfoBox">
          <div>
            <!-- <span class="boldFont" wx:if="{{!authSetting}}">--</span> -->
            <span class="boldFont">{{ day }}</span>
            <span class="regularFont">天</span>
            <!-- <span class="boldFont">--</span><span class="regularFont">分</span> -->
          </div>
          <span class="infoDesc">陪伴时长</span>
        </div>
        <div class="rightInfoBox">
          <div>
            <!-- <span class="boldFont" wx:if="{{!authSetting}}">--</span> -->
            <span class="boldFont">{{ customerResidueRights }}</span>
            <!-- <span class="boldFont" wx:else>--</span> -->
            <span class="regularFont">本</span>
          </div>
          <span class="infoDesc">领书权益</span>
        </div>
      </div>
    </div>
    <div class="midWrapper bottomWrapper">
      <router-link to="/order">
      <div class="moduleBox">
        <van-icon class="moduleIcon" name="bag" color="#3C644C" size="20" />
        <span class="infoDesc">订单</span>
      </div>
      </router-link>
      <div class="moduleBox">
        <van-icon
          class="moduleIcon"
          name="point-gift"
          color="#3C644C"
          size="20"
        />
        <span class="infoDesc">活动</span>
      </div>
      <div class="moduleBox">
        <van-icon class="moduleIcon" name="comment" color="#3C644C" size="20" />
        <span class="infoDesc">消息</span>
      </div>
    </div>
    <div class="bottomWrapper">
      <router-link to="/address">
      <div class="bottomBox">
        <div class="leftBottomBox">
          <van-icon name="setting" color="#333333" size="16px" />
          <span class="bottomText">收货管理</span>
        </div>
        <div class="rightBottomBox">
          <van-icon name="arrow" color="#C7C7CC" size="13px" />
        </div>
      </div>
      </router-link>
      <router-link to="/helpCenter">
      <div class="bottomBox">
        <div class="leftBottomBox">
          <van-icon name="question" color="#333333" size="16px" />
          <span class="bottomText">帮助中心</span>
        </div>
        <div class="rightBottomBox">
          <van-icon name="arrow" color="#C7C7CC" size="13px" />
        </div>
      </div>
      </router-link>
    </div>
    <van-tabbar
      route
      v-model="active"
      active-color="#3c644c"
      inactive-color="#999"
    >
      <van-tabbar-item replace to="/" icon="wap-home"> 书城 </van-tabbar-item>
      <van-tabbar-item replace to="/Personal" icon="friends">
        我
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import { methods } from '../../../project/demo/demo/sls-vuex2-demo/src/components/Shop/Info/Info';
Vue.use(Icon);
export default {
  data() {
    return {
      active: 1,
      avatorImg2:
        "https://wx.kangxukeji.com:443/profile/file/2020/10/14/9cfe672d-5903-4610-9dcb-0bd9ef4151ad.jpg",
      day: 11111,
      customerResidueRights: 777,
    };
    
  },
  methods: {
    handleEditUserClick(){
       this.$router.push({
          path: `/personalData`,
        })
    }
  }
};
</script>

<style scoped>
.topWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.avatorBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 154px;
}
.avator {
  width: 77px;
  height: 77px;
  border: 1px #eee solid;
  margin-bottom: 19px;
  border-radius: 50%;
}
.avatorName {
  color: #333333;
  font-size: 18px;
  font-weight: 600;
}
.avatorImg {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
}
.infoWrapper {
  display: flex;
  justify-content: space-around;
  height: 67px;
  background-color: #fff;
  padding: 12px 0;
  box-sizing: border-box;
}
.leftInfoBox,
.rightInfoBox {
  align-self: center;
  width: 49%;
  text-align: center;
}
.leftInfoBox {
  border-right: 2px #e5e5e5 solid;
}
.boldFont {
  color: #333333;
  font-size: 20px;
  font-weight: bold;
}
.regularFont {
  color: #333333;
  font-size: 14px;
}
.infoDesc {
  color: #666666;
  font-size: 12px;
}
.midWrapper {
  display: flex;
  height: 123px;
  margin: 20px 10px 22px;
  background-color: #fff;
  justify-content: space-around;
}
.moduleBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  box-sizing: border-box;
}

.infoDesc {
  color: #666666;
  font-size: 12px;
}
.moduleIcon {
  margin-bottom: 3px;
}
.bottomWrapper {
  width: 355px;
  margin: 20px auto;
}
.bottomBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 45px;
  background: #fff;
  margin-bottom: 4px;
  border-radius: 5px;
}
.leftBottomBox {
  width: 70%;
  text-align: left;
}
.bottomText {
  margin-left: 7px;
  color: #333333;
  font-size: 16px;
}
</style>