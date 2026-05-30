<template>
  <div class="playground">
    <h1>Pipit UI Playground</h1>
    <div class="demo-section">
      <h2>Button</h2>
      <div class="demo-row">
        <pt-button>Default</pt-button>
        <pt-button type="primary">Primary</pt-button>
        <pt-button type="success">Success</pt-button>
        <pt-button type="warning">Warning</pt-button>
        <pt-button type="danger">Danger</pt-button>
        <pt-button type="info">Info</pt-button>
      </div>
      <div class="demo-row">
        <pt-button size="large">Large</pt-button>
        <pt-button>Default</pt-button>
        <pt-button size="small">Small</pt-button>
      </div>
      <div class="demo-row">
        <pt-button disabled>Disabled</pt-button>
        <pt-button round>Round</pt-button>
        <pt-button circle>&#10003;</pt-button>
        <pt-button plain>Plain</pt-button>
        <pt-button text>Text</pt-button>
      </div>
    </div>
    <div class="demo-section">
      <h2>Icon</h2>
      <div class="demo-row">
        <pt-icon :size="24" color="#409eff">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </pt-icon>
        <pt-icon :size="24" color="#67c23a">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </pt-icon>
      </div>
    </div>
    <div class="demo-section">
      <h2>Table</h2>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>基础表格</h3>
        <pt-table :data="tableData" :columns="columns" />
      </div>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>带边框 + 斑马纹</h3>
        <pt-table :data="tableData" :columns="columns" border stripe />
      </div>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>自定义列 + 排序</h3>
        <pt-table :data="tableData" :columns="sortableColumns">
          <template #status="{ row }">
            <span :style="{ color: row.status === '在线' ? '#67c23a' : '#f56c6c' }">
              {{ row.status }}
            </span>
          </template>
        </pt-table>
      </div>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>加载状态</h3>
        <pt-table :data="tableData" :columns="columns" loading />
      </div>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>空数据</h3>
        <pt-table :data="[]" :columns="columns" />
      </div>
    </div>
    <div class="demo-section">
      <h2>Container 布局容器</h2>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>Header + Main</h3>
        <pt-container>
          <pt-header>Header</pt-header>
          <pt-main>Main</pt-main>
        </pt-container>
      </div>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>Header + Main + Footer</h3>
        <pt-container>
          <pt-header>Header</pt-header>
          <pt-main>Main</pt-main>
          <pt-footer>Footer</pt-footer>
        </pt-container>
      </div>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>Aside + Main</h3>
        <pt-container>
          <pt-aside width="200px">Aside</pt-aside>
          <pt-main>Main</pt-main>
        </pt-container>
      </div>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>Header + Aside + Main</h3>
        <pt-container>
          <pt-header>Header</pt-header>
          <pt-container>
            <pt-aside width="200px">Aside</pt-aside>
            <pt-main>Main</pt-main>
          </pt-container>
        </pt-container>
      </div>
      <div class="demo-row" style="flex-direction: column; align-items: stretch;">
        <h3>Aside + Header + Main</h3>
        <pt-container>
          <pt-aside width="200px">Aside</pt-aside>
          <pt-container>
            <pt-header>Header</pt-header>
            <pt-main>Main</pt-main>
          </pt-container>
        </pt-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 80, align: 'center' as const },
  { prop: 'city', label: '城市' },
  { prop: 'status', label: '状态', width: 100, align: 'center' as const },
]

const sortableColumns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 100, align: 'center' as const, sortable: true },
  { prop: 'city', label: '城市' },
  { prop: 'status', label: '状态', width: 100, align: 'center' as const },
]

const tableData = ref([
  { name: '张三', age: 28, city: '北京', status: '在线' },
  { name: '李四', age: 32, city: '上海', status: '离线' },
  { name: '王五', age: 24, city: '广州', status: '在线' },
  { name: '赵六', age: 30, city: '深圳', status: '在线' },
])
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f5f5f5;
}
.playground {
  max-width: 960px;
  margin: 48px auto;
  padding: 24px;
}
.playground h1 {
  font-size: 28px;
  color: #303133;
  margin-bottom: 32px;
  border-bottom: 2px solid #409eff;
  padding-bottom: 12px;
}
.demo-section {
  margin-bottom: 40px;
}
.demo-section h2 {
  font-size: 20px;
  color: #606266;
  margin-bottom: 16px;
}
.demo-row h3 {
  font-size: 14px;
  color: #909399;
  margin: 0 0 8px 0;
}
.demo-row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
</style>
