import React from 'react'
import axios from 'axios'
import './App.css'
import UserCard from './Components/UserCard/UserCard'
import UserFollowers from './Components/UserFollowers/UserFollowers'


class App extends React.Component {
  state = {
    user: {},
    followers: [],
    userIsLoaded: false,
    followersAreLoaded: false
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Cobrettie')
      .then(response => {
        console.log('initial user get req', response)
        this.setState({
          user: response.data,
          userIsLoaded: true
        })
      })
      .catch(err => console.log(err))

    axios
      .get('https://api.github.com/users/Cobrettie/followers')
      .then(response => {
        console.log('followers get request response', response)
        this.setState({
          followers: response.data,
          followersAreLoaded: true
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    console.log('render runnin', this.state.user)
    console.log('render running2', this.state.followers)
    return(
      <div className='app'>
        {this.state.userIsLoaded ? <UserCard userData={this.state.user} /> : null}
        {this.state.followersAreLoaded ? <UserFollowers userFollowers={this.state.followers} /> : null}
      </div>
    )
  }
}

export default App;
