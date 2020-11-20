<template>
	<div>
        <swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide>
				<img class="w-100" src="@/assets/images/1.jpeg" alt />
			</swiper-slide>
			<swiper-slide>
				<img class="w-100" src="@/assets/images/2.jpeg" alt />
			</swiper-slide>
			<swiper-slide>
				<img class="w-100" src="@/assets/images/3.jpeg" alt />
			</swiper-slide>
			<div
				class="swiper-pagination pagination-home text-right px-3 pb-1"
				slot="pagination"
			></div>
		</swiper>
		<!-- end of swiper -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			swiperOptions: {
				pagination: {
					el: ".pagination-home",
				},
			},
		};
	},
};
</script>

<style lang="scss">
@import "@/assets/scss/var.scss";

.pagination-home {
	.swiper-pagination-bullet {
		opacity: 1;
		border-radius: 0.1538rem;
		background: map-get($colors, "white");

		&.swiper-pagination-bullet-active {
			background: map-get($colors, "button");
		}
	}
}
</style>