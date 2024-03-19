<script setup>
import BaseCard from '../components/BaseCard.vue'
import ListModal from '../components/ListModel.vue'
 
defineEmits(['editMode', 'deleteTodo'])
defineProps({
    todos: {
        type: Array,
        required: true
    }
})
 
 
</script>
 
<template>
    <div class="flex flex-col gap-10">
        <ListModal :items="todos">
            <template #header>Todo List</template>
            <template #default="slotProps">
                <BaseCard size="lg" variant="outlined">
                    <!-- <template #title>{{ slotProps.item.id }}</template> -->
                    <template #title>
                        <RouterLink :to="{ name: 'TodoDetail', params: { todoId: slotProps.item.id } }">
                            {{ slotProps.item.id }}
                        </RouterLink>
                    </template>
                    <template #subtitle>{{ slotProps.item.category }}</template>
                    <template #content>
                        {{ slotProps.item.description }}
                    </template>
                    <template #action>
                        <div class="flex w-full justify-end items-center gap-5">
                            <button class="text-blue-700" @click="$emit('editMode', slotProps.item)">
                                Edit
                            </button>
                            <button class="text-red-700" @click="$emit('deleteTodo', slotProps.item.id)">
                                Delete
                            </button>
                        </div>
                    </template>
                </BaseCard>
            </template>
        </ListModal>
    </div>
</template>
 
<style lang="scss" scoped></style>