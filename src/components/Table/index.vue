<template>
    <div class="table">
        <TableBar :buttons="tableBar" />
        <el-table
            :data="data"
            border
            stripe
            show-overflow-tooltip
            @row-click="rowClick"
            @row-dblclick="rowDblclick"
            @selection-change="selection">
            <el-table-column
                type="selection"
                width="55" />
            <el-table-column
                v-for="(column, i) in columns"
                v-bind="column"
                :key="i" />
            <el-table-column
                label="操作"
                width="200"
                align="center" >
                <template slot-scope="scope">
                    <Buttons :buttons="actions" :row="scope.row" />
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="page"
            background
            :page-size="pageSize"
            @current-change="currentChange"
            :total="total"
            layout="total, prev, pager, next, jumper"
        />
    </div>
</template>

<script>
import TableBar from './TableBar'
import Buttons from '../Buttons'
export default {
    name: 'index',
    components: { TableBar, Buttons },
    props: {
        tableBar: Array,
        columns: Array,
        data: Array,
        actions: Array,
        currentPage: Number,
        pageSize: Number,
        total: Number
    },
    methods: {
        currentChange (page) {
            this.$emit('current-change', page)
        },
        selection (selection) {
            this.$emit('getSelection', selection)
        },
        rowClick (row, event, column) {
            this.$emit('rowClick', { row, event, column })
        },
        rowDblclick (row, event) {
            this.$emit('rowDblclick', { row, event })
        }
    }
}
</script>

<style scoped lang="less">
    .table {
        .page {
            margin: 10px;
            text-align: right;
        }
    }
</style>