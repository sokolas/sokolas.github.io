<template>
    <input type="text" class="form-control" placeholder="Webhook" aria-label="Webhook" v-model="webhook" v-on:input="textChanged"/>
    <a href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks" target="blank">Making a Webhook</a>
    <button v-bind:class="{'btn': true, 'btn-default': !editing, 'btn-primary': editing}" type="button" v-on:click="addWebhook">save</button>
    <button class="btn btn-danger" type="button" v-on:click="deleteWebhook">delete</button>
</template>

<script lang="ts">
    import { useStore } from 'vuex'
    import { defineComponent, computed, ref } from 'vue'

    export default defineComponent({
        setup() {
            const store = useStore()
            store.commit('editing', false)
            const getHook = computed(() => store.state.webhook)
            const editing = computed(() => store.state.editing)
            const webhook = ref(store.state.webhook)
            console.log(webhook.value)
            function addWebhook() {
                store.dispatch('setWebhook', webhook.value)
            }
            function deleteWebhook() {
                webhook.value = null
                store.dispatch('setWebhook', null)
            }
            function textChanged() {
                console.log('text changed')
                store.commit('editing', true)
            }
            return { webhook, getHook, addWebhook, deleteWebhook, textChanged, editing }
        },
        name: 'Webhook'
    })
</script>
