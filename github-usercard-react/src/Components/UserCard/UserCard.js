import React from 'react'
import axios from 'axios'

class UserCard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: 'cobrettie'
      }
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user.name}`)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h2>UserCard Component</h2>
      </div>
    )
  }
}

export default UserCard