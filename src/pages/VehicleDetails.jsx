import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const VehicleDetails = () => {

    const { vehicleid } = useParams();

    const [vehicleDetails, setVehicleDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/vehicles/${vehicleid}`)
            .then(response => response.json())
            .then(vehicleData => setVehicleDetails(vehicleData))
            .catch(event => alert(event.message));
    }, [vehicleid]);

    return (
        <div className="container">
            <section className="mt-5">
                <div className="card shadow my2 mb-2" style={{ height: "auto", width: "30rem", margin: "0 auto", float: "none", marginBottom: "10px" }}>
                    <div className="card-body">
                        <h4 className="card-title text-center mb-5">{vehicleDetails?.name}</h4>
                        <hr />
                        <p className="card-text">Vehicle Class: <b>{vehicleDetails?.vehicle_class}</b></p>
                        <hr />
                        <p className="card-text">Vehicle Length: <b>{vehicleDetails?.length}</b></p>
                        <hr />
                        <p className="card-text">Description: <b>{vehicleDetails?.description}</b> </p>
                        <Link to="/films" className="btn btn-secondary justify-content-center">Go Back</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VehicleDetails;