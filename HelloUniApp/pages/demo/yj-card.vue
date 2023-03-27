<template>
	<view class="yz-card">
		<uni-card>
			<template v-slot:title>
				<view class="header">
					<view class="left">
						<text class="title">{{title}}</text>
						<text class="info">{{infoText}}</text>
					</view>
					<view class="right" v-if="foldStatus" @click="foldStatus = false">
						<text class="">收起</text>
						<u-icon class="icon" name="arrow-up" color="black" size="20"></u-icon>
					</view>
					<view class="right" v-else @click="foldStatus = true">
						<text class="">展开</text>
						<u-icon class="icon" name="arrow-down" color="black" size="20"></u-icon>
					</view>
				</view>
			</template>
			<slot name=""></slot>
			<view class="body" v-if="foldStatus">
				<view class="list">
					<view class="item" v-for="item in bodyData">
						<text class="label">{{item.label}}</text>
						<u--text class="value" :lines="item.lines ? item.lines : ''" :text="item.value"></u--text>
					</view>
				</view>
				<view class="avatar-wrap" v-if="avatarInfo.url">
					<u-avatar :src="avatarInfo.url"></u-avatar>
					<text class="label">{{avatarInfo.name}}</text>
				</view>
			</view>
			<view slot="actions" class="actions">
				<view v-if="actionsType == 0" class="actionsData">
					<text class="" @click="onClick('action1')">{{actionsData[0]}}</text>
					<text>
						|
					</text>
					<text class="" @click="onClick('action2')">{{actionsData[1]}}</text>
				</view>
				<text v-else-if="actionsType == 1" class="actionsText">{{actionsText}}</text>
			</view>
		</uni-card>
	</view>
</template>

<script>
	/**
	 * Card 卡片
	 * @property {String} title 标题文字
	 * @property {String} infoText 副标题
	 * @property {Number} infoType 副标题类型 0:警告
	 * @property {Array} bodyData 中央列表
	 * @property {Object} avatarInfo 中央右上头像信息
	 * @property {Number} actionsType 操作栏类型 0:两列可点击类 1:一列提示文字类
	 * @property {String} actionsText 操作栏一列类
	 * @event {Function} click 点击 Card 触发事件
	 */
	export default {
		name: 'yjCard',
		props: {
			title: {
				type: String,
				default: '标题'
			},
			infoText: {
				type: String,
				default: '问题一般'
			},
			infoType: {
				type: Number,
				default: 0
			},
			bodyData: {
				type: Array,
				default: () => {
					return [{
						label: '项目单号',
						value: 'SDDE',
					}, {
						label: '班组',
						value: 'SDDE'
					}, {
						label: '班组',
						value: 'SDDE'
					}, {
						label: '责任区',
						value: '啊孙大伟大卫哇哦哇哦哇额为哇哦阿伟哇哦哇哦哇哦阿伟啊喂喂哇哦哇哦阿伟阿伟',
						lines: 2
					}]
				}
			},
			avatarInfo: {
				type: Object,
				default: () => {
					return {
						url: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
						name: '张三'
					}
				}
			},
			actionsType: {
				type: Number,
				default: 0
			},
			actionsData: {
				type: Array,
				default: () => {
					return ['整改单', '巡检单']
				}
			},
			actionsText: {
				type: String,
				default: '未检查原因: 生病请假'
			}
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

		.actionsData {
			display: flex;
			justify-content: space-around;
			align-items: center;
		}

		.actionsText {
			color: red;
		}
	}
</style>