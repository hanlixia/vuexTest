<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <ul style="margin-top:50px">
      <li>
        <router-link class="drug-b" :to="{ name: 'list'}">
          文章列表页
        </router-link> 
      </li>
      <li>
        <router-link class="drug-b" :to="{ name: 'edit'}">
          文章编辑页
        </router-link> 
      </li>
    </ul> -->
    <child1 @parentEvent="getData"></child1>
    <child2 :message="msg"></child2>
  </div>
</template>

<script>
import child1 from './child1'
import child2 from './child2' 
export default {
  name: 'hello',
  component:{
    child1,
    child2
  },
  data () {
    return {
      msg: 'Welcome to My site'
    }
  },
  methods:{
    getData:function(data){
      this.msg = data; 
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
