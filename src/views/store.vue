<template>
	<div>
		<div>
			<h1 style="color: red">State:</h1>
			{{ count1 }} {{ count2 }}
		</div>

		<div>
			<h1 style="color: red">Getters:</h1>
			{{ countAdd }}
		</div>

		<div>
			<h1 style="color: red" @click="increments({ a: 100 })">
				Mutations1:
			</h1>
			{{ count1 }}
			<h1 style="color: red" @click="incrementBy()">Mutations2:</h1>
			{{ count2 }}
		</div>
		<div>
			<h1 style="color: red" @click="getDataA({ a: 33 })">ActionsA:</h1>
			{{ actionA }}
			<h1 style="color: red" @click="getDataA({ a: 11 })">ActionsB:</h1>
			{{ actionB }}
			{{ moduleA }}
		</div>
	</div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapActions, mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
	created() {
		this.$store.commit({
			type: "increments",
			a: 10,
		});
		this.$store.dispatch({
			type: "getDataA",
			a: 16,
		});
		this.$store.dispatch({
			type: "getDataB",
			a: 33,
		});
		console.log(this.$store.getters.sumWithRootCount);
	},
	computed: {
		...mapState({
			count1: (state) => state.count1,
			count2: (state) => state.count2,
			actionA: (state) => state.actionA,
			actionB: (state) => state.actionB,
			moduleA: (state) => state.moduleA.a,
		}),
		...mapGetters(["doneTodos", "countAdd"]),
	},
	data() {
		return {
			getter: this.$store.getters.doneTodos,
		};
	},
	methods: {
		...mapMutations([
			"increments", // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

			// `mapMutations` 也支持载荷：
			"incrementBy", // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
		]),
		...mapActions([
			"getDataA", // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

			// `mapMutations` 也支持载荷：
			"getDataB", // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
		]),
	},
};
</script>