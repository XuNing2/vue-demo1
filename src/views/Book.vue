<template>
  <div>
    <table>
      <td>编号</td>
      <td>名称</td>
      <td>作者</td>
    </table>
    <tr v-for="book in books">
      <td>{{book.id}}</td>
      <td>{{book.name}}</td>
      <td>{{book.author}}</td>
    </tr>
  </div>
</template>

<script>
  export default {
    name: "Book",
    data(){
      return {
        msg:'hello vue',
        books:[
          {
            id:1,
            name:'JAVA',
            author: '许宁'
          },
          {
            id:2,
            name:'JAVA2',
            author: '许宁2'
          }
        ]
      }
    },
    //初始化加载
    created(){
      const _this = this
      axios.get("http://127.0.0.1:8333/book/findAll").then(function (resp){
          _this.books =resp.data;
      })
    }
  }
</script>

<style scoped>

</style>