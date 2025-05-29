<template>
    <div class="flex-container border border-black border-b-0">
        <div class="left-div ml-[20px]">
            <p class="text-2xl font-bold">
                低代码平台
            </p>
        </div>
        <div class="right-div mr-[20px]">
            {{ currentUserRealName }}
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="openRePasswordPage">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import router from '@/router/index.js'
import http from '@/axios/index.js'

const props = defineProps({
    currentUserRealName: String
})

const handleCommand = async (command) => {
    if (command == 'openRePasswordPage') {
        ElMessage('打开修改密码弹框')
    } else if (command == 'logout') {
        const res = await http.get('/logout')
        if (res.code == 200) {
            // ElMessage('退出登录')
            localStorage.clear();
            router.push('/login')
        }

    }
}


</script>


<style scoped>
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

/* .el-dropdowm{
    height: 60px;
} */
</style>