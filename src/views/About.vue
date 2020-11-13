<template>
	<base-layout>
		<template #header>
			<h1>Here might be a page title</h1>
		</template>

		<!-- <p>A paragraph for the main content.</p>
		<p>And another one.</p>-->
		<slot></slot>

		<template #footer></template>
	</base-layout>
</template>

<script>
import Vue from "vue";
import BaseLayout from "./slot";
export default {
	provide() {
		return {
			foo: this.a,
		};
	},
	created() {
		// this.$data === data()钩子
		console.log(this.$data);
	},
	data() {
		return {
			a: "inject",
		};
	},
	components: {
		BaseLayout,
	},
	watch: {},
};
</script>
