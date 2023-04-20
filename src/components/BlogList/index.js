// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const Data = await response.json()
    const updateData = Data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    this.setState({blogsData: updateData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} while={50} />
        ) : (
          blogsData.map(eachItem => (
            <BlogItem key={eachItem.id} blogsDetails={eachItem} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
