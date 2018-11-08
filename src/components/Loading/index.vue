<template>
    <div class="loading">
        <svg viewBox="25 25 50 50" class="circular">
            <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped lang="less">
    .loading {
        .circular {
            width: 30px;
            height: 30px;
            animation: loading-rotate 2s linear infinite;
            .path {
                animation: loading-dash 1.5s ease-in-out infinite;
                stroke-dasharray: 90, 150;
                stroke-dashoffset: 0;
                stroke-width: 5;
                stroke: #409EFF;
                stroke-linecap: round;
            }
        }
    }
    @keyframes loading-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes loading-dash {
        0% {
            stroke-dasharray: 1,200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -40px;
        }
        100% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -120px;
        }
    }
</style>