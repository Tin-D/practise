<template>
	<div>
		<div>
			<h1 style="color: red">State:</h1>
			<h5 v-for="(i, index) in $store.state" :key="index">
				{{ index }}: {{ i }}
			</h5>
		</div>

		<div>
			<h1 style="color: red" @click="Mutations1()">Mutations1:</h1>
			{{ count1 }}
			<h1 style="color: red" @click="Mutations2()">Mutations2:</h1>
			{{ count2 }}
		</div>
	</div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapMutations, mapState } from "vuex";

export default {
	created() {
		this.$store.commit({
			type: "increments",
			a: 10,
		});
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
	methods: {
		...mapMutations([
			"increments", // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

			// `mapMutations` 也支持载荷：
			"incrementBy", // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
		]),
		Mutations1() {
			this.increments({ a: 10 });
		},
		Mutations2() {
			this.incrementBy();
		},
	},
};
</script>