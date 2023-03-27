<template>
	<view class="">
		<yjCard :avatarInfo="avatarInfo" @cardCallback="cardCallback"></yjCard>
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="popup = true;">打开签名</view>

		<u-popup :show="popup" mode="center" width="100%">
			<yjSignature @saved="savedSign" ref="signatureRef" @closed="closeSignPop"></yjSignature>
		</u-popup>
	</view>
</template>

<script>
	import yjCard from './yj-card.vue';
	import yjSignature from './yj-signature'
	import localforage from 'localforage'
	export default {
		data() {
			return {
				avatarInfo: {
					url: require('./壁纸.png'),
					name: '张三'
				},
				popup: false,
			}
		},
		components: {
			yjCard,
			yjSignature
		},
		onLoad() {
		},
		methods: {
			cardCallback(type) {
				console.log('卡片组件点击后事件', type);
			},
			savedSign(res) {
				console.log('aaaa', res);
				this.popup = false;
				this.$nextTick(() => {
					this.$u.toast('保存成功')
				})
			},
			closeSignPop(error) {
				this.popup = false;
			}
		}
	}
</script>

<style>
</style>