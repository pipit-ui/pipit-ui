<template>
  <div class="playground">
    <h1>MoJie UI Playground</h1>
    <div class="demo-section">
      <h2>Button</h2>
      <div class="demo-row">
        <mj-button>Default</mj-button>
        <mj-button type="primary">Primary</mj-button>
        <mj-button type="success">Success</mj-button>
        <mj-button type="warning">Warning</mj-button>
        <mj-button type="danger">Danger</mj-button>
        <mj-button type="info">Info</mj-button>
      </div>
      <div class="demo-row">
        <mj-button size="large">Large</mj-button>
        <mj-button>Default</mj-button>
        <mj-button size="small">Small</mj-button>
      </div>
      <div class="demo-row">
        <mj-button disabled>Disabled</mj-button>
        <mj-button round>Round</mj-button>
        <mj-button circle>&#10003;</mj-button>
        <mj-button plain>Plain</mj-button>
        <mj-button text>Text</mj-button>
      </div>
    </div>
    <div class="demo-section">
      <h2>Icon</h2>
      <div class="demo-row">
        <mj-icon :size="24" color="#409eff">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </mj-icon>
        <mj-icon :size="24" color="#67c23a">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </mj-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
