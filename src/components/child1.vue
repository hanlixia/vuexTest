<template>
	<div>
		<h1>子组件child1</h1>
		<p><button @click="postData">点击传值给父元素</button></p>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				message : '子组件1的data'
			}
		},
		methods:{
			postData: function(){
				this.$emit("parentEvent",message)
			}
		}
	}
</script>