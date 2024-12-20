import React from 'react';
import SearchIcon from '../assets/search.png';
import ClearIcon from '../assets/clear.png';
import WindIcon from '../assets/wind.png';
import HumidityIcon from '../assets/humidity.png';


const Weather = () => {
    return (
        <div>
            <div className="bg-blue-800 p-8 rounded-[20px]">
                <div className="flex justify-center items-center gap-3">
                    <input
                        type="search"
                        className="p-4 placeholder-black rounded-[30px] font-medium focus:outline-none focus:bg-slate-200"
                        placeholder="Search"
                    />
                    <div className="bg-white p-4 rounded-full cursor-pointer hover:bg-slate-300 duration-300 group">
                        <img src={SearchIcon} alt="Search Icon" className='group-hover:scale-110 duration-300 transform' />
                    </div>
                </div>
                <div className="text-white flex flex-col items-center">
                    <img src={ClearIcon} alt="" className='w-[150px] my-[30px] mx-0' />
                    <p className='font-medium text-6xl tracking-wider '>16°c</p>
                    <p className='font-medium text-4xl mt-2'>London</p>
                </div>
                <div className="text-white flex justify-between pt-5">
                    <div className="flex gap-2 justify-center items-center">
                        <img src={HumidityIcon} className='h-[25px]' alt="" />
                        <p className='mt-2 text-[18px] tracking-wide'>91% <br /> Humidity</p>
                    </div>
                    <div className="flex gap-2  justify-center items-center">
                        <img src={WindIcon} alt="" className='h-[25px]' />
                        <p className='mt-2 text-[18px] tracking-wide'>3.6 Km/h <br /> Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
