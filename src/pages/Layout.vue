<template>
  <el-container>
    <el-header>
      <TopNav></TopNav>
    </el-header>
    <el-container>
      <Aside></Aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-backtop target=".el-main"></el-backtop>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

import TopNav from '@/components/TopNav'
import Aside from '@/components/Aside'
export default {
  name: 'Layout',
  components: { TopNav, Aside }
}
</script>

<style>
.el-main {
  background-color: #e9eef3;
  max-height: calc(100vh - 60px);
}
</style>
