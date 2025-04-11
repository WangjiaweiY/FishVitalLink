<template>
  <el-menu
    default-active="1"
    class="nav-menu"
    background-color="white"
    text-color="#333"
    active-text-color="var(--primary-color)"
  >
    <el-menu-item index="1">
      <el-icon><Monitor /></el-icon>
      <span>健康数据</span>
    </el-menu-item>
    
    <el-menu-item index="2">
      <el-icon><Calendar /></el-icon>
      <span>预约问诊</span>
    </el-menu-item>
    
    <el-menu-item index="3">
      <el-icon><ChatLineRound /></el-icon>
      <span>远程问诊</span>
    </el-menu-item>
    
    <el-menu-item index="4">
      <el-icon><Document /></el-icon>
      <span>健康报告</span>
    </el-menu-item>
    
    <el-menu-item index="5">
      <el-icon><User /></el-icon>
      <span>个人中心</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {
  Monitor,
  Calendar,
  ChatLineRound,
  Document,
  User
} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  border-right: none;
  
  .el-menu-item {
    height: 50px;
    line-height: 50px;
    
    .el-icon {
      margin-right: 8px;
    }
  }
}
</style> 