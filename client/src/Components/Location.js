import React, { useState, useEffect } from "react";
import axios from "axios";

const Location = () => {
  const [ip, setIp] = useState(null); // State to hold the IP address
  const [geoData, setGeoData] = useState(null); // State to hold geolocation data
  const [currency, setcurrency] = useState("");
  const [isp, setisp] = useState("");

  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIp(response.data.ip); // Set the IP address in state
    } catch (error) {
      console.error("Error fetching IP address:", error.message);
    }
  };

  const getGeoLocationData = async () => {
    if (!ip) return; // Ensure IP is available before making the request
    try {
      const response = await axios.get(`http://ip-api.com/json/${ip}`);
      setGeoData(response.data); // Set geolocation data in state
      var country = geoData.country;
      if (geoData.country == "Oman") {
        setcurrency("OMR");
      }
      if (country == "UAE") {
        setcurrency("AED");
      }

      console.log("GeoLocation Data:", response.data);
    } catch (error) {
      console.error("Error fetching geolocation data:", error.message);
    }
  };

  // Fetch the IP address when the component is loaded

  useEffect(() => {
    fetchIpAddress();
  }, []);

  // Fetch geolocation data when the IP is updated

  useEffect(() => {
    if (ip) {
      getGeoLocationData();
    }
  }, [ip]);

  return (
    <div className="location">
      <p>Location Information</p>
      {ip ? <p>IP Address: {ip}</p> : <p>Loading IP address...</p>}
      {geoData ? (
        <div>
          <p>
            Country: {geoData.country}
            <br />
          </p>
          <p>
            Region: {geoData.region}
            <br />
          </p>

          <p> Currency: {currency}</p>
          <p>
            isp: {geoData.isp}
            <br />
          </p>
        </div>
      ) : (
        <p>Loading Geolocation Data...</p>
      )}
      {/* <p> Ip address : {ip}</p>
      <p> City :{geoData.city}</p>
      <p> Regiion: {geoData.region}</p>
      <p> Currency: {currency}</p> */}
    </div>
  );
};

export default Location;
