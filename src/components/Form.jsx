import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = (props) => {
    // category/id state from user input (option)
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${category}/${id}`)
    }

    return (
        <div className="d-flex flex-row justify-content-center align-items-center mt-5">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label for="category">Search for:</label>
                <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option></option>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                    <option value="species">species</option>
                </select>
                <label for="id">ID:</label>
                <input type="number" name="id" onChange={(e) => setId(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Form;