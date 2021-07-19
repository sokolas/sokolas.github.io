<template #default>
  <div class="jumbotron">
    <div class="media">
      <img class="mr-3" width=64 height=64 v-bind:src="user.profile_image_url">
      <div class="media-body"><h1 class="mt-0">Hello, {{ user.name }}!</h1></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'User',

  setup() {
    const user = computed(() => useStore().state.user)
    return { user }
  }
})
</script>
