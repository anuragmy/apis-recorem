const Blogs = require('../models/blogs');

exports.getBlogs = async (req, res) => {
  const { search } = req.query;
  const blogs = await Blogs.aggregate([
    {
      $lookup: {
        from: 'comments',
        localField: '_id',
        foreignField: 'blog',
        as: 'comments'
      }
    },
    {
      $lookup: {
        from: 'likes',
        localField: '_id',
        foreignField: 'blog',
        as: 'likesCount'
      }
    },
    {
      $project: { likes: { $size: "$likesCount" }, comments: "$comments", title: 1, content: 1, _id: 1, user_id: 1 }
    },
  ]);

  if (blogs) {
    if (search) {


      // if there's search param
      const blogToFind = await Blogs.find({ title: { $regex: search } });
      // if the search title exissts in DB
      if (blogToFind.length) {
        const id = blogToFind[0]._id.toString();
        const blogId = blogs.find(blog => blog._id.toString() === id);
        return res.status(200).json({ blogs: blogId })
      }
      else return res.status(404).json({ message: 'Not Found' })
    }
    else {
      res.status(200).json({ blogs })
    }

  }
}

exports.addBlog = (req, res) => {
  const { title, user_id, content } = req.body;
  const blog = new Blogs({ title, user_id, content });
  blog.save(err => {
    if (err) return res.status(400).json({ message: err });
    return res.status(200).json({ message: 'ok', blog })
  })
}





