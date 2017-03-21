<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports"  class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" @click="showDetail" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"><img src="arrow-right.png"></i>
      </div>
    </div>
    <div @click="showDetail" class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="bulletin-right"><img src="arrow-right.png"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="detail" transition="fade">
      <div class="detail-wrapper clearfix">
         <div class="detail-main">
           <h1 class="name">{{seller.name}}</h1>
           <div class="star-wrapper">
             <star :size="48" :score="seller.score" ></star>
           </div>
           <div class="title">
             <div class="line"></div>
             <div class="text">优惠信息</div>
             <div class="line"></div>
           </div>
           <ul v-if="seller.supports" class="supports">
             <li class="support-item" v-for="item in seller.supports">
               <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
               <span class="text">{{seller.supports[$index].description}}</span>
             </li>
           </ul>
           <div class="title">
             <div class="line"></div>
             <div class="text">商家公告</div>
             <div class="line"></div>
           </div>
           <div class="bulletin">
             <p class="content">{{seller.bulletin}}</p>
           </div>
         </div>
      </div>
      <div @click="closeDetail" class="detail-close">
        <img src="close.png">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from "../star/star.vue";

  export default {
    props:{
      seller:{
        type:Object
      }
    },
    data(){
      return {
        detailShow:false
      }
    },
    methods:{
      showDetail() {
        this.detailShow = true;
      },
      closeDetail() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease','discount','guarantee','invoice','special'];
    },
    components:{
        star
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .header
    position relative
    overflow hidden
    color #fff
    background rgba(7,17,27,0.5)
    .content-wrapper
      padding 24px 12px 18px 24px
      font-size 0
      position relative
      .avatar
        display inline-block
        vertical-align top
        img
          border-radius 2px
      .content
        display inline-block
        margin-left 16px
        .title
          margin 2px 0 8px 0
          .brand
            display inline-block
            vertical-align top
            width 30px
            height 18px
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            color rgb(255,255,255)
            line-height 18px

        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .support
          .icon
            display inline-block
            width 12px
            height 12px
            vertical-align top
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height 12px
            font-size 10px
      .support-count
        position absolute
        right 12px
        bottom 14px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0,0,0,0.2)
        text-align center
        .count
          font-size 10px
          position relative
          left 1px
        .icon-keyboard_arrow_right
          font-size 10px
          position relative
          left 3px
          top 4px
          line-height 24px
          img
            width 16px
            height 16px
    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, 0.2)
      .bulletin-title
        display: inline-block
        vertical-align: top
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align: top
        margin: 0 4px
        font-size: 10px
      .bulletin-right
        position absolute
        width 16px
        height 16px
        right 6px
        top 3px
        img
          width 16px
          height 16px

    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .detail
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      overflow auto
      transition all 0.5s
      backdrop-filter blur(10px)
      &.fade-transition
        opacity 1
        background rgba(7,17,27,0.8)
      &.fade-enter,&.fade-leave
        opacity 0
        background rgba(7,17,27,0)
      .detail-wrapper
        min-height 100%
        width 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
          .name
            line-height 16px
            text-align center
            font-size 16px
            font-weight 700
          .star-wrapper
            margin-top 18px
            padding 2px 0
            text-align center
          .title
            display flex
            width 80%
            margin 28px auto 24px
            .line
              flex 1
              position relative
              top -6px
              border-bottom 1px solid rgba(255,255,255,0.2)
            .text
              padding 0 12px
              font-size 14px
              font-weight 700
          .supports
            width 80%
            margin 0 auto
            .support-item
              padding 0 12px
              margin-bottom 12px
              font-size 0
              &:last-child
                margin-bottom 0
              .icon
                display inline-block
                width 16px
                height 16px
                vertical-align top
                margin-right 6px
                background-size 16px 16px
                background-repeat no-repeat
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.guarantee
                  bg-image('guarantee_2')
                &.invoice
                  bg-image('invoice_2')
                &.special
                  bg-image('special_2')
              .text
                line-height 16px
                font-size 12px
           .bulletin
             width 80%
             margin 0 auto
             .content
               padding 0 12px
               font-size 12px
               line-height 24px
      .detail-close
        position relative
        width 26px
        height 26px
        margin -64px auto 0
        clear both
        font-size 24px
        img
         width 26px
         height 26px
</style>
