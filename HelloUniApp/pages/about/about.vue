<template>
	<view class="content">
		<button @click="scanCode">扫描二维码</button>
		<view class="">
			{{test}}
		</view>
		<u-form labelPosition="left" :model="model1" :rules="rules" ref="form1" style="width: 90%;margin-left: 10px;"
			labelWidth="60">
			<u-form-item label="机械代码">
				<u-input placeholder="请输入机械代码" type="text" v-model="search.code" input-align="right"
					@input="qrCodechange" />
				<u-icon name="scan" size="50" @click="doScanQR"></u-icon>
			</u-form-item>
			<u-form-item label="姓名" prop="userInfo.name" borderBottom ref="item1" :required='true'>
				<u-input v-model="model1.userInfo.name" border="none"></u-input>
			</u-form-item>
			<u-form-item label="性别" prop="userInfo.sex" borderBottom @click="showSex = true; hideKeyboard()" ref="item1"
				:required='true'>
				<u--input v-model="model1.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择性别"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="水果" prop="userInfo.checkboxValue1" :required='true'>
				<u-checkbox-group v-model="model1.userInfo.checkboxValue1" placement="column" @change="checkboxChange">
					<u-checkbox :customStyle="{marginBottom: '8px'}" v-for="(item, index) in checkboxList1" :key="index"
						:label="item.name" :name="item.name">
					</u-checkbox>
				</u-checkbox-group>
			</u-form-item>
			<u-form-item label="人物" prop="userInfo.radioValue1" :required='true'>
				<u-radio-group v-model="model1.userInfo.radiovalue1" placement="column" @change="groupChange">
					<u-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist1" :key="index"
						:label="item.name" :name="item.name">
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="备注" prop="userInfo.beizhu" :required='true'>
				<u--textarea v-model="model1.userInfo.beizhu" placeholder="请输入内容"></u--textarea>
			</u-form-item>
			<u-form-item label="开关" prop="userInfo.switch" :required='true'>
				<u-switch v-model="model1.userInfo.switch" @change="switchChange"></u-switch>
			</u-form-item>
			<u-form-item label="上传" prop="userInfo.fileList" :required="true">
				<u-upload :fileList="model1.userInfo.fileList" @afterRead="afterRead" @delete="deletePic" name="1"
					multiple :maxCount="10" :previewFullImage="true"></u-upload>
			</u-form-item>
			<u-form-item label="日期" prop="userInfo.timer" borderBottom :required='true' @click="open">
				<u-input placeholder="请选择日期" v-model="model1.userInfo.timer" border="none"></u-input>
			</u-form-item>
			<uni-section title="倒计时回调事件" type="line" padding>
				<uni-countdown :show-day="false" :second="timeupSecond" @timeup="timeup" />
			</uni-section>
		</u-form>
		<yjCard :avatarInfo="avatarInfo" @cardCallback="cardCallback"></yjCard>
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="popup = true;">打开签名</view>
		<button type="default" @click="getCurrentLocation()">获取当前位置</button>
		<view class="">
			定位：{{positionInfo.address}}
		</view>
		<button @click="startRecognize()">开始识别</button><br />
		<view>识别内容{{startText}}</view>
		<u-popup :show="popup" mode="center" width="100%">
			<yjSignature @saved="savedSign" ref="signatureRef" @closed="closeSignPop"></yjSignature>
		</u-popup>
		<button type="primary" @click="showPopup = true" size="mini">AddCard</button>
		<u-modal :show="showPopup" @confirm="confirmPopup" @cancel='cancelPopup' @close="cancelPopup"
			:showCancelButton='true' :closeOnClickOverlay="true">
			<u-form :model="model2" labelWidth="60">
				<u-form-item label="title" prop="model2.title">
					<u-input placeholder="请输入title" v-model="model2.title"></u-input>
				</u-form-item>
				<u-form-item label="extra" prop="model2.extra">
					<u-input placeholder="请输入extra" v-model="model2.extra"></u-input>
				</u-form-item>
				<u-form-item label="content" prop="model2.content">
					<u-input placeholder="请输入content" v-model="model2.content"></u-input>
				</u-form-item>
				<u-form-item label="subTitle" prop="model2.subTitle">
					<u-input placeholder="请输入subTitle" v-model="model2.subTitle"></u-input>
				</u-form-item>
			</u-form>
		</u-modal>
		<view class="yjCardList" v-for="(item,index) in yjList">
			<uni-card :title="item.title" :is-shadow="true" :extra="item.extra" :subTitle='item.subTitle'>
				{{item.content}}
			</uni-card>
		</view>
		<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" description="如果选择保密会报错"
			@close="showSex = false" @select="sexSelect">
		</u-action-sheet>

		<uni-calendar ref="calendar" class="uni-calendar--hook" :clear-date="true" :date="model1.userInfo.date"
			:insert="model1.userInfo.insert" :lunar="model1.userInfo.lunar" :startDate="model1.userInfo.startDate"
			:endDate="model1.userInfo.endDate" :range="model1.userInfo.range" @confirm="confirm" @close="close" />
		<u-button type="primary" @click="submit">提交</u-button>
	</view>
</template>

<script>
	//引入扫码的方法
	import qrcode from "./qrcode.js";
	import yjSignature from '../demo/yj-signature.vue'
	import yjCard from '../demo/yj-card.vue'
	import permision from './permission.js'
	import config from "../../uni_modules/uview-ui/libs/config/config.js";
	const mpaasScanModule = uni.requireNativePlugin("Mpaas-Scan-Module");

	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)

		dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期

		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}
	export default {
		data() {
			return {
				startText: '',
				search: {
					code: ''
				},
				positionInfo: {
					address: '',
					longitude: '', //经度
					latitude: '', //纬度
				},
				avatarInfo: {
					url: require('../demo/img.png'),
					name: '张三'
				},
				popup: false,
				showPopup: false,
				title: "Hello",
				test: '123',
				showSex: false,
				timeupSecond: 10,
				model2: {
					title: '',
					extra: '',
					content: '',
					subTitle: '',
				},
				model1: {
					userInfo: {
						name: 'uView UI',
						sex: '',
						checkboxValue1: [],
						beizhu: '',
						radiovalue1: '李白',
						switch: false,
						fileList: [],
						lunar: true,
						range: true,
						insert: false,
						selected: [],
						timer: ''
					},
				},
				actions: [{
						name: '男',
					},
					{
						name: '女',
					},
					{
						name: '保密',
					},
				],
				checkboxList1: [{
						name: '苹果',
						disabled: false
					},
					{
						name: '香蕉',
						disabled: false
					},
					{
						name: '橙子',
						disabled: false
					}
				],
				radiolist1: [{
						name: '李白',
						disabled: false
					},
					{
						name: '韩信',
						disabled: false
					},
					{
						name: '马可波罗',
						disabled: false
					}, {
						name: '百里守约',
						disabled: false
					}
				],
				rules: {
					'userInfo.name': {
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.sex': {
						max: 1,
						required: true,
						message: '请选择男或女',
						trigger: ['blur', 'change']
					},
					'userInfo.checkboxValue1': {
						required: true,
						message: '请选择水果',
						trigger: ['blur', 'change']
					},
					'userInfo.beizhu': {
						required: true,
						message: '请输入备注信息',
						trigger: ['blur', 'change']
					},
					'userInfo.radiovalue1': {
						required: true,
						message: '请选择人物',
						trigger: ['blur', 'change']
					},
					'userInfo.switch': {
						type: 'boolean',
						required: true,
						message: '请选择开关',
						trigger: ['blur', 'change']
					},
					'userInfo.fileList': {
						required: true,
						message: '请上传文件',
						trigger: ['blur', 'change']
					},
					'userInfo.timer': {
						required: true,
						message: '请选择日期',
						trigger: ['blur', 'change']
					},
				},
				radio: '',
				switchVal: false,
				yjList: [{
					title: '主标题',
					extra: '标题额外信息',
					content: '内容',
					subTitle: '副标题',
				}],
			};
		},
		components: {
			yjCard,
			yjSignature
		},
		onLoad() {},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.form1.setRules(this.rules)
			this.model1.userInfo.date = getDate(new Date(), -30).fullDate
			this.model1.userInfo.startDate = getDate(new Date(), -60).fullDate
			this.model1.userInfo.endDate = getDate(new Date(), 30).fullDate
			this.model1.userInfo.selected = [{
					date: getDate(new Date(), -3).fullDate,
					info: '打卡'
				},
				{
					date: getDate(new Date(), -2).fullDate,
					info: '签到',
					data: {
						custom: '自定义信息',
						name: '自定义消息头'
					}
				},
				{
					date: getDate(new Date(), -1).fullDate,
					info: '已打卡'
				}
			]
		},
		methods: {
			startRecognize() {
				var options = {};
				options.engine = 'baidu';
				this.startText = "";
				console.log("开始语音识别：");
				plus.speech.startRecognize(options, (s) => {
					this.startText += s;
				}, (e) => {
					console.log("语音识别失败：" + e.message);
				});
				// setTimeout(this.stopRecognize(), 10000);
			},
			// stopRecognize() {
			// 	plus.speech.stopRecognize();
			// },
			// 机械二维码
			doScanQR: async function() {

				mpaasScanModule.mpaasScan({
						// 扫码识别类型，参数可多选，qrCode、barCode，不设置，默认识别所有
						'scanType': ['qrCode', 'barCode'],
						// 是否隐藏相册，默认false不隐藏
						'hideAlbum': false
					},
					(ret) => {
						uni.showModal({
							title: "弹窗标题",
							// 返回值中，resp_code 表示返回结果值，10：用户取消，11：其他错误，1000：成功
							// 返回值中，resp_message 表示返回结果信息
							// 返回值中，resp_result 表示扫码结果，只有成功才会有返回
							content: JSON.stringify(ret),
							showCancel: false,
							confirmText: "确定"
						})
					})
				// let status = await this.checkPermission();
				// if (status !== 1) {
				// 	return;
				// }
				// uni.scanCode({
				// 	success: res => {
				// 		let param = {
				// 			qrCode: res.result,
				// 		};
				// 		console.log(param, '121212')
				// 		console.log(res.scanType, '1111')
				// 		console.log(res.charSet, '2222222')
				// 		// service.requestPost('/operation/manual/doScanQR', param, successRes =>
				// 		// 	util.successResponse(successRes, success => {
				// 		// 			this.search.code = success.code;
				// 		// 		},
				// 		// 		fail => {}
				// 		// 	),
				// 		// 	failRes => util.failResponse(failRes)
				// 		// );
				// 	},
				// 	fail: err => {}
				// });
			},
			checkPermission: async function(code) {
				let status = permision.isIOS ? await permision.requestIOS('camera') : await permision.requestAndroid(
					'android.permission.CAMERA');

				if (status === null || status === 1) {
					status = 1;
				} else {
					this.$refs.modal.showModal({
						content: '需要相机权限',
						confirmText: '设置',
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					});
				}
				return status;
			},
			//机械代码变更
			qrCodechange: function(value) {
				setTimeout(() => {
					this.search.code = this.search.code.replace(/[^\w_]/g, '');
				}, 0);
			},
			getCurrentLocation() {
				let that = this //在uniapp中药定义一下this才能使用
				// uni.getLocation({
				// 	type: 'gcj02',
				// 	isHighAccuracy: true,
				// 	altitude: true,
				// 	success: function(res) {
				// 		console.log(res)
				// 		// that.positionInfo.longitude = res.longitude;
				// 		// that.positionInfo.latitude = res.latitude;
				// 		// that.loAcquire(that.positionInfo.longitude,         that.positionInfo.latitude)

				// 	}
				// });
				// plus.geolocation.getCurrentPosition(function(res){
				// 		console.log('Geolocation\nLatitude:' + res.coords.latitude + '\nLongitude:' + res.coords.longitude + '\nAltitude:' + res.coords.altitude);
				// 	}, function(e){
				// 		console.log('Geolocation error: ' + e.message);
				// 	} );
				console.log(Address, '1111111')
				plus.geolocation.getCurrentPosition(function(p) {
					console.log('Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords
						.longitude + '\nAltitude:' + p.coords.altitude);
				}, function(e) {
					console.log('Geolocation error: ' + e.message);
				}, {
					provider: 'gcj02'
				});

			},
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
			},
			confirmPopup() {
				this.showPopup = false
				console.log(JSON.parse(JSON.stringify(this.model2)), '提交成功')
				this.yjList.push(this.model2)
				console.log(JSON.parse(JSON.stringify(this.yjList)))
				this.model2 = {}
			},
			cancelPopup() {
				this.showPopup = false
			},
			timeup() {
				//倒计时时间到触发事件
				uni.showToast({
					title: '时间到'
				})
				this.timeupSecond = 29
			},
			open() {
				this.$refs.calendar.open()
			},
			change(e) {
				console.log('change 返回:', e)
				// 模拟动态打卡
				if (this.model1.userInfo.selected.length > 5) return
				this.model1.userInfo.selected.push({
					date: e.fulldate,
					info: '打卡'
				})


			},
			confirm(e) {
				console.log('confirm 返回:', e)
				this.model1.userInfo.timer = e.range.after + ' ~ ' + e.range.before
				console.log(this.model1.userInfo.timer, '11112222')
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			},
			close() {
				console.log('弹窗关闭');
			},
			deletePic(event) {
				this.model1.userInfo.fileList.splice(event.index, 1)
			},
			async afterRead(event) {
				console.log(event, '121212')
				console.log(this.model1.userInfo.fileList, '222222222222')
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this.model1.userInfo.fileList.length
				lists.map((item) => {
					this.model1.userInfo.fileList.push({
						...item
					})
				})
				console.log(this.model1.userInfo, '44444444444444444444')
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this.model1.userInfo.fileList[fileListLen]
					this.model1.userInfo.fileList.splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}

			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
			switchChange(n) {
				this.model1.userInfo.switch = n
				this.$refs.form1.validateField('userInfo.switch')
			},
			checkboxChange(n) {
				console.log('change', n);
				this.model1.userInfo.checkboxValue1 = n
				this.$refs.form1.validateField('userInfo.checkboxValue1')
			},
			groupChange(n) {
				this.model1.userInfo.radiovalue1 = n
				this.$refs.form1.validateField('userInfo.radiovalue1')
			},
			submit() {
				this.$refs.form1.validate().then(res => {
					uni.$u.toast('校验通过')
					console.log(JSON.parse(JSON.stringify(this.model1.userInfo)))
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			sexSelect(e) {
				console.log('1111', e)
				this.model1.userInfo.sex = e.name
				this.$refs.form1.validateField('userInfo.sex')
			},

			scanCode() {
				uni.chooseImage({
					sizeType: ["original"],
					count: 1,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]; // 获取到二维码图片的链接
						qrcode.decode(tempFilePaths); // 解析二维码图片
						// let that = this
						qrcode.callback = async (res1) => {
							// 解析失败返回 error decoding QR Code
							if (res1 == "error decoding QR Code") {
								uni.showToast({
									title: "二维码解析失败",
									duration: 2000,
									icon: "none",
								});
							} else {
								this.test = res1
								// console.log('我扫描成功了'+ this.test,+'这个是res1'+res1)
								uni.showToast({
									title: `'我扫描成功了'+ ${this.test},+'这个是res1'+${res1}`,
									duration: 2000,
									icon: "none",
								});
								//扫码成功 res1就是扫描二维码的结果在这里写扫码成功的逻辑
							}
						};
					},
				});
				// #ifdef MP-WEIXIN
				// 允许从相机和相册扫码
				uni.scanCode({
					scanType: ["qrCode"],
					success: (res) => {
						if (res.result) {
							const val = res.result;
							console.log(val)
							uni.navigateTo({
								url: `../msg/msg?code=${val}`
							})

						} else {
							console.log('请重新扫描');
							return false;
						}
					},
					fail: (res) => {
						console.log('未识别到二维码');
					}
				})
				// #endif   
			},
		},
	};
</script>

<style scoped>
	.popup_wrap {
		background-color: #fff;
		width: 80%;
		height: 300px;
	}
</style>
