<template>
  <svg class="icon">
    <use :xlink:href="'#'+name" />
  </svg>
</template>

<script lang="ts">

/*分别引入不同的svg，下面的方法是通过importAll函数直接引入一个目录*/
// import '@/assets/icons/money.svg';
// import '@/assets/icons/label.svg';
// import '@/assets/icons/statistics.svg';
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons',true,/\.svg$/));}catch (error){console.log(error);}

export default {
  props:['name'],
  name: 'Icon'
};
</script>

<style scoped lang="scss">
.icon{
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>