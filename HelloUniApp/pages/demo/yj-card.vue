<template>
 <view class="yz-card">
  <uni-card>
   <template v-slot:title>
    <view class="header">
     <view class="left">
      <text class="title">{{title}}</text>
     </view>
     <view class="right" v-if="foldStatus" @click="foldStatus = false">
      <!-- <text class="">收起</text> -->
      <u-icon class="icon" name="arrow-up" color="black" size="20"></u-icon>
     </view>
     <view class="right" v-else @click="foldStatus = true">
      <!-- <text class="">展开</text> -->
      <u-icon class="icon" name="arrow-down" color="black" size="20"></u-icon>
     </view>
    </view>
   </template>
   <slot name="aaaa" v-if="!foldStatus"></slot>
  </uni-card>
 </view>
</template>

<script>
 /**
  * Card 卡片
  * @property {String} title 标题文字
  * @property {String} infoText 副标题
  * @event {Function} click 点击 Card 触发事件
  */
 export default {
  name: 'yjCard',
  props: {
   title: {
    type: String,
    default: '基本信息'
   },
  },
  data() {
   return {
    foldStatus: true
   };
  },
  onLoad() {},
  onReady() {},
  methods: {
   onClick(type) {
    this.$emit('cardCallback', type)
   }
  },
 };
</script>

<style lang="less" scoped>
 .uni-card {
  padding: 0 !important;
 }

 .yz-card {
  font-size: 30rpx;
 }

 .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: auto 20rpx;
  padding: 10rpx 20rpx;

  .left {
   display: flex;
   align-items: center;

   .title {
    font-size: 40rpx;
   }

   .info {
    background: orange;
    color: white;
    border-radius: 15rpx;
    padding: 3rpx 6rpx;
    margin-left: 20rpx;
   }
  }

  .right {
   display: flex;
   align-items: center;

   .icon {
    margin-left: 10rpx;
   }
  }


 }

 .body {
  position: relative;

  .list {
   .item {
    display: flex;

    .label {
     width: 160rpx;
    }
   }
  }

  .avatar-wrap {
   position: absolute;
   top: 5rpx;
   right: 27rpx;
   text-align: center;
  }
 }

 .actions {
  padding: 20rpx 20rpx;
  border-top: 1rpx solid gray;
  font-size: 35rpx;
 }
</style>