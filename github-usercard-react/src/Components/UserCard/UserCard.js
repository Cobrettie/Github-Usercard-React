import React from 'react'
import { MainContainerDiv, ImgContainerDiv, StyledImg, UserInfoContainerDiv, GithubCalendarContainerDiv } from './UserCardStyles'
import GitHubCalendar from 'react-github-calendar';

export default function UserCard(userData) {
  // console.log('userData', userData)
  return(
    <MainContainerDiv>
      <ImgContainerDiv>
        <StyledImg src={userData.userData.avatar_url} alt='User Avatar' />
      </ImgContainerDiv>

      <UserInfoContainerDiv>
        <p>Name: {userData.userData.name}</p>
        <p>GitHub Handle: {userData.userData.login}</p>
        <p>Location: {userData.userData.location}</p>
        <p>Email: {userData.userData.email}</p>
        <p>Public Repos: {userData.userData.public_repos}</p>
        <p>Followers: {userData.userData.followers}</p>
        <p>Following: {userData.userData.following}</p>
        <p>Bio: {userData.userData.bio}</p>
        {userData.userData.hireable === true ? <p>Hireable: Yes</p> : <p>Hireable: No</p>}
      </UserInfoContainerDiv>

      <GithubCalendarContainerDiv>
        <GitHubCalendar username='cobrettie' />
      </GithubCalendarContainerDiv>
    </MainContainerDiv>
  )
}