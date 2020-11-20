<template>
	<div>
		<div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
			<div class="d-flex flex-wrp">
				<div class="nav-item mb-3" v-for="n in 13" :key="n">
					<i class="sprite sprite-news"></i>
					<div class="py-2">爆料站</div>
				</div>
			</div>
			<div class="bg-light py-2 fz-sm">
				<i class="sprite sptite-arrow mr-1"></i>
				收起
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			newsCats: [
				{
					name: "热门",
					newsList: new Array(5).fill({}).map((v, index) => ({
						categoryName: "热门" + Number(index),
						title: "6yue2hao",
						data: "06/01",
					})),
				},
				{
					name: "新闻",
					newsList: new Array(5).fill({}).map((v, index) => ({
						categoryName: "新闻" + Number(index + 1),
						title: "6yue2hao",
						data: "06/01",
					})),
				},
				{
					name: "公告",
					newsList: new Array(5).fill({}).map((v, index) => ({
						categoryName: "公告" + Number(index + 1),
						title: "6yue2hao",
						data: "06/01",
					})),
				},
				{
					name: "活动",
					newsList: new Array(5).fill({}).map((v, index) => ({
						categoryName: "活动" + Number(index + 1),
						title: "6yue2hao",
						data: "06/01",
					})),
				},
				{
					name: "赛事",
					newsList: new Array(5).fill({}).map((v, index) => ({
						categoryName: "新闻" + Number(index + 1),
						title: "6yue2hao",
						data: "06/01",
					})),
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "@/assets/scss/var.scss";

.nav-icons {
	border-top: 1px solid $border-color;
	border-bottom: 1px solid $border-color;

	.nav-item {
		width: 25%;
		border-right: 1px solid $border-color;

		&:nth-child(4n) {
			border-right: none;
		}
	}
}
</style>
