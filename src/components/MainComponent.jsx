import React, { useState, useEffect } from "react";
import Card from "./Card";
import covid from "../media/covid.png";
import "../style/MainComponent.css";
import { getGlobalData } from "../api/api";
import PiChartDiagram from "./PiChartDiagram";
import CountryPicker from "./CountryPicker";
import LineChartDiagram from './LineChartDiagram'

const MainComponent = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [country, setCountry] = useState("Global");

  const getData = async () => {
    const result = await getGlobalData();
    setConfirmed(result.confirmed.value);
    setRecovered(result.recovered.value);
    setDeaths(result.deaths.value);
    setLastUpdate(result.lastUpdate);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCountryChange = async country => {
    const result = await getGlobalData(country);
    setConfirmed(result.confirmed.value);
    setRecovered(result.recovered.value);
    setDeaths(result.deaths.value);
    setLastUpdate(result.lastUpdate);
    setCountry(country);
  };

  return (
    <div className="container">
      <img src={covid} alt="Covid-19" className="imgLogo" />
      <p className="countryName">{country}</p>
      <div className="cards">
        <Card
          heading1="Confirmed"
          number={confirmed}
          lastUpdate={new Date(lastUpdate)}
          heading2={"Last update"}
          cardType={"cardConfirmed"}
        />
        <Card
          heading1="Recovered"
          number={recovered}
          lastUpdate={new Date(lastUpdate)}
          heading2={"Last update"}
          cardType={"cardRecovered"}
        />
        <Card
          heading1="Deaths"
          number={deaths}
          lastUpdate={new Date(lastUpdate)}
          heading2={"Last update"}
          cardType={"cardDeaths"}
        />
      </div>
      <CountryPicker handleCountryChange={handleCountryChange} />
      {country === "Global" ? (
        <LineChartDiagram />
      ) : (
        <PiChartDiagram
          confirmed={confirmed}
          recovered={recovered}
          deaths={deaths}
        />
      )}
    </div>
  );
};

export default MainComponent;
