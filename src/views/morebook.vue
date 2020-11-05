<template>
  <div class="layout morebook" >
    <Publicbook
      :imgUrl="this.imgUrl"
      :bookTitle="this.bookTitle"
      :bookPerson="this.bookPerson"
      :bookMsg="this.bookMsg"
    />
  </div>
</template>
<script>
import Publicbook from "@/components/Publicbook";
export default {
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
};
</script>

<style  scoped>
.morebook{
  padding-top: 20px;
}
</style>