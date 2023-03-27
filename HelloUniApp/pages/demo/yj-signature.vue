<template>
	<view style="">
		<!-- <view class="title">请在下面输入签名：</view> -->
		<canvas class="mycanvas" :style="{width:canvasWidth +'px'}" canvas-id="mycanvas" @touchstart="touchstart"
			@touchmove="touchmove" @touchend="touchend"></canvas>
		<view class="footer">
			<view class="left" @click="finish">保存</view>
			<view class="right" @click="closed">关闭</view>
			<view class="right" @click="clear">清除</view>
		</view>
	</view>
</template>

<script>
	// import service from '@/common/service.js';
	// import util from '@/common/util.js';
	var x = 20;
	var y = 20;
	export default {
		data() {
			return {
				ctx: '', //绘图图像
				points: [], //路径点集合 
				canvasWidth: '450'
			}
		},
		onLoad() {
			this.ctx = uni.createCanvasContext("mycanvas", this); //创建绘图对象

			//设置画笔样式
			this.ctx.lineWidth = 4;
			this.ctx.lineCap = "round"
			this.ctx.lineJoin = "round"
		},
		created() {
			const _this = this;
			this.ctx = uni.createCanvasContext("mycanvas", this); //创建绘图对象

			//设置画笔样式
			this.ctx.lineWidth = 4;
			this.ctx.lineCap = "round"
			this.ctx.lineJoin = "round"
		},
		methods: {
			//触摸开始，获取到起点
			touchstart: function(e) {
				let startX = e.changedTouches[0].x;
				let startY = e.changedTouches[0].y;
				let startPoint = {
					X: startX,
					Y: startY
				};
				this.points.push(startPoint);
				//每次触摸开始，开启新的路径
				this.ctx.beginPath();
			},

			//触摸移动，获取到路径点
			touchmove: function(e) {
				let moveX = e.changedTouches[0].x;
				let moveY = e.changedTouches[0].y;
				let movePoint = {
					X: moveX,
					Y: moveY
				};
				this.points.push(movePoint); //存点
				let len = this.points.length;
				if (len >= 2) {
					this.draw(); //绘制路径
				}

			},

			// 触摸结束，将未绘制的点清空防止对后续路径产生干扰
			touchend: function() {
				this.points = [];
			},

			/* ***********************************************
			#   绘制笔迹
			#	1.为保证笔迹实时显示，必须在移动的同时绘制笔迹
			#	2.为保证笔迹连续，每次从路径集合中区两个点作为起点（moveTo）和终点(lineTo)
			#	3.将上一次的终点作为下一次绘制的起点（即清除第一个点）
			************************************************ */
			draw: function() {
				let point1 = this.points[0]
				let point2 = this.points[1]
				this.points.shift()
				this.ctx.moveTo(point1.X, point1.Y)
				this.ctx.lineTo(point2.X, point2.Y)
				this.ctx.stroke()
				this.ctx.draw(true)
			},

			//清空画布
			clear: function() {
				let that = this;
				uni.getSystemInfo({
					success: function(res) {
						let canvasw = res.windowWidth;
						let canvash = res.windowHeight;
						that.ctx.clearRect(0, 0, canvasw, canvash);
						that.ctx.draw(true);
					},
				})
			},

			//完成绘画并保存到本地
			finish: function() {
				uni.canvasToTempFilePath({
					canvasId: 'mycanvas',
					fileType: 'png',
					quality: 1, //图片质量
					success: (res) => {
						let isH5 = false;
						/*#ifdef H5*/
						isH5 = true;
						var oA = document.createElement("a");
						oA.download = '签名'; // 设置下载的文件名，默认是'下载'
						oA.href = res.tempFilePath;
						document.body.appendChild(oA);
						oA.click();
						oA.remove();
						this.$emit('saved')
						/*#endif*/
						if (!isH5) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: () => {
									this.$emit('saved')
								}
							});
						}
					}
				})
			},

			dataURItoBlob: function(dataURI) {
				var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // mime类型
				var byteString = atob(dataURI.split(',')[1]); //base64 解码
				var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
				var intArray = new Uint8Array(arrayBuffer); //创建视图
				for (var i = 0; i < byteString.length; i++) {
					intArray[i] = byteString.charCodeAt(i);
				}
				return new Blob([intArray], {
					type: mimeString
				});
			},

			closed() {
				this.$emit('closed')
			}
		},
	}
</script>

<style>
	.title {
		height: 50upx;
		line-height: 50upx;
		font-size: 16px;
	}

	.mycanvas {
		/* width: 100%; */
		height: calc(100vh - 200upx);
		background-color: #ECECEC;
	}

	.footer {
		font-size: 16px;
		height: 150upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.left,
	.right {
		line-height: 100upx;
		height: 100upx;
		width: 200upx;
		text-align: center;
		font-weight: bold;
		color: white;
		border-radius: 5upx;
	}

	.left {
		background: #3A9AFC;
	}

	.right {
		background: #ECECEC;
		color: #8F8F94;
	}
</style>