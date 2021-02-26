<template>
	<div class="login">
		user:
		<input type="text" v-model="user" />
		password:
		<input type="password" v-model="pass" />
		<button @click="login">登录</button>
		<dialog ref="open" class="dialog a-wobble">
			<span
				span
				style="cursor: pointer;color:black;position:absolute;right:2px;top:2px;"
				@click="close"
			>X</span>
			账号密码错误!
			<button class="button" @click="close">确定</button>
		</dialog>

		<button @click="ring">震铃</button>
		<input type="text" v-model="a" />
		<div id="animate" :class="a > 10.8 ? 'a-shake' : ''" :style="a > 10.8 ? 'background:red' : ''">震铃111</div>

		<!-- wow css -->
		<h1 class="animate__animated animate__rubberBand">An animated element</h1>

		<!-- nec css -->
		<ul class="m-demo">
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/1.jpg" alt />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/2.jpg" alt />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/3.jpg" alt />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/4.jpg" alt />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/5.jpg" alt />
				</a>
			</li>
		</ul>
		<ul class="m-demo m-demo-1">
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/1.jpg" alt />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/2.jpg" alt />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/3.jpg" alt />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/4.jpg" alt />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://nec.netease.com/img/m/5.jpg" alt />
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import "../assets/animation.css";
export default {
	name: "Index",
	data() {
		return {
			user: "1",
			pass: "123",
			a: 10,
		};
	},
	methods: {
		login() {
			if (this.user === "1" && this.pass === "123") {
				this.$router.push("/welcome");
			} else {
				this.$refs.open.open = true;
			}
		},
		close() {
			this.$refs.open.open = false;
		},
		ring() {
			let odiv = document.getElementById("animate");
		},
	},
};
</script>

<style scoped>
.login {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	background: cyan;
}
.dialog {
	border: 2px solid red;
	font-size: 18px;
	color: red;
	width: 300px;
}
.button {
	position: absolute;
	right: 5px;
	bottom: 2px;
}
/* 预览辅助样式 */
#animate {
	position: absolute;
	bottom: 20px;
	left: 50%;
	width: 280px;
	height: 100px;
	margin: -50px 0 0 -140px;
	border-radius: 5px;
	line-height: 100px;
	text-align: center;
	color: #fff;
	background: #71acb9;
}
/* 纯CSS3幻灯手风琴效果hover切换，默认初始收起  */
.m-demo {
	width: 650px;
	height: 250px;
	overflow: hidden;
}
.m-demo li {
	list-style: none;
	float: left;
	height: 100%;
	width: 120px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	-webkit-transition: width 0.5s ease-out;
	-moz-transition: width 0.5s ease-out;
	-ms-transition: width 0.5s ease-out;
	transition: width 0.5s ease-out;
}
.m-demo:hover li:not(:hover) {
	width: 50px;
}
.m-demo li:hover {
	width: 400px;
}
/* 初始展开  */
.m-demo-1 li {
	width: 50px;
}
.m-demo-1 li:first-child {
	width: 400px;
}
</style>
