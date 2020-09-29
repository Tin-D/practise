<template>
	<div style="color: red; font-size: 50px">I'm Params {{id}} + {{site}}</div>
</template>

<script>
export default {
	props: ['id', 'site']
};
</script>

<style lang="scss" scoped>
</style>