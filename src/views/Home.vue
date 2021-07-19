<template>
    <User v-if="isLoggedIn" />
    <Webhook v-if="isLoggedIn" />
    <div v-if="!isLoggedIn" class="jumbotron">
      <h1 class="display-4">Hello!</h1>
      <h2 v-if="loading">Loading...</h2>
      <hr class="my-4">
      <a class="btn btn-primary" v-bind:href="btnHref">Log in with Twitch</a>
    </div>
</template>

<script lang="ts">
// import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { computed } from 'vue'
import User from '../components/User.vue'
import Webhook from '../components/Webhook.vue'
import { url } from '@/cfg'

export default {
  setup() {
    const store = useStore()
    const setLastError = (error: any) => { store.commit('setError', error) }
    if (store.getters.hasSid && !store.state.loggedIn) {
      store.dispatch('logIn')
    }
    const isLoggedIn = computed(() => useStore().state.loggedIn)
    const btnHref = `https://id.twitch.tv/oauth2/authorize?client_id=qkc5eid1708t3j2ms0nswbw6gkmqw7&redirect_uri=${url}/getToken&response_type=code`
    const loading = computed(() => store.state.loading)
    return { setLastError, isLoggedIn, btnHref, loading }
  },
  components: {
    User,
    Webhook
  },
  name: 'Home'
}

</script>
