<template>
  <div class="patient-dashboard">
    <h2>患者仪表盘</h2>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>健康数据概览</span>
            </div>
          </template>
          <div class="health-data">
            <div class="data-item">
              <span class="label">心率</span>
              <span class="value">75</span>
              <span class="unit">bpm</span>
            </div>
            <div class="data-item">
              <span class="label">血压</span>
              <span class="value">120/80</span>
              <span class="unit">mmHg</span>
            </div>
            <div class="data-item">
              <span class="label">步数</span>
              <span class="value">8,500</span>
              <span class="unit">步</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>健康趋势</span>
            </div>
          </template>
          <div class="chart-container">
            <!-- 这里将添加图表组件 -->
            <div class="placeholder-chart">图表区域</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style lang="scss" scoped>
.patient-dashboard {
  h2 {
    margin-bottom: 20px;
    color: var(--primary-color);
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .health-data {
    .data-item {
      display: flex;
      align-items: baseline;
      margin-bottom: 15px;
      
      .label {
        flex: 1;
        color: var(--text-color);
      }
      
      .value {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-color);
        margin: 0 8px;
      }
      
      .unit {
        color: #999;
      }
    }
  }
  
  .chart-container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .placeholder-chart {
      color: #999;
    }
  }
}
</style> 