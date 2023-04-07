<template>
	<view class="mechanicalApproachAdd">
		<u--form class="yj-form" labelPosition="left" :model="mechanicalApproach" ref="uForm" labelWidth="200rpx">
			<u-form-item label="机械代码" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.num" border="none"></u--input>
			</u-form-item>
			<u-form-item label="物料编码" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.mechanicalCode" border="none"></u--input>
			</u-form-item>
			<u-form-item label="名称" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.mechanicalName" border="none"></u--input>
			</u-form-item>
			<u-form-item label="规格型号" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.mechanicalSize" border="none"></u--input>
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
			<u-form-item label="租赁方式" ref="item1">
				<uni-data-select class="yj-select" v-model="mechanicalApproach.leaseStatus" :localdata="range"
					@change="changeLease"></uni-data-select>
			</u-form-item>
			<u-form-item label="进场时间" ref="item1">
				<u--input class="ta-right" v-model="mechanicalApproach.person" border="none"></u--input>
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
		</u--form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mechanicalApproach: {
					num: 'JC00100004',
					dateTime: '2023.02.11  10:00:00',
					person: '李白',
					mechanicalCode: 'JX00001',
					mechanicalName: '挖掘机',
					mechanicalSize: 'size1',
					leaseLabel: '月租',
					leaseStatus: 1,
					approachTime: '2023.03.01',
					unit: 'm³',
					equipmentId: '1111112',
					remark: '太丑了,不要',
					remark2: '95 加满',
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
			// if (query.item) {
			// 	this.mechanicalApproach = JSON.parse(query.item)
			// }
		},
		methods: {
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