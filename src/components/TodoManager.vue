<script setup>
// Add, Edit, Delete, Read todo here
import AddEditTodo from './AddEditTodo.vue'
import TodoList from './TodoList.vue'
// import todos from '../../data/todos.json'
import { onMounted, ref } from 'vue'
import { getItems, getItemById, deleteItemById, addItem, editItem } from '../libs/fetchUtils';
import TodoManagement from '../libs/TodoManagement'
 
const showModal = ref(false)
const clearModal = (flagModal) => {
  showModal.value = flagModal
}
const editingTodo = ref({ id: undefined, category: '', description: '' })
const openModalToEdit = (todo) => {
  showModal.value = true
  editingTodo.value = todo
}
const myTodos = ref(new TodoManagement())
onMounted(async ()=>{
  const items = await getItems(import.meta.env.VITE_BASE_URL)
  myTodos.value.addTodos(items)
  console.log(myTodos.value.getTodos())
})
</script>
 
<template>
  <div>
    <div class="flex justify-end">
      <button
        @click="openModalToEdit"
        class="px-2 py-0.5 text-green-600 rounded-lg hover:text-green-500"
      >
        Add New Todo
      </button>
    </div>
    <TodoList :todos="myTodos.getTodos()" @editMode="openModalToEdit" />
    <Teleport to="#addEditModal">
      <div
        v-show="showModal"
        class="absolute left-0 right-0 top-1/3 m-auto bg-slate-50 h-48 w-72 shadow-lg rounded-md"
      >
        <AddEditTodo @closeModal="clearModal" :todo="editingTodo" />
      </div>
    </Teleport>
  </div>
</template>
 
<style scoped></style>