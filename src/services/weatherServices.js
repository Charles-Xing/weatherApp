// import { DateTime } from "luxon"
// const API_KEY = '1c27069b282066cff3c69b088c9a620d'
// const BASE_URL = 'https://api.openweathermap.org/data/2.5'

// // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1c27069b282066cff3c69b088c9a620d

// // infoTypes是决定传入weather API 还是 forecast
// const getWeatherData = (infoType, searchParams) => {
//     const url = new URL(BASE_URL + '/' +infoType)
//     url.search = new URLSearchParams({...searchParams, appid:API_KEY})

//     return fetch(url).then((res) => res.json())
// }

// export default getWeatherData

// // const formatCurrentWeather = (data) => {
// //     const {
// //         coord:{lon,lat},
// //         main:{temp,feels_like,temp_min,temp_max,humidity},
// //         name,
// //         dt,
// //         sys:{country,sunrise,sunset},
// //         weather,
// //         wind:{speed}
// //     } = data

// //     const {main:details, icon} = weather[0]

// //     return {lat,lon,temp,feels_like,temp_max,temp_min,humidity,name,dt,country,sunrise,sunset,details,icon,speed}
    
// // }

// // const formatForecastWeather = (data) => {
// //     let {timezone, daily, hourly} = data;
// //     daily = daily.slice(1,4).map((d) => {
// //         return {
// //             title:formatToLocalTime(d.dt, timezone, 'ccc'),
// //             temp: d.temp.day,
// //             icon: d.weather[0].icon
// //         }
// //     })

// //     hourly = hourly.slice(1,4).map((d) => {
// //         return {
// //             title:formatToLocalTime(d.dt, timezone, 'hh:mm a'),
// //             temp: d.temp,
// //             icon: d.weather[0].icon
// //         }
// //     })

// //     return {timezone, daily, hourly}
// // }

// // const getFormattedWeatherData = async(searchParams) => {
// //     const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

// //     const {lat, lon} = formattedCurrentWeather

// //     const formattedForecastWeather = await getWeatherData('onecall', {
// //         lat,
// //         lon,
// //         exclude:'current,minutely,alerts',
// //         units: searchParams.units
// //     }).then(formatForecastWeather)

// //     return {...formattedCurrentWeather, ...formattedForecastWeather}
// // }

// // const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time:'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

// // const iconUrlFromCode = (code) => {}

// // export default getFormattedWeatherData