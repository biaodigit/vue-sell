<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header.vue';

  export default {
    components:{
      'v-header':header
    }
  };
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/index.styl";

  .tab
     display flex
     width 100%
     height 40px
     line-height 40px
     border-1px(rgba(7,17,27,0.1))
    .tab-item
        flex 1
        text-align center
        & > a
         display block
         font-size: 4px
         color rgb(77,85,93)
         &.active
           color rgb(240,20,20)
</style>
