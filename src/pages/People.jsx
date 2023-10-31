import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = () => {

    // getting all people in films using API
    const [people, setPeople] = useState([]);
    const getPeople = () => {
        fetch('http://api-ghibli.herokuapp.com/people')
        .then(response => response.json())
        .then(allPeople => setPeople(allPeople))
    };

    useEffect(() => {
        getPeople();
    },[people]);


    return (
        <div className="mt-2 text-center">
            <h1>People</h1>
        </div>
        
    );
}

export default People;