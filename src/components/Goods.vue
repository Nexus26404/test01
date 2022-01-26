<template>
  <div id="Goods">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6" v-for="item in detail" :key="item.aim">
        <goods-item :item="item"></goods-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem";

export default {
  name: "Goods",
  components: {
    GoodsItem
  },
  props: {
    detail: Array
  }
}
</script>

<style scoped>
.el-row {
  flex-wrap: wrap;
}

.el-col {
  border-radius: 4px;
  flex: 50%;
  flex-grow: 0;
}

</style>