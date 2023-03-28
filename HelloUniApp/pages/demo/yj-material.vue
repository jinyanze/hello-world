<template>
	<view class="yj-material-pop">
		<u-popup :show="show">
			<view class="box">
				<view class="header">
					<view class="btn notarize" @click="confirm">
						确认
					</view>
					<view class="btn canned" @click="canned">
						取消
					</view>
				</view>
			</view>
			<uni-table ref="table" border stripe type="selection" emptyText="暂无更多数据"
				@selection-change="selectionChange">
				<uni-tr>
					<uni-th width="100" align="center">名称</uni-th>
					<uni-th width="100" align="center">规格</uni-th>
					<uni-th width="100" align="center">单位</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.name }}</uni-td>
					<uni-td>
						<view class="specification">{{ item.specification }}</view>
					</uni-td>
					<uni-td align="center">{{ item.unit }}</uni-td>
				</uni-tr>
			</uni-table>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				tableData: [{
					"specification": "双履带",
					"name": "挖掘机",
					"unit": "台"
				}, {
					"specification": "四履带",
					"name": "挖掘机",
					"unit": "台"
				}, {
					"specification": "2020-09-03",
					"name": "洒水机",
					"unit": "台"
				}],
				selectRow: []
			}
		},
		methods: {
			selectionChange(res) {
				this.selectRow = [];
				res.detail.index.length > 0 && res.detail.index.map(item => {
					this.selectRow.push(this.tableData[item])
				})
			},
			confirm() {
				if (this.selectRow.length == 0) {
					return
				}
				this.$emit('confirmCallback', this.selectRow)
			},
			canned() {
				this.$emit('confirmCallback')
			}
		}
	}
</script>

<style lang="less" scoped>
	.yj-material-pop {
		.box {
			padding: 30rpx;

			.header {
				display: flex;
				justify-content: space-between;

				.btn {
					padding: 8rpx 30rpx;
					border-radius: 15rpx;
				}

				.notarize {
					background: dodgerblue;
					border: 1rpx dodgerblue solid;
					color: white;
				}

				.canned {
					background: white;
					border: 1rpx black solid;
				}
			}
		}

	}
</style>