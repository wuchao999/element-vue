<template>
    <div class="drawer">
        <transition name="fade">
            <div class="mask" v-show="display" v-if="mask" @click="handleMask"></div>
        </transition>
        <transition :name="'move-' + placement">
            <div class="wrap" :style="wrapStyle" v-show="display">
                <div class="head">
                    <slot name="title">
                        <div>{{ title }}</div>
                    </slot>
                    <span class="close" v-if="closable" @click="close">
                        <i class="el-icon-close"></i>
                    </span>
                </div>
                <div class="body" :style="styles">
                    <slot></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'index',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        maskClosable: {
          default: true
        },
        mask: {
            type: Boolean,
            default: true
        },
        placement: {
            default: 'right'
        },
        title: {
            default: '标题'
        },
        closable: {
            default: true
        },
        width: {
            default: 300
        },
        styles: {
            default: Object
        }
    },
    computed: {
        wrapStyle () {
            let width = parseInt(this.width)
            return {
                [this.placement]: 0,
                width: width <= 100 ? `${width}%` : `${width}px`
            }
        }
    },
    data () {
        return {
            display: this.value
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
    .drawer {
        .mask {
            background: rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        }
        .wrap {
            position: fixed;
            z-index: 1001;
            top: 0;
            height: 100%;
            background: #fff;
            box-shadow: 0 4px 12px rgba(0,0,0,.15);
            .head {
                padding: 14px 16px;
                border-bottom: 1px solid #e8eaec;
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
                box-sizing: border-box;
                position: relative;
                height: calc(100% - 50px);
                overflow: auto;
                // text-align: center;
                padding: 15px;
                padding-bottom: 50px;
            }
            .footer {
                position: absolute;
                box-sizing: border-box;
                border-top: 1px solid #e8eaec;
                line-height: 50px;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50px;
                text-align: right;
                padding-right: 15px;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .move-right-enter-active, .move-right-leave-active {
        transition: all .4s;
    }
    .move-right-enter, .move-right-leave-to {
        transform: translateX(100%);
    }
    .move-left-enter-active, .move-left-leave-active {
        transition: all .4s;
    }
    .move-left-enter, .move-left-leave-to {
        transform: translateX(-100%);
    }
</style>