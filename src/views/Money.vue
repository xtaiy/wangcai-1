<template>
  <div class="nav-wrapper">
    <div class="content">
      money
    </div>

  <Nav></Nav>
  </div>

</template>

<script lang="ts">
export default {
  name: 'Money'
};
</script>

<style scoped lang="scss">
  .nav-wrapper{
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
  }
</style>