<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand">主页</div>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">记事本<span class="sr-only">(current)</span></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    props: [],
    data () {
      return {
        loading: false
      };
    },
    computed: {},
    mounted () {},
    // 组件
    components: {},
    methods: {},
    // 当dom一创建时
    created () {},
    watch: {}
  };
</script>

<style lang="less" scoped>

</style>
