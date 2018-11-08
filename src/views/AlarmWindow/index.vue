<template>
    <div class="alarm-window">
        <Dialog v-model="display">
            <div slot="title" class="title">
                <img src="../../assets/logo.png" alt="">
                报警消息
            </div>
            <el-row class="content" v-if="display">
                <el-col :span="6" class="alarm-list-wrap">
                    <AlarmList @getAlarmItem="getAlarmItem" />
                </el-col>
                <el-col :span="18" class="alarm-info-wrap">
                    <AlarmInfo :current-alarm="currentAlarm" />
                </el-col>
            </el-row>
        </Dialog>
    </div>
</template>

<script>
import Dialog from '../../components/Dialog'
import AlarmList from './AlarmList'
import AlarmInfo from './AlarmInfo'
export default {
    name: 'index',
    components: { Dialog, AlarmList, AlarmInfo },
    props: [ 'value' ],
    data () {
        return {
            display: this.value,
            currentAlarm: {}
        }
    },
    watch: {
        value: {
            immediate: true,
            handler (val) {
                this.display = val
            }
        },
        display (val) {
            this.$emit('input', val)
        }
    },
    methods: {
        getAlarmItem (data) {
            this.currentAlarm = data
        }
    }
}
</script>

<style scoped lang="less">
    .alarm-window {
        .title {
            display: table;
            img {
                width: 25px;
                vertical-align: middle;
            }
        }
        .content {
            height: 100%;
            .alarm-list-wrap, .alarm-info-wrap {
                height: 100%;
                box-sizing: border-box;
                padding: 10px;
            }
            .alarm-list-wrap {
                border-right: 1px solid #e8eaec;
            }
        }
    }
</style>