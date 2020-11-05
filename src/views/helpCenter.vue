<template>
  <div>
    <div class="cmp-wrapper" v-for="(item, index) in items" :key="index">
      <div class="titleFont">{{ item.title }}</div>
      <div class="contentFont">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "品书会是什么？",
          content:
            "“品书会”旨在为爱看书、有思考、审美挑剔的高端客户提供高质量书籍推荐和兴趣社交，打造有共鸣与思维碰撞的“书友圈”。",
        },
        {
          title: "品书会有哪些功能？",
          content:
            "品书会为书友们提供了：免费领书、大咖荐读、专家互动、书友讨论等等功能。",
        },
        { title: "更多问题", content: "有任何问题请联系服务热线400-100-1010" },
      ],
    };
  },
};
</script>
<style  scoped>
.cmp-wrapper {
  width: 355px;
  margin: 10px auto;
  height: 106px;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 10px;
}
.titleFont {
  color: #333333;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 15px;
}
.contentFont {
  font-size: 12px;
  color: #666666;
}
</style>