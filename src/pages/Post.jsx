import React from 'react'
import { posts } from '../data'

const Post = () => {

    const post = posts[2];

  return (
    <div className="post"> 
        <img src={post.img} alt="" className="postImg" />

        <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        
    </div>
  )
}

export default Post