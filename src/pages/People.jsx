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
    }, [people]);


    return (
        <>
            {/* load different characters as cards */}
            <div className="container">
                <section className="mt-5">
                    {people.map(character => (
                        <div key={character.id}>
                            <div className="card" style={{ width: "20rem", width: "auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <Link to={`/people/${character.id}`} className="btn btn-outline-secondary">
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

export default People;