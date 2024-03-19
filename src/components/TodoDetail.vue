<script setup>
import { useRoute } from 'vue-router'
import router from '../router';
 
const { params } = useRoute()
const goBack = () => {
    router.go(-1)
}
</script>
 
<template>
    <div>
        {{ $route.params.todoId }}
        <img :src="`/images/${$route.params.todoId}.jpg`" alt="image" class="w-[70vh]">
        <button @click="goBack">&lt;&lt;Back</button>
    </div>
</template>
 
<style lang="scss" scoped>
 
</style>