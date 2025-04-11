<template>
  <div class="home">
    <div class="welcome-section">
      <h1>欢迎使用 FishVitalLink</h1>
      <p>您的智能健康管理平台</p>
      <div class="entry-buttons">
        <el-button type="primary" @click="$router.push('/patient/dashboard')">患者入口</el-button>
        <el-button type="success" @click="$router.push('/doctor/dashboard')">医生入口</el-button>
        <el-button type="warning" @click="$router.push('/admin/dashboard')">管理员入口</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  
  .welcome-section {
    text-align: center;
    
    h1 {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.2rem;
      color: var(--text-color);
      margin-bottom: 2rem;
    }
    
    .entry-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
  }
}
</style> 