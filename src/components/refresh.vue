<template>
  <div>
       <v-scroll :on-refresh="onRefresh">
       <ul>
         <li v-for="(item,index) in listdata" >{{item}}</li>
         <li v-for="(item,index) in downdata" >{{item}}</li>
        </ul>
    </v-scroll>
  </div>
</template>
<style scoped>
li{height:24px;line-height: 24px;padding:0 0 0 10px;}
</style>
<script>
import Scroll from './pull-refresh';

export default{
 data () {
    return {
      listdata: [] // 下拉更新数据存放数组
    }
  },
  mounted : function(){
     this.getList();
  },
  methods: {
    getList(){
       	let vm = this;
		vm.$http.get('mock/list.json').then((response) => {
		       vm.listdata = response.data;
		     }, (response) => {
		        console.log('error');
		});
    },
    onRefresh(done) {
    	this.getList();
		done() // call done
      
    }
  },
  components : {
	'v-scroll': Scroll
  }
}
</script>