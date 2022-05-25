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
import recordListModel from '@/models/recordListModel'
import tagsListModel from '@/models/tagsListModel';



const recordList = recordListModel.fetch();
const tagsList=tagsListModel.fetch();


@Component({
  components: {Types, Notes, Tags, NumberPad}
})
export default class Money extends Vue{
  tags=tagsList;
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
    const record2:RecordItem=recordListModel.clone(this.record);
    record2.createdAt=new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordChange(){
    recordListModel.save(this.recordList);
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