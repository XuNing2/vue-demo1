<template>
<div>
  <el-table
      :data="tableData"
      style="width: 100%"
      height="430">
<!--    <el-table-column-->
<!--        fixed-->
<!--        prop="id"-->
<!--        label="编号"-->
<!--        width="150">-->
<!--    </el-table-column>-->
    <el-table-column
        prop="title"
        label="书名"
        width="120">
    </el-table-column>
    <el-table-column
        prop="author"
        label="作者"
        width="120">
    </el-table-column>
    <!--        fixed="right"-->
    <el-table-column
        label="操作"
        width="100">
      <template #default="scope">
        <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="delete1(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
<!--    <el-table-column-->
<!--        prop="abs"-->
<!--        label="简介"-->
<!--        width="600">-->
<!--    </el-table-column>-->
  </el-table>
  <el-pagination
      background
      layout="prev, pager, next"
      page-size="6"
      :total="total"
      @current-change="page">
  </el-pagination>

</div>

</template>

<script>
export default {
  methods:{
    edit: function (row) {
      // console.log(row);
      //row.id
      this.$router.push({
        path:'/bookUpdate',
        query:{
          //把id 传过去
          id:row.id
        }
      })
    },
    delete1(row){
        //alert(row)
        const _this = this
        axios.delete('http://127.0.0.1:8333/book/delete/'+row.id).then(function (resp){
              _this.$alert('《'+row.title+'》删除成功', '成功', {
                confirmButtonText: '确定',
                callback: action => {
                  //_this.$router.push("/manageBook")
                  window.location.reload();
                }
        })
      })
    },
    page(currentPage){
      const _this = this
      axios.get('http://127.0.0.1:8333/book/findAll/'+currentPage+'/6').then(function (resp){
        // console.log(resp.data)
        _this.tableData = resp.data.content
        _this.total = resp.data.totalElements
      })
    }

  },
  created() {
    const _this = this
    axios.get('http://127.0.0.1:8333/book/findAll/1/6').then(function (resp){
      // console.log(resp.data)
      _this.tableData = resp.data.content
      _this.total = resp.data.totalElements
    })
  },
  data() {
    return {
      total:null,
      tableData: null

    }
  }
}
</script>

<style>

</style>
