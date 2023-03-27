<template>
	<view class="content">
		<button @click="scanCode">扫描二维码</button>
		<view class="">
			{{test}}
		</view>
		<u-form labelPosition="left" :model="model1" :rules="rules" ref="form1" style="width: 90%;margin-left: 10px;"
			labelWidth="60">
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
				<u-upload :fileList="model1.userInfo.fileList" @afterRead="afterRead" @delete="deletePic" name="1" multiple :maxCount="10" :previewFullImage="true"></u-upload>
			</u-form-item>
		</u-form>
		<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" description="如果选择保密会报错"
			@close="showSex = false" @select="sexSelect">
		</u-action-sheet>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	//引入扫码的方法
	import qrcode from "./qrcode.js";

	export default {
		data() {
			return {
				title: "Hello",
				test: '123',
				showSex: false,
				model1: {
					userInfo: {
						name: 'uView UI',
						sex: '',
						checkboxValue1: [],
						beizhu: '',
						radiovalue1: '李白',
						switch: false,
						fileList: [],
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
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.sex': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择男或女',
						trigger: ['blur', 'change']
					},
					'userInfo.checkboxValue1': {
						type: 'array',
						required: true,
						message: '请选择水果',
						trigger: ['blur', 'change']
					},
					'userInfo.beizhu': {
						type: 'string',
						required: true,
						message: '请输入备注信息',
						trigger: ['blur', 'change']
					},
					'userInfo.radiovalue1': {
						type: 'string',
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
						type: 'array',
						required: true,
						message: '请上传文件',
						trigger: ['blur', 'change']
					},
				},
				radio: '',
				switchVal: false
			};
		},
		onLoad() {},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.form1.setRules(this.rules)
		},
		methods: {
			deletePic(event) {
				this.model1.userInfo.fileList.splice(event.index, 1)
			},
			async afterRead(event) {
				console.log(event,'121212')
				console.log(this.model1.userInfo.fileList,'222222222222')
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this.model1.userInfo.fileList.length
				lists.map((item) => {
					this.model1.userInfo.fileList.push({
						...item
					})
				})
				console.log(this.model1.userInfo,'44444444444444444444')
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

<style></style>
