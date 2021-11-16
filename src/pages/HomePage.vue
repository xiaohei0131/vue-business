<template>
  <div>
    <ATable :tableData="tableData"
            :columns="columns"
            :has-select="true"
            :total="201"
            @select="select"
            @pageChange="pageChange" />
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import ATable from '@/components/common/ATable.vue'
export default {
  name: 'HomePage',
  components: { ATable },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [{
        name: '张三',
        sex: 1,
        state: 1
      }, {
        name: '李四',
        sex: 1,
        state: 1
      }, {
        name: '王蕊',
        sex: 0,
        state: 0
      }],
      columns: [{
        prop: 'name',
        label: '姓名'
      }, {
        prop: 'sex',
        label: '性别',
        render: (h, params) => {
          if (params.row.sex === 1) {
            return h('el-tag', '男')
          } else {
            return h('el-tag', { attrs: { type: 'danger' } }, '女')
          }
        }
      }, {
        prop: 'state',
        label: '操作',
        render: (h, params) => {
          return h('el-button', {
            nativeOn: {
              click: () => {
                console.log(params.row.name)
              }
            },
            attrs: { type: 'danger', icon: 'el-icon-delete', disabled: params.row.state === 1 }
          }, '清空')
        }
      }]
    }
  },
  methods: {
    select: (value, obj) => { // 选中项
      console.log('select', obj)
    },
    removeRow: (row) => {
      console.log(row.name)
    },
    pageChange: (pageIndex) => {
      console.log('页码' + pageIndex)
    },
    getJson(){
        let that = this
        that.$axios.get('/list').then(res => {
            console.log(JSON.stringify(res.data,null,'\t'))
        })
    },
    restart(){
        let that = this
        let postData = {
            username: 'admin',
            password: '1323',
            }
        that.$axios.post('/restart',postData).then(res => {
           //JSON.stringify(res.data,null,'\t')
        })

        that.$axios.get('/restart?category=ssd').then(res => {
           //JSON.stringify(res.data,null,'\t')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
