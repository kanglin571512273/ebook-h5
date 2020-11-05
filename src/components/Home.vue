<template>
  <div style="padding-bottom: 20px">
    <van-tabs v-model="active" sticky swipeable color="#3C644C">
      <van-tab title="分类">
        <div class="layout ification-box">
          <router-link to="/category">
            <div class="ification-img">
              <div
                style="
                  position: relative;
                  width: 100%;
                  height: 100%;
                  background: url('https://wx.kangxukeji.com/profile/file/2020/09/25/e2f74e86-04d0-4e14-b605-b8bdde970220.png')
                    no-repeat;
                  background-size: cover;
                  border-radius: 10px;
                "
              ></div>
              <div class="wrap-mask"></div>
              <span class="ification-item">管理</span>
            </div>
          </router-link>
        </div>
      </van-tab>
      <van-tab title="发现">
        <div class="layout">
          <div class="topgrid">
            <van-swipe :autoplay="5000">
              <van-swipe-item>
                <img src="..\assets\images\carousel2.png" alt="carousel" />
              </van-swipe-item>
              <van-swipe-item>
                <img src="..\assets\images\carousel.png" alt="carousel" />
              </van-swipe-item>
            </van-swipe>
            <div class="exclusive-box">
              <span class="exclusive">专属推荐</span>
              <router-link to="/morebook">
                <div style="display: flex">
                  <div class="more">更多</div>
                  <van-icon name="arrow" color="#888888" />
                </div>
              </router-link>
            </div>
            <van-swipe>
              <van-swipe-item>
                <Publicbook
                  :imgUrl="this.imgUrl"
                  :bookTitle="this.bookTitle"
                  isFreeGet
                  :bookPerson="this.bookPerson"
                  :bookMsg="this.bookMsg"
                />
              </van-swipe-item>
              <van-swipe-item>
                <img src="..\assets\images\carousel2.png" alt="carousel" />
              </van-swipe-item>
            </van-swipe>
            <div class="recommend-box"></div>
            <div class="exclusive-box">
              <span class="exclusive">新书推荐</span>
              <router-link to="/nowmorebook">
                <div style="display: flex">
                  <div class="more">更多</div>
                  <van-icon name="arrow" color="#888888" />
                </div>
              </router-link>
            </div>
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
          </div>
        </div>
      </van-tab>
      <van-tab title="人气">
        <div class="layout Popularity">
          <Publicbook
            :imgUrl="this.imgUrl"
            :bookTitle="this.bookTitle"
            isFreeGet
            :bookPerson="this.bookPerson"
            :bookMsg="this.bookMsg"
          />
        </div>
      </van-tab>
    </van-tabs>
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
import Publicbook from "@/components/Publicbook";
import Vue from "vue";
import {
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Icon,
} from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
export default {
  name: "Home",
  components: {
    Publicbook,
  },
  data() {
    return {
      active: 1,
      imgUrl:
        "https://wx.kangxukeji.com:443/profile/file/2020/09/23/c4ec12c1-ed3f-431d-a1b3-af6f78829e53.png",
      bookTitle: "创新者",
      bookPerson: "张三",
      bookMsg:
        "《艺术的故事》被誉为“西方艺术史的圣经”。自2008年出版中文版后，已第四次重印。与之前的版本完全相同。在那项帮助人们熟悉艺术的伟大事业中，《艺术的故事》是一部**之作。我无法表达自己对于这一新版本的赞美之情。设计优雅，图文辉映，插图悦目赏心，文字清晰闪光；所有这一切，使新版熠熠生辉。此书值得一读再读，就像美酒佳酿那样，愈加品赏，愈觉其味隽永",
    };
  },
  mounted: function () {
    //  this.$refs.imgUrl('https://uploader.shimo.im/f/vAgQbV7FVKEqVvF5.png!thumbnail')
  },
  methods: {
    clickdetails(){
     this.$router.push({
          path: `/bookdetails`,
        })
    }
  },
};
</script>


<style  scoped>
.van-swipe-item {
  width: 710px;
  height: 152.5px;
}
.topgrid {
  margin-top: 20px;
}

.exclusive-box {
  margin: 20px 0 5px 0;
  display: flex;
  justify-content: space-between;
}
.more {
  line-height: 16px;
  font-size: 12px;
  color: #888888;
}
.exclusive {
  font-size: 15px;
  color: #bf8652;
  line-height: 16px;
  font-weight: 700;
}
.recommend-box {
  background: url(..\assets\images\back.jpg) no-repeat;
  background-size: 100% 100%;
  height: 93px;
  border-radius: 10px;
  position: relative;
  margin-top: 20px;
}
.ification-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}
.ification-img {
  position: relative;
  width: 173px;
  height: 125px;
}
.wrap-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 10px;
}

.ification-item {
  position: absolute;
  top: 42%;
  left: 40%;
  z-index: 3;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
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
.Popularity {
  margin-top: 20px;
}
</style>

