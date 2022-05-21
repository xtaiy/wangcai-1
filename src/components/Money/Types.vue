<template>
  <div>
    <ul class="types">
      <li :class="value==='-'&& 'selected' "
      @click="selectType('-')">支出</li>
      <li :class="value==='+'&& 'selected' "
      @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';


@Component
export default class Types extends Vue{
  @Prop() readonly value!:string;//！表示不管有没有初始值
  selectType(type:string){
      if(type!=='-'&&type!=='+'){
        throw new Error('type is unknown')
      }
      this.$emit('update:value',type)
    }
}

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