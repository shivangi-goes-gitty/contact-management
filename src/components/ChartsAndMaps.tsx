import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

interface CountryInfo {
  lat: number;
  long: number;
}

interface CountryData {
  country: string;
  countryInfo: CountryInfo;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

const ChartsAndMaps: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    // Fetch chart data
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        const data = res.data;

        const newChartData: ChartData = {
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(data.cases),
              fill: false,
              borderColor: "#f50057",
              tension: 0.2,
            },
          ],
        };

        setChartData(newChartData);
      });

    // Register the "category" scale
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  useEffect(() => {
    // Fetch countries data for maps
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        const data: CountryData[] = res.data;
        setCountriesData(data);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">COVID-19 Cases Chart</h2>
      {Object.keys(chartData).length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}

      <h2 className="text-2xl font-bold my-4">COVID-19 Cases World Map</h2>
      <div className="h-96">
        <MapContainer
          style={{ height: "100%" }}
          center={[20, 40]}
          zoom={2}
          className="w-full rounded-lg border-2 border-gray-300"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />

          {countriesData.map((country) => (
            <Marker
              key={country.country}
              position={[
                country.countryInfo.lat || 0,
                country.countryInfo.long || 0,
              ]}
            >
              <Popup>{country.country}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ChartsAndMaps;
