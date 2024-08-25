<script setup>
  import UserCard from "@/components/UserCard.vue";
  import { useUserStore } from "@/stores/UserStore";

  const userStore = useUserStore();

  defineProps({
    title: { type: String, default: "Users" },
  });

  userStore.fetchUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard
        v-for="user in userStore.userList"
        :key="`user-${user.id}`"
        :user="user"
      />
    </ul>
  </main>
</template>

<style></style>
