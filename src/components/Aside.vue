<template>
  <div>
    <el-aside>
      <el-menu :default-openeds="['1']"
               :router=true
               @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>导航一</template>
          <el-menu-item index="/group1/PageOne">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-marketing"></i>导航二</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  name: 'Asdie',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.el-aside {
  /* width: 250px !important; */
  background-color: #545c64;
  text-align: left;
  height: calc(100vh - 60px);
  overflow: hidden;
}
.el-menu {
  width: 100%;
}
</style>
