<template>
  <div class="admin-dashboard">
    <h2>系统管理面板</h2>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-item">
            <div class="stat-value">1,256</div>
            <div class="stat-label">总用户数</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-item">
            <div class="stat-value">86</div>
            <div class="stat-label">医生数量</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-item">
            <div class="stat-value">98.5%</div>
            <div class="stat-label">系统可用性</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-item">
            <div class="stat-value">256</div>
            <div class="stat-label">今日活跃用户</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" class="mt-20">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>系统监控</span>
            </div>
          </template>
          <div class="monitor-container">
            <!-- 系统监控图表 -->
            <div class="placeholder-chart">系统监控图表</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>最近活动</span>
            </div>
          </template>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const activities = [
  {
    content: '系统更新完成',
    timestamp: '2024-03-20 10:00'
  },
  {
    content: '新增医生认证',
    timestamp: '2024-03-20 09:30'
  },
  {
    content: '系统备份完成',
    timestamp: '2024-03-20 08:00'
  }
]
</script>

<style lang="scss" scoped>
.admin-dashboard {
  h2 {
    margin-bottom: 20px;
    color: var(--primary-color);
  }
  
  .mt-20 {
    margin-top: 20px;
  }
  
  .stat-card {
    .stat-item {
      text-align: center;
      
      .stat-value {
        font-size: 28px;
        font-weight: bold;
        color: var(--primary-color);
      }
      
      .stat-label {
        margin-top: 8px;
        color: var(--text-color);
      }
    }
  }
  
  .monitor-container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .placeholder-chart {
      color: #999;
    }
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style> 