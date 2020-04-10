import React from 'react'
import axios from 'axios'

class UserCard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/cobrettie`)
      .then(response => {
        // console.log(response)
        this.setState({user: response.data})
        const userFollowers = response.data.followers_url
        return userFollowers
      })
      .then(response => {
        // console.log(response)
        axios
          .get(`${response}`)
          .then(response => {
            // console.log(response)
            this.setState({followers: response.data})
          })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.user)
    console.log(this.state.followers)
    return (
      <div>
        <h2>UserCard Component</h2>
        <p>{this.state.user.login}</p>
      </div>
    )
  }
}

export default UserCard