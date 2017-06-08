<template>
    <div>
        <img src="~assets/nice1.jpg" alt="" id="rabbit">
        <div id="box">
        	<tween :value="number_"></tween>
        </div>
	</div>
</template>

<script>
	import tween from "./tween.vue"
	export default {
		data() {
			return {
				number_: 30000,


			}
		},
		mounted: function() {
			var me = this;

		},
		methods: {

		},
		components: {
			tween,
		}
	}

</script>

<style scoped>
	#box {
		overflow: auto;
		margin: 0 auto;
		text-align: center;
		font-size: 110px;
		color: #333;
	}
	
	#rabbit {
		position: absolute;
		top: 0;
		left: 30vw;
		z-index: -1;
		margin: 0 auto;
		width: 40vw;
	}

</style>
