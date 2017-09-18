<template>
    <div id="menu">
        <el-row class="tac">
            <el-col>
                <el-menu v-for="(item,i) in menuList" router unique-opened class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
                    <el-submenu :index="item.value">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            {{item.name}}
                        </template>
                        <el-menu-item :index="son.router" v-for="(son,idx) in item.son">{{son.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            menuList:[
                {
                    name:'测试菜单',
                    value:'test',
                    son:[
                        {
                            name:'测试列表',
                            router:'/testList'
                        }
                    ]
                }
            ]
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
        border-top: 3px solid #5FB878;
    }
    .el-menu{
        border-radius: 0 !important;
    }
</style>