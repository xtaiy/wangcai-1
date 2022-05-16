<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="label"></Icon>
      标签
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">



export default {
  name: 'Nav',
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,1);
  justify-content: space-evenly;
  font-size: 12px;
  > .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 0;
    >.icon{
      width: 32px;
      height: 32px;
    }
  }
}

</style>