<template>
  <div>
    <h1 class="head">列表页</h1>
    <p class="nav"><i>浏览量：</i><em>{{$store.state.viewCount}}</em></p>
    <div class="cont">
      <ul class="drug-list" uigs="100">
              <li v-for="(item, index) in result">
                  <router-link class="drug-b" :to="{ name: 'Detail', params: { id: item.key }}">
                      <h4 class="drug-t">{{item.subdisplay.name}}</h4>
                      <div class="drug-info">
                          <div class="d-img" v-if="item.subdisplay.image">
                              <img :src="item.subdisplay.image" alt="#"></div>
                          <div class="d-con">
                              <p v-if="item.subdisplay.manufacturer">生产企业：{{item.subdisplay.manufacturer}}</p>
                              <p v-if="item.subdisplay.guige">药品规格：<span style="display:inline-block" v-html="item.subdisplay.guige"></span></p>
                              <p v-if="item.subdisplay.price">参考价格：{{item.subdisplay.price}}</p>
                              <p v-for="tab in item.subdisplay.tab_list.tab" v-if="tab.tab_name=='功能主治'">功能主治：{{tab.tab_content}}</p>
                          </div>
                      </div>
                    </router-link>
              </li>
          </ul>
    </div>
  </div>
</template>

<script>
require('src/assets/css/mingyi.css');
import {mapActions,mapState} from 'vuex'
// import store from 'src/store';
// const {listData} = store.state;
export default {
  name: 'list',
  data () {
    return {
      //result:null,
      url: 'mock/drugs.json'
    }
  },
  created(){
    this.getList();
    this.getViewCount();
  },
  // computed: {
  //   result(){
  //     return this.$store.state.listData.list
  //   },
  //   viewCount(){
  //     return this.$store.state.viewCount;
  //   }
  // },
  computed: mapState({
    result:state=>state.listData.list,
    viewCount:state=>state.viewCount
  }),
  methods:{
    ...mapActions(['getList','getViewCount'])// 映射 this.getList() 为 this.$store.dispatch('getList')

    // getList() {
    //   this.$http.get(this.url).then((response) => {
    //       //成功回调
    //       try {

    //         this.result = Object.assign({}, response.data.list);
    //         console.log(this.result)
    //       } catch (err) {

    //       }
    //   }, (response) => {
    //   })
    // }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
}


.head{line-height: 44px; color: #f1f1f1; font-size: 18px; text-align: center; background: #29b2dc; position: fixed; left: 0; top: 0; width: 100%; z-index: 5; }
.cont{padding-top:10px;}
.nav{margin-top:60px;border-bottom: dashed 1px #d6d6d6;padding-bottom:10px;}
.nav em{font-style: normal;color:red;}
</style>
