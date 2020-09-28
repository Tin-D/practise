<template>
	<div>
		<span @click="$router.push({ path: '/asd', replace: true })">{{
			$store.state.actionB
		}}</span>
		<el-input
			type="primary"
			:value="message"
			@input="updateMessage"
		></el-input>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	created() {
		// 打开命名空间，在模块js里导出部分输入namespace: true, 并且在全局vuex里面重新命名 eg: moduleA: ModuleA
		console.log(this.$store.state);
		console.log(this.$route);
		this.$store.dispatch("someAction", { a: 111 });
		this.$store.getters.sumWithRootCount;
	},
	computed: {
		...mapState({
			message: (state) => state.actionB,
		}),
	},
	methods: {
		//
		updateMessage(e) {
			this.$store.commit("updateMessage", e);
		},
	},
};
</script>