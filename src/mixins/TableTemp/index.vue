<template>
    <div>
        <SearchBar ref="searchBar" :search-options="searchOptions" :search-buttons="searchButtons" />
        <Table
            :table-bar="tableBar"
            :columns="columns"
            :data="data"
            :actions="actions"
            @getSelection="getSelection"
            @rowClick="rowClick"
            @rowDblclick="rowDblclick"
            :page-size="pageSize"
            :total="total"
            @current-change="currentChange"
        />
        <Drawer
            v-model="display"
            width="700"
            :title="submitType ? '修改' : '新增'"
            :mask="true">
            <Form
                v-if="display"
                ref="submitForm"
                :current-row="currentRow"
                :options="submitForm"
                :rules="rules"
            />
            <div slot="footer">
                <Buttons :buttons="formActions" />
            </div>
        </Drawer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBar from '../../components/SearchBar'
import Table from '../../components/Table'
import Drawer from '../../components/Drawer'
import Form from '../../components/Form'
import Buttons from '../../components/Buttons'
export default {
    name: 'index',
    components: { SearchBar, Table, Drawer, Form, Buttons },
    data () {
        return {
            url: 'Public/getData',
            deleteUrl: 'Public/delete',
            searchOptions: [
                { label: '审批人', name: 'user', value: '', placeholder: '请输入审批人' },
                { label: '活动区域', name: 'region', value: '', placeholder: '请选择活动区域', type: 'select', options: [
                    { label: '上海', value: '上海' },
                    { label: '北京', value: '北京' }
                ] }
            ],
            searchButtons: [
                { label: '搜索', type: 'primary', click: this.search },
                { label: '重置', type: 'warning', click: this.reset }
            ],
            tableBar: [
                { label: '新增', type: 'primary', click: this.add },
                { label: '删除', type: 'danger', click: this.delete }
            ],
            columns: [
                { label: '姓名', prop: 'name', width: 150 },
                { label: '日期', prop: 'date', width: 300 },
                { label: '活动区域', prop: 'address' }
            ],
            actions: [
                { label: '修改', icon: 'el-icon-edit', type: 'info', size: 'mini', click: this.edit },
                { label: '删除', icon: 'el-icon-delete', type: 'danger', size: 'mini', click: this.delete }
            ],
            pageSize: 10,
            currentPage: 1,
            selection: [],
            display: false,
            submitType: 0,
            currentRow: {},
            submitForm: [
                { label: '审批人', name: 'name', value: '', placeholder: '请输入审批人' },
                { label: '日期', name: 'date', value: '', placeholder: '请选择日期', type: 'date'},
                { label: '活动区域', name: 'address', value: '', placeholder: '请选择活动区域', type: 'select', options: [
                    { label: '上海', value: '上海' },
                    { label: '北京', value: '北京' }
                ] }
            ],
            rules: {
                name: [
                    { required: true,  message: '请输入审批人' }
                ],
                date: [
                    { required: true, message: '请选择日期' }
                ],
                address: [
                    { required: true,  message: '请选择活动区域' }
                ]
            },
            formActions: [
                { label: '取消', click: () => { this.display = false} },
                { label: '保存', type: 'primary', click: this.submit }
            ]
        }
    },
    computed: {
        ...mapState('Public', [ 'data', 'total' ]),
        offset () {
            return (this.currentPage - 1) * this.pageSize
        }
    },
    watch: {
        display (val) {
            if (val) {
                this.$nextTick().then(() => {
                    this.$refs.submitForm.resetFields()
                    this.currentRow = {}
                })
            }
        }
    },
    methods: {
        search () {
            this.getData()
        },
        reset () {
            this.$refs.searchBar.resetFields()
        },
        getData () {
            let params = {
                pageSize: this.pageSize,
                offset: this.offset,
                ...this.$refs.searchBar.getForm()
            }
            this.$store.dispatch(this.url, params)
        },
        currentChange (page) {
            this.currentPage = page
            this.getData()
        },
        getSelection (selection) {
            this.selection = selection
        },
        rowClick ({ row }) {
            // this.display = true
            // this.currentRow = row
            // this.submitType = 1
        },
        rowDblclick ({ row }) {

        },
        add () {
            this.display = true
            this.submitType = 0
        },
        edit (row) {
            this.display = true
            this.currentRow = row
            this.submitType = 1
        },
        submit () {
            this.$refs.submitForm.validate((valid) => {
                let form = this.$refs.submitForm.getForm()
                if (valid) {
                    if (!this.submitType) this.$store.dispatch('Public/add', form)
                    else this.$store.dispatch('Public/edit', form)
                    this.display = false
                }
            })
        },
        delete (row) {
            let ids = ''
            if (row) {
                ids = row.id
            } else {
                if (this.selection.length === 0) {
                    return this.$message.warning('请选择要删除的数据')
                }
                ids = this.selection.map(item => item.id).join(',')
            }
            this.$confirm('是否删除信息？', '提示').then(() => {
                this.$store.dispatch('Public/delete', ids).then(res => {

                }).catch(err => {
                    // this.$alert(err)
                })
            }).catch(() => {
                this.$message('取消删除')
            })
        }
    },
    mounted () {
        // this.getData()
    }
}
</script>

<style scoped>

</style>