<template>
    <div class="dialog">
        <transition name="fade">
            <div class="mask" v-show="display" v-if="mask" @click="handleMask"></div>
        </transition>
        <transition name="slide-top">
            <div class="content" v-show="display">
                <div class="head">
                    <slot name="title">
                        <div>{{ title }}</div>
                    </slot>
                    <span class="close" v-if="closable" @click="close">
                        <i class="el-icon-close"></i>
                    </span>
                </div>
                <div class="body">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'model',
    props: {
        value: Boolean,
        mask: {
            default: true,
            type: Boolean
        },
        title: '标题'
    },
    data () {
        return {
            display: this.value,
            closable: true
        }
    },
    methods: {
        handleMask () {
            if (this.maskClosable && this.mask) this.close()
        },
        close () {
            this.display = false
            this.$emit('input', false)
            this.$emit('on-close')
        }
    },
    watch: {
        value (val) {
            this.display = val
        }
    }
}
</script>

<style scoped lang="less">
    .dialog {
        .mask {
            background: rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        }
        .content {
            background: #fff;
            position: fixed;
            top: 50px;
            bottom: 50px;
            left:50px;
            right: 50px;
            z-index: 1001;
            .head {
                padding: 14px 16px;
                border-bottom: 1px solid #e8eaec;
                font-size: 16px;
                .close {
                    position: absolute;
                    top: 14px;
                    right: 16px;
                    cursor: pointer;
                    .el-icon-close {
                        font-size: 20px;
                    }
                }
            }
            .body {
                height: calc(100% - 54px);
                /*padding: 10px;*/
                box-sizing: border-box;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .slide-top-enter-active, .slide-top-leave-active {
        transition: all .4s;
    }
    .slide-top-enter, .slide-top-leave-to {
        transform: translateY(-100%);
    }
</style>