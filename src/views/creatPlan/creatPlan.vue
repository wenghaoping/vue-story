<template>
    <div class="creatPlan" v-loading.fullscreen="loading" element-loading-text="拼命加载中">
      <el-form ref="formData" :model="formData" label-width="80px">
        <el-row :span="24" :gutter="32">
          <el-col :span="12">
            <el-form-item
              label="名字">
              <el-input v-model="formData.name" placeholder="名字"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24" :gutter="32">
          <el-col :span="24">
            <el-form-item
              label="内容">
              <el-input v-model="formData.introduce" placeholder="内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24" :gutter="32">
          <el-col :span="24">
            <el-button type="primary" round @click="save">保存</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
</template>

<script type="text/ecmascript-6">
    import { CurentTime } from '@/utils/formData'; // 这是一个获取当前时间的工具,后期会讲到
    export default {
      props: [],
      data () {
        return {
          loading: false,
          formData: {
            name: '',
            introduce: ''
          }
        };
      },
      computed: {},
      mounted () {},
      // 组件
      components: {},
      methods: {
        save () {
          const plan = {
            avatar: 'https://i.imgur.com/LIvj3YT.jpg',
            name: this.formData.name,
            introduce: this.formData.introduce,
            date: CurentTime() // 使用获取当前时间工具
          };
          // 添加计划
          this.$store.dispatch('savePlan', plan);
          this.$router.go(-1);
        }
      },
      // 当dom一创建时
      created () {},
      watch: {}
    };
</script>

<style lang="less">

</style>
