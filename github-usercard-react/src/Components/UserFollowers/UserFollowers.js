import React from 'react'
import axios from 'axios'

class UserFollowers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followers: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get(`${this.props.followersUrl}`)
        .then(response => {
        console.log(response)
      })
    }, 1000)
  }

  render() {
    console.log(this.props)
    
    return (
      <div>
        <h2>UserFollowers Component</h2>
        <div>
          
        </div>
      </div>
  ) 
  }
}

export default UserFollowers