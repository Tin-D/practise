<template>
	<div>
		<canvas id="canvas"></canvas>
	</div>
</template>

<script>
export default {
	created() {
		var canvas = document.querySelector("#canvas");

		let context = canvas.getContext("2d");
		canvas.width = 500;
        canvas.height = 500;
        
	},
};
</script>

<style scoped>
</style>