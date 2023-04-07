<template>
	<view class="mechanicalApproachAdd">
		<u--form class="yj-form" labelPosition="left" :model="mechanicalApproach" ref="uForm" labelWidth="200rpx">
			<u-form-item required label="机械代码" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.num" border="none" disabled
					disabledColor="#f2f2f2"></u--input>
				<u-icon name="scan" size="25"></u-icon>
			</u-form-item>
			<u-form-item label="物料编码" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.mechanicalCode" disabled disabledColor="#f2f2f2"
					border="none"></u--input>
			</u-form-item>
			<u-form-item label="名称" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.mechanicalName" disabled disabledColor="#f2f2f2"
					border="none"></u--input>
			</u-form-item>
			<u-form-item label="规格型号" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.mechanicalSize" disabled disabledColor="#f2f2f2"
					border="none"></u--input>
			</u-form-item>
			<u-form-item label="单位" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.unit" border="none"></u--input>
			</u-form-item>
			<u-form-item label="智能设备ID" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.equipmentId" border="none"></u--input>
			</u-form-item>
			<u-form-item label="授权人" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.person" border="none"></u--input>
			</u-form-item>
			<u-form-item label="租赁方式" required ref="item1">
				<uni-data-select class="yj-select" v-model="mechanicalApproach.leaseStatus" :localdata="range"
					@change="changeLease"></uni-data-select>
			</u-form-item>
			<u-form-item label="进场时间" ref="item1">
				<view class="" style="width: 100%;text-align: right;" @click="showDateTime=true">
					{{mechanicalApproach.showDateTime ? mechanicalApproach.showDateTime : '请选择进场时间'}}
				</view>
			</u-form-item>
			<u-form-item label="备注" ref="item1" labelPosition="top">
				<u--textarea style="margin-top: 20rpx;" v-model="mechanicalApproach.remark" maxlength="200" count
					placeholder="请输入内容" border="none"></u--textarea>
			</u-form-item>
			<u-divider text="" :hairline="false"></u-divider>
			<view class="">
				其它情况
			</view>
			<u-form-item label="油料验收" ref="item1" labelPosition="top">
				<u--textarea style="margin-top: 20rpx;" v-model="mechanicalApproach.remark2" maxlength="100" count
					placeholder="请输入内容" border="none"></u--textarea>
			</u-form-item>
			<u-form-item label="验收图片" ref="item1" labelPosition="top">
				<u-upload :fileList="fileList" @afterRead="afterRead" @delete="deletePic" name="1" multiple
					:maxCount="2"></u-upload>
			</u-form-item>
			<u-button v-if="status == 1" type="primary" size="big" text="创建"></u-button>
			<u-button v-if="status == 2" type="primary" size="big" text="修改"></u-button>
		</u--form>
		<u-datetime-picker :show="showDateTime" v-model="approachDateTime" mode="datetime" @cancel="showDateTime=false"
			@confirm="selectApprpacjDateTime"></u-datetime-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showDateTime: false,
				approachDateTime: new Date().getTime(),
				status: 1,
				mechanicalApproach: {
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
						text: "月租"
					},
					{
						value: 2,
						text: "月租双班"
					},
				],
				fileList: [],
			}
		},
		onLoad(query) {
			if (query.item) {
				this.status = 2;
				// this.mechanicalApproach = JSON.parse(query.item);
			} else {
				this.status = 1
			}
		},
		methods: {
			selectApprpacjDateTime(value) {
				console.log('aaaaaa', value);
				this.mechanicalApproach.approachTime = this.approachDateTime;
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
	.mechanicalApproachAdd {
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
		}

		/deep/.uni-input-input {
			text-align: right;
		}
	}
</style>