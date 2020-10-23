import styled from 'styled-components';

export const NavBar = styled.div`
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975); 
`;

export const NavHeader = styled.div`
  max-width: 1010px;
  padding: 1.2em 1em;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const NavLeft = styled.div`
  width: 33.333%;
  text-align:left;
  font-weight:bold;
`;

export const NavCenter = styled.div`
  width: 33.333%;
  text-align:center;
`;

export const NavRight = styled.div`
  width: 33.333%;
  text-align:right;
`;

export const SearchBar = styled.input`
  font-size: 1rem;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 0.4em 2em;
  cursor: text;
  text-align: center;
  background: #fafafa;

  &:active,
  &:hover {
    text-align: left;
  }
`;

