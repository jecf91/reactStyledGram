import React from 'react'

import { 
  ProfileContainer, 
  ProfileDetails, 
  ProfileDetailsLeft, 
  ProfileDetailsRight, 
  ProfilePicture,
  ProfileDetailsUsername,
  EditProfileButton,
  ImageWrapper
} from './Styles';

import ImageCard from '../ImageCard';

export default function Profile() {

  const ProfilePic = "https://images.unsplash.com/photo-1544435253-f0ead49638fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"

  const MockData = [
    {
      id:1,
      source: ProfilePic
    },
    {
      id:2,
      source: ProfilePic
    },
    {
      id:3,
      source: ProfilePic
    },
    {
      id:4,
      source: ProfilePic
    }
  ]

  return (
    <ProfileContainer>
      <ProfileDetails>

        <ProfileDetailsLeft>
          <ProfilePicture 
          src={ProfilePic}
          alt="Profile Picture"
          />
        </ProfileDetailsLeft>

        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <h3>Fake profile</h3>
          </ProfileDetailsUsername>
          <EditProfileButton>Edit Profile</EditProfileButton>
        </ProfileDetailsRight>
        
      </ProfileDetails>

      <ImageWrapper>
        {MockData.map( data => (
          <ImageCard photo={data} key={data.id} />
        ))}
      </ImageWrapper>

    </ProfileContainer>
  )
}
