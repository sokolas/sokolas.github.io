<template>
    <input type="text" class="form-control" placeholder="Webhook" aria-label="Webhook" v-model="webhook"/>
    <button class="btn btn-primary" type="button" v-on:click="addWebhook">save</button>
    <button class="btn btn-danger" type="button" v-on:click="deleteWebhook">delete</button>
</template>

<script lang="ts">
    import { useStore } from 'vuex'
    import { defineComponent, computed, ref } from 'vue'

    export default defineComponent({
        setup() {
            const store = useStore()
            const getHook = computed(() => store.state.webhook)
            const webhook = ref(store.state.webhook)
            console.log(webhook.value)
            function addWebhook() {
                store.dispatch('setWebhook', webhook.value)
            }
            function deleteWebhook() {
                webhook.value = null
                store.dispatch('setWebhook', null)
            }
            return { webhook, getHook, addWebhook, deleteWebhook }
        },
        name: 'Webhook'
    })
</script>
