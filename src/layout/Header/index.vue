<template>
    <div class="head">
        <el-menu
                router
                :default-active="$route.path"
                mode="horizontal"
                active-text-color="#ffd04b"
                text-color="#fff"
                background-color="#545c64">
            <el-menu-item index="/main/home">Home</el-menu-item>
            <el-menu-item index="/main/about">About</el-menu-item>
            <el-menu-item index="/component">Component</el-menu-item>
        </el-menu>
        <Loading class="loading" v-if="loading" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '../../components/Loading'
export default {
    name: "index",
    components: { Loading },
    computed: {
        ...mapState('Public', [ 'loading' ])
    },
    mounted () {
        // console.log(this.$route)
        // this.$loading()
    }
}
</script>

<style scoped lang="less">
    .head {
        position: relative;
        .loading {
            position: absolute;
            right: 15px;
            top: 15px;
        }
    }
</style>