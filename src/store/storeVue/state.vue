<template>
	<div>
		<div>
			<h1 style="color: red">State:</h1>
			<h5 v-for="(i, index) in $store.state" :key="index">
				{{ index }}: {{ i }}
			</h5>
		</div>
	</div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex";

export default {
	created() {
		console.log(this.$store.getters.sumWithRootCount);
	},
	computed: {
		...mapState({
			count1: (state) => state.count1,
			count2: (state) => state.count2,
			actionA: (state) => state.actionA,
			actionB: (state) => state.actionB,
			moduleA: (state) => state.ModuleA.a,
		}),
	},
	data() {
		return {
			getter: this.$store.getters.doneTodos,
		};
	},
};
</script>