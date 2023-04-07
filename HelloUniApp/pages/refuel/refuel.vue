<template>
	<view class="refuel">
		<u-sticky><u-tabs :list="tabsList" @click="cutTab" :scrollable="false" :activeStyle="{
            color: 'rgb(60, 156, 255)',
            transform: 'scale(1.05)'
        }"></u-tabs></u-sticky>
		<mescroll-body ref="mescrollRef" @init="initData" :fixed="true" :isLock="true" @down="downCallback"
			@up="upCallback" :optUp="optUp">
			<view class="item" v-for="item in refuelList" @click="toDetail(item)">
				<view class="header">
					<view>加油单号: {{item.num}}</view>
					<view>{{item.dateTime}}</view>
				</view>
				<view class="body">
					<view class="label">制单人: {{item.person}}</view>
					<view class="label">机械代码: {{item.mechanicalCode}}</view>
					<view class="label">油料: {{item.fuelType}}</view>
					<view class="label">加油量（L）: {{item.fuelNum}}</view>
					<view class="label">总金额（元）: {{item.money}}</view>
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
				tabsList: [{
					name: '审批中'
				}, {
					name: '通过'
				}, {
					name: '不通过'
				}],
				totalPage: 1,
				optUp: {
					offset: '200'
				},
				refuelList: [],
				itemObj: {
					num: 'JC00100004',
					dateTime: '2023.02.11  10:00:00',
					person: '李白',
					fuelType: '汽油 95',
					fuelNum: 2,
					money: 10
				}
			};
		},
		methods: {
			cutTab() {

			},
			toDetail(item) {
				uni.navigateTo({
					url: '/pages/refuelAdd/refuelAdd?item=' + JSON.stringify(item)
				});
			},
			initData(mescroll) {
				this.mescroll = mescroll;
				this.loadmore()
			},
			downCallback() {
				this.refuelList = [];
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
					this.refuelList.push(this.itemObj)
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.refuel {
		/deep/.u-tabs {
			background: white;
		}

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