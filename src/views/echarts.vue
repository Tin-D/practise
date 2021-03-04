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
import * as c from "@/assets/js/conm.js";
// * as ... 表示别名 这样的话就可以c.a(),c.b()函数了 等同于全部

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
				dataZoom: [{
                        type: 'slider',
                        show: true,
                        xAxisIndex: [0],
                        bottom: 0,
                        start: 0,
                        end: 100,
                    }, {
                        type: 'inside',
                    }],
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
						myFull: {
							show: true,
							title: "全屏查看",
							icon:
								"M981.333333 682.666667c-25.6 0-42.666667 17.066667-42.666666 42.666666v192c0 12.8-8.533333 21.333333-21.333334 21.333334H725.333333c-25.6 0-42.666667 17.066667-42.666666 42.666666s17.066667 42.666667 42.666666 42.666667h192c59.733333 0 106.666667-46.933333 106.666667-106.666667V725.333333c0-25.6-17.066667-42.666667-42.666667-42.666666zM298.666667 938.666667H106.666667c-12.8 0-21.333333-8.533333-21.333334-21.333334V725.333333c0-25.6-17.066667-42.666667-42.666666-42.666666s-42.666667 17.066667-42.666667 42.666666v192C0 977.066667 46.933333 1024 106.666667 1024H298.666667c25.6 0 42.666667-17.066667 42.666666-42.666667s-17.066667-42.666667-42.666666-42.666666zM917.333333 0H725.333333c-25.6 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666666h192c12.8 0 21.333333 8.533333 21.333334 21.333334V298.666667c0 25.6 17.066667 42.666667 42.666666 42.666666s42.666667-17.066667 42.666667-42.666666V106.666667C1024 46.933333 977.066667 0 917.333333 0zM42.666667 341.333333c25.6 0 42.666667-17.066667 42.666666-42.666666V106.666667c0-12.8 8.533333-21.333333 21.333334-21.333334H298.666667c25.6 0 42.666667-17.066667 42.666666-42.666666s-17.066667-42.666667-42.666666-42.666667H106.666667C46.933333 0 0 46.933333 0 106.666667V298.666667c0 25.6 17.066667 42.666667 42.666667 42.666666z",
							onclick: (e) => {
								let element = document.getElementById(
									"myChart"
								);

								let isFullscreen =
									document.fullScreenElement || //W3C
									document.msFullscreenElement || //IE
									document.mozFullScreenElement || //火狐
									document.webkitFullscreenElement || //谷歌
									false;

								if (!isFullscreen) {
									c.a();
									element.style.background = "#fff";
									if (element.requestFullscreen) {
										element.requestFullscreen();
									} else if (element.mozRequestFullScreen) {
										element.mozRequestFullScreen();
									} else if (
										element.webkitRequestFullscreen
									) {
										element.webkitRequestFullscreen();
									} else if (element.msRequestFullscreen) {
										element.msRequestFullscreen();
									}
								} else {
									c.b();
									if (document.exitFullscreen) {
										document.exitFullscreen();
									} else if (document.msExitFullscreen) {
										document.msExitFullscreen();
									} else if (document.mozCancelFullScreen) {
										document.mozCancelFullScreen();
									} else if (
										document.webkitCancelFullScreen
									) {
										document.webkitCancelFullScreen();
									}
								}

								// const element = document.getElementById('myChart');
								// if (element.requestFullscreen) {
								//     document.getElementById(
								//         "myChart"
								//     ).style.background = "#fff";
								//     // HTML W3C 提议
								//     element.requestFullscreen();
								// } else if (element.msRequestFullscreen) {
								//     // IE11
								//     element.msRequestFullscreen();
								// } else if (element.webkitRequestFullScreen) {
								//     // Webkit (works in Safari5.1 and Chrome 15)
								//     element.webkitRequestFullScreen();
								// } else if (element.mozRequestFullScreen) {
								//     // Firefox (works in nightly)
								//     element.mozRequestFullScreen();
								// }
								// // 退出全屏
								// if (element.exitFullscreen) {
								//     document.exitFullscreen();
								// } else if (element.msExitFullscreen) {
								//     document.msExitFullscreen();
								// } else if (element.webkitRequestFullScreen) {
								//     document.webkitCancelFullScreen();
								// } else if (element.mozCancelFullScreen) {
								//     document.mozCancelFullScreen();
								// }
							},
						},
						myPrint: {
							show: true,
							title: "打印",
							icon:
								"M960.520474 190.127227 838.545799 190.127227 838.545799 91.844249C838.545799 47.038835 815.760476 0.759695 770.955062 0.759695L283.596034 0.759695C238.790619 0.759695 189.366148 47.038835 189.366148 91.844249L189.366148 190.127227 94.030622 190.127227C49.254267 190.127227 0 236.604247 0 281.409661L0 579.261397C0 624.066811 49.254267 649.996081 94.030622 649.996081L189.338472 649.996081 189.338472 953.62925C189.338472 998.434664 238.762944 1023.997232 283.568358 1023.997232L770.956446 1023.997232C815.76186 1023.997232 838.547182 998.43328 838.547182 953.62925L838.547182 649.968405 960.521858 649.968405C1005.327272 649.968405 1029.077089 624.037751 1029.077089 579.233721L1029.077089 281.409661C1029.074321 236.604247 1005.325888 190.127227 960.520474 190.127227L960.520474 190.127227ZM243.466412 91.845633C243.466412 76.910495 268.688571 53.698968 283.596034 53.698968L770.984122 53.698968C785.91926 53.698968 784.474593 76.909111 784.474593 91.845633L784.474593 190.127227 243.466412 190.127227 243.466412 91.845633 243.466412 91.845633ZM784.44415 943.257818C784.44415 958.192956 772.711079 971.059343 757.775941 971.059343L270.361561 971.059343C255.426423 971.059343 243.466412 958.192956 243.466412 943.257818L243.466412 541.824611C243.466412 526.861798 255.426423 514.731582 270.361561 514.731582L757.777325 514.731582C772.712463 514.731582 784.445534 526.861798 784.445534 541.824611L784.445534 943.257818 784.44415 943.257818 784.44415 943.257818ZM973.810298 579.233721C973.810298 594.168859 975.483288 595.868141 960.520474 595.868141L838.545799 595.868141 838.545799 552.168367C838.545799 507.361569 815.760476 460.629933 770.955062 460.629933L283.596034 460.629933C238.790619 460.629933 189.366148 507.362953 189.366148 552.168367L189.366148 595.868141 94.030622 595.868141C79.124543 595.868141 54.100265 594.168859 54.100265 579.233721L54.100265 281.409661C54.100265 266.474523 79.124543 244.227491 94.030622 244.227491L960.520474 244.227491C975.455612 244.227491 973.811682 266.474523 973.811682 281.409661L973.811682 579.233721 973.810298 579.233721 973.810298 579.233721ZM706.255043 634.692858 327.153278 634.692858C312.219524 634.692858 300.089308 646.171313 300.089308 661.163186 300.089308 676.155059 312.219524 687.632131 327.153278 687.632131L706.255043 687.632131C721.220624 687.632131 733.320396 676.155059 733.320396 661.163186 733.320396 646.171313 721.21924 634.692858 706.255043 634.692858L706.255043 634.692858ZM706.255043 791.130575 327.153278 791.130575C312.219524 791.130575 300.089308 803.202672 300.089308 818.165486 300.089308 833.131067 312.219524 845.203164 327.153278 845.203164L706.255043 845.203164C721.220624 845.203164 733.320396 833.131067 733.320396 818.165486 733.320396 803.202672 721.21924 791.130575 706.255043 791.130575L706.255043 791.130575Z",
							onclick: (e) => {
								var canvas = document.querySelector(
									"#myChart canvas"
								);
								var dataUrl = canvas.toDataURL();
								this.doPrintByFrame(dataUrl);
							},
						},
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
					data: [1, 2, 3, 4, 5, 6],
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
						data: [10, 22, 32, 41, 66, 50],
					},
					{
						name: "温度设定值",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [15, 32, 36, 40, 62, 30],
					},
					{
						name: "温度读取值",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [13, 26, 37, 45, 61, 26],
					},
					{
						name: "温度回风口实测值",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [14, 12, 42, 46, 76, 20],
					},
					{
						name: "温度出风口实测值",
						type: "line",
						areaStyle: {},
						smooth: true,
						data: [15, 29, 37, 46, 67, 10],
					},
				],
			},
		};
	},
	created() {
		const a = new Array(10000).fill({}).map((i, index) => ({
			time: this.renderDateTime(new Date(1605058612000 + index * 45000)),
			voltage: 12.6,
		}));
		a[2].voltage = 12.3;
		for (let i in a) {
			if (i > 0 && i <= 30) {
				a[i].voltage = (
					a[i - 1].voltage - this.random(0.01, 0.1, 2)
				).toFixed(1);
			} else if (i > 30 && i <= 50) {
				a[i].voltage = (
					a[i - 1].voltage - this.random(0.01, 0.05, 2)
				).toFixed(1);
			} else if (i > 50 && i <= 80) {
				a[i].voltage = (
					a[i - 1].voltage - this.random(0.01, 0.03, 2)
				).toFixed(1);
			}
		}

		if (this.power.xAxis.data.length > 30) {
			this.power.dataZoom[0].end = 30;
		}
		setInterval(() => {
			this.power.xAxis.data.push(2);
			this.power.series[0].data.push(2);
			this.powerLine();
		}, 2000);
	},
	methods: {
		// 打印功能
		doPrintByFrame(canvasUrl) {
			//判断iframe是否存在，不存在则创建iframe
			var iframe = document.getElementById("print-iframe");
			const domPrint = document.createElement("img");
			domPrint.src = canvasUrl;
			if (!iframe) {
				iframe = document.createElement("IFRAME");
				var doc = null;
				iframe.setAttribute("id", "print-iframe");
				iframe.setAttribute(
					"style",
					"position:absolute;width:0px;height:0px;left:-500px;top:-500px;"
				);
				document.body.appendChild(iframe);
				doc = iframe.contentWindow.document;
				//这里可以自定义样式
				// doc.write("<LINK rel="stylesheet" type="text/css" href="css/print.css">");
				doc.body.appendChild(domPrint);
				doc.close();
				iframe.contentWindow.focus();
			}
			domPrint.onload = function () {
				iframe.contentWindow.print(); // 打印
				document.body.removeChild(iframe);
			};
		},
		// 打印功能
		doViewAndPrint(canvasUrl) {
			const domPrint = document.createElement("img");
			domPrint.src = canvasUrl;
			let page = window.open("", "_blank"); // 打开一个新窗口，用于打印
			page.document.body.appendChild(domPrint);

			domPrint.onload = function () {
				page.print(); // 打印
				page.close(); // 关闭打印窗口
			};
		},

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
				// 动态更新重绘时控制滑块不重置控制
				myChart.on("dataZoom", (event) => {
					if (event.batch) {
						// 鼠标滚轮缩放
						this.dataZoom = {
							start: event.batch[0].start,
							end: event.batch[0].end,
						};
						this.power.dataZoom[0].start = this.dataZoom.start;
						this.power.dataZoom[0].end = this.dataZoom.end;
					} else {
						// 滑块缩放
						this.dataZoom = {
							start: event.start,
							end: event.end,
						};
						this.power.dataZoom[0].start = this.dataZoom.start;
						this.power.dataZoom[0].end = this.dataZoom.end;
					}
				});
				// 动态加载数据重绘
				myChart.setOption(this.power, true);
				myChart.setOption({ value: "myChart" });
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

<style>
@media print {
	.noprn {
		display: none;
	}
}
</style>

