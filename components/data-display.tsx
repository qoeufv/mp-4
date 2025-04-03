"use client";
import {useState} from "react";
import fetchData from "@/lib/fetchData";
import { WeatherProps } from "@/data";


export default function DataDisplay() {
    const [input, setInput] = useState("");
    const [weather, setWeather] = useState<WeatherProps|undefined>(undefined);

    const handleGoBack = () => {
        setWeather(undefined);
    };

    if (weather === undefined) {
        return(
            <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', textAlign: 'center', width: '100%'}}>
                <h2 style={{fontSize: '3rem', }}>Weather Forecast</h2>
                <p style={{fontSize: '2rem', }}>Enter a city name to get the weather forecast.</p>
                <label htmlFor="city">City name: </label><input
                    style={{margin: '2%'}}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button style={{backgroundColor:'crimson', fontSize:'1.5rem'}} onClick={() => {
                    fetchData(input).then((w) => setWeather(w)).catch((e) => console.log("There was an error" + e));

                }} >Get weather!</button>
            </div>
        );
    }
    return(
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', fontSize: '2rem'}}>
            <h1>{weather.address}</h1>
            <div>{weather.timezone}</div>
            <div>{weather.longitude}</div>
            <div>{weather.latitude}</div>
            <div>{weather.description}</div>
            <button style={{backgroundColor:'crimson', fontSize:'1.5rem', margin: '2%'}} onClick={handleGoBack}>Back</button>
        </div>
    );
}