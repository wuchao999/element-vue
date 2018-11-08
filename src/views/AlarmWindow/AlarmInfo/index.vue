<template>
    <div class="alarm-info">
        <el-tabs v-model="defaultTabActive">
            <el-tab-pane label="详细信息" name="info">
                {{ currentAlarm }}
            </el-tab-pane>
            <el-tab-pane label="图片信息" name="image">
                <img :src="currentAlarm.img" alt="">
            </el-tab-pane>
            <el-tab-pane label="视频信息" name="video">

            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'index',
    props: {
        currentAlarm: Object
    },
    data () {
        return {
            defaultTabActive: 'info'
        }
    }
}
</script>

<style scoped>

</style>