<template>
    <el-container>
        <el-header>
            <Header />
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
</script>

<style>
.el-header{
    padding: 0;
}
</style>