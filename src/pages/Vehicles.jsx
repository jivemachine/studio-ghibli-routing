import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Vehicles = () => {

    // getting all films using API
    const [vehicles, setVehicles] = useState([]);
    const getVehicles = () => {
        fetch('https://ghibliapi.vercel.app/vehicles')
            .then(response => response.json())
            .then(allVehicles => setVehicles(allVehicles))
    };

    useEffect(() => {
        getVehicles();
    },[vehicles]);

    return (
        <>
            <div className="m-2 text-center">
                <h1>Vehicles</h1>
            </div>

            {/* load films as cards */}
            <div className="container justify-content-center">
                <section className="mt-5">
                    {vehicles.map(vehicle => (
                        <div key={vehicle.id}>
                            <div className="card shadow my2 mb-2" style={{width: "20rem", width: "auto"}}>
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.name}</h5>
                                    <p className="card-text">{vehicle.description}</p>
                                    <Link to={`/vehicles/${vehicle.id}`} className="btn btn-outline-secondary">
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

export default Vehicles;