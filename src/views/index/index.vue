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
<!--    <mavonEditor v-model="article.main" default_open="preview" :editable="false"
                 :toolbarsFlag="false"
                 :subfield="false" :ishljs = "true"></mavonEditor>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import { mavonEditor } from 'mavon-editor';
  export default {
    props: [],
    data () {
      return {
        loading: false,
        plans: [],
        article: {}
      };
    },
    computed: {
      /* plans () {
        // 从store中取出数据
        return this.$store.state.list;
      } */
    },
    mounted () {},
    // 组件
    components: { mavonEditor },
    methods: {
      deletePlan (plan, index) {
        // 删除该事件
//        this.$store.dispatch('deletePlan', index);
        let id = plan._id;
        this.$http.post(this.URL.deletePlan, {_id: id})
          .then(res => {
            let data = res.data;
            if (data.code === -3) {
              alert(data.msg);
            } else {
              this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success'
              });
              this.getToList();
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      creatPlan () {
          // 路由去创建页面
        this.$router.push({name: 'creatPlan', query: {}});
      },
      getToList () {
        this.$http.post(this.URL.getList)
          .then(res => {
            console.log(res);
            let data = res.data;
            if (data.code === -3) {
              alert(data.msg);
            } else {
              this.plans = data.result;
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      getArticleDetail () {
        this.loading = true;
        this.$http.post(this.URL.getArticleDetail, {
          art_id: 14,
          edit: 0
        })
          .then(res => {
            let data = res.data.result[0];
            this.article = data;
            document.title = data.title;
            this.loading = false;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 当dom一创建时
    created () {
      this.getToList();
    },
    watch: {}
  };
</script>

<style lang="less">

</style>
