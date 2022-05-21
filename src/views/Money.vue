<template>
  <div>
    <Layout class-prefix="layout">
      {{recordList}}
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>

    </Layout>
  </div>


</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';


// const version=window.localStorage.getItem('version');
const recordList:Record[]=JSON.parse(window.localStorage.getItem('recordList')||'[]');
// if(version==='0..0.1'){
//   //数据库升级，数据迁移
//   recordList.forEach(record=>{
//     record.createdAt=new Date(2022,5,1);
//   })
//   //保存数据
//   window.localStorage.setItem('recordList',JSON.stringify(recordList))
// }
// window.localStorage.setItem('version','0.0.2');

type Record={
  tags:string[]
  notes:string
  type:string
  amount:number
  createdAt?:Date
}
@Component({
  components: {Types, Notes, Tags, NumberPad}
})
export default class Money extends Vue{
  tags=['衣','食','住','行'];
  record:Record={tags:[],notes:'',type:'-',amount:0}
  recordList:Record[]=recordList;
  onUpdateTags(value:string[]){
    this.record.tags=value;
  }
  onUpdateNotes(value:string){
    this.record.notes=value;
  }
  onUpdateAmount(value:string){
    this.record.amount=parseFloat(value);
  }
  saveRecord(){
    const record2:Record=JSON.parse(JSON.stringify(this.record));
    record2.createdAt=new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style scoped lang="scss">


</style>