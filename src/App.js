import './App.css';
import React, { useEffect, useState } from "react";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';


function App() {
    // 创建两个state，经纬，用来获取所需要城市的位置
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [data, setData] = useState([])

  // 创建useEffect，在应用加载及刷新时会执行
  //使用 navigator.geolocation 获取纬度和经度，并使用 setLong 和 setLat 来设置纬度和经度 state
  useEffect(() => {
      const fetchData = async () =>{
          navigator.geolocation.getCurrentPosition(function(position) {
              setLat(position.coords.latitude);
              setLon(position.coords.longitude);
          });

          await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
              setData(result)
              console.log(result);
          });
      }
      fetchData()
    }, [lat, lon]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation weatherData={data}/>
      <TemperatureAndDetails weatherData={data}/>
      <Forecast title='hourly forecast'/>
      <Forecast title='daily forecast'/>
    </div>
  );
}

export default App;
