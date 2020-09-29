<template>
	<div style="color: red; font-size: 50px">
		I'm beforeRouteLeave
		<el-button type="primary" @click="isSure = true">保存离开</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isSure: false,
		};
	},
	// 离开路由
	beforeRouteLeave(to, from, next) {
		if (this.isSure) {
			next();
		} else {
			if (confirm("are you sure leave?")) {
				next();
			} else {
				next(false);
			}
		}
	},
};
</script>

<style lang="sass" scoped>

</style>