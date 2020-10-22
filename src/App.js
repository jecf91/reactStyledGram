import React, { useState } from 'react';

import Header from './Components/Header';
import Profile from './Components/Profile';

const App = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const searchChange = e => {setSearchValue(e.target.value)};
  const triggerChange = e => {
    if(e.key === 'Enter') {
      alert(searchValue);
      setSearchValue('');
    }
  }

  return (
    <>
      <Header 
        triggerChange={triggerChange} 
        searchChange={searchChange} 
        searchValue={searchValue}
      />
      <Profile />
    </>
  )
}

export default App;