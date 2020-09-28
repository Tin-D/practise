<template>
	<div>
		<div class="topbar bg-black py-2 px-4 d-flex ai-center">
			<img src="../assets/logo1.png" height="30" />
			<div class="px-3 flex-1">
				<div class="text-white mb-1">王者荣耀</div>
				<div class="text-grey-1 fz-xxs">团队成就更多</div>
			</div>
			<button type="button" class="btn bg-primary" @click="$router.push('/about')">立即下载</button>
		</div>
		<div class="bg-primary pt-3 pb-2">
			<div class="nav nav-inverse pb-1 jc-around">
				<div class="nav-item active">
					<router-link class="nav-link" tag="div" to="/">首页</router-link>
				</div>
				<div class="nav-item">
					<router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
				</div>
				<div class="nav-item">
					<router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import axios from "axios";
export default {};
</script>

<style lang='scss'>
.topbar {
	position: sticky;
	top: 0;
	z-index: 888888;
}
</style>