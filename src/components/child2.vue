<template>
	<div>
		<h1>子组件child2,通过父组件获取子组件child1的值</h1>
		<p>{{message}}</p>
	</div>
</template>
<script>
	export default{
		props:['message'],
		data(){
			return{}
		},
		methods:{
			
		}
	}
</script>