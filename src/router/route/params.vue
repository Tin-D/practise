<template>
	<div style="color: red; font-size: 100px">I'm Params</div>
</template>

<script>
export default {
	created() {
		console.log(this.$route);
	},
};
</script>

<style lang="scss" scoped>
</style>