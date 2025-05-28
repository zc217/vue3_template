<template>
    <el-menu default-active="/sys/user" :router="true" class="border border-black border-r-0 h-[calc(100vh-60px)]">
        <el-sub-menu index="/sys">
            <template #title>
                <el-icon>
                    <Setting />
                </el-icon>
                <span>系统管理</span>
            </template>
            <el-menu-item index="/sys/user">
                <template #title>
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>用户管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="/sys/role">
                <template #title>
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span>角色管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="/sys/perm">
                <template #title>
                    <el-icon>
                        <Link />
                    </el-icon>
                    <span> 权限管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="/sys/dept">
                <template #title>
                    <el-icon>
                        <Female />
                    </el-icon>
                    <span>部门管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="/sys/post">
                <template #title>
                    <el-icon>
                        <CirclePlus />
                    </el-icon>
                    <span>岗位管理</span>
                </template>
            </el-menu-item>
            <el-sub-menu index="/sys/log">
                <template #title>
                    <el-icon>
                        <Pointer />
                    </el-icon>
                    <span>日志管理</span>
                </template>
                <el-menu-item index="/sys/log/login">
                    <template #title>
                        <el-icon>
                            <Clock />
                        </el-icon>
                        <span>登录日志管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/sys/log/operation">
                    <template #title>
                        <el-icon>
                            <ChatDotSquare />
                        </el-icon>
                        <span>操作日志管理</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>