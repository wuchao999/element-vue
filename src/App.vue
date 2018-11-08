<template>
    <div id="app" :class="{'is-component': $route.name === 'component'}">
        <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    .is-component {
        overflow-y: hidden;
    }
</style>
