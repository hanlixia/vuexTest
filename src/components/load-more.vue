<template>
    <section class="sell-car-list-page" @touchstart="onTouchStart" @touchmove="onTouchMove" v-if="dataReady">
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
        <div class="load" :class="{show:loading}">{{loadText}}</div>
    </section>
</template>

<style scoped>
ul{padding-top:50px;}
li{height:24px;line-heigth:24px;padding:20px;}
.load{display:none;}
.load.show{display:block;}
</style>
<script>
import axios from 'axios'
    export default {
        data() {
            return {
                dataReady: false,
                startY: 0,
                loading: false,
                loadText: 'loading...',
                perNum:10,
                list:[],
                page:1,
                total:100
            }
        },
        methods: {
            /** 下拉加载更多 */
            onTouchStart(e) {
                this.startY = e.touches[0].pageY
            },
            onTouchMove(e) {
                let curY = e.touches[0].pageY
                if (curY < this.startY) {
                    let scrollHeight = document.body.scrollTop + window.screen.availHeight
                    let page = document.querySelector('.sell-car-list-page')
                    let totalHeight = page.offsetTop + page.offsetHeight
                    console.log("curY="+curY+";startY="+this.startY+";scrollHeight="+scrollHeight+";totalHeight="+totalHeight)
                    if (scrollHeight >= totalHeight) {
                        this.loadNext()
                    }
                }

            },
            loadNext(page) {
                if (this.loading) {
                    this.loadText = 'loading...'
                    return
                }
                if (!page) {
                    page = this.page + 1;
                    this.page += 1;
                }
                console.log('===page'+page+";");
                if (this.list.length >= this.total) {
                    this.dataReady = true;
                    this.loadText = '没有新数据了！'
                    return
                }
                this.loading = true
                this.getList(page)
                
            },
            getList(page){
                var vm = this;
                console.log("________page="+page)
                // this.$http.get('mock/list2.json').then(function(res){
                //     vm.dataReady=true;
                //     vm.list = res.data;
                // })  
                axios.get('mock/list2.json', {
                    params: {
                      page: page
                    }
                  }).then(function (response) {
                    let data = response.data;
                    vm.total = data.length;
                    vm.list = data.splice(0,vm.perNum*page);
                    vm.loading = false
                    vm.dataReady = true
                  }).catch(function (error) {
                    console.log(error);
                });
            }
            //...mapActions(['getSellCarList']),
        },
        created() {
            this.loadNext(1)
            // trackPhone()
        }
    }
</script>
