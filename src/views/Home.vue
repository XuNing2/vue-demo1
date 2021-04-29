<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['0','1']">
          <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" v-if="item.show">
            <template #title><i class="el-icon-setting"></i>{{ item.name }}</template>

              <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path" v-if="item2.show"
              :class="$route.path===item2.path?'is-active':''">{{item2.name}}</el-menu-item>

          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>

    </el-container>

  </div>
</template>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  // },
  // data() {
  //   const item = {
  //     date: '2016-05-02',
  //     name: '王小虎',
  //     address: '上海市普陀区金沙江路 1518 弄'
  //   };
  //   return {
  //     tableData: Array(20).fill(item)
  //   }
  }
}
</script>
