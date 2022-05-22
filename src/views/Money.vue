<template>
  <div>
    <Layout class-prefix="layout">
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
import model from '@/model.ts'


// const version=window.localStorage.getItem('version');
const recordList = model.fetch();
// if(version==='0..0.1'){
//   //数据库升级，数据迁移
//   recordList.forEach(record=>{
//     record.createdAt=new Date(2022,5,1);
//   })
//   //保存数据
//   window.localStorage.setItem('recordList',JSON.stringify(recordList))
// }
// window.localStorage.setItem('version','0.0.2');


@Component({
  components: {Types, Notes, Tags, NumberPad}
})
export default class Money extends Vue{
  tags=['衣','食','住','行'];
  record:RecordItem={tags:[],notes:'',type:'-',amount:0}
  recordList:RecordItem[]=recordList;
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
    const record2:RecordItem=model.clone(this.record);
    record2.createdAt=new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordChange(){
    model.save(this.recordList);
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