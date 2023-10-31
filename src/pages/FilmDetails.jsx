import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

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
        <div className="container">
            <section className="mt-5">
                <div className="card shadow my2 mb-2" style={{ height: "auto", width: "30rem", margin: "0 auto", float: "none", marginBottom: "10px" }}>
                    <div className="card-body">
                        <h4 className="card-title text-center mb-5">{filmDetails?.title}</h4>
                        <hr />
                        <p className="card-text">Director: <b>{filmDetails?.director}</b></p>
                        <hr />
                        <p className="card-text">Produced By: <b>{filmDetails?.producer}</b></p>
                        <hr />
                        <p className="card-text">Release Date: <b>{filmDetails?.release_date}</b></p>
                        <hr />
                        <p className="card-text">Rating: <a style={{color: "green"}}>{filmDetails?.rt_score}</a>/100</p>
                        <hr />
                        <p className="card-text">{filmDetails?.description}</p>
                        <Link to="/films" className="btn btn-secondary justify-content-center">Go Back</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FilmDetails;