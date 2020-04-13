import React from 'react'
import axios from 'axios'
import './App.css'
import UserCard from './Components/UserCard/UserCard'


class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Cobrettie')
      .then(response => {
        // console.log(response)
        this.setState({user: response.data})
      })
      .catch(err => console.log(err))

    axios
      .get('https://api.github.com/users/Cobrettie/followers')
      .then(response => {
        console.log('followers get request response', response)
        this.setState({followers: response.data})
      })
  }


  render() {
    console.log('render runnin', this.state.user)
    console.log('render running2', this.state.followers)
    return(
      <div className='app'>
        <UserCard userData={this.state.user} />
      </div>
    )
  }
}

export default App;
