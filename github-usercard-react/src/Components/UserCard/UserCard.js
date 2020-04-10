import React from 'react'

class UserCard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
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