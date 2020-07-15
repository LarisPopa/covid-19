import React, { useState, useEffect } from "react";
import { getCountries } from "../api/api";
import "../style/CountryPicker.css"
const CountryPicker = ({handleCountryChange}) => {
  const [countryList, setCountryList] = useState([]);

  const getCountryList = async () => {
    const response = await getCountries();
    setCountryList(response);
  };

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <select name="countryList" className="countrySelect" onChange={(e)=>handleCountryChange(e.target.value)}>
      <option value="Global">Global</option>
      {countryList.map((country, index) => {
        return (
          <option key={index} value={country}>
            {country}
          </option>
        );
      })}
    </select>
  );
};

export default CountryPicker;
