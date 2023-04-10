<template>
	<view class="mechanicalExitAdd">
		<u--form class="yj-form" labelPosition="left" :model="mechanicalExit" ref="uForm" labelWidth="200rpx">
			<u-form-item required label="机械代码" ref="item1">
				<u--input class="ta-right" v-model="mechanicalExit.num" border="none" disabled
					disabledColor="#f2f2f2"></u--input>
				<u-icon name="scan" size="25" @click="scanCode"></u-icon>
			</u-form-item>
			<yjCard @cardCallback="cardCallback">
				<template slot="aaaa">
					<u-form-item label="名称" prop="name">
						<u--input v-model="mechanicalExit.demo" border="none" placeholder="请输入名称"></u--input>
					</u-form-item>
					<u-form-item label="规格型号" prop="version">
						<u--input v-model="mechanicalExit.demo" border="none" placeholder="请输入规格型号"></u--input>
					</u-form-item>
					<u-form-item label="单位" prop="work">
						<u--input v-model="mechanicalExit.demo" border="none" placeholder="请输入单位"></u--input>
					</u-form-item>
					<u-form-item label="供应商" prop="lease">
						<u--input v-model="mechanicalExit.demo" border="none" placeholder="请输入租赁方式"></u--input>
					</u-form-item>
					<u-form-item label="授权人" prop="lease">
						<u--input v-model="mechanicalExit.demo" border="none" placeholder="请输入租赁方式"></u--input>
					</u-form-item>
				</template>
			</yjCard>
			<u-form-item label="进场时间" ref="item1">
				<view class="" style="width: 100%;text-align: right;" @click="showDateTime=true">
					{{mechanicalExit.approachTime ? mechanicalExit.approachTime : '请选择进场时间'}}
				</view>
			</u-form-item>
			<u-form-item label="退场时间" ref="item1">
				<view class="" style="width: 100%;text-align: right;" @click="showDateTime=true">
					{{mechanicalExit.approachTime ? mechanicalExit.approachTime : '请选择退场时间'}}
				</view>
			</u-form-item>
			<u-form-item label="油料验收" ref="item1">
				<u--input class="ta-right" v-model="mechanicalExit.mechanicalName" disabled disabledColor="#f2f2f2"
					border="none"></u--input>
			</u-form-item>
			<u-form-item label="退场图片" ref="item1" labelPosition="top">
				<u-upload :fileList="fileList" @afterRead="afterRead" @delete="deletePic" name="1" multiple
					:maxCount="3"></u-upload>
			</u-form-item>
			<u-form-item label="" ref="item1" labelPosition="top">
				<view class="outlook-wrap">
					<view class="title">
						授权人评价
					</view>
					<view class="phone">
						授权人: 13888888888
					</view>
					<view class="rate">
						<label for="" style="width: 180rpx;">及时度</label>
						<u-rate :count="5" v-model="mechanicalExit.rateNum"></u-rate>
					</view>
					<view class="rate">
						<label for="" style="width: 180rpx;">配合度</label>
						<u-rate :count="5" v-model="mechanicalExit.rateNum"></u-rate>
					</view>
					<view class="rate">
						<label for="" style="width: 180rpx;">车况评价</label>
						<uni-data-select class="yj-select" v-model="mechanicalExit.fuelType"
							:localdata="range"></uni-data-select>
					</view>
				</view>
			</u-form-item>
			<u-button v-if="status == 1" type="primary" size="big" text="创建"></u-button>
			<u-button v-if="status == 2" type="primary" size="big" text="修改"></u-button>
		</u--form>
		<u-datetime-picker :show="showDateTime" v-model="approachDateTime" mode="datetime" @cancel="showDateTime=false"
			@confirm="selectApprpacjDateTime"></u-datetime-picker>
	</view>
</template>

<script>
	// 支付宝原生扫码组件
	var mpaasScanModule = uni.requireNativePlugin("Mpaas-Scan-Module");
	// 卡片
	import yjCard from '../demo/yj-card.vue';
	import moment from 'moment'
	export default {
		components: {
			yjCard,
		},
		data() {
			return {
				showDateTime: false,
				approachDateTime: new Date().getTime(),
				status: 1,
				mechanicalExit: {
					rateNum: 3.5,
					num: '',
					dateTime: '',
					person: '',
					mechanicalCode: '',
					mechanicalName: '',
					mechanicalSize: '',
					leaseLabel: '',
					leaseStatus: null,
					approachTime: '',
					unit: '',
					equipmentId: '',
					remark: '',
					remark2: 'Z',
					imageList: []
				},
				range: [{
						value: 1,
						text: "良好"
					},
					{
						value: 2,
						text: "轻度损坏"
					},
				],
				fileList: [],
			}
		},
		onLoad(query) {
			if (query.item) {
				this.status = 2;
				// this.mechanicalExit = JSON.parse(query.item);
			} else {
				this.status = 1
			}
		},
		methods: {
			scanCode() {
				mpaasScanModule.mpaasScan({},
					(res) => {
						console.log('aaa', res);
					})
			},
			selectApprpacjDateTime(value) {
				this.mechanicalExit.approachTime = moment(value).format('YYYY-MM-DD hh:mm:ss');
				this.showDateTime = false;
			},
			changeLease() {

			},
			// 删除图片
			deletePic(event) {
				this.fileList.splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				event.file.map(item => {
					this.fileList.push(item)
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.mechanicalExitAdd {
		background: #f7f7fd;
		padding-bottom: 40rpx;

		.yj-form {
			width: 90%;
			margin: 0 5%;

			.yj-select {
				/deep/.uni-select {
					width: 250rpx;
					margin-left: 220rpx;
				}
			}

			.u-divider {
				width: 120%;
				margin-left: -10%;
			}

			.outlook-wrap {
				background: white;
				width: 85%;
				padding: 20rpx 30rpx;
				border-radius: 10rpx;

				.title {
					font-size: 50rpx;
				}

				.phone {
					margin: 20rpx auto;
					color: blue;
				}

				.rate {
					display: flex;
					justify-content: space-between;
					margin: 20rpx auto 0 auto;
				}
			}
		}

		/deep/.uni-input-input {
			text-align: right;
		}
	}
</style>