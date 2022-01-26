<template>
  <div id="app">
    <Goods id="goods" :detail="rows"></Goods>
    <Upload></Upload>
    <ChangePage @biubiu="getPage"></ChangePage>
  </div>
</template>

<script>
import Goods from "./components/Goods.vue"
import Upload from "./components/Upload"
import ChangePage from "@/components/ChangePage";
import {request} from "@/network/request";

export default {
  name: 'App',
  components: {
    Goods,
    Upload,
    ChangePage
  },
  methods: {
    getPage(val){
      this.rows = val.rows;
      this.total = val.total;
      console.log(val)
    }
  },
  created() {
    request("/unit/1/6").then(res => {
      this.rows = res.rows;
      this.total = res.total;
      console.log(res)
    })
  },
  data(){
    return {
      rows: [],
      total: 0
    }
  }
}
</script>

<style>
  #goods{
    margin: 2%;
  }
</style>
