<template>
    <div style="jumbotron">
        <h1 class="display-4">Hello, simp!</h1>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    export default defineComponent({
        props: {
            sid: String
        },

        setup(props) {
            const router = useRouter()
            if (props.sid) {
                useStore().commit('setSid', props.sid)
            }
            router.replace({ path: '/' })
        },
        name: 'Login'
    })
</script>
