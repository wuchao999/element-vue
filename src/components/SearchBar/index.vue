<template>
    <div class="search-bar" :style="{ height: !downStatus ? height + 'px' : 'auto' }">
        <Form
            ref="searchForm"
            class="form"
            :inline="true"
            :options="searchOptions"
            :style="{ height: !downStatus ? height - 20 + 'px' : 'auto' }"
        />
        <Buttons class="search-bar-buttons" :buttons="searchButtons" />
        <div class="down" @click="downStatus = !downStatus" v-if="searchOptions.length > 5">
            <i class="el-icon-arrow-down" :class="{ 'down-transition': downStatus }"></i>
        </div>
    </div>
</template>

<script>
import Form from '../Form'
import Buttons from '../Buttons'
export default {
    name: 'index',
    components: { Form, Buttons },
    props: {
        searchOptions: {
            type: Array
        },
        searchButtons: {
            type: Array
        }
    },
    data () {
        return {
            downStatus: false,
            height: 62
        }
    },
    methods: {
        resetFields () {
            this.$refs.searchForm.resetFields()
        },
        getForm () {
            return this.$refs.searchForm.getForm()
        }
    }
}
</script>

<style scoped lang="less">
    .search-bar {
        padding-left: 15px;
        overflow: hidden;
        position: relative;
        .form {
            width: 88%;
        }
        .search-bar-buttons {
            position: absolute;
            right: 0;
            top: 0;
        }
        .down {
            text-align: center;
            transition: all .4s;
            line-height: 20px;
            cursor: pointer;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            &:hover {
                background: #f6f6f6;
            }
            i {

                transition: all .4s;
            }
            .down-transition {
                transform: rotate(180deg);
            }
        }
    }
</style>
