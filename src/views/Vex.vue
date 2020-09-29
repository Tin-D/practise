<template>
	 <transition name="slide">
		<vxe-table ref="xTable2" border="full" :height="height" :data.sync="tableData">
			<vxe-table-column type="checkbox" title="序号"></vxe-table-column>
			<vxe-table-column field="sex" title="Name"></vxe-table-column>
			<vxe-table-column field="age"></vxe-table-column>
			<vxe-table-column field="address" show-overflow="tooltip"></vxe-table-column>
		</vxe-table>
		<!-- 代理加分页 -->
		<vxe-grid
			border
			resizable
			:height="height"
			row-id="id"
			:pager-config="{pageSize: 10}"
			:proxy-config="tableProxy"
			:checkbox-config="{reserve: true}"
			:columns="tableColumn"
		></vxe-grid>
	 </transition>
</template>

<script>
import Axios from "axios";

export default {
	data() {
		return {
			height: document.documentElement.clientHeight / 2 - 9,
			tableProxy: {
				seq: true, // 启用动态序号代理
				props: {
					result: "results",
					total: "pageVO.sumTotal",
				},
				ajax: {
					// 任何支持 Promise API 的库都可以对接（fetch、jquery、axios、xe-ajax）
					query: (params) => this.godata(params),
				},
			},
			tableColumn: [
				{ type: "checkbox", width: 50 },
				{ type: "seq", width: 60 },
				{ field: "name", title: "Name" },
			],
			swiperOptions: {
				pagination: {
					el: ".pagination-home",
				},
			},
			tableData: new Array(1000).fill({}).map((a, index) => ({
				sex: index + 100,
				age: index,
				address:
					"自动跟随某个属性的变化去重新计算表格，和手动调用 recalculate 方法是一样的效果（对于通过某个属性来控制显示/隐藏切换时可能会用到）",
			})),
		};
	},
	methods: {
		async godata(params) {
			const { data } = await Axios.get(`/brand_model`);
			const page = params.page;
			const startIndex = (page.currentPage - 1) * page.pageSize;
			var rest = {
				results: data.slice(startIndex, startIndex + page.pageSize),
				pageVO: {
					sumTotal: data.length,
				},
			};
			return rest;
		},
	},
};
</script>