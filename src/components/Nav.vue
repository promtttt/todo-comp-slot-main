<script setup>
 
</script>
 
<template>
    <div class="absolute top-5 right-5 flex justify-end gap-2 p-2 z-50">
        <router-link to="/">
            Home
        </router-link>
        |
        <router-link to="/login">
            Login
        </router-link>
        |
        <RouterLink :to="{ name: 'AboutUs' }">
            About us
        </RouterLink>
    </div>
</template>
 
<style scoped>
 
</style>