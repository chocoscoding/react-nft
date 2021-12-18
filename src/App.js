import './App.css';
import Header from './Components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './Components/PunkList';
import Main from './Components/Main';

function App() {

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect( ()=>{

    const getMyNfts = async ()=>{

     const openseaData = await axios('https://nft-backend-app.herokuapp.com/',{

     headers: {
      'Access-Control-Allow-Origin': '*'
     }
     })
     
     setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (
          <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
          </>
        )
      }
    </div>

  );
}

export default App;
