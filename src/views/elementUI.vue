<template>
	<div>
		<div>
			<h1>el-select</h1>
			<el-select
				v-model="value"
				value-key="value"
				style="width: 100%"
				placeholder="请选择"
				multiple-limit="2"
				:collapse-tags="true"
				clearable
				multiple
				filterable
				allow-create
			>
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
				</el-option>
			</el-select>
			<h3>禁用</h3>
			<el-select disabled style="width: 100%" placeholder="请选择">
			</el-select>
		</div>
		<el-divider content-position="left"
			><b><i>防抖与节流</i></b></el-divider
		>
		<el-button type="success" id="debounce">防抖</el-button>

		<el-button type="warning" id="throttle">节流</el-button>
	</div>
</template>

<script>
export default {
	created() {},
	mounted() {
		let debounce = document.getElementById("debounce");
		debounce.addEventListener(
			"click",
			this.debounce(this.submit1, 2000),
			false
		);
		let throttle = document.getElementById("throttle");
		throttle.addEventListener(
			"click",
			this.throttle(this.submit2, 2000),
			false
		);
	},
	methods: {
		submit1(e) {
			//2.运行至此打印结果；
			console.log(this, e);
		},
		debounce(fn, timer) {
			let t = undefined || null;
			return function () {
				//判断t是否为真或假，是否为第一次点击，必须以!t或t来做判断，因为用参数形式去判断时可能会忘记填写产生会undefined，则使用布尔形式判断避免出错；
				let firstClick = !t;
				if (t) {
					//3.时间不超过timer持续点击则一直运行一下内容，清除定时器然后运行下面的定时器重新赋值timer；
					console.log("clearTimeout");
					clearTimeout(t);
				}
				if (firstClick) {
					//1.第一次点击后运行这里面的内容；
					console.log("firstClick");
					fn.apply(this, arguments);
				}
				t = setTimeout(() => {
					//4.点击后超过timer则运行以下内容，将t=null，再次点击循环进入第1步骤
					console.log("setTimeout");
					t = null;
				}, timer);
			};
		},

		submit2(e) {
			console.log(e, this);
		},
		throttle(fn, delay) {
			let begin = 0;
			return function () {
				let cur = new Date().getTime();
				// console.log(cur - begin);
				if (cur - begin > delay) {
					fn.apply(this, arguments);
					begin = cur;
				}
			};
		},
	},
	data() {
		return {
			options: [
				{
					value: "选项1",
					label: "黄金糕",
				},
				{
					value: "选项2",
					label: "双皮奶",
				},
				{
					value: "选项3",
					label: "蚵仔煎",
				},
				{
					value: "选项4",
					label: "龙须面",
				},
				{
					value: "选项5",
					label: "北京烤鸭",
				},
			],
			value: "",
		};
	},
};
</script>

<style lang="sass" scoped>
</style>