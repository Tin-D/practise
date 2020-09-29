<template>
	<div style="color: red; font-size: 50px">I'm BeforeRouteEnter 可在组件内设置</div>
</template>

<script>
export default {
	// 组件守卫
	beforeRouteEnter(to, from, next) {
		next(false);
	},
};
</script>

<style lang="sass" scoped>

</style>