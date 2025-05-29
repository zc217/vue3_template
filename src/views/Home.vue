<template>
    <el-container>
        <el-header>
            <Header :currentUserRealName="currentUserRealName"/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <LeftMenu />
            </el-aside>
            <el-main class="border border-black">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'
import { onMounted,ref } from 'vue'
import http from '@/axios/index.js'
const currentUserRealName = ref('')

onMounted(async () => {
    const res = await http.get('/home')
    if (res.code == 200) {
        currentUserRealName.value = res.data.realName
    }
    

    // axios.get('/home', {
    //     headers:{
    //         token: localStorage.getItem("token")
    //     }
    // }).then(res=>{
    //         if(res.data.code == 200){
    //             currentUserRealName.value = res.data.data.realName
    //         }
    // })
})

</script>

<style s>
.el-header{
    padding: 0;
}
</style>