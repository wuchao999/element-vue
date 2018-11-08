<template>
    <div class="about">
        <el-button type="primary" @click="pushAlarm">报警</el-button>
        <AlarmWindow v-model="display" />
    </div>
</template>

<script>
import AlarmWindow from './AlarmWindow'
import Mock, { Random } from 'mockjs'
export default {
    name: 'about',
    components: {AlarmWindow},
    data () {
        return {
            display: false
        }
    },
    methods: {
        pushAlarm() {
            this.display = true
            let data = {
                type: Math.round(Math.random()),
                content: Mock.mock('@cparagraph()'),
                address: Mock.mock('@county(true)'),
                date: Mock.mock('@date ' + ' @time'),
                img: Random.image('200x100', Mock.mock('@color')),
                name: Mock.mock('@cname')
            }
            this.$store.dispatch('msg/pushMsg', data)
        }
    }
}
</script>

<style lang="less">
</style>
