<template>
  <el-form style="width:60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="图书名称" prop="title">
      <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>

<!--    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
      <el-form-item label="作者" prop="author">
        <el-input v-model="ruleForm.author"></el-input>
      </el-form-item>



    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
      <el-button @click ="test()">test</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        title: 'dd',
        author: 'd'
      },
      rules: {
        title: [
            //required 必填项
            //trigger 触发时间 blur 失去焦点就触发了
          { required: true, message: '请输入图书名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请选择作者名称', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    test(){
      console.log(this.ruleForm)
    },
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('http://localhost:8333/book/save',this.ruleForm).then(function (resp){
              console.log(resp)
            if(resp.data==="success"){
              // alert('')
              // _this.$message('添加成功')
              // // 跳转到管理图书界面
              // _this.$router.push("/manageBook")

              _this.$alert('《'+_this.ruleForm.title+'》添加成功', '成功', {
                confirmButtonText: '确定',
                callback: action => {
                  _this.$message({
                    type: 'info',
                    message: `action: ${action}`
                  });
                }
              })
            }
            else
              _this.$message('添加失败')
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>

</style>
