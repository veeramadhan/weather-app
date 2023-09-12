
import './App.css';
import Axios from "axios"
import { useState } from 'react';

const KEY ="ca9bfe32ade99b1536731399029ec79c";

const city="Londen"


function App() {


   const[city,setCity]=useState("");
   const [data,setData]=useState();
  

  

   const fetchData= async ()=>{
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
      setData(response.data)
      console.log(response.data)
    }
catch(error){
  alert("Please enter the city name");
}
    
   }



  return (
   <>
   <div className='App'>
    <h1 className='Title'>Weather App</h1>
   <div className='input-container'>

   <input type='search' placeholder='Enter here city name' className='input' value={city} onChange={e=>setCity(e.target.value)}/>

   <button className="button" onClick={fetchData}>
      Fetch
    </button>
   </div>

    {data && (
      <>
      <div className='container'>
      <h1 className='city-name'></h1>  {data.name},{data.sys.country}
       
        <div className='weather-info'>
          <div className='weather-info'>
              Temp: {Math.round(data.main.temp)}C
          </div>
          <div className='weather-info'>
          <div>Lat - {data.coord.lat}</div>
          <div>Lon - {data.coord.lon}</div>
          </div>
          
          </div>
          </div>
          </>
    )}

    
   </div>
   
   
   </>
  );
}

export default App;
