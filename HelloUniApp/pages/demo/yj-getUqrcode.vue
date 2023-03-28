<template>
	<view class="">
		<canvas id="qrcode" canvas-id="qrcode" :class="{'noVisibility': !isVisibility}"
			:style="'width: '+ size + 'px;height: ' + size + 'px;'"></canvas>
	</view>
</template>

<script>
	// 需要依赖uqrcodejs插件,如果没有需要自己通过npm下载 	npm install uqrcodejs
	import UQRCode from 'uqrcodejs';
	export default {
		props: {
			// 需要生成的二维码信息
			qrCodeInfo: {
				type: Object
			},
			size: {
				type: String,
				default: '200'
			},
			isVisibility: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {
			getQrcode() {
				// 获取uQRCode实例			
				var qr = new UQRCode();
				// 设置二维码内容
				qr.data = JSON.stringify(this.qrCodeInfo);
				// 设置二维码大小，必须与canvas设置的宽高一致
				qr.size = this.size;
				// 调用制作二维码方法
				qr.make();
				// 获取canvas上下文
				var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
				// 设置uQRCode实例的canvas上下文
				qr.canvasContext = canvasContext;
				// 调用绘制方法将二维码图案绘制到canvas上
				qr.drawCanvas();

				// 将二维码转为临时图片地址并返回给父组件
				uni.canvasToTempFilePath({
					canvasId: 'qrcode',
					fileType: 'png',
					quality: 1, //图片质量
					success: (res) => {
						this.$emit('getQrCodeUrl', res.tempFilePath)
					}
				})
			}
		}
	}
</script>

<style>
	.noVisibility {
		position: absolute;
		top: -9999rpx;
		left: -9999rpx;
	}
</style>