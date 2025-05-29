<template>
    <el-menu :default-active="currentActiveMenu" :router="true" class="border border-black border-r-0 h-[calc(100vh-60px)]">
        <MenuItem v-for="item in menuData" :key="item.path" :item="item" />
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import MenuItem from '@/components/MenuItem.vue' // 引入递归组件

// 使用 icon 的字符串名称
const menuData = ref([
    {
        path: '/welcome',
        title: '首页',
        icon: 'Home',
        type: 2,
        children: []
    },
    {
        path: '/sys',
        title: '系统管理',
        icon: 'Setting',
        type: 1,
        children: [
            { path: '/sys/user', title: '用户管理', type: 2, icon: 'User' },
            { path: '/sys/role', title: '角色管理', type: 2, icon: 'UserFilled' },
            { path: '/sys/perm', title: '权限管理', type: 2, icon: 'Link' },
            { path: '/sys/dept', title: '部门管理', type: 2, icon: 'Female' },
            { path: '/sys/post', title: '岗位管理', type: 2, icon: 'CirclePlus' },
            {
                path: '/sys/log',
                title: '日志管理',
                icon: 'Pointer',
                type: 1,
                children: [
                    { path: '/sys/log/login', title: '登录日志管理', type: 2, icon: 'Clock' },
                    { path: '/sys/log/operation', title: '操作日志管理', type: 2, icon: 'ChatDotSquare' }
                ]
            }
        ]
    }
])

const currentActiveMenu = localStorage.getItem("currentMenu") ? localStorage.getItem("currentMenu") : "/welcome"
</script>

<style scoped>
.el-header {
    padding: 0;
}
</style>