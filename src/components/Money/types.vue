<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'types'
};
</script>

<style scoped lang="scss">
.types {
  background-color: #c4c4c4;
  display: flex;
  justify-content: space-evenly;
  font-size: 24px;

  > li {
    display: flex;
    width: 50%;
    height: 64px;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}
</style>