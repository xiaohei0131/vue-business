<template>
  <div>
    <el-link :underline="false"
             href="/"
             class="logo">业务系统</el-link>
    <!-- <el-menu default-active="0"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu> -->
  </div>
</template>

<style>
.logo {
  float: left;
  color: #fff !important;
  margin-left: 20px;
  font-size: 20px !important;
}
.el-header .el-menu {
  float: right;
}
.el-header {
  padding: 0;
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
