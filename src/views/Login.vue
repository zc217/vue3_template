<template>
    <div class="flex items-center justify-center h-screen">
        <div class="border border-black h-[210px] w-[300px]">
            <p class="text-2xl font-bold flex justify-center mt-4 mb-4">低代码平台</p>
            <el-form ref="ruleFormRef" :model="formData" :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="username" class="mr-4">
                    <el-input v-model="formData.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label="密码" prop="password" class="mr-4">
                    <el-input v-model="formData.password" type="password" placeholder="请输入密码" show-password />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>

</template>

<script setup>
import { reactive, ref } from 'vue'
import http from '@/axios/index.js'
import router from '@/router/index.js'

const ruleFormRef = ref()
const formData = reactive({
    username: '',
    password: '',
})
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '字符长度在3-10之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '字符长度在6-20之间', trigger: 'blur' },
    ]
})
const login = async () => {

    const valid = await ruleFormRef.value.validate()
    if (valid) {
        const res = await http.post('/login', formData)
        router.push('home')
        localStorage.setItem("token", res.data)
        localStorage.setItem("currentMenu", "/welcome")
    }


    // ruleFormRef.value.validate((valid, fields) => {
    //     if (valid) {

    //         const res = await http.post('/login', formData)
    //         console.log("res",res)
    //调用登录接口
    // http.post('/login',formData).then(res=>{
    //     console.log("res",res)
    //     if(res.data.code==200){
    //         router.push('/home')
    //         localStorage.setItem("token",res.data.data)
    //     }
    // })
}
</script>
