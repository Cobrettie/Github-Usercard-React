import React from 'react'


export default function UserFollowers(userFollowers) {
  console.log(userFollowers)
  return(
    <div>
      <h2>Followers</h2>
      {userFollowers.userFollowers.map(follower => {
        console.log('follower log', follower)
        return (
          <div key={follower.id}>
            <p>{follower.login}</p>
          </div>
        )
      })}
    </div>
  )
}