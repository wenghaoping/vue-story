<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="container">
      <div class="col-sm-3">
        <sider></sider>
      </div>
      <div class="col-sm-9">
        <transition :name="transitionName">
          <router-view class="child-view">

          </router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import topNav from '@/components/topNav.vue';
import sider from '@/components/sider.vue';
export default {
  data () {
    return {
      transitionName: 'slide-left'
    };
  },
  components: {
    topNav,
    sider
  },
  watch: {
    '$route' (to, from) {
      if (to) {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    }
  }
};
</script>

<style lang="less" scoped>
  #app {
  /* 路由切换动效 */
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0);
      transition: 0.3s;
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
      transition: 0.3s;
    }
    .child-view {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      /*transition: all .2s ease;*/
      transition: all .3s cubic-bezier(.55,0,.1,1);
    }
  }
</style>
