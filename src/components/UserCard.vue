<script setup>
  defineProps({
    user: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <!-- <li :class="$style['user - card']">{{ user.name }}: {{ user.website }}</li> -->
  <li class="user-card">{{ user.name }}: {{ user.website }}</li>
</template>

<style>
  .user-card {
    border: 2px solid black;
    padding: 10px;
  }
</style>
