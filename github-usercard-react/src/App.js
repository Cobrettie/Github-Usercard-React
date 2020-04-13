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
  }


  render() {
    console.log('render runnin', this.state.user)
    return(
      <div className='app'>
        <UserCard userData={this.state.user} />
      </div>
    )
  }
}

export default App;
