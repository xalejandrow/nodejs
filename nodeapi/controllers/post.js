const Post = require("../models/post");

exports.getPosts = (req, res) => {
    const posts = Post.find().select("_id title body")
    .then((posts) =>{
        //res.json({posts: posts}); se puede poner solo posts porque tienen el mismo nombre
        res.json({posts});
    })
    .catch(err => console.log(err));
    /* res.json({
        posts: [{title: 'First post'}, {title: 'Second post'}]
    }); */
};

exports.createPost = (req, res)=> {
    const post = new Post(req.body)
    //console.log("CREATING POST: ", req.body);
   /*  post.save((err, result) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json({
            post: result
        });
    }); */
    post.save()
    .then(result => {
        res.json({
            post: result
        })
    });
};
