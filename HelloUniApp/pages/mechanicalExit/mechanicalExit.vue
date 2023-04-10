<template>
	<view class="mechanicalExit">
		<mescroll-body ref="mescrollRef" @init="initData" :fixed="true" :isLock="true" @down="downCallback"
			@up="upCallback" :optUp="optUp">
			<view class="item" v-for="item in mechanicalExitList" @click="toDetail(item)">
				<view class="header">
					<view>退场单号: {{item.num}}</view>
					<view>{{item.dateTime}}</view>
				</view>
				<view class="body">
					<view class="label">制单人: {{item.person}}</view>
					<view class="label">机械代码: {{item.mechanicalCode}}</view>
					<view class="label">退场时间: {{item.approachTime}}</view>
					<view class="label">进场时间: {{item.approachTime}}</view>
				</view>
			</view>
		</mescroll-body>
	</view>
</template>

<script>
	// 懒加载列表
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		data() {
			return {
				totalPage: 1,
				optUp: {
					offset: '200'
				},
				mechanicalExitList: [],
				itemObj: {
					num: 'JC00100004',
					dateTime: '2023.02.11  10:00:00',
					person: '李白',
					mechanicalCode: 'JX00001',
					approachTime: '2023.03.01',
					exitTime: '2023.04.02'
				}
			};
		},
		methods: {
			toDetail(item) {
				uni.navigateTo({
					url: '/pages/mechanicalExitAdd/mechanicalExitAdd?item=' + JSON.stringify(item)
				});
			},
			initData(mescroll) {
				this.mescroll = mescroll;
				this.loadmore()
			},
			downCallback() {
				this.mechanicalExitList = [];
				this.totalPage = 1;
				this.loadmore();
				setTimeout(() => {
					this.mescroll.endByPage()
				}, 800)
			},
			upCallback() {
				this.totalPage += 1;
				this.loadmore();
				setTimeout(() => {
					this.mescroll.endByPage(15)
				}, 800)
			},
			loadmore() {
				for (let i = 0; i < 15; i++) {
					this.mechanicalExitList.push(this.itemObj)
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.mechanicalExit {
		.item {
			border: 1rpx solid black;
			border-bottom: none;

			&:last-child {
				border-bottom: 1rpx solid black;
			}

			.header {
				line-height: 80rpx;
				padding: 0 40rpx;
				display: flex;
				justify-content: space-between;
				border-bottom: 1rpx solid gray;
			}

			.body {
				padding: 0 40rpx;

				.label {
					padding: 10rpx 0;
				}
			}
		}
	}
</style>