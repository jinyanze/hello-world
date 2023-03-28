<template>
	<view class="">
		<yjCard :avatarInfo="avatarInfo" @cardCallback="cardCallback"></yjCard>
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="popup = true;">签名</view>
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="openMaterial = true;">选择材料</view>
		<yjMaterial :show="openMaterial" @confirmCallback="confirmCallback"></yjMaterial>
		<view class="" v-if="isShowCard" style="border: 1rpx solid black;">
			<u-swipe-action>
				<u-swipe-action-item :options="options1" @click="closeCard">
					<view class="swipe-action u-border-top u-border-bottom">
						<view class="swipe-action__content">
							<view class="" style="height: 80rpx;line-height: 80rpx;">
								物料一: 右键删除
							</view>
						</view>
					</view>
				</u-swipe-action-item>
			</u-swipe-action>
			<view>
				<view class="">
					111111111111
				</view>
				<view class="">
					222222222222
				</view>
			</view>
		</view>
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="getQrcode">生成二维码</view>
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="scanCode">扫码</view>
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="getImageInfo">获取图片信息</view>
		图片最后修改时间(拍摄时间)<uni-dateformat :date="date"></uni-dateformat>
		<yjGetUqrcode ref="yjGetUqrcode" :size="'100'" v-if="isShowQrcode" :qrCodeInfo="qrCodeInfo"
			:isVisibility="false" @getQrCodeUrl="getQrCodeUrl"></yjGetUqrcode>
		<u-popup :show="popup" mode="center" width="100%">
			<yjSignature @saved="savedSign" ref="signatureRef" @closed="closeSignPop"></yjSignature>
		</u-popup>
	</view>
</template>

<script>
	// 卡片
	import yjCard from './yj-card.vue';
	// 生成二维码
	import yjGetUqrcode from './yj-getUqrcode'
	// 签名
	import yjSignature from './yj-signature'
	// 选择材质
	import yjMaterial from './yj-material'
	// import localforage from 'localforage'

	//引入扫码的方法
	import qrcode from "./qrcode.js";
	export default {
		data() {
			return {
				avatarInfo: {
					url: require('./壁纸.png'),
					name: '张三'
				},
				popup: false,
				openMaterial: false,
				isShowCard: true,
				isShowQrcode: false,
				qrCodeInfo: {
					mechanicalCode: '这是机械代码',
					largeHanger: '这是大架号'
				},
				options1: [{
					text: '删除'
				}],
				date: null,
			}
		},
		components: {
			yjCard,
			yjSignature,
			yjMaterial,
			yjGetUqrcode
		},
		onLoad() {},
		methods: {
			// 获取图片信息
			getImageInfo() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					success: (res) => {
						// 图片最后修改时间
						this.date = res.tempFiles[0].lastModified;
					}
				});
			},
			// 扫码
			scanCode() {
				// uni.scanCode({
				// 	onlyFromCamera: true,
				// 	success: (res) => {
				// 		console.log(res.result)
				// 	}
				// });
				uni.chooseImage({
					sizeType: ["original"],
					count: 1,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]; // 获取到二维码图片的链接
						qrcode.decode(tempFilePaths); // 解析二维码图片
						// let that = this
						qrcode.callback = async (res1) => {
							// 解析失败返回 error decoding QR Code
							if (res1 == "error decoding QR Code") {} else {
								//扫码成功 res1就是扫描二维码的结果在这里写扫码成功的逻辑
								console.log('aaaa', this.decodeStr(res1));
							}
						};
					},
				});
			},
			// 解码中文乱码
			decodeStr(str) {
				var out, i, len, c;
				var char2, char3;
				out = "";
				len = str.length;
				i = 0;
				while (i < len) {
					c = str.charCodeAt(i++);
					switch (c >> 4) {
						case 0:
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 6:
						case 7:
							// 0xxxxxxx
							out += str.charAt(i - 1);
							break;
						case 12:
						case 13:
							// 110x xxxx 10xx xxxx
							char2 = str.charCodeAt(i++);
							out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
							break;
						case 14:
							// 1110 xxxx 10xx xxxx 10xx xxxx
							char2 = str.charCodeAt(i++);
							char3 = str.charCodeAt(i++);
							out += String.fromCharCode(((c & 0x0F) << 12) |
								((char2 & 0x3F) << 6) |
								((char3 & 0x3F) << 0));
							break;
					}
				}
				return out;
			},
			// 打开qrcode子组件
			getQrcode() {
				this.isShowQrcode = true;
				let qrcodeUrl = ''
				this.$nextTick(() => {
					qrcodeUrl = this.$refs.yjGetUqrcode.getQrcode();
				})
			},
			// 获得临时二维码图片链接
			getQrCodeUrl(res) {
				console.log('二维码临时图片地址', res);
			},
			closeCard() {
				this.isShowCard = false;
				console.log('删除卡片');
			},
			cardCallback(type) {
				console.log('卡片组件点击后事件', type);
			},
			savedSign(res) {
				this.popup = false;
				this.$nextTick(() => {
					this.$u.toast('保存成功')
				})
			},
			closeSignPop(error) {
				this.popup = false;
			},
			confirmCallback(res) {
				console.log('选择材质后', res);
				this.openMaterial = false;
			}
		}
	}
</script>

<style>
</style>