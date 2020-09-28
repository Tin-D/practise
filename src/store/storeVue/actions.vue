<template>
	<div>
		<div>
			<h1 style="color: red">State:</h1>
			<h5 v-for="(i, index) in $store.state" :key="index">
				{{ index }} : {{ i }}
			</h5>
		</div>

		<div>
			<h1 style="color: red" @click="ActionsA({ a: 33 })">ActionsA:</h1>
			<div v-ripple="'rgba(000, 000, 255, 0.35)'" a="aa123" id="actionA">
				{{ actionA }}
			</div>
			<h1 style="color: red" @click="ActionsB({ a: 11 })">ActionsB:</h1>
			<div>
				<span id="actionB">{{ actionB }}</span>
				<span id="moduleA">{{ moduleA }}</span>
			</div>
		</div>
	</div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapActions, mapState } from "vuex";

export default {
	created() {
		this.$store.dispatch({
			type: "getDataA",
			a: 16,
		});
		this.$store.dispatch({
			type: "getDataB",
			a: 33,
		});
	},
	computed: {
		...mapState({
			actionA: (state) => state.actionA,
			actionB: (state) => state.actionB,
			moduleA: (state) => state.moduleA.moduleA,
		}),
	},
	methods: {
		...mapActions([
			"getDataA", // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

			// `mapMutations` 也支持载荷：
			"getDataB", // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
		]),
		ActionsA(a) {
			this.getDataA(a);
		},
		ActionsB(b) {
			this.getDataB(b);
		},
	},
	watch: {
		actionA: {
			handler(newVal, oldVal) {
				if (newVal !== oldVal && document.getElementById("actionA")) {
					// getAttribute：获取某一个属性的值；
					// setAttribute：建立一个属性，并同时给属性捆绑一个值；
					// createAttribute：仅建立一个属性；
					// removeAttribute：删除一个属性；
					// getAttributeNode：获取一个节点作为对象；
					// setAttributeNode：建立一个节点；
					// removeAttributeNode：删除一个节点；

					// 仅建立一个属性；
					let d = document.createAttribute("asd");
					// 建立一个属性，并同时给属性捆绑一个值；setAttribute
					document.getElementById("actionA").setAttribute("d", "wes");
					// 只是创建节点 并未赋值 setAttributeNode
					document.getElementById("actionA").setAttributeNode(d);

					//attributes可以获取一个对象中的一个属性，并且作为对象来调用，注意在这里要使用“[]” .name 和 .value可获取属性名和属性值
					document.getElementById("actionA").attributes["a"];
					document.getElementById("actionA").attributes["a"].name; // a
					document.getElementById("actionA").attributes["a"].value; // aa123
					document.getElementById("actionA").attributes["a"].nodeName; // a
					document.getElementById("actionA").attributes["a"]
						.nodeValue; // aa123
					//如果是直指标签为1
					// document.getElementById("actionA").attributes[1].nodeType; // 1
					//如果是直指属性为1
					// document.getElementById("actionA").attributes[1].attributes
					// 	.nodeType; // 2

					document.getElementById("actionA").style.color = "red";
					document.getElementById("actionA").style.fontSize =
						50 + "px";

					setTimeout(() => {
						// 删除一个属性
						document.getElementById("actionA")
							? document
									.getElementById("actionA")
									.removeAttribute("d")
							: null;

						document.getElementById("actionA").style.color = "#000";
						document.getElementById("actionA").style.fontSize =
							20 + "px";
					}, 2000);
				}
			},
			immediate: true,
		},
		actionB: {
			handler(newVal, oldVal) {
				if (newVal !== oldVal && document.getElementById("actionB")) {
					document.getElementById("actionB").style.color = "red";
					document.getElementById("actionB").style.fontSize =
						50 + "px";
					setTimeout(() => {
						document.getElementById("actionB").style.color = "#000";
						document.getElementById("actionB").style.fontSize =
							20 + "px";
					}, 2000);
				}
			},
			immediate: true,
		},
	},
};
</script>