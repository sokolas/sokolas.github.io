<template>
    <div style="jumbotron">
        <h1 class="display-4">Goodbye!</h1>
    </div>
</template>

<script lang="ts">
    import { useStore } from 'vuex'

    export default ({
        setup() {
            useStore().dispatch('logOut')
        },
        name: 'Logout'
    })
</script>
