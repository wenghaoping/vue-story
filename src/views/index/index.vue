<template>
  <div class="index">
    <el-button type="primary" round @click="creatPlan">创建</el-button>
    <ul class="list-group" style="margin-top: 10px;">
      <li class="list-group-item" v-for="(plan, index) in plans" :key="index">
        <div class="row">
          <div class="col-sm-2 user-details">
            <img :src="plan.avatar" class="avatar img-circle img-responsive" />
            <p class="text-center">
              <strong>
                {{ plan.name }}
              </strong>
            </p>
          </div>
          <div class="col-sm-4 text-center">
            <p class="label label-primary text-center">
              <i class="glyphicon glyphicon-calendar"></i>
              {{ plan.date }}
            </p>
          </div>
          <div class="col-sm-4 text-left">
            {{ plan.introduce }}
          </div>
          <div class="col-sm-1">
            <el-button icon="el-icon-circle-close" type="danger" round @click="deletePlan(plan,index)"></el-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: [],
    data () {
      return {
        loading: false
      };
    },
    computed: {
      plans () {
        // 从store中取出数据
        return this.$store.state.list;
      }
    },
    mounted () {},
    // 组件
    components: {},
    methods: {
      deletePlan (plan, index) {
        // 删除该事件
        this.$store.dispatch('deletePlan', index);
      },
      creatPlan () {
          // 路由去创建页面
        this.$router.push({name: 'creatPlan', query: {}});
      }
    },
    // 当dom一创建时
    created () {},
    watch: {}
  };
</script>

<style lang="less">

</style>
