"use server";
import { WeatherProps } from "@/data";

export default async function fetchData(userInput:string): Promise<WeatherProps> {
    console.log("Fetching data...");
    const place = userInput;
    const key = process.env.MY_API_KEY;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=us&key=${key}&contentType=json`
    const rawData = await fetch(url);
    const data = await rawData.json();
    return (
        data
    );
}