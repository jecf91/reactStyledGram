import React, { useState, useEffect } from 'react';
import axios from 'axios';

//

import Header from './Components/Header';
import Profile from './Components/Profile';
import GlobalStyle from './theme/globalStyle';

const App = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const [ dataFetched, setDataFetched ] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {
          query: 'cats',
          page:1,
          per_page:10
        },
        headers: {
          "Authorization": "Client-ID LyVuDRa5rePkypZREvjHZJomSV8rFKleECgvYSdK5p0"
        }
      });
      const data = await response.data;
      setDataFetched(data.results);
    }
    loadData();
  }, []);

  const searchChange = e => {setSearchValue(e.target.value)};

  const triggerChange = async (e) => {
    if(e.key === 'Enter') {
      if( searchValue === '' ) return;
      const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {
          query: searchValue,
          page:1,
          per_page:10
        },
        headers: {
          "Authorization": "Client-ID LyVuDRa5rePkypZREvjHZJomSV8rFKleECgvYSdK5p0"
        }
      });
      const data = await response.data;
      setDataFetched(data.results);
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