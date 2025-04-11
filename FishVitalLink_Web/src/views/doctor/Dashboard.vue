<template>
  <div class="doctor-dashboard">
    <h2>医生工作台</h2>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-item">
            <div class="stat-value">12</div>
            <div class="stat-label">待处理问诊</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-item">
            <div class="stat-value">8</div>
            <div class="stat-label">今日预约</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-item">
            <div class="stat-value">4.8</div>
            <div class="stat-label">平均评分</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <div class="stat-item">
            <div class="stat-value">156</div>
            <div class="stat-label">本月问诊</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" class="mt-20">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>待处理问诊列表</span>
            </div>
          </template>
          <el-table :data="[]" style="width: 100%">
            <el-table-column prop="patient" label="患者" />
            <el-table-column prop="type" label="问诊类型" />
            <el-table-column prop="time" label="预约时间" />
            <el-table-column label="操作">
              <template #default>
                <el-button type="primary" size="small">处理</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>今日排班</span>
            </div>
          </template>
          <el-calendar>
            <!-- 日历内容 -->
          </el-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style lang="scss" scoped>
.doctor-dashboard {
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
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style> 
 