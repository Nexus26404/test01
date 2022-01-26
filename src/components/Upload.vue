<template>
  <div class="upload">
    <el-button type="primary" plain @click="dialogFormVisible = true" id="detail">上传内容</el-button>

    <el-dialog title="上传文件" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="目标" :label-width="formLabelWidth">
          <el-input v-model="form.aim" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地点" :label-width="formLabelWidth">
          <el-input v-model="form.location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
        <el-upload
            class="upload-demo"
            action="http://120.27.193.132:7070/fileoss/upload"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :file-list="fileList"
            :on-success="handleSuccess">
          <el-button size="small" type="primary">上传图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false, postData()">上 传</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {postRequest} from "@/network/request";

export default {
  name: "Upload"
  ,
  data() {
    return {
      fileList: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        aim: '',
        location: '',
        remark: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      imageUrlList: []
    }
  },
  methods: {
    beforeRemove() {
      return this.$confirm("确定移除当前文件？");
    },
    handleSuccess(response){
      this.imageUrlList.push(response.data.url)
    },
    postData(){
      postRequest("/unit/addUnit", {
        "aim": this.form.aim,
        "location": this.form.location,
        "remark": this.form.remark,
        "imageUrlList": this.imageUrlList,
        "dataState": 0,
        "sort": 0
      }).then(() => {
        this.open();
      })
    },
    open() {
      this.$message('上传成功');
    }
  }
};
</script>

<style scoped>
  #detail {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
</style>