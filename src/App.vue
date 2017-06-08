<template>
  <div id="app" v-cloak>
    <transition name="fade" mode="out-in">
    	<Happy></Happy>
    </transition>
  </div>
</template>

<script>
	import Happy from './components/happy'
	export default {
		name: 'app',
		components: {
			Happy
		}
	}

</script>

<style>
	* {
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	
	html {
		font-family: '微软雅黑', 'Source Sans Pro', 'Lucida Grande', sans-serif;
		/*        font-size: calc(100vw / 3.75);*/
	}
	
	html,
	body,
	div,
	dl,
	dt,
	dd,
	ul,
	ol,
	li,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	pre,
	form,
	fieldset,
	input,
	p,
	blockquote,
	th,
	td {
		margin: 0;
		padding: 0;
	}
	
	fieldset,
	img {
		border: none;
	}
	
	input,
	button,
	select,
	textarea {
		outline: none;
	}
	
	 ::placeholder {
		color: #999;
		font-size: .28rem;
	}
	
	textarea {
		resize: none;
	}
	
	li {
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .2s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}

</style>
