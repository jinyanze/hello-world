<template>
	<view class="content">
		<u-form labelPosition="left" :model="model" :rules="rules" ref="uForm" labelWidth="80">
			<u-form-item label="机械代码">
				<u-input placeholder="请输入机械代码" type="text" v-model="model.code" input-align="right"
					@input="qrCodechange" />
				<u-icon name="scan" size="50" @click="doScanQR"></u-icon>
			</u-form-item>
			<yjCard @cardCallback="cardCallback">
				<template slot="aaaa">
					<u-form-item label="名称" prop="name">
						<u--input v-model="model.name" border="none" placeholder="请输入名称"></u--input>
					</u-form-item>
					<u-form-item label="规格型号" prop="version">
						<u--input v-model="model.version" border="none" placeholder="请输入规格型号"></u--input>
					</u-form-item>
					<u-form-item label="单位" prop="work">
						<u--input v-model="model.work" border="none" placeholder="请输入单位"></u--input>
					</u-form-item>
					<u-form-item label="租赁方式" prop="lease">
						<u--input v-model="model.lease" border="none" placeholder="请输入租赁方式"></u--input>
					</u-form-item>
				</template>
			</yjCard>
			<u-form-item label="作业日期">
				<u-calendar :show="show" :mode="mode" @confirm="confirm" :closeOnClickOverlay='true'
					@close='show = false'></u-calendar>
				<text @click="show = true" v-model="model.label">{{model.label}}</text>
			</u-form-item>
			<u-form-item label="作业量">
				<u-input placeholder="请输入作业量" type="text" v-model="model.quantity" input-align="right" />
			</u-form-item>
			<u-form-item label="作业时间">
				<u-button type="primary" text="一键导入" @click="handleRove"></u-button>
			</u-form-item>
			<u-swipe-action>
				<u-swipe-action-item :options="options1" @click='closeClick(index)' v-for="(item,index) in CardList"
					:show="isShow" :key="index+new Date().getTime()">
					<uni-card padding="10px 0" @click="handleIndex(index)">
						<u-form-item label="开始时间">
							<!-- <text>{{item.StartTime}}</text> -->
							<view class="example-body">
								<uni-datetime-picker v-model="item.StartTime" returnType="timestamp"
									@change="changeLogStart($event,index)" />
							</view>
						</u-form-item>
						<u-form-item label="结束时间">
							<!-- <text>{{item.EndTime}}</text> -->
							<view class="example-body">
								<uni-datetime-picker v-model="item.EndTime" returnType="timestamp"
									@change="changeLogEnd($event,index)" />
							</view>
						</u-form-item>
						<u-form-item label="工作时长">
							<text>{{item.timeOver}}分钟</text>
						</u-form-item>
						<u-form-item label="作业类型">
							<!-- <uni-data-select v-model="item.value" :localdata="range" @change="change(index)" :clear="false"></uni-data-select> -->
							<!-- <view @click="handleIndex(index)"> -->
							<select-cy :value="item.value" placeholder="请选择项目" :listIndex="index" :options="range"
								@change="change"></select-cy>
							<!-- </view> -->
						</u-form-item>
						<!-- <u-form-item label="开始拍照"> -->
						<!-- <view style="font-size: 40rpx;margin-left: 40rpx;" @click="getImageInfo">获取图片信息</view>
			         		图片最后修改时间(拍摄时间)<uni-dateformat :date="date"></uni-dateformat> -->
						<view class="example-body">
							<uni-file-picker v-model="item.imageValueStart" disable-preview :del-icon="false"
								return-type="object" limit="1" title="开始拍照" @select="select" @progress="progress"
								@success="success" @fail="fail"></uni-file-picker>
							<!-- <uni-file-picker limit="1" title="开始拍照" @success="getImageInfo"></uni-file-picker> -->
							<uni-dateformat :date="item.dateStart"></uni-dateformat>
						</view>
						<!-- </u-form-item> -->
						<!-- <u-form-item label="结束拍照">
			         		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="getImageInfo">获取图片信息</view>
			         		图片最后修改时间(拍摄时间)<uni-dateformat :date="date"></uni-dateformat>
			         	</u-form-item> -->
						<view class="example-body">
							<uni-file-picker v-model="item.imageValueEnd" limit="1" title="结束拍照"></uni-file-picker>
							<uni-dateformat :date="item.dateEnd"></uni-dateformat>
						</view>
					</uni-card>
				</u-swipe-action-item>
			</u-swipe-action>

			<u-button @click="handleAdd">Add追加</u-button>
			<u-button @click="submit">提交</u-button>
		</u-form>
	</view>
</template>

<script>
	// 卡片
	import yjCard from '../demo/yj-card.vue';
	export default {
		data() {
			return {
				model: {
					code: '',
					quantity: '',
					label: '请选择',
					quantity: '',
				},
				show: false,
				StartTime: '',
				EndTime: '',
				timeOver: '',
				mode: 'single',
				value: 0,
				dateStart: null,
				dateEnd: null,
				imageValueStart: [],
				imageValueEnd: [],
				range: [{
						value: 0,
						label: "篮球"
					},
					{
						value: 1,
						label: "足球"
					},
					{
						value: 2,
						label: "游泳"
					},
					{
						value: 3,
						label: '跳神'
					},
					{
						value: 4,
						label: '健身'
					},
					{
						value: 5,
						label: '跑步'
					},
					{
						value: 6,
						label: '跑步1'
					},
					{
						value: 7,
						label: '跑步11'
					},
					{
						value: 8,
						label: '跑步12'
					},
					{
						value: 9,
						label: '跑步14'
					},
					{
						value: 10,
						label: '跑步163'
					},
					{
						value: 11,
						label: '跑步2'
					},
					{
						value: 12,
						label: '跑步1123'
					},
				],
				rules: {
					'code': {
						type: 'string',
						required: true,
						message: '请填写机械代码',
						trigger: ['blur', 'change']
					},
				},
				CardList: [{
						StartTime: '2023-04-06',
						EndTime: '2023-04-06',
						timeOver: '0',
						value: [],
						dateStart: null,
						dateEnd: null,
						imageValueStart: [],
						imageValueEnd: [],
					},
					{
						StartTime: '2020-02-02',
						EndTime: '',
						timeOver: '',
						value: [],
						dateStart: null,
						dateEnd: null,
						imageValueStart: [],
						imageValueEnd: [],
					},
				],
				CardListIndex: '',
				options1: [{
					text: '删除',
					style: {
						backgroundColor: 'red'
					}
				}],
				isShow: false
			};
		},
		components: {
			yjCard,
		},
		methods: {
			confirm(e) {
				// this.mode = e[0]
				this.show = false
				this.label = e[0]
				console.log(e[0]);
			},
			handleRove() {
				console.log('12121')
			},
			change( listIndex, item, value) {
				let demo = 'listdemo' + listIndex;
				this[demo] = value;
				// this.$set(this.CardList[listIndex],'value',value)
				// this.CardList[listIndex].value.push = value
				console.log(this.CardList, 'CardList')
			},
			submit() {
				let arr = JSON.parse(JSON.stringify(this.CardList))
				arr.map((item,index)=>{
					let demo = 'listdemo' + index;
					item.value = (this[demo]);
				})
				console.log(arr,'qqqq')
			},
			success(e) {
				console.log(e, 'success')
			},
			handleIndex(i) {
				console.log(i, 'iiiiiii')
				this.CardListIndex = i
			},
			select(e) {
				console.log(e, this.CardListIndex, 'select')
				this.CardList[this.CardListIndex].dateStart = e.tempFiles[0].file.lastModifiedDate;
				this.CardList[this.CardListIndex].imageValueStart = e.tempFiles
			},
			progress(e) {
				console.log(e, 'progress')
			},
			fail() {
				console.log(e, 'fail')
			},
			// 追加卡片
			handleAdd() {
				this.CardList.push({
					StartTime: '2020-03-03',
					EndTime: '',
					timeOver: '',
					value: 2,
					dateStart: null,
					dateEnd: null,
					imageValueStart: [],
					imageValueEnd: []
				}, )
				console.log('现在里面有多少个CardList', this.CardList)
			},
			// 删除卡片
			closeClick(index) {
				console.log(index, '删除卡片', this.CardList, '总共数组')
				this.CardList.splice(index, 1)
			},
			// 选择卡片开始时间
			changeLogStart(e, i) {
				this.CardList[i].StartTime = e
				console.log(e, i, this.CardList, '卡片开始时间')
			},
			// 选择卡片结束时间
			changeLogEnd(e, i) {
				this.CardList[i].EndTime = e
				this.CardList[i].timeOver = Math.floor((this.CardList[i].StartTime - this.CardList[i].EndTime / (1000 *
					60)) % 60)
				console.log(e, i, this.CardList, this.CardList[i].timeOver, '卡片结束时间')
			},
			// 自己写的获取图片信息
			getImageInfo() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					sizeType: ['original'],
					success: (res) => {
						// 图片最后修改时间 不支持h5 在res中有h5的最后修改时间
						// plus.io.resolveLocalFileSystemURL(res.tempFilePaths[0], (entry) => {
						// 	entry.file((file) => {
						// 		var fileReader = new plus.io.FileReader();
						// 		console.log("getFile:" + JSON.stringify(file));
						// 		this.date = file.lastModifiedDate;
						// 	});
						// }, (e) => {
						// 	console.log("Resolv e file URL failed: " + e.message);
						// });
						console.log(res, 1111)
						this.dateStart = res.tempFiles[0].lastModifiedDate;
					}
				});
			},
		}
	}
</script>

<style>
	.content {
		padding: 0 10px;
	}
</style>