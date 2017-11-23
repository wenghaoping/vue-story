<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h1 class="text-center">总件</h1>
    </div>
    <div class="panel-body">
      <h1 class="text-center">{{planIndex}}件</h1>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: [],
      data () {
        return {};
      },
      computed: {
        planIndex () {
          return this.$store.state.list.length;
        }
      },
      mounted () {},
      // 组件
      components: {},
      methods: {},
      // 当dom一创建时
      created () {},
      watch: {}
    };
</script>

<style lang="less">

</style>
