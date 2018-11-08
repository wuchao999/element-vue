<template>
    <div class="component">
        <div class="header-wrapper">
            <header>
                <div class="go-back" @click="$router.go(-1)">
                    <i class="el-icon-back"></i>
                </div>
                <Loading class="loading" v-if="loading" />
            </header>
        </div>
        <div class="wrapper">
            <el-scrollbar class="wrapper-component">
                <div v-for="(i) in 200">i {{ i }}</div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '../components/Loading'
export default {
    name: 'index',
    components: { Loading },
    computed: {
        ...mapState('Public', [ 'loading' ])
    },
}
</script>

<style lang="less">
    .component {
        height: 100%;
        .header-wrapper {
            height: 80px;
            position: fixed;
            width: 100%;
            left: 0;
            top: 0;
            z-index: 1500;
            header {
                height: 100%;
                .go-back {
                    float: left;
                    height: 100%;
                    padding: 0 20px;
                    line-height: 80px;
                    cursor: pointer;
                    transition: all 0.4s;
                    i {
                        font-size: 30px;
                    }
                    &:hover {
                        transform: scale(1.3, 1);
                    }
                }
            }
        }
        .wrapper {
            height: 100%;
            box-sizing: border-box;
            .wrapper-component {
                height: calc(100% - 80px);
                margin-top: 80px;
                .el-scrollbar__wrap {
                    overflow-x: auto;
                }
            }
        }
    }
</style>