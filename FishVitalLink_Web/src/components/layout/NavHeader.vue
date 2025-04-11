<template>
  <div class="nav-header">
    <div class="logo">
      <!-- 暂时注释logo图片 -->
      <!-- <img src="@/assets/logo.png" alt="FishVitalLink" /> -->
      <span>FishVitalLink</span>
    </div>
    <div class="nav-right">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="32" :src="userAvatar" />
          <span class="username">{{ username }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('用户名')
const userAvatar = ref('')
</script>

<style lang="scss" scoped>
.nav-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    
    img {
      height: 32px;
    }
    
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  
  .user-info {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    
    .username {
      color: white;
    }
  }
}
</style> 