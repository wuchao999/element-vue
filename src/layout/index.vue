<template>
    <el-container class="layout-main">
        <el-header class="header">
            <Header></Header>
        </el-header>
        <el-main class="main">
            <router-view />
        </el-main>
    </el-container>
</template>

<script>
import Header from './Header'
export default {
    name: "index",
    components: { Header }
}
</script>

<style scoped lang="less">
    .layout-main {
        height: 100%;
        .header, .main {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>