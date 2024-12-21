import React, { useEffect, useState } from 'react';
import SearchIcon from '../assets/search.png';
import ClearIcon from '../assets/clear.png';
import WindIcon from '../assets/wind.png';
import HumidityIcon from '../assets/humidity.png';
import CloudIcon from '../assets/cloud.png';
import DrizzleIcon from '../assets/drizzle.png';
import SnowIcon from '../assets/snow.png';
import RainIcon from '../assets/rain.png';


const Weather = () => {

    const [weatherData, setWeatherData] = useState(false)
    const [searchCity, setSearchCity] = useState('')

    const allIcons = {
        "01d": ClearIcon,
        "01n": ClearIcon,
        "02d": CloudIcon,
        "02n": CloudIcon,
        "03d": CloudIcon,
        "03n": CloudIcon,
        "04d": DrizzleIcon,
        "04n": DrizzleIcon,
        "09d": RainIcon,
        "10d": RainIcon,
        "10n": RainIcon,
        "09n": RainIcon,
        "13d": SnowIcon,
        "13n": SnowIcon,
    }

    const search = async (city) => {
        if (city === "") {
            alert("Please Enter City Name")
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

            const response = await fetch(url)
            const data = await response.json()
            const icon = allIcons[data.weather[0].icon] || ClearIcon;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temprature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
            console.log(data)

        } catch (error) {

        }
    }

    useEffect(() => {
        search('New york')
    }, [])



    return (
        <div>
            <div className="bg-blue-800 p-8 rounded-[20px]">
                <div className="flex justify-center items-center gap-3">
                    <input
                        type="search"
                        className="p-4 placeholder-black rounded-[30px] font-medium focus:outline-none focus:bg-slate-200"
                        placeholder="Search"
                        onChange={(e) => setSearchCity(e.target.value)}
                    />
                    <div className="bg-white p-4 rounded-full cursor-pointer hover:bg-slate-300 duration-300 group" onClick={() => search(searchCity)}>
                        <img src={SearchIcon} alt="Search Icon" className='group-hover:scale-110 duration-300 transform' />
                    </div>
                </div>
                <div className="text-white flex flex-col items-center">
                    <img src={weatherData.icon} alt="" className='w-[150px] my-[30px] mx-0' />
                    <p className='font-medium text-6xl tracking-wider '>{weatherData.temprature}°</p>
                    <p className='font-medium text-4xl mt-2'>{weatherData.location}</p>
                </div>
                <div className="text-white flex justify-between pt-5">
                    <div className="flex gap-2 justify-center items-center">
                        <img src={HumidityIcon} className='h-[25px]' alt="" />
                        <p className='mt-2 text-[18px] tracking-wide'>{weatherData.humidity}% <br />Humidity </p>
                    </div>
                    <div className="flex gap-2  justify-center items-center">
                        <img src={WindIcon} alt="" className='h-[25px]' />
                        <p className='mt-2 text-[18px] tracking-wide'>{weatherData.windSpeed} Km/h <br /> Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
