import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Category from "./components/Category";
import Restaurant from "./components/Restaurant";
import icon from "./logo.svg";
import Icondeliveroo from "./Icondeliveroo";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend82.herokuapp.com/"
    );
    //
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="">
      <header class="Header">
        <div className="TopBar">
          <div className="TopBar--center">
            <Icondeliveroo />
          </div>
        </div>
      </header>

      <Restaurant restaurant={data.restaurant} />
      {/* Liste de catégories */}
      {data.categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <div className="Content--center">
              <div className="Menu">
                <Category key={index} category={category} />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

export default App;
