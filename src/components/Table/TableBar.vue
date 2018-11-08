<template>
    <div class="table-bar">
        <Buttons :buttons="buttons" />
    </div>
</template>

<script>
import Buttons from '../Buttons'
export default {
    name: 'TableBar',
    components: { Buttons },
    props: [ 'buttons' ]
}
</script>

<style scoped>
    .table-bar {
        padding: 0 15px 15px;
    }
</style>