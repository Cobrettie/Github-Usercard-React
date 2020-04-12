import React from 'react'
import axios from 'axios'
import UserFollowers from '../UserFollowers/UserFollowers'

class UserCard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followersUrl: ''
    }
  }

    

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/cobrettie`)
      .then(response => {
        console.log(response)
        this.setState({user: response.data})
        this.setState({followersUrl: response.data.followers_url})
      })
  }

  render() {
    // console.log(this.state.user)
    console.log(this.state.followersUrl)

    return (
      <div>
        <h2>UserCard Component</h2>
        <p>Name: {this.state.user.name}</p>
        <p>Github Username: {this.state.user.login}</p>
        {/* <img src={this.state.user.avatar_url} alt={'User Avatar'} /> */}
        <UserFollowers followersUrl={this.state.followersUrl} />
      </div>
    )
  }
}

export default UserCard



// .then(response => {
//         // console.log(response)
//         axios
//           .get(`${response}`)
//           .then(response => {
//             // console.log(response)
//             this.setState({followers: response.data})
//           })
//           .catch(err => console.log(err))
//       })
//       .catch(err => console.log(err))