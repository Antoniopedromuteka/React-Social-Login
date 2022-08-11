

import React from 'react'

const Card = ({post}) => {
  return (
    <div className="card">
        <span className="title">
            {post.title}
        </span>
        <img src={post.img} alt={post.title} className="img"/>
        <p className="desc">
            {post.description}
        </p>

        <button className="cardButton">
            Read More
        </button>
    </div>
  )
}

export default Card