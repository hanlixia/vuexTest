const express = require('express')
const router = express.Router()
const db = require('./db.js')

// 获取所有文章
router.get('/api/news',function(req, res){
	db.News.find({}, function(err,docs){
		if(err){
			console.log(err)
			return;
		}
		res.json(docs)
	})
})
// 获取详情文章
router.get('/api/newsDetail/:id',function (req, res){
	db.News.findOne({ _id: req.parms.id }, function (err, docs){
		if(err){
			console.log(err)
			return;
		}
		res.send(docs)
	})
})
// 文章保存
router.get('/api/saveNews',function (req, res){
	new db.News(req.body.newsInformation).save(function(err){
		if(err){
			res.status(500).send()
			return
		}
		res.send()
	})
})


module.exports = router