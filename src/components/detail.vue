<template>
  <div>
    <h1 class="head"><a href="javascript:history.back()" class="back">&lt;返回</a>详情页</h1>
    <!-- <p class="nav"><i>浏览量：</i><em>{{$store.state.viewCount}}</em></p> -->
    <div class="cont" v-for="detail in result" v-if="detail.id==$route.params.id">
          <h2>{{detail.name}}</h2>
          <div>{{detail.content}}</div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'detail',
  data(){
    return {
      url: 'mock/news.json',
      result: null
    }
  },
  mounted(){
    this.getDetail({id:this.$route.params.id});
  },
  computed: {
    // result(){
    //   return this.$store.state.detailData.list
    // }
  },
  methods:{
    //...mapActions(['getDetail'])// 映射 this.getDetail() 为 this.$store.dispatch('getDetail')

    getDetail() {
      this.$http.get(this.url).then((response) => {
          //成功回调
          try {

            this.result = Object.assign({}, response.data);
            console.log(1233)
          } catch (err) {

          }
      }, (response) => {
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {font-weight: normal;margin:0;}
a{text-decoration: none;}

ul {
  list-style-type: none;
  padding: 0;
}

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