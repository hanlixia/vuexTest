<template>
	<div>
		<h1 class="head"><a class="back" href="javascript:history.back()">&lt;返回</a>文章列表页</h1>
		<ul class="drug-list" uigs="100">
              <li v-for="(item, index) in result">
                  <router-link class="drug-b" :to="{ name: 'detail', params: { id: item.id }}">
                    {{item.name}}
                    </router-link>
              </li>
          </ul>
	</div>
</template>
<script>
export default{
	name: "list",
	data() {
		return {
			result:{},
			url: 'mock/news.json'
		}
	},
	created(){
		this.getList();
	},
	computed:{
		
	},
	methods: {
		// getList(){
		// 	this.$http.get(this.url).then(response=>{
		// 		try{
		// 			this.result = Object.assign({}, response.data);
		// 		}catch(err){

		// 		}
		// 	})
		// }
		getList(){
			this.$http.get('/api/newsList').then(
		        response => this.newsList = response.body.reverse(),
		        response => console.log(response)
		      )
		}
	}
}	
</script>

<style scoped>
a{text-decoration: none;}

ul {
  list-style-type: none;
  margin:0;
  padding:20px 20px;
}
li{line-height:30px;border-bottom:dashed 1px #ccc;text-align: left}
li:last-child{border-bottom: 0 none;}
li a{}


.head{line-height: 44px; color: #f1f1f1; font-size: 18px; text-align: center; background: #29b2dc; position: fixed; left: 0; top: 0; width: 100%; z-index: 5; }
.head .back{left: 0;
    background-position: 16px 13px;
    width: 44px;
    height: 44px;
    position: absolute;
    top: 0;
    background-image: url('http://mingyi.sogou.com/fuwu/resource/static/img/ico_back.89a6166.png');
    background-repeat: no-repeat;
    background-size: 9px auto;
}
.cont{padding-top:10px;}
.nav{margin-top:60px;border-bottom: dashed 1px #d6d6d6;padding-bottom:10px;}
.nav em{font-style: normal;color:red;}
</style>