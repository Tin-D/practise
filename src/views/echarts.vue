<template>
	<div class="allow" style="overflow: auto">
		<el-row>
			<div id="myChart" style="width: 100%; height: 400px"></div>
		</el-row>
		<br /><br />
	</div>
</template>

<script>
import dayjs from "dayjs";
import echarts from "echarts";

export default {
	data() {
		return {
			power: {
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 0),
				},
				title: {
					text: "设备资源容量分析",
				},
				dataZoom: [
					{
						type: "slider",
						show: true,
						xAxisIndex: [0],
						bottom: 0,
						start: 0,
						end: 100,
					},
					{
						type: "inside",
					},
				],
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "cross",
						label: {
							backgroundColor: "#6a7985",
						},
					},
					formatter: (params) => {
						const fistTime = params[0]; // 第一组数据的时间
						const date = new Date(fistTime.axisValue);
						let M = date.getMonth() + 1; // 获取月
						M = M > 9 ? M : "0" + M; // 如果分钟小于10,则在前面加0补充为两位数字
						let day = date.getDate(); // 获取日期
						day = day > 9 ? day : "0" + day; // 如果小时数字小于10,则在前面加0补充为两位数字
						let h = date.getHours(); // 获取小时
						h = h > 9 ? h : "0" + h; // 如果小时数字小于10,则在前面加0补充为两位数字
						let Min = date.getMinutes(); // 获取分
						Min = Min > 9 ? Min : "0" + Min; // 如果分钟小于10,则在前面加0补充为两位数字
						let s = date.getSeconds(); // 获取秒
						s = s > 9 ? s : "0" + s; // 如果秒数小于10,则在前面加0补充为两位数字
						let res =
							"<p>" +
							M +
							"月" +
							day +
							"日 " +
							h +
							":" +
							Min +
							":" +
							s +
							"</p>";
						for (let i = 0; i < params.length; i++) {
							res +=
								'<div><span class="circle" style="background:' +
								params[i].color +
								';"></span>' +
								"<span>" +
								params[i].seriesName +
								":" +
								params[i].data +
								" ℃</span></div>";
						}
						return res;
					},
				},
				legend: {
					data: [
						"温度",
						"温度设定值",
						"温度读取值",
						"温度回风口实测值",
						"温度出风口实测值",
					],
				},
				toolbox: {
					show: true,
					feature: {
						dataView: { readOnly: true },
						magicType: { type: ["line", "bar", "stack"] },
						restore: {},
						saveAsImage: {},
					},
				},
				grid: {
					left: "1%",
					right: "6%",
					bottom: "3%",
					containLabel: true,
				},
				xAxis: {
					name: "时间",
					type: "category",
					boundaryGap: false,
					data: [1, 2, 3, 4, 5, 3],
				},
				yAxis: {
					name: "温度（℃）",
					axisLabel: {
						formatter: "{value}(℃)",
					},
					type: "value",
				},
				series: [
					{
						name: "温度",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [10, 22, 32, 41, 66],
					},
					{
						name: "温度设定值",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [15, 32, 36, 40, 62],
					},
					{
						name: "温度读取值",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [13, 26, 37, 45, 61],
					},
					{
						name: "温度回风口实测值",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [14, 12, 42, 46, 76],
					},
					{
						name: "温度出风口实测值",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [15, 29, 37, 46, 67],
					},
				],
			},
		};
	},
	created() {
		const a = new Array(100).fill({}).map((i, index) => ({
			time: this.renderDateTime(new Date(1605058612000 + index * 45000)),
			voltage: 12.6,
		}));
		a[2].voltage = 12.3;
		for (let i in a) {
			if (i > 0 && i <= 30) {
                a[i].voltage = (a[i - 1].voltage - this.random(0.01, 0.1, 2)).toFixed(1);
			} else if (i > 30 && i <= 50) {
                a[i].voltage = (a[i - 1].voltage - this.random(0.01, 0.05, 2)).toFixed(1);
            } else if (i > 50 && i <= 80) {
                a[i].voltage = (a[i - 1].voltage - this.random(0.01, 0.03, 2)).toFixed(1);
            }
        }
		if (this.power.xAxis.data.length > 30) {
			this.power.dataZoom[0].end = 30;
		}
		setInterval(() => {
			this.power.xAxis.data.push(2);
		}, 2000);
	},
	methods: {
		random(start, end, fixed = 0) {
			let differ = end - start;
			let random = Math.random();
			return (start + differ * random).toFixed(fixed);
		},
		renderDateTime(value, defaultValue = null) {
			if (!value) {
				return defaultValue;
			}
			return dayjs(value).format("YYYY-MM-DD HH:mm:ss");
		},
		powerLine() {
			this.$nextTick(() => {
				let myChart = echarts.init(document.getElementById("myChart"));
				myChart.setOption(this.power);
				window.addEventListener("resize", function () {
					myChart.resize();
				});
				// el-tab-pane初始高度，显示滚动条
				// const tabHeight = document.body.clientHeight -
				//     document.getElementsByClassName('el-header')[0].offsetHeight -
				//     document.getElementById('page').offsetHeight -
				//     document.getElementById('form').offsetHeight - 50;
				// document.getElementsByClassName('allow')[0].style.height = tabHeight + 'px';
			});
		},
		listener() {
			this.$nextTick(() => {
				const tabHeight =
					document.body.clientHeight -
					document.getElementsByClassName("el-header")[0]
						.offsetHeight -
					document.getElementById("page").offsetHeight -
					document.getElementById("form").offsetHeight -
					50;
				document.getElementsByClassName("allow")[0].style.height =
					tabHeight + "px";
			});
		},
	},
	mounted() {
		this.powerLine();
		// 浏览器高度变化，监听显示滚动条
		// window.addEventListener('resize', this.listener);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.listener);
	},
};
</script>
