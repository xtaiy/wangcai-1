<template>
  <div>
    <Layout>Statistics</Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Statistics'
};
</script>

<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>