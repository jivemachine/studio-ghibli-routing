import { useState, useEffect } from "react";
import { Link,useParams } from 'react-router-dom';

const FilmDetails = () => {

    const { filmid } = useParams();

    const [filmDetails, setFilmDetails] = useState(null);

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/films/${filmid}`)
        .then(response => response.json())
        .then(filmData => setFilmDetails(filmData))
        .catch(event => alert(event.message));
    }, [filmid]);

    return (
        <div className="text-center">
            <div className="card">
                <div className="card-body">
                    <h4>{filmDetails?.title}</h4>
                    <p>Director: {filmDetails?.director}</p>
                    <p>Release Date: {filmDetails?.release_date}</p>
                    <p>Rating: {filmDetails?.rt_score}/100</p>
                    <Link to="/films">Go Back</Link>
                </div>
            </div>
        </div>
    );
}

export default FilmDetails;