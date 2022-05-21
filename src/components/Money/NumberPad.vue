<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons clearfix">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">ok</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue{
  output ='0';
  inputContent(event:MouseEvent){
    const button=(event.target as HTMLButtonElement);
    const input =button.textContent as string;
    if(this.output.length===16){return;}
    if(this.output==='0'){
      if('0123456789'.indexOf(input)>=0){
        this.output=input;
      }else if(input==='.'){
        this.output+=input;
      }
      return;
    }else{
      if(this.output.indexOf('.')>=0){
        if(input==='.'){
          return;
        }
      }
      this.output+= input;
    }
  }
  remove(){
    const x=this.output.substring(0,this.output.length-1);
    if(x.length===0){
      this.output='0'
    }else {
      this.output=x;
    }
  }
  clear(){
    this.output='0';
  }
  ok(){
    this.$emit('update:value',this.output)
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.numberPad{
  >.output{
    @extend %clearfix;
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
    inset 0 5px 5px -5px rgba(0,0,0,0.25);
    height: 72px;
  }
  >.buttons{
    @extend %clearfix;
    >button{
      width: 25%;
      height: 64px;
      float: left;
      background:transparent;
      border: none;
      &.ok{
        float: right;
        height: 64*2px;
      }
      &.zero{
        width: 25*2%;
      }
      $bg:#f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2) ,&:nth-child(5){
        background: darken($bg,4%);
      }
      &:nth-child(3) ,&:nth-child(6),&:nth-child(9){
        background: darken($bg,8%);
      }
      &:nth-child(4) ,&:nth-child(7),&:nth-child(10){
        background: darken($bg,12%);
      }
      &:nth-child(8) ,&:nth-child(11),&:nth-child(13){
        background: darken($bg,16%);
      }
      &:nth-child(14){
        background: darken($bg,20%);
      }
      &:nth-child(12){
        background: darken($bg,24%);
      }
    }

  }
}
</style>