import React from 'react'
import { MainHeadingH2, MappedFollowersContainerDiv, FollowerCardDiv, FollowerImg } from './UserFollowersStyles'

export default function UserFollowers(userFollowers) {
  console.log(userFollowers)
  return(
    <div>
      <MainHeadingH2>Followers</MainHeadingH2>
      <MappedFollowersContainerDiv>
        {userFollowers.userFollowers.map(follower => {
          console.log('follower log', follower)
          return (
            <FollowerCardDiv key={follower.id}>
              <FollowerImg src={follower.avatar_url} alt={'Follower\'s Avatar'} />
              <p>GitHub Handle: {follower.login}</p>
              <button><a href={`https://github.com/${follower.login}`}>View GitHub Profile</a></button>
            </FollowerCardDiv>
          )
        })}
      </MappedFollowersContainerDiv>
    </div>
  )
}