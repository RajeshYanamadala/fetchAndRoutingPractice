// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsDetails} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogsDetails

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blogs-list-container">
        <img src={imageUrl} alt={`title${id}`} className="imageUrl" />
        <div className="blogs-list-card ">
          <p className="blog-list-paragraph">{topic}</p>
          <h1 className="blog-list-heading">{title}</h1>
          <div className="blog-avatar-author-card">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatarUrl" />
            <p className="blog-list-paragraph">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
