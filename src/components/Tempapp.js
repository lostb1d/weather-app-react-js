import React, { useEffect, useState } from "react";
import "./css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Tempapp = () =>{

    const [city, setCity] = useState(null);
    const [search  , setSearch] = useState("Pokhara")
    useEffect ( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=657b2237a3088f0b53125473288bc426`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);

        }
        fetchApi();

    }, [search])

    return(
        <div>
            
            
        <nav class="navbar navbar-light bg-warning">
        <span class="navbar-brand mb-0 h1">Live Weather App</span>
        </nav>

            <div className="box text-center mt-2">
            
                <div classNamse="inputData">
                    <input 
                        type="search"
                        className="inputField form-control" 
                        onChange={ (event) => {
                            setSearch(event.target.value)
                        }}
                        />
                </div>

            </div>
            <div>
            {!city ? (
                <p className="errorMsg warning text-danger">No Data Found]</p>
            ):(
                <div className="info">
                <h1 className="Location">
                <i class="fas fa-street-view"></i> { search }
                </h1>
                <h1 className="temp">
                  Feels like  { city.temp } °C
                </h1>
                <h3 className="tempmin_max">
                    Min : {city.temp_min} °C | Max : {city.temp_max} °C 
                </h3>
                <h3 className="other-info">
                  Humidity   : {city.humidity}  | Pressure : {city.pressure} mmHg
                </h3>
    </div>
            )

            }
            </div>
            
        </div>
    )
}

export default Tempapp;