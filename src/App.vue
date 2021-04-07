<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>

import Layout from '@/pages/Layout'
export default {
  name: 'App',
  components: { Layout }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
