<template>
  <div class="layout background">
    <van-swipe :autoplay="5000">
      <van-swipe-item>
        <img src="../assets/images/carousel.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/carousel.png" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="card">
      <div class="bookstitle">推荐内容</div>
      <div class="containers">
        <div class="imgBox">
          <img
            class="img"
            src="https://wx.kangxukeji.com:443/profile/file/2020/10/14/1a5c028c-8099-417f-bbb8-60886d636680.jpg"
          />
        </div>
        <div class="infoBox">
          <div class="infoTop2">
            <div class="title">我的世界</div>
          </div>
          <div class="bookPerson regFont" style="display: flex">
            荐书人：
            <span class="bookPerson">张三</span>
          </div>
          <div class="regFont message">222222222222222222222</div>
          <!-- <div class="morefont" wx:if="{{moresflag}}" bindtap="clickmore">展开</div>
					<div class="morefont" wx:if="{{moreflag}}" bindtap="clickcut">收起</div> -->
          <!-- <div class="unfold">展开</div> -->
        </div>
      </div>
    </div>
      <img style="border-radius: 10px" src="../assets/images/61312.jpg" alt="" />
    <div class="card">
      <div class="bookstitle">内容简介</div>
      <div>
        <span class="iIntroduction"> books</span>
        <!-- <div class="unfold">展开</div> -->
      </div>
    </div>
    <div class="card">
      <div class="bookstitle">目录</div>
      <div>
        <span class="iIntroduction">2222222222222222</span>
        <!-- <div class="unfold">展开</div> -->
      </div>
    </div>
    <div class="card">
      <div class="bookstitle">摘要</div>
      <div>
        <span class="iIntroduction">books</span>
        <!-- <div class="unfold">展开</div> -->
      </div>
    </div>
    <div class="card">
      <div class="bookstitle">作者简介</div>
      <div>
        <span class="iIntroduction">books</span>
        <!-- <div class="unfold">展开</div> -->
      </div>
    </div>
    <div class="card">
      <div class="bookstitle">基本信息</div>
      <div>
        <div class="booksinfo">
          <span>书名：</span>
          <span>books</span>
        </div>
        <div class="booksinfo">
          <span>作者：</span>
          <span>books</span>
        </div>
        <div class="booksinfo">
          <span>出版者：</span>
          <span>books</span>
        </div>
        <div class="booksinfo">
          <span>装帧：</span>
          <!-- <span>{{books.bookVo.pack?books.bookVo.pack:'暂无'}}</span> -->
        </div>
        <div class="booksinfo">
          <span>纸质：</span>
          <!-- <span>{{books.bookVo.paper?books.bookVo.paper:'暂无'}}</span> -->
        </div>
        <div class="booksinfo">
          <span>开本：</span>
          <!-- <span>{{books.bookVo.format?books.bookVo.format:'暂无'}}</span> -->
        </div>
        <div class="booksinfo">
          <span>ISBN：</span>
          <span>books</span>
        </div>
      </div>
    </div>
    <div style="height:20px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style  scoped>
.background {
  background: #f9f9f9;
  padding-top: 20px;
}
.card {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
}
.bookstitle {
  color: #666666;
  line-height: 25px;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.containers {
  display: flex;
  justify-content: space-around;
  background: #fff;
}
.imgBox {
  width: 104px;
  height: 130px;
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
  padding-left: 11px;
  box-sizing: border-box;
}
.infoTop2 {
  display: flex;
  justify-content: space-between;
}
.title {
  display: -webkit-box;
  max-height: 50px;
  margin-top: 10px;
  color: #333333;
  font-size: 18px;
  font-weight: 600;
  span-overflow: ellipsis;
  overflow: hidden;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.bookPerson {
  font-weight: 600;
}
.regFont {
  margin-top: 10px;
  color: #666666;
  font-size: 12px;
  text-align: left;
}
.message {
  display: -webkit-box;
  width: 220px;
  height: 50px;
  overflow: hidden;
  span-overflow: ellipsis;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  span-align: left;
}
.regFont {
  margin-top: 10px;
  color: #666666;
  font-size: 12px;
}
.iIntroduction {
  font-size: 12px;
  color: #666666;
}
.booksinfo {
  font-size: 12px;
  color: #666666;
  text-align: left;
}
</style>