// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItemData: [], isLoader: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogItemData: updateData, isLoader: false})
  }

  renderBlogDetails = () => {
    const {blogItemData} = this.state
    const {
      id,
      title,
      imageUrl,
      avatarUrl,
      topic,
      author,
      content,
    } = blogItemData
    return (
      <div>
        <h1 className="blogDetails-heading">{title}</h1>
        <p>{topic}</p>
        <img
          src={avatarUrl}
          className="blogDetails-avatar-img"
          alt={`title${id}`}
        />
        <p className="blogDetails-paragraph">{author}</p>
        <img src={imageUrl} alt={`avatar${id}`} className="blogDetails-img" />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div className="blogDetails-container">
        {isLoader ? (
        <div data-testid="laoder">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
