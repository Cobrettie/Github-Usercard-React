import React from 'react'
import axios from 'axios'

class UserCard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/cobrettie`)
      .then(response => {
        console.log(response)
        this.setState({user: response.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        <h2>UserCard Component</h2>
      </div>
    )
  }
}

export default UserCard