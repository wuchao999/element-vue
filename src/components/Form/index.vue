<template>
    <div class="form">
        <el-form ref="form" :inline="true" :model="form" :rules="rules" class="form">
            <el-form-item
                v-for="(item, i) in options"
                :key="i"
                :label="item.label"
                :prop="item.name">
                <el-select
                    v-model="form[item.name]"
                    v-bind="item"
                    v-if="item.type === 'select'">
                    <el-option
                        v-for="(option, o) in item.options"
                        :label="option.label"
                        :value="option.value"
                        :key="o" />
                </el-select>
                <el-date-picker
                    v-else-if="item.type === 'date'"
                    v-model="form[item.name]"
                    value-format="yyyy-MM-dd"
                    v-bind="item">
                </el-date-picker>
                <el-input
                    v-else
                    v-model="form[item.name]"
                    v-bind="item" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'index',
    props: {
        inline: {
            type: Boolean,
            default: false
        },
        options:{
            default: Array
        },
        rules: {
            default: Object
        },
        currentRow: {
            default: Object
        }
    },
    // watch: {
    //     currentRow: {
    //         deep: true,
    //         immediate: true,
    //         handler (row) {
    //             Object.keys(this.form).forEach(item => {
    //                 this.$set(this.form, item, row[item])
    //             })
    //         }
    //     }
    // },
    data () {
        return {
            form: (() => {
                let obj = { ...this.currentRow }
                this.options.forEach(item => {
                    obj[item.name] = this.currentRow[item.name] || item.value
                })
                return obj
            })()
        }
    },
    methods: {
        resetFields () {
            this.$refs.form.resetFields()
        },
        validate (cb) {
            this.$refs.form.validate((valid) => cb(valid))
        },
        getForm () {
            return this.form
        }
    }
}
</script>

<style scoped>

</style>