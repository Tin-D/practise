<template>
	<div style="background:pink;">
		<div class="one" @click="oneo">1</div>
		<div class="two" @click="two">2</div>
		<!-- <div @click="log(1)" @click.capture="log(1)" style="background-color:#00f;" class="fatherBox">
			<div @click="log(2)" @click.capture.self="log(2)" style="background-color:#66f;">
				<div @click.self="log(3)" @click.capture="log(3)" style="background-color:#ccf;">
					<a
						@click.prevent="log(4)"
						@click.capture="log(4)"
						href="javascript: console.log('x');"
						style="background-color:#eef;"
					></a>
				</div>
			</div>
		</div>-->
		<div class="three">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: "welcome",
	methods: {
		oneo() {
			this.$router.push("/AAA");
		},
		two() {
			this.$router.push("/BBB");
		},
	},
};
</script>

<style scoped>
.one {
	width: 100px;
	height: 200px;
	background: red;
	margin-bottom: 50px;
}
.two {
	width: 100px;
	height: 200px;
	background: lightskyblue;
	margin-bottom: 50px;
}
.three {
	width: 500px;
	height: 300px;
	background: darkseagreen;
}
</style>
