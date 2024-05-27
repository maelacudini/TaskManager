"use client";
import {
  CoordsType,
  ErrorType,
  SuccessType,
  WeatherType,
} from "@/app/_utils/types";
import { useEffect, useState } from "react";
import WeatherPermission from "./WeatherPermission";

export default function Weather() {
  const [weather, setWeather] = useState<WeatherType>();
  let daily = weather?.daily;
  const [permission, setPermission] = useState<boolean | undefined>(undefined);
  const [position, setPosition] = useState<CoordsType>({
    latitude: 41.8919,
    longitude: 12.5113,
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: SuccessType) {
    const crd = pos.coords;
    setPosition({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  }

  function error(err: ErrorType) {
    console.log(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (permission) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, [permission]);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${position.latitude}&longitude=${position.longitude}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum,rain_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&timezone=Europe%2FLondon&past_days=1&forecast_days=3`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, [position]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-baseline justify-between flex-wrap gap-2">
        <p className="h2">{!permission ? "Rome" : "Your Position"}</p>
        <p className="h4 text-gray-400">
          Max {daily?.temperature_2m_max?.toString().slice(0, 4)}° / Min{" "}
          {daily?.temperature_2m_min?.toString().slice(0, 4)}°
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <p>Perc. Temperature</p>
          <p className="text-gray-400">
            Max {daily?.apparent_temperature_max?.toString().slice(0, 4)}° / Min{" "}
            {daily?.apparent_temperature_min?.toString().slice(0, 4)}°
          </p>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <p>Sunrise / Sunset</p>
          <p className="text-gray-400">
            {daily?.sunrise?.toString().slice(11, 16)} /
            {daily?.sunset?.toString().slice(11, 16)}
          </p>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <p>UV Index Max</p>
          <p className="text-gray-400">
            {daily?.uv_index_max?.toString().slice(0, 3)}
          </p>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <p>Precipitation Sum</p>
          <p className="text-gray-400">
            {daily?.precipitation_sum?.toString().slice(0, 3)} mm
          </p>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <p>Rain Sum</p>
          <p className="text-gray-400">
            {daily?.rain_sum?.toString().slice(0, 3)} mm
          </p>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <p>Precipitation Probability Max</p>
          <p className="text-gray-400">
            {daily?.precipitation_probability_max?.toString().slice(0, 1)} %
          </p>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <p>Wind Speed 10m Max</p>
          <p className="text-gray-400">
            {daily?.wind_speed_10m_max?.toString().slice(0, 4)} km/h
          </p>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <p>Wind Gusts 10m Max</p>
          <p className="text-gray-400">
            {daily?.wind_gusts_10m_max?.toString().slice(0, 4)} km/h
          </p>
        </div>
      </div>
      {permission === undefined && (
        <WeatherPermission
          permission={permission}
          setPermission={setPermission}
        />
      )}
    </div>
  );
}
