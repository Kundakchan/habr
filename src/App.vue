<script setup lang="ts">
import { usersApi } from './api/users'

usersApi
  .fetchUsers({ q: '}}}' })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <main class="app__layout">app</main>
</template>
