<template>
  <div id="app">
    <Goods id="goods"></Goods>
    <el-button type="primary" plain @click="open">可以点击提交内容</el-button>
  </div>
</template>

<script>
import Goods from "./components/Goods.vue"

export default {
  name: 'App',
  components: {
    Goods
  },
  methods: {
    open() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  }
}
</script>

<style>
  #goods{
    margin: 2%;
  }
</style>
