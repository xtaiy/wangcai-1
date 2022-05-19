<template>
  <div>
    <Layout class-prefix="layout">

      <NumberPad/>
      <Types/>
      <Notes/>
      <Tags/>

    </Layout>
  </div>


</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/types.vue';
export default {
  name: 'Money',
  components: {Types, Notes, Tags, NumberPad}
};
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style scoped lang="scss">


</style>