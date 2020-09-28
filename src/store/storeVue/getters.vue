<template>
	<div>
		<div>
			<h1 style="color: red">State:</h1>
			<h5 v-for="(i, index) in $store.state" :key="index">
				{{ index }}: {{ i }}
			</h5>
		</div>

		<div>
			<h1 style="color: red">Getters:</h1>
			{{ countAdd }} {{ getter }}
		</div>
	</div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapGetters, mapState } from "vuex";

export default {
	created() {
		console.log(this.$store.getters.sumWithRootCount);
	},
	computed: {
		...mapGetters(["doneTodos", "countAdd"]),
	},
	data() {
		return {
			getter: this.$store.getters.doneTodos,
		};
	},
};
</script>