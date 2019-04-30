<template>
  <div>
  	<h1>test</h1>
	  <p>{{$store.state.count}}</p>
	  <p><input type="button" value="提交" @click="changeCount" /></p>
  </div>
</template>
<script>
export default {
	name: 'test',
	data () {
		return {
		  //result:null,
		  url: 'mock/drugs.json'
		}
	},
	mounted(){
		this.$store.commit('CHANGE_COUNT')
	},
	methods: {
		changeCount(){
			this.$store.commit('CHANGE_COUNT')
		}
    }
}
</script>