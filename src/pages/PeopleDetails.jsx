import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const FilmDetails = () => {

    const { personid } = useParams();

    const [peopleDetails, setPersonDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/people/${personid}`)
            .then(response => response.json())
            .then(personData => setPersonDetails(personData))
            .catch(event => alert(event.message));
    }, [personid]);

    return (
        <div className="container">
            <section className="mt-5">
                <div className="card shadow my2 mb-2" style={{ height: "auto", width: "30rem", margin: "0 auto", float: "none", marginBottom: "10px" }}>
                    <div className="card-body">
                        <h4 className="card-title text-center mb-5">{peopleDetails?.name}</h4>
                        <hr />
                        <p className="card-text">Gender: <b>{peopleDetails?.gender}</b></p>
                        <hr />
                        <p className="card-text">Age: <b>{peopleDetails?.age}</b></p>
                        <hr />
                        <p className="card-text">Eye Color: <b>{peopleDetails?.eye_color}</b></p>
                        <hr />
                        <p className="card-text">Hair Color: <b>{peopleDetails?.hair_color}</b></p>
                        <hr />
                        <Link to="/people" className="btn btn-secondary justify-content-center">Go Back</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FilmDetails;