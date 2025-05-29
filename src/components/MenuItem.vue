<template>
    <div>
        <el-sub-menu v-if="item.type == 1" :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.icon" />
                </el-icon>
                <span>{{ item.title }}</span>
            </template>
            <MenuItem v-for="child in item.children" :key="child.index" :item="child" />
        </el-sub-menu>

        <el-menu-item v-if="item.type == 2" :index="item.path" @click="changeMenu(item.path)">
            <template #title>
                <el-icon>
                    <component :is="item.icon" />
                </el-icon>
                <span>{{ item.title }}</span>
            </template>
        </el-menu-item>
    </div>
</template>

<script setup>

// 定义 props
const props = defineProps({
    item: Object,
})

const changeMenu = (path) => {
    localStorage.setItem("currentMenu", path)
}
</script>
