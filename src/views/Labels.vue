<template>
  <Layout>
    <div class="tags">
      <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id"><span>{{tag.name}}</span>
      <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button @click="createTag">新建标签</Button>
    </div>

  </Layout>
</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import tagHelper from '@/mixins/tagHelper';


@Component({
  components: {Button},
})
export default class Labels extends mixins(tagHelper){
  get tags(){
    return this.$store.state.tagList
  }

  created(){
    this.$store.commit('fetchTags');
  }

}
</script>

<style scoped lang="scss">
.tags {
  background-color: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    > svg {
      color: #666;
      margin-right: 16px;
      width: 24px;
      height: 24px;
    }
  }
}

.createTag {
  &-wrapper {
    text-align: center;
    padding: 16px 0;
    margin-top:44-16px
  }
}

</style>
