import React, { useEffect,useState } from 'react';
import './App.css';
import Nav from './component/header/Nav';
import VideoList from './component/videoList/videoList';

function App() {
  const [query, setQuery] = useState('')
  const [videolist, setVideoList] = useState([])
  useEffect(()=>{
   getVideo() 
  }, [query])

  const getVideo=()=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDiBWcG3Luxfn6dOqM8RLKyP9n93xwnd7c&part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDiBWcG3Luxfn6dOqM8RLKyP9n93xwnd7c`, requestOptions)
        .then(response => response.json())
        .then(result =>{ console.log(result)
            setVideoList(result.items)
        })
        .catch(error => console.log('error', error));
      }
  
  const handleChange =e=>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }
  const handleSearch=()=>{
    
  }
  return (
    <div className="App">
      <Nav handleChange={handleChange} handleSearch={handleSearch}/>
      <VideoList videolist={videolist}/>
    </div>
  );
}

export default App;
