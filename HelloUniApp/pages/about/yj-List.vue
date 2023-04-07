<template>
	<view class="yjList">
		
	</view>
</template>

<script>
	/**
	 * List 列表
	 * @property {String} title 标题文字
	 * @property {String} infoText 副标题
	 * @property {Number} infoType 副标题类型 0:警告
	 * @property {Array} bodyData 中央列表
	 * @property {Object} avatarInfo 中央右上头像信息
	 * @property {Number} actionsType 操作栏类型 0:两列可点击类 1:一列提示文字类
	 * @property {String} actionsText 操作栏一列类
	 * @event {Function} click 点击 Card 触发事件
	 */
	export default {
		name: 'yjList',
		props: {
			current: {
				type: Number,
				default: 0
			},
			colorIndex: {
				type: Number,
				default: 0
			},
			bodyData: {
				type: Array,
				default: () => {
					return [{
						label: '请组单号',
						value: 'QZ00100004',
					}, {
						label: '日期',
						value: '2023.02.11  10:00:00'
					}, {
						label: '制单人',
						value: '李白'
					}, {
						label: '物料类型',
						value: '2',
					}]
				}
			},
		},
		data() {
			return {
				
			}
		}
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
		}
	}
</script>

<style>
</style>
