const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const blog = require('./models/blog');

mongoose.connect('mongodb://CNAtion96:Cwim19967@ds117821.mlab.com:17821/pilgrim_blog');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Get all of blogs
app.get('/blog',function(req,res){
  blog.find().exec((err,response)=>{
    if(err) return res.json({err});
    res.json(response);
	})
})

// Get a single blog
app.get('/blog/:id',function(req,res){
	let id = req.params.id
	blog.findById(_id=id).exec((err,response)=>{
		if(err) console.log(err)
		res.send(response)
	})
})

// Post a new blog
app.post('/blog',function(req,res){
  let Blog = new blog({"title": req.body.title, "content": req.body.content, "image": req.body.image});
  Blog.save(err=>{
    if(err) return res.json({err});
    blog.find().exec((err,response)=>{
      if(err) res.json({err});
      res.json(response);
    });
  });
})

// Delete a blog
app.delete('/blog/:id',function(req,res){
  let id = req.params.id;
  blog.remove({_id:id}).exec((err)=>{
    if(err) return res.json({err});
    blog.find().exec((err,response)=>{
      if(err) return res.json(err);
      res.json(response);
    })
  });
  
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});