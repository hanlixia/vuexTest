<template>
	<div>
		<h2 class="head"><a href="javascript:history.back()" class="back">&lt;返回</a>文章编辑页面</h2>
		<div class="cont">
			<div class="artt"><input v-model="title" type="text" placeholder="输入标题" onblur="this.value||this.defaultValue"></div>
			<div class="arcont">
				<textarea v-model="content" placeholder="输入内容"></textarea>
			</div>
			<div class="operate"><input type="button" value="保存" @click="saveArticle" /></div>	
		</div>		
	</div>	
</template>

<script>
export default{
	name: 'edit',
	data(){
		return {
	        title: '',
	        content: '',
	        inputVisible: false,
        	inputValue: '',
	      }
	},
	mounted:function(){
		if (this.$route.params.id) {
	        this.$http.get('/api/newsDetail/' + this.$route.params.id).then(
	          response => {
	            let article = response.body
	            this.title = article.title
	            this.content = article.content
	          },
	          response => console.log(response)
	        )
	      }
	},
	methods:{
		// 保存文章
      saveArticle: function () {
        let self = this
        if (this.title.length === 0) {
          this.$notify({
            title: '提醒',
            message: '请输入标题',
            type: 'warning'
          })
          return
        }
        if (this.content.length === 0) {
          this.$notify({
            title: '提醒',
            message: '请输入内容',
            type: 'warning'
          })
          return
        }
        if (this.$route.params.id) {
          // 更新文章
          // let obj = {
          //   _id: this.$route.params.id,
          //   title: this.title,
          //   date: this.date,
          //   content: this.content,
          //   gist: this.gist,
          //   labels: this.labels
          // }
          // this.$http.post('/api/updateArticle', {
          //   newsInformation: obj
          // }).then(
          //   response => {
          //     self.$message({
          //       message: '更新文章成功',
          //       type: 'success'
          //     })
          //     // 更新完成后跳转至该文章的详情页
          //     self.$router.push('/articleDetail/' + self.$route.params.id)
          //   },
          //   response => console.log(response)
          // )
        } else {
          // 新建文章
          let obj = {
            title: this.title,
            content: this.content
          }
          this.$http.post('/api/saveArticle', {
            newsInformation: obj
          }).then(
            response => {
              self.$message({
                message: '发表文章成功',
                type: 'success'
              })
              // 保存成功后跳转至文章列表页
              self.refreshArticleList()
            },
            response => console.log(response)
          )
        }
      },
      // 保存成功后跳转至文章列表页
      refreshArticleList: function () {
        this.$router.push('/newsList')
      }
	}
}	
</script>

<style scoped>
.artt{}
.artt input{width:100%;text-indent:10px;padding:5px 0;line-height: 20px}
.arcont{margin-top:20px;}
.operate{margin-top:20px;}
textarea{width:100%;height:200px;text-indent:10px;padding:5px 0;}
</style>