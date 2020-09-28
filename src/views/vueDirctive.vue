<template>
	<div>
		<div id="top"></div>
		<div class="parent">
			<div class="son"></div>
		</div>

		<div class="overview">
			<ul class="one">
				<li
					class="computer_room"
					v-for="(item, index) in 6"
					:key="index"
					@click="choose(index)"
					:class="{ active: current === index }"
					v-ripple="'rgba(000, 000, 255, 0.35)'"
				>
					{{ item }}
				</li>
			</ul>
			<el-select
				class="remoteSelect"
				v-scroll="handleScroll"
				v-model="value"
				clearable
				filterable
				placeholder="请选择"
				id="scroll"
				v-show="show"
				v-hotkey="{
					esc: onClose,
					'ctrl+enter': onShow,
				}"
			>
				<el-option
					v-for="item in list"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				></el-option>
			</el-select>

			<!-- focus -->
			<input type="text" v-focus />

			<!-- 波纹ripple -->
			<div
				@click="play()"
				v-ripple="'rgba(000, 000, 255, 0.35)'"
				class="button is-primary"
			>
				This is a button
			</div>

			<!-- 后缀省略号clampy + 随机字dummy（dummy必须在前面） -->
			<p v-dummy="100" v-clampy="3"></p>
		</div>
		<el-button
			style="display: block; margin: 0 auto"
			type="warning"
			v-scroll-to="{
				el: '#bottom', // 滚动的目标位置元素
				container: 'body', // 可滚动的容器元素
				duration: 500, // 滚动动效持续时长（毫秒）
				easing: 'linear', // 动画曲线
			}"
			>点击此可到达指定元素位置</el-button
		>

		<!-- clipboard点击复制文本 -->
		<el-button
			v-ripple="'rgba(000, 000, 255, 0.35)'"
			type="success"
			v-dummy="5"
			id="copy"
			v-clipboard="copyfn"
		></el-button>

		<!-- 除img标签dummy生成自定义个数的单词 v-ripple生成点波纹效果-->
		<p v-ripple="'rgba(000, 000, 255, 0.35)'" v-dummy="20"></p>
		<!-- img标签dummy生成一个400X200的图片 v-click-outside点击外部隐藏该节点 v-tooltip生成提示（类似title但是可以自定义位置pos）-->
		<img
			v-dummy="'400x200'"
			v-show="Outside"
			v-click-outside="onClickOutside"
			v-tooltip="{
				content: 'v-tooltip生成提示（类似title但是可以自定义位置pos）',
				color: 'red',
				bgColor: 'red',
				pos: 'top',
			}"
		/>

		<!-- css生成的波纹效果 -->
		<div class="container text-center">
			<el-button type="danger" class="btn btn-default ripple btn-lg"
				>Button with very long content</el-button
			>
			<!-- v-money生成前后缀 小数点 -->
			<input v-model.lazy="price" v-money="money" />
		</div>

		<!-- 图片懒加载 v-lazy -->
		<img v-lazy="pic" />
		<img v-lazy="pic" />
		<img v-lazy="pic" />

		<el-button
			style="display: block; margin: 0 auto"
			type="warning"
			id="bottom"
			v-scroll-to="{
				el: '#top', // 滚动的目标位置元素
				container: 'body', // 可滚动的容器元素
				duration: 500, // 滚动动效持续时长（毫秒）
				easing: 'linear', // 动画曲线
			}"
			>点击此可到达指定元素位置</el-button
		>
	</div>
</template>

<script>
export default {
	data() {
		return {
			audioUrl: require("../assets/02. 三葉の通学.mp3"),
			current: 0,
			// 渲染列表，限制在20个以内
			list: [],
			focused: false,
			// 请求获取的列表，数据量过大时不能直接渲染，会卡顿
			allList: [
				{ value: "选项1", label: "黄金糕1" },
				{ value: "选项2", label: "黄金糕2" },
				{ value: "选项3", label: "黄金糕3" },
				{ value: "选项4", label: "黄金糕4" },
				{ value: "选项5", label: "黄金糕5" },
				{ value: "选项6", label: "123" },
			],
			pic:
				"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1597743252&di=e3b5d3465b9eeeab0f51e14d343848a3&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
			show: true,
			Outside: true,
			count: 123,
			value: "Copy to clipboard",
			pageIndex: 0,
			blurConfig: {
				isBlurred: false,
				opacity: 0.3,
				filter: "blur(2px)",
				transition: "all .3s linear",
			},
			money: {
				masked: false,
				prefix: "Ω ",
			},
		};
	},
	created() {
		this.list = this.allList.splice(0, 20);
	},
	methods: {
		play() {
			this.audio = new Audio();
			this.audio.src = this.audioUrl;
			let playPromise;
			playPromise = this.audio.play();
		},
		choose(index) {
			this.current = index;
		},
		handleScroll(param) {
			if (param) {
				// 请求下一页的数据
				if (this.list.length < this.allList.length) {
					this.list = this.allList.splice(
						this.list.length,
						this.list.length + 20
					);
				}
			}
		},
		onClose() {
			this.show = false;
		},
		onShow() {
			this.show = true;
		},
		onClickOutside() {
			this.Outside = false;
		},
		copyfn() {
			return document.getElementById("copy").innerText;
		},
	},
};
</script>

<style lang="scss">
.parent {
	width: 300px;
	height: 300px;
	background: green;
	margin: 0 auto;
	position: relative;
	// display: flex;justify-content: center;align-items: center;
}
.son {
	width: 100px;
	height: 100px;
	background: #555;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	// position: relative;top: 50%;left: 50%;transform: translate(-50%,-50%);
}
.ripple {
	position: relative;
	//隐藏溢出的径向渐变背景
	overflow: hidden;
}

.ripple:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	pointer-events: none;
	//设置径向渐变
	background-image: radial-gradient(circle, black 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-position: 50%;
	transform: scale(10, 10);
	opacity: 0;
	transition: transform 0.6s, opacity 0.5s;
}

.ripple:active:after {
	transform: scale(0, 0);
	opacity: 0.9;
	//设置初始状态
	transition: 0s;
}
.overview {
	width: 100%;
	background: cyan;
	float: left;
	.one {
		width: 150px;
		background: red;
		float: left;
		.computer_room {
			text-align: center;
			cursor: pointer;
			display: block;
			font-size: 16px;
			color: #ffffff;
			line-height: 38px;
			background: blue;
		}
		.active {
			background: palevioletred;
		}
		.computer_room:hover {
			background: palevioletred;
		}
	}
	.two {
		width: 150px;
		height: 100%;
		background: yellow;
		float: left;
		.computer_room {
			line-height: 38px;
			text-align: center;
			cursor: pointer;
			display: block;
			font-size: 16px;
			color: #ffffff;
			width: 100%;
			height: 38px;
			background: blue;
		}
		.active {
			background: palevioletred;
		}
		.computer_room:hover {
			background: palevioletred;
		}
	}
}
</style>
