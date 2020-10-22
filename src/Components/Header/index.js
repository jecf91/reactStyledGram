import React from 'react';
import { FiUser } from 'react-icons/fi';

import { NavBar, NavHeader, NavLeft, NavCenter, NavRight, SearchBar } from './Styles';

export default function Header({ searchValue, searchChange, triggerChange }) {

  return (
    <NavBar>
      <NavHeader>
        <NavLeft>Instagram</NavLeft>
        <NavCenter>
          <SearchBar 
            type="text" 
            placeholder="Search..." 
            value={searchValue}
            onChange={searchChange}
            onKeyPress={triggerChange}
            />
        </NavCenter>
        <NavRight>
          <FiUser size={25}/>
        </NavRight>
      </NavHeader>
    </NavBar>
  )
}