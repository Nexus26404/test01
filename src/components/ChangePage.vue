<template>
  <div class="changePage">
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="onCurrentChange($event)"
        >
    </el-pagination>
  </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "ChangePage",
  methods: {
    onCurrentChange(e){
      request(`/unit/${e}/6`).then(res => {
        this.$emit("biubiu", res)
      })
    }
  }
}
</script>

<style scoped>
  .changePage {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>