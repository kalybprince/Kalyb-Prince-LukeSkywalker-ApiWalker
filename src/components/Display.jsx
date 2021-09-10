import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Display = (props) => {
    const [responseData, setResponseData] = useState();
    const {category, id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            // custom API call based on chosen option
            .then(myJson => {setResponseData(myJson)})
            // set response state
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            {
                (responseData && category === "people") ?
                <div>
                    <p>Name: {responseData.data.name} </p>
                    <p>Height: {responseData.data.height}</p>
                    <p>Mass: {responseData.data.mass}</p>
                    <p>Hair Color: {responseData.data.hair_color}</p>
                </div>
                :
                ""
            }
            {
                (responseData && category === "planets") ?
                <div>
                    <p>Name: {responseData.data.name} </p>
                    <p>Rotation Period: {responseData.data.rotation_period}</p>
                    <p>Orbital Period: {responseData.data.orbital_period}</p>
                    <p>Diameter: {responseData.data.diameter}</p>
                </div>
                :
                ""
            }
            {
                (responseData && category === "starships") ?
                <div>
                    <p>Name: {responseData.data.name} </p>
                    <p>Model: {responseData.data.model}</p>
                    <p>Manufacturer: {responseData.data.manufacturer}</p>
                    <p>Cost in credits: {responseData.data.cost_in_credits}</p>
                </div>
                :
                ""
            }
            {
                (responseData && category === "species") ?
                <div>
                    <p>Name: {responseData.data.name} </p>
                    <p>Classification: {responseData.data.classification}</p>
                    <p>Designation: {responseData.data.designation}</p>
                    <p>Average height: {responseData.data.average_height}</p>
                </div>
                :
                ""
            }
            {
                (!responseData) ?
                <div>
                    <p>These aren't the droids you're looking for...</p>
                </div>
                :
                ""
            }
        </div>
    )
}

export default Display;