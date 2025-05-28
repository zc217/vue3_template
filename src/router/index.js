import { createWebHistory, createRouter } from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import SysUser from '@/views/sys/user/Index.vue'
import SysRole from '@/views/sys/role/Index.vue'
import SysPerm from '@/views/sys/perm/Index.vue'
import SysDept from '@/views/sys/dept/Index.vue'
import SysPost from '@/views/sys/post/Index.vue'
import SysLogLogin from '@/views/sys/log/login/Index.vue'
import SysLogOperation from '@/views/sys/log/operation/Index.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
        path: '/home', 
        component: Home,
        children:[
            {
                path:'/sys/user',
                component: SysUser
            },
            {
                path: '/sys/role',
                component: SysRole
            },
            {
                path: '/sys/perm',
                component: SysPerm
            },
            {
                path: '/sys/dept',
                component: SysDept
            },
            {
                path: '/sys/post',
                component: SysPost
            },
            {
                path: '/sys/log/login',
                component: SysLogLogin
            },
            {
                path: '/sys/log/operation',
                component: SysLogOperation
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router