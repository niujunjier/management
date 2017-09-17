<template>
    <div id="menu">
        <el-row class="tac">
            <el-col>
                <el-menu v-for="(item,i) in ['1','2','3','4','5','6','7','8','9','0']" unique-opened class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
                    <el-submenu :index="item">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            导航{{i}}
                        </template>
                        <el-menu-item :index="item">选项1</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    deta() {
        return {

        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scope lang="less">
    #menu{
        border-top: 5px solid #5FB878;
    }
    .el-menu{
        border-radius: 0 !important;
    }
</style>