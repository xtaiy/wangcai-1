import createId from '@/lib/createId';


const localStorageKeyName = 'tagsList';
type Tag={
    id:string
    name:string
}
type TagListModel={
    data:Tag[]
    fetch:()=>Tag[]
    create:(name:string)=>'success'|'duplicated'//success 表示成功，duplicated 表示 name 重复
    update:(id:string,name:string)=>'success'|'not_found'|'duplicated'
    remove:(id:string)=>boolean
    save:()=>void
}
const tagsListModel:TagListModel = {
    data:[],
    fetch() {
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data
    },
    create(name:string){
        const names=this.data.map(item=>item.name)
        if(names.indexOf(name)>=0){
            return 'duplicated';
        }
        const id=createId().toString();
        this.data.push({id:id,name:name});
        this.save();
        return 'success';
    },
    update(id:string,name:string){
        const idList=this.data.map(item=>item.id);
        if(idList.indexOf(id)>=0){
            const names=this.data.map(item=>item.name);
            if(names.indexOf(name)>=0){
                return 'duplicated'
            }else {
                const tag=this.data.filter(item=>item.id===id)[0];
                tag.name=name;
                this.save();
                return 'success'
            }
        }else{
            return 'not_found';
        }
    },
    remove(id:string){
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].id===id){
                this.data.splice(i,1);
                this.save();
                break;
            }
        }
        return true
    },
    save(){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data));
    }
};

export default tagsListModel