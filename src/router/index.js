import { createRouter, createWebHistory } from 'vue-router'
import TodoManager from '../components/TodoManager.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
 
const history = createWebHistory()
 
const routes = [
    { path: '/', name: 'Home', component: TodoManager},
    { path: '/login', name: 'Login', component: Login},
    { path: '/aboutus', name: 'AboutUs', component: About},
    { path: '/:notfoundpath(.*)', name: 'NotFound',component: NotFound},
]
 
const router = createRouter({
    history: history,
    routes,
    linkActiveClass: "text-blue-600"
})
 
export default router