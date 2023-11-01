import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Films = () => {

    // getting all films using API
    const [films, setFilms] = useState([]);
    const getFilms = () => {
        fetch('https://ghibliapi.vercel.app/films')
            .then(response => response.json())
            .then(allFilms => setFilms(allFilms))
    };

    useEffect(() => {
        getFilms();
    },[films]);

    return (
        <>
            <div className="m-2 text-center">
                <h1>Films</h1>
            </div>

            {/* load films as cards */}
            <div className="container justify-content-center">
                <section className="mt-5">
                    {films.map(film => (
                        <div key={film.id}>
                            {/* <div className="card shadow my2 mb-2" style={{ width: "18rem" }}> */}
                            <div className="card shadow my2 mb-2" style={{width: "20rem", width: "auto"}}>
                                {/* <img src={film.image} className="card-img-top" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{film.title}</h5>
                                    <p className="card-text">{film.description}</p>
                                    <Link to={`/films/${film.id}`} className="btn btn-outline-secondary">
                                        More Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}

export default Films;