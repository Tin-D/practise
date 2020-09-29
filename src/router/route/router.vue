<template>
	<div>
		<h1 style="color: red">
			QUERY: <el-button @click="query">Go => QUERY</el-button>
		</h1>
		<h1 style="color: red">
			PARAMS: <el-button @click="params">Go => PARAMS</el-button>
		</h1>
		<h1 style="color: red">
			RouterView: <el-button @click="routerview">router-view</el-button>
		</h1>
		<h1 style="color: green">
			beforeEnter: <el-button @click="beforeEnter">beforeEnter</el-button>
		</h1>
		<h1 style="color: green">
			beforeEach: <el-button @click="beforeEach">beforeEach</el-button>
		</h1>
		<h1 style="color: green">
			beforeRouteEnter:
			<el-button @click="beforeRouterEnter">beforeRouteEnter</el-button>
		</h1>
		<h1 style="color: green">
			beforeRouteLeave:
			<el-button @click="beforeRouteLeave">beforeRouteLeave</el-button>
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
				path: "query",
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
			this.$router.push("/routerView");
		},
		beforeEnter() {
			this.$router.push("/beforeEnter");
		},
		beforeEach() {
			this.$router.push("/beforeEach");
		},
		beforeRouteEnter() {
			this.$router.push("/beforeRouteEnter");
		},
		beforeRouteLeave() {
			this.$router.push("/beforeRouteLeave");
		},
	},
};
</script>

<style lang="scss" scoped>
</style>