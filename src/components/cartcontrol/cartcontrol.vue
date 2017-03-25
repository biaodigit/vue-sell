<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart" transition="move">
      <span class="inner"><img src="decrease.png"></span>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add"><img src="add.png" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props:{
        food:{
            type:Object
        }
    },
    methods:{
        addCart(event) {
            if(!event._constructed){
                return;
            }
            if(!this.food.count){
                 Vue.set(this.food,'count',1);
            }else{
                 this.food.count++;
            }
        },
      decreaseCart(event){
        if(!event._constructed){
          return;
        }
        if(this.food.count){
            this.food.count--;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      transition all 0.6s linear
      &.move-transition
        opacity 1
        transform translate3D(0,0,0)
        .inner
          display inline-block
          line-height 24px
          font-size 24px
          transition all 0.6s linear
          transform rotate(0)
          img
            width 16px
            height 16px
            padding 6px 8px
      &.move-enter,&.move-leave
        opacity 0
        transform translate(24px,0,0)
        .inner
          transform rotate(180deg)
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 3px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147,153,159)
    .cart-add
      line-height 24px
      font-size 24px
      display inline-block
      img
        width 16px
        height 16px
        padding 6px 8px
</style>
