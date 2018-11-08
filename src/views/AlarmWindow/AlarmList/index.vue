<template>
    <div class="alarm-list">
        <div class="control">
            <el-radio-group v-model="defaultRadio" @change="radioChange">
                <el-radio-button :label="0">未确认</el-radio-button>
                <el-radio-button :label="1">已确认</el-radio-button>
            </el-radio-group>
        </div>
        <ul class="list">
            <li class="item"
                v-for="(item, i) in defaultList"
                :key="i"
                @click="getAlarmItem(item)">
                <div class="title" :style="{background: item.type ? '#e6a23c' : '#f44' }">
                    <img src="../../../assets/logo.png" alt="">
                    {{item.type | filterType}}
                </div>
                <p class="content">{{ item.content }}</p>
            </li>
        </ul>
        <div class="more">
            <i class="el-icon-more"></i> 查看更多
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'index',
    computed: {
        ...mapState('msg', [ 'list' ])
    },
    filters: {
        filterType (val) {
            return val ? '取消火警' : '发生火警'
        }
    },
    data () {
        return {
            defaultList: [],
            defaultRadio: 0
        }
    },
    methods: {
        radioChange (val) {
            let filterArr = this.list.filter(item => val === item.type)
            this.defaultList = val ? filterArr : this.list
            this.getAlarmItem(this.defaultList[0])
        },
        getAlarmItem (item) {
            this.$emit('getAlarmItem', item)
        }
    },
    watch: {
        list: {
            deep: true,
            immediate: true,
            handler (val) {
                this.defaultList = val
                this.getAlarmItem(this.defaultList[0])
            }
        }
    }
}
</script>

<style scoped lang="less">
    .alarm-list {
        height: 100%;
        position: relative;
        .control {
            text-align: center;
            .active {
                background: #88d9ff;
            }
        }
        .list {
            box-sizing: border-box;
            padding: 15px 0 30px 0;
            height: calc(100% - 40px);
            overflow: auto;
            .item {
                border: 1px solid #e8eaec;
                cursor: pointer;
                margin-bottom: 10px;
                transition: all 0.4s;
                .title {
                    background: #f44;
                    padding: 3px 5px;
                    color: #fff;
                    img {
                        width: 18px;
                        margin-right: 5px;
                        vertical-align: middle;
                    }
                }
                .content {
                    text-indent: 2em;
                    padding: 7px;
                }
                &:hover {
                    box-shadow: 0 4px 12px rgba(0,0,0,.15)
                }
            }
        }
        .more {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            color: #555;
            cursor: pointer;
            background: #fff;
        }
    }
</style>