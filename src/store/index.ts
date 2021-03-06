import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex)


const store= new Vuex.Store({
  state: {
    recordList:[],
    tagList:[],
    currentTag:undefined,
  } as RootState,
  mutations: {
    fetchRecords(state){
      state.recordList=JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    saveRecords(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList));
    },
    createRecord(state,record:RecordItem){
      const record2:RecordItem=clone(record);
      record2.createdAt=new Date().toISOString();
      state.recordList.push(record2)
      store.commit('saveRecords');
    },
    fetchTags(state) {
      state.tagList=JSON.parse(window.localStorage.getItem('tagsList') || '[]');
      if(!state.tagList||state.tagList.length===0){
        store.commit('createTag','衣');
        store.commit('createTag','食');
        store.commit('createTag','住');
        store.commit('createTag','行');
      }
    },
    saveTags(state){
      window.localStorage.setItem('tagsList',JSON.stringify(state.tagList));
    },
    createTag(state,name:string){
      const names= state.tagList.map(item=>item.name)
      if(names.indexOf(name)>=0){
        window.alert('标签名重复了');
        return 'duplicated';
      }
      const id=createId().toString();
      state.tagList.push({id:id,name:name});
      store.commit('saveTags');
    },
    findTag(state,id:string){
      state.currentTag = state.tagList.filter(t=>t.id===id)[0];
    },
    updateTag(state,object:{id:string,name:string}){
      const {id,name}=object;
      const idList=state.tagList.map(item=>item.id);
      if(idList.indexOf(id)>=0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复了')
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state,id:string){
      for(let i=0;i<state.tagList.length;i++){
        if(state.tagList[i].id===id){
          state.tagList.splice(i,1);
          store.commit('saveTags');
          break;
        }
      }
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store;
