<template>
	<view class="refuelAdd">
		<u--form class="yj-form" labelPosition="left" :model="refuel" ref="uForm" labelWidth="250rpx">
			<u-form-item required label="机械代码" ref="item1">
				<u--input class="ta-right" v-model="refuel.num" border="none" disabled
					disabledColor="#f2f2f2"></u--input>
				<u-icon name="scan" size="25" @click="scanCode"></u-icon>
			</u-form-item>
			<u-form-item label="名称" ref="item1">
				<u--input class="ta-right" v-model="refuel.mechanicalName" disabled disabledColor="#f2f2f2"
					border="none"></u--input>
			</u-form-item>
			<u-form-item label="规格型号" ref="item1">
				<u--input class="ta-right" v-model="refuel.mechanicalSize" disabled disabledColor="#f2f2f2"
					border="none"></u--input>
			</u-form-item>
			<u-form-item label="单位" ref="item1">
				<u--input class="ta-right" v-model="refuel.unit" border="none"></u--input>
			</u-form-item>
			<u-form-item label="授权人" ref="item1">
				<u--input class="ta-right" v-model="refuel.person" border="none"></u--input>
			</u-form-item>
			<u-form-item label="供应商" ref="item1">
				<u--input class="ta-right" v-model="refuel.supplier" border="none"></u--input>
			</u-form-item>
			<u-form-item label="油料" required ref="item1">
				<uni-data-select class="yj-select" v-model="refuel.fuelType" :localdata="range"
					@change="changeLease"></uni-data-select>
			</u-form-item>
			<u-form-item label="油单价（含税）" ref="item1">
				<u--input class="ta-right" v-model="refuel.fuelItemNum" border="none"></u--input>
				<view style="margin-left: 10rpx;">
					元
				</view>
			</u-form-item>
			<u-form-item label="加油量" ref="item1">
				<u--input class="ta-right" v-model="refuel.fuelNum" border="none"></u--input>
				<view style="margin-left: 10rpx;">
					L
				</view>
			</u-form-item>
			<u-form-item label="总金额（含税）" ref="item1">
				<view class="" style="width: 100%;text-align: right;">
					{{refuel.fuelNum * refuel.fuelItemNum}}
				</view>
			</u-form-item>
			<u-form-item label="加油时间" ref="item1">
				<view class="" style="width: 100%;text-align: right;">
					{{refuel.fuelTime ? refuel.fuelTime + ' h': ''}}
				</view>
			</u-form-item>
			<u-form-item label="加油前图片" ref="item1" labelPosition="top">
				<u-upload :fileList="beforeFileList" @afterRead="afterRead1" @delete="deletePic1" name="1"
					:maxCount="1"></u-upload>
			</u-form-item>
			<u-form-item label="加油后图片" ref="item1" labelPosition="top">
				<u-upload :fileList="afterFileList" @afterRead="afterRead2" @delete="deletePic2" name="1"
					:maxCount="1"></u-upload>
			</u-form-item>
			<u-button v-if="status == 1" type="primary" size="big" text="创建"></u-button>
			<u-button v-if="status == 2" type="primary" size="big" text="修改"></u-button>
		</u--form>
	</view>
</template>

<script>
	// 支付宝原生扫码组件
	var mpaasScanModule = uni.requireNativePlugin("Mpaas-Scan-Module")
	import moment from 'moment'
	export default {
		data() {
			return {
				showDateTime: false,
				approachDateTime: new Date().getTime(),
				beforeTime: 0,
				afterTime: 0,

				status: 1,
				refuel: {
					num: '',
					dateTime: '',
					person: '',
					supplier: '',
					// mechanicalCode: '',
					mechanicalName: '',
					mechanicalSize: '',
					leaseLabel: '',
					fuelType: null,
					approachTime: '',
					fuelItemNum: 0,
					fuelNum: 0,
					unit: '',
					fuelTime: '',
					// equipmentId: '',
					remark: '',
					remark2: 'Z',
					imageList: []
				},
				range: [{
						value: 1,
						text: "汽油 92"
					},
					{
						value: 2,
						text: "汽油 95"
					},
				],
				beforeFileList: [],
				afterFileList: []
			}
		},
		onLoad(query) {
			if (query.item) {
				this.status = 2;
				// this.refuel = JSON.parse(query.item);
			} else {
				this.status = 1;
			}
		},
		watch: {
			beforeTime(val) {
				if (val && this.afterTime) {
					this.refuel.fuelTime = ((this.afterTime - val) / 3600000).toFixed(6);
				}
			},
			afterTime(val) {
				if (val && this.beforeTime) {
					console.log('bbbbb', val - this.beforeTime);
					this.refuel.fuelTime = ((val - this.beforeTime) / 3600000).toFixed(6);
				}
			},
		},
		methods: {
			// 获得图片最后修改时间 start
			getImageInfo() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					sizeType: ['original'],
					success: (res) => {
						// 原生HTML5+获得图片最后修改时间 不支持h5 环境
						// h5环境在uni.chooseImage的返回值中就可以获得得图片最后修改时间
						plus.io.resolveLocalFileSystemURL(res.tempFilePaths[0], (entry) => {
							entry.file((file) => {
								var fileReader = new plus.io.FileReader();
								console.log("getFile:" + JSON.stringify(file));
								this.date = file.lastModifiedDate;
							});
						}, (e) => {});
					}
				});
			},
			scanCode() {
				mpaasScanModule.mpaasScan({},
					(res) => {
						console.log('aaa', res);
					})
			},
			selectApprpacjDateTime(value) {
				this.refuel.approachTime = moment(value).format('YYYY-MM-DD hh:mm:ss');
				this.showDateTime = false;
			},
			changeLease() {

			},
			// 加油前-删除图片
			deletePic1(event) {
				this.beforeFileList.splice(event.index, 1);
				this.beforeTime = 0;
			},
			// 加油前-新增图片
			async afterRead1(event) {
				this.beforeFileList.push(event.file);
				plus.io.resolveLocalFileSystemURL(event.file.url, (entry) => {
					entry.file((file) => {
						var fileReader = new plus.io.FileReader();
						this.beforeTime = new Date(file.lastModifiedDate).getTime();
						// this.date = file.lastModifiedDate;
					});
				}, (e) => {});
			},
			// 加油后-删除图片
			deletePic2(event) {
				this.afterFileList.splice(event.index, 1)
				this.afterTime = 0;
			},
			// 加油后-新增图片
			async afterRead2(event) {
				this.afterFileList.push(event)
				plus.io.resolveLocalFileSystemURL(event.file.url, (entry) => {
					entry.file((file) => {
						var fileReader = new plus.io.FileReader();
						this.afterTime = new Date(file.lastModifiedDate).getTime();
					});
				}, (e) => {});
			},
		}
	}
</script>

<style lang="less" scoped>
	.refuelAdd {
		background: #f7f7fd;
		padding-bottom: 40rpx;

		.yj-form {
			width: 90%;
			margin: 0 5%;

			.yj-select {
				/deep/.uni-select {
					width: 250rpx;
					margin-left: 170rpx;
				}
			}

			.u-divider {
				width: 120%;
				margin-left: -10%;
			}
		}

		/deep/.uni-input-input {
			text-align: right;
		}
	}
</style>