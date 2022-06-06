<template>
    <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
      <li v-for="item in dataSource" :key="item.value" @click="select(item)" class="tabs-item" :class="{selected:item.value===value,[classPrefix+'-tabs-item']:classPrefix}">{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem={
  text:string
  value:string
}

@Component
export default class Tabs extends Vue {


  @Prop({required:true,type:Array}) dataSource!:DataSourceItem[];
  @Prop(String) readonly value!:string;//！表示不管有没有初始值
  @Prop(String) classPrefix?: string;
  select(item:DataSourceItem){
    this.$emit('update:value',item.value);
  }
}
</script>

<style scoped lang="scss">
.tabs {
  background-color: #c4c4c4;
  display: flex;
  justify-content: space-evenly;
  font-size: 24px;

  &-item {
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
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}
</style>