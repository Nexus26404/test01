<template>
  <div class="banner">
    <el-carousel indicator-position="outside" height="30vh">
      <el-carousel-item v-for="item in pictures" :key="item">
        <el-image
            style="width: 100%; height: 100%"
            :src="item"
            fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data(){
    return {
      pictures: [
          "http://xsgs.iwan4399.com/10/pc/res/assets/runtime/general/maxBig/603701.png?v=a29d50d63",
          "http://xsgs.iwan4399.com/10/pc/res/assets/runtime/general/maxBig/503701.png?v=52fec5693",
          "http://xsgs.iwan4399.com/10/pc/res/assets/runtime/general/maxBig/531401.png?v=65fe388e3",
          "http://xsgs.iwan4399.com/10/pc/res/assets/runtime/general/maxBig/532601.png?v=d0894b183"
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>