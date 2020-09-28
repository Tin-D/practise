<template>
	<div>
		<h1 style="color: red">
			QUERY: <el-button @click="query">Go => QUERY</el-button>
		</h1>
		<h1 style="color: red">
			PARAMS: <el-button @click="params">Go => PARAMS</el-button>
		</h1>
		<h1 style="color: red">
			QUERY: <el-button @click="routerview">router-view</el-button>
		</h1>
		<div>
			<router-view></router-view>
			<router-view name="routerView"></router-view>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		query() {
			this.$router.push({
				path: "/query",
				query: {
					site: [1, 2],
				},
			});
		},
		params() {
			this.$router.push({
				name: "params", // 路由的名称
				params: {
					id: 10,
					site: 300,
				},
			});
		},
		routerview() {
			this.$router.push("/sf");
		},
	},
};
</script>

<style lang="scss" scoped>
</style>