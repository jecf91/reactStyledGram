import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 1010px;
  margin: 2em auto;
`;

export const ProfileDetails = styled.div`
  display: flex;
`;

export const ProfileDetailsLeft = styled.div`
  margin-right: 2.5em;
  width: 29.9%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProfileDetailsRight = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 50%;
  border: 1px solid #ccc;
  padding: 0.25em;
  max-height:150px;
`;
export const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
 
export const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 0.2em 1em;
  text-transform: capitalize;
  font-size: 1rem;
  margin-left: 1.2em;
`;

export const ImageWrapper = styled.div`
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  
  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`