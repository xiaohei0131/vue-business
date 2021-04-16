<template>
  <div class="atable">
    <el-table :data="tableData"
              border
              stripe
              :fit="true"
              tooltip-effect="dark"
              style="width: 100%;"
              @selection-change="handlerSelectChange"
              @select="handlerSelect"
              @select-all="handlerSelectAll">
      <el-table-column type="selection"
                       v-if="hasSelect"
                       width="40">
      </el-table-column>
      <el-table-column v-for="(column, index) in columns"
                       :prop="column.prop"
                       :key="index"
                       :label="column.label"
                       :width="column.width"
                       align="center">
        <template slot-scope="scope">
          <ex-slot v-if="column.render"
                   :render="column.render"
                   :row="scope.row"
                   :index="scope.$index"
                   :column="column">
          </ex-slot>
          <span v-else>
            {{scope.row[column.prop]}}
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="hasPageTotal"
                   background
                   :current-page="currentPage"
                   :page-size="pageSize"
                   :total="total"
                   :page-sizes="[10, 20, 50, 100]"
                   layout="total, sizes, prev, pager, next, jumper"
                   @current-change="handleCurrentChange" />
  </div>
</template>
<script>
// 自定义内容的组件
var exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    }
    if (data.props.column) params.column = data.props.column
    return data.props.render(h, params)
  }
}
export default {
  props: {
    total: { // 总条数
      type: Number,
      default: 1
    },
    currentPage: { // 当前页
      type: Number,
      default: 1
    },
    pageSize: { // 每页显示条数
      type: Number,
      default: 10
    },
    hasPageTotal: { // 是否显示分页
      type: Boolean,
      default: true
    },
    hasSelect: { // 是否有选择框
      type: Boolean,
      default: false
    },
    // 表格数据
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 表头数据
    columns: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handlerSelectAll (val) {
      this.$emit('selectAll', val)
    },
    handlerSelect (value, obj) { // 选中项
      this.$emit('select', value, obj)
    },
    handlerSelectChange (value) {
      this.$emit('selectChange', value)
    },
    handleCurrentChange (val) {
      this.$emit('pageChange', val)
    }
  },
  mounted () {
  },
  // 自定义组件
  components: {
    'ex-slot': exSlot
  }
}
</script>

<style scoped>
.atable .el-pagination {
  text-align: right;
}
.atable th {
  background-color: #f5f5f5;
  font-weight: bold;
}
.atable .el-table-column--selection div.cell {
  text-overflow: initial !important;
}
</style>
