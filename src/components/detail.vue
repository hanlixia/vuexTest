<template>
  <div>
    <h1 class="head"><a href="javascript:history.back()" class="back"></a>详情页</h1>
    <p class="nav"><i>浏览量：</i><em>{{$store.state.viewCount}}</em></p>
    <div class="cont" v-for="detail in result" v-if="detail.key==$route.params.id">
          <div class="drug-b drug-spe">
              <h4 class="drug-t">{{detail.subdisplay.name}}</h4>
              <div class="drug-info">

                  <div class="d-img" v-if="detail.subdisplay.image">
                      <img :src="detail.subdisplay.image" alt="#"></div>
                  <div class="d-con">
                      <p v-if="detail.subdisplay.approvedname">通用名：{{detail.subdisplay.approvedname}}</p>
                      <p v-if="detail.subdisplay.engname">英文名：{{detail.subdisplay.engname}}</p>
                      <p v-if="detail.subdisplay.manufacturer">生产企业：{{detail.subdisplay.manufacturer}}</p>

                      <p v-if="detail.subdisplay.price">参考价格：{{detail.subdisplay.price}}</p>
                  </div>
              </div>
          </div>
          <div class="dspe-txt" >
              <div v-for="item in detail.subdisplay.tab_list.tab">
                <h4>【{{item.tab_name}}】</h4>
                <p  v-html="item.tab_content"></p>
              </div >
            
          </div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'detail',
  data(){
    return {
      url: 'mock/drugs.json',
      //result: null
    }
  },
  mounted(){
    this.getDetail({id:this.$route.params.id});
  },
  computed: {
    result(){
      return this.$store.state.detailData.list
    }
  },
  methods:{
    ...mapActions(['getDetail'])// 映射 this.getDetail() 为 this.$store.dispatch('getDetail')

    // getDetail() {
    //   this.$http.get(this.url).then((response) => {
    //       //成功回调
    //       try {

    //         this.result = Object.assign({}, response.data.list);
    //         console.log(1233)
    //       } catch (err) {

    //       }
    //   }, (response) => {
    //   })
    // }
  }
}
</script>

<style scoped>
  h1, h2 {
  font-weight: normal;
}

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