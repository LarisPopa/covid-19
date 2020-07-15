import axios from "axios";

let url = "https://covid19.mathdro.id/api";

export const getGlobalData = async country => {
  let urlChange = url;
  if (country && country !== "Global")
    urlChange = `${url}/countries/${country}`;
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(urlChange);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    };
  } catch (err) {
    console.log(err);
  }
};

export const getCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);

    return countries.map(country => country.name);
  } catch (err) {
    console.log(err);
  }
};

export const getDailyData = async () => {

  const { data } = await axios.get(`${url}/daily`)
  
  return data.map(obj=>{
    return{
      confirmed: obj.confirmed.total,
      deaths: obj.deaths.total,
      reportDate: obj.reportDate
    }
  })
}
