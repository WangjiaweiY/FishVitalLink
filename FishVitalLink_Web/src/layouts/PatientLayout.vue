<template>
  <div class="patient-layout">
    <el-container>
      <el-header>
        <nav-header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-menu />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import NavHeader from '@/components/layout/NavHeader.vue'
import NavMenu from '@/components/layout/NavMenu.vue'
</script>

<style lang="scss" scoped>
.patient-layout {
  min-height: 100vh;
  
  .el-header {
    background-color: var(--primary-color);
    color: white;
    padding: 0;
  }
  
  .el-aside {
    background-color: white;
    border-right: 1px solid #e6e6e6;
  }
  
  .el-main {
    background-color: var(--background-color);
    padding: 20px;
  }
}
</style> 