<template>
	<div>
		<div>{{ foo }}</div>
		<div>{{ card }}</div>
		<button @click="aaa">haha</button>
	</div>
</template>

<script>
export default {
	// inject: ["foo", "card"],
	inject: {
		foo: {
			from: "card",
			default: "aaa",
		},
		card: {
			from: "foo",
			default: "bbb",
		},
	},
	created() {
		this.$events.fire('fire', this.foo);
		console.log(this.card, this.foo);
	},
	methods: {
		aaa() {
			this.$parent.$parent.a = "test$parent";
			console.log(this.$parent.$parent.a);
		},
	},
	props: {
		tableProxy:{
			type:Object,
		},
	}
};
</script>