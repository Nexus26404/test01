<template>
  <div class="item">
    <div class="imgbox">
      <el-image style="height: 98%; width: 100%"
                :src="item.imageUrlList[0]"
                fit="cover"></el-image>
    </div>
    <div id="detail">
      <div id="title">{{ item.aim }}</div>
      <div id="location">{{ item.location }}</div>
      <div id="remark">{{ item.remark }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    item: Object
  }
}
</script>

<style scoped>
  .item {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 2%;
  }

  .imgbox {
    height: 30vh;
    width: 100%;
    overflow: hidden;
  }

  #detail {
    width: 90%;
    margin: 0 auto;
  }

  #detail #title, #detail #location{
    text-align: center;
  }

  #title {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 20px;
    font-weight: 700;
  }

  #remark {
    color: #999;
  }

</style>