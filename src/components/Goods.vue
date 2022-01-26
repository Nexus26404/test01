<template>
  <div id="Goods">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6" v-for="item in rows" :key="item.aim">
        <goods-item :item="item"></goods-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {request} from "@/network/request"
import GoodsItem from "@/components/GoodsItem";

export default {
  name: "Goods",
  data() {
    return {
      rows: null,
      total: 0
    }
  },
  created() {
    request("/unit/1/5").then(res => {
      this.rows = res.rows;
      this.total = res.total;
      console.log(res)
    })
  },
  components: {
    GoodsItem
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