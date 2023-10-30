import { useEffect, useState } from "react";

const Films = () => {

    // getting all films using API
    const [films, setFilms] = useState([]);
    const getFilms = () => {
        fetch('http://api-ghibli.herokuapp.com/films')
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
            <div className="container">
                <section className="row justify-content-center mt-5">
                    {films.map(film => (
                        <div className="col-md-6" key={film.id}>
                            <div className="card shadow my2 mb-2" style={{ width: "18rem" }}>
                                <img src={film.image} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{film.title}</h5>
                                    <p className="card-text">{film.description}</p>
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