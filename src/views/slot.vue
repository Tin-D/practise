<template>
	<div class="container">
		<header>
			<slot name="header"></slot>
		</header>
        <slot></slot>
		<footer>
			<slot name="footer">I'm your father</slot>
		</footer>
	</div>
</template>