<template>
	<!-- md: 如有需要另加配置可以联系组件开发人员或自行前往对应中文文档查看 -->
	<view class="">
		<!-- 自定义卡片 start -->
		<yjCard :avatarInfo="avatarInfo" @cardCallback="cardCallback"></yjCard>
		<!-- 自定义卡片 end -->

		<!-- 手写签名板 start	md: 使用原生canvas及uniapp封装api完成-->
		<!--  -->
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="popup = true;">签名</view>
		<image :src="signatureUrl" mode=""></image>
		<u-popup :show="popup" mode="center" width="100%">
			<yjSignature @saved="savedSign" ref="signatureRef" @closed="closeSignPop"></yjSignature>
		</u-popup>
		<!-- 手写签名板 end -->

		<!-- 选择材料 start -->
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="openMaterial = true;">选择材料</view>
		<yjMaterial :show="openMaterial" @confirmCallback="confirmCallback"></yjMaterial>
		<!-- 选择材料 end -->

		<!-- 卡片左滑删除 start -->
		<view class="" v-if="isShowCard" style="border: 1rpx solid black;">
			<u-swipe-action>
				<u-swipe-action-item :options="options1" @click="closeCard">
					<view class="swipe-action u-border-top u-border-bottom">
						<view class="swipe-action__content">
							<view class="" style="height: 80rpx;line-height: 80rpx;">
								物料一: 右键删除
							</view>
							<view>
								<view class="">
									111111111111
								</view>
								<view class="">
									222222222222
								</view>
							</view>
						</view>
					</view>
				</u-swipe-action-item>
			</u-swipe-action>
		</view>
		<!-- 卡片左滑删除 end -->

		<!-- 生成二维码 start 	md: 使用uqrcodejs插件完成 中文文档: https://ext.dcloud.net.cn/plugin?id=1287 -->
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="getQrcode">生成二维码</view>
		<yjGetUqrcode ref="yjGetUqrcode" :size="'100'" v-if="isShowQrcode" :qrCodeInfo="qrCodeInfo"
			:isVisibility="false" @getQrCodeUrl="getQrCodeUrl"></yjGetUqrcode>
		<!-- 生成二维码 end -->

		<!-- 扫码 start		md: 使用支付宝原生扫码插件完成 中文文档: https://ext.dcloud.net.cn/plugin?id=2636 -->
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="scanCode">扫码</view>
		<!-- 扫码 end -->

		<!-- 获得图片最后修改时间 start 	md: 使用HTML5+引擎完成 中文文档: https://www.html5plus.org/doc/zh_cn/io.html -->
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="getImageInfo">获取图片信息</view>
		图片最后修改时间(拍摄时间)<uni-dateformat :date="date"></uni-dateformat>
		<!-- 获得图片最后修改时间 end -->

		<!-- 选择wbs start 	md: 使用ly-tree插件完成 中文文档: https://ext.dcloud.net.cn/plugin?id=1000 -->
		<view style="font-size: 40rpx;margin-left: 40rpx;" @click="showWBS=true">选择WBS</view>
		<u-popup class="wbspopup" :show="showWBS" @close="showWBS=false" @open="openWBS" mode="right">
			<view>
				<view class="" style="line-height: 80rpx;padding: 10rpx 40rpx;">
					名称查询
				</view>
				<view class="" style="width: 90%;margin-left: 5%;">
					<u-search :showAction="true" actionText="搜索" :animation="true" @custom="searchWBS"></u-search>
				</view>
				<!-- treeData: 树数据	props: 将接口返回的label对应映射成组件默认配置的label	 personId: 唯一key标识	filterNode: 搜索时触发的筛选方法-->
				<!-- handleNodeClick: 点击某一项后的回调方法 -->
				<ly-tree :tree-data="treeData" ref="tree" :props="props" node-key="personId" show-checkbox
					check-on-click-node check-only-leaf @check="handleCheck" @check-change="handleCheckChange"
					:filter-node-method="filterNode" @node-expand="handleNodeExpand" @node-click="handleNodeClick">
				</ly-tree>
			</view>
		</u-popup>
		<!-- 选择wbs end -->

		<!-- 懒加载列表 start 使用mescroll插件完成 中文文档: https://ext.dcloud.net.cn/plugin?id=343 -->
		<!-- <mescroll-body ref="mescrollRef" @init="mescrollInit" :fixed="true" :isLock="true" @down="downCallback"
			@up="upCallback" :optUp="optUp">
			<u-cell v-for='(item,index) in indexList' :title="`列表长度-${index + 1}`">
				<u-avatar slot="icon" shape="square" size="35" :src="item.url"
					customStyle="margin: -3px 5px -3px 0"></u-avatar>
			</u-cell>
		</mescroll-body> -->
		<!-- 懒加载列表 end -->
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

	//引入扫码的方法
	import qrcode from "./qrcode.js";

	// 懒加载列表
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";

	// 支付宝原生扫码组件
	var mpaasScanModule = uni.requireNativePlugin("Mpaas-Scan-Module")

	// 树结构ul
	import LyTree from '@/components/ly-tree/ly-tree.vue'

	export default {
		mixins: [MescrollMixin],
		data() {
			return {
				// 自定义卡片 start
				avatarInfo: {
					url: require('./img.png'),
					name: '张三'
				},
				// 自定义卡片 end

				// 手写签名板 start
				popup: false,
				signatureUrl: '',
				// 手写签名板 end

				// 选择材料 start
				openMaterial: false,
				// 选择材料 end

				// 卡片左滑删除 start
				isShowCard: true,
				options1: [{
					text: '删除'
				}],
				// 卡片左滑删除 end

				// 生成二维码 start
				isShowQrcode: false,
				qrCodeInfo: {
					mechanicalCode: '这是机械代码',
					largeHanger: '这是大架号'
				},
				// 生成二维码 end

				// 获得图片最后修改时间 start
				date: null,
				// 获得图片最后修改时间 end

				showWBS: true,
				ready: false,

				// 选择wbs 开始
				props: function() { // 如果想自定义函数渲染节点名称等，需要将props设置成返回配置对象的函数，否则如果props是一个对象（uni会将对象中的函数过滤掉），对象中的函数属性会被过滤掉
					return {
						// 这里的label就可以使用函数进行自定义的渲染了
						label(data, node) {
							return '节点' + node.data.personName;
						},
						// label: 'personName', // 指把数据中的‘personName’当做label也就是节点名称
						children: 'childs', // 指把数据中的‘childs’当做children当做子节点数据
					}
				},
				// 如果只是单纯的从数据中取某一个字段作为对应属性，props可以直接设置为对象
				// props: {
				//  label: 'personName', // 指把数据中的‘personName’当做label也就是节点名称
				//  children: 'childs' // 指把数据中的‘childs’当做children当做子节点数据
				// },
				treeData: [{
					personId: 1,
					personName: '一级 1',
					childs: [{
						personId: 11,
						personName: '二级 1-1',
						childs: [{
							personId: 111,
							personName: '三级 1-1-1'
						}]
					}]
				}, {
					personId: 2,
					personName: '一级 2',
					childs: [{
						personId: 21,
						personName: '二级 2-1',
						childs: [{
							personId: 211,
							personName: '三级 2-1-1'
						}]
					}, {
						personId: 22,
						personName: '二级 2-2',
						childs: [{
							personId: 221,
							personName: '三级 2-2-1'
						}]
					}]
				}, {
					personId: 3,
					personName: '一级 3',
					childs: [{
						personId: 31,
						personName: '二级 3-1',
						childs: [{
							personId: 311,
							personName: '三级 3-1-1'
						}]
					}, {
						personId: 32,
						personName: '二级 3-2',
						childs: [{
							personId: 321,
							personName: '三级 3-2-1'
						}]
					}]
				}],
				// 选择wbs end

				// 懒加载列表 start
				indexList: [],
				urls: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				],
				totalPage: 1,
				optUp: {
					offset: '200'
				},
				// 懒加载列表 end
			}
		},

		components: {
			yjCard,
			yjSignature,
			yjMaterial,
			yjGetUqrcode,
			LyTree
		},
		onLoad() {},
		methods: {
			// 自定义卡片 start
			cardCallback(type) {
				console.log('卡片组件点击后事件', type);
			},
			// 自定义卡片 end

			// 手写签名板 start
			savedSign(res) {
				this.popup = false;
				this.signatureUrl = res;
				this.$nextTick(() => {
					this.$u.toast('保存成功')
				})
			},
			closeSignPop(error) {
				this.popup = false;
			},
			// 手写签名板 end

			// 选择材料 start
			confirmCallback(res) {
				console.log('选择材质后', res);
				this.openMaterial = false;
			},
			// 选择材料 end

			// 卡片左滑删除 start
			closeCard() {
				this.isShowCard = false;
				console.log('删除卡片');
			},
			// 卡片左滑删除 end

			// 生成二维码 start
			getQrcode() {
				this.isShowQrcode = true;
				let qrcodeUrl = ''
				this.$nextTick(() => {
					qrcodeUrl = this.$refs.yjGetUqrcode.getQrcode();
				})
			},
			getQrCodeUrl(res) {
				console.log('二维码临时图片地址', res);
			},
			// 生成二维码 end

			// 扫码 start
			scanCode() {
				let flag = false;
				mpaasScanModule.mpaasScan({},
					(res) => {
						console.log('aaa', res);
					})
			},
			// 扫码 end

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
			// 获得图片最后修改时间 end

			// 选择wbs start
			handleCheck(obj) {
				// 只有在"点击"修改的指定节点会触发(也就是说这个方法只会触发一次)，obj中包含当前选中
				// obj: {
				// 	checkedKeys: [9, 5], // 当前选中节点的id数组
				// 	checkedNodes: [{...}, {...}], // 当前选中节点数组
				// 	data: {...}, // 当前节点的数据
				// 	halfCheckedKeys: [1, 4, 2], // 半选中节点的id数组
				// 	halfCheckedNodes: [{...}, {...}, {...}], // 半选中节点的数组
				// 	node: Node {...} // 当前节点实例
				// }
				console.log('handleCheck', obj);
			},
			handleCheckChange(obj) {
				// 只要节点的选中或半选中状态改变就触发（包括设置默认选中，点击选中/取消选中），其相关的所有父子节点都会触发（也就是说选中一个节点时，触发多次，父子节点的选中状态只要被修改就会触发）
				// obj: {
				// 	checked: true, // 节点是否选中
				// 	checkedall: false, // 当前树的所有节点是否全选中
				// 	data: {...}, // 节点数据
				// 	indeterminate: false, // 是否半选中
				// 	node: Node {...} // 节点实例
				// }
				console.log('handleCheckChange', obj);
			},
			filterNode(value, data) {
				if (!value) return true;
				return data.personName.indexOf(value) !== -1;
			},
			searchWBS(e) {
				this.$refs.tree.filter(e);
			},
			handleNodeClick(obj) {},
			handleNodeExpand(obj) {},
			// 选择wbs end
			
			// 懒加载列表 start
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
				this.loadmore()
			},
			downCallback() {
				this.indexList = [];
				this.totalPage = 1;
				this.loadmore();
				setTimeout(() => {
					this.mescroll.endByPage()
				}, 800)
			},
			upCallback() {
				this.totalPage += 1;
				this.loadmore();
				setTimeout(() => {
					this.mescroll.endByPage(15)
				}, 800)
			},
			loadmore() {
				for (let i = 0; i < 15; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			},
			// 懒加载列表 end


			// 解码中文乱码
			// decodeStr(str) {
			// 	var out, i, len, c;
			// 	var char2, char3;
			// 	out = "";
			// 	len = str.length;
			// 	i = 0;
			// 	while (i < len) {
			// 		c = str.charCodeAt(i++);
			// 		switch (c >> 4) {
			// 			case 0:
			// 			case 1:
			// 			case 2:
			// 			case 3:
			// 			case 4:
			// 			case 5:
			// 			case 6:
			// 			case 7:
			// 				// 0xxxxxxx
			// 				out += str.charAt(i - 1);
			// 				break;
			// 			case 12:
			// 			case 13:
			// 				// 110x xxxx 10xx xxxx
			// 				char2 = str.charCodeAt(i++);
			// 				out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
			// 				break;
			// 			case 14:
			// 				// 1110 xxxx 10xx xxxx 10xx xxxx
			// 				char2 = str.charCodeAt(i++);
			// 				char3 = str.charCodeAt(i++);
			// 				out += String.fromCharCode(((c & 0x0F) << 12) |
			// 					((char2 & 0x3F) << 6) |
			// 					((char3 & 0x3F) << 0));
			// 				break;
			// 		}
			// 	}
			// 	return out;
			// },
		}
	}
</script>

<style lang="less" scoped>
	.wbspopup {
		/deep/.u-transition {
			width: 70% !important;
		}
	}
</style>