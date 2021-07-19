<template>
    <div class="alert alert-danger"><code>{{ getLastError }}</code></div>
</template>

<script>
    export default {
        name: 'Error',
        computed: {
            getLastError() {
                 return this.$store.state.error
            }
        }
    }
</script>
