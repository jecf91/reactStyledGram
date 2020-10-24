import React, { useState, useEffect } from 'react';

import api from './services/api';

import Header from './Components/Header';
import Profile from './Components/Profile';
import GlobalStyle from './theme/globalStyle';

const App = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const [ dataFetched, setDataFetched ] = useState([]);

  async function loadData(value) {
    const response = await api.get('/',{
      params: {
        query: value,
        page:1,
        per_page:10
      }
    });
    const data = await response.data;
    setDataFetched(data.results);
  }

  useEffect(() => {
    loadData('people');
  }, []);

  const searchChange = e => {setSearchValue(e.target.value)};

  const triggerChange = async (e) => {
    if(e.key === 'Enter') {
      if( searchValue === '' ) return;
      loadData(searchValue);
      setSearchValue('');
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header 
        triggerChange={triggerChange} 
        searchChange={searchChange} 
        searchValue={searchValue}
      />
      <Profile profilePhotos={dataFetched}/>
    </>
  )
}

export default App;