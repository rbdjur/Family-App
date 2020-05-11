const Post = require('../models/post');

exports.createPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    creator: req.userData.userId
  })
  console.log(req.userData)
  console.log(post);
  post.save().then(createdPost => {
    // console.log('hello', createdPost);
    res.status(201).json({
      message: 'post added successfully',
      post: {
        ...createdPost,
        id: createdPost._id
      }
    })
  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a post failed!"
    })
  });
}

exports.updatePost = (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    creator: req.userData.userId
  })
  Post.updateOne
  ({_id: req.params.id, creator: req.userData.userId}, post).then(result => {
    if (result.n > 0) {
      res.status(200).json({
        message: 'update successful'
      });
    } else {
      res.status(401).json({
        message: 'not authorized.'
      });
    }
  })
  .catch(error => {
    res.status(500).json(
      {
        message: "Couldn't update post!"
      }
    )
  });
}

exports.getPosts = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Post.find();
  let fetchedPost;
  if(pageSize && currentPage) {
    postQuery
    .skip(pageSize * (currentPage - 1))
    .limit(pageSize);
  }
  postQuery.then((documents)=> {
    fetchedPost = documents;
    return Post.count();
  }).then(count => {
    res.status(200).json({
      message: 'post fetched successfully',
      posts: fetchedPost,
      maxPosts: count
    })
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching posts failed"
    })
  });
}

exports.getPost = (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if(post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({messages: 'Post not found!'});
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching post failed"
    })
  });
};

exports.deletePost = (req, res, next) => {
  console.log('id: ',req.params.id);
  Post.deleteOne({_id: req.params.id, creator: req.userData.userId})
  .then(result => {
    console.log('result', result);
    if (result.n > 0) {
      res.status(200).json({
        message: 'deletion successful'
      });
    } else {
      res.status(401).json({
        message: 'not authorized.'
      });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching posts failed"
    })
  });
};
