const Home = () => {
    return (
        <div className="container justify-content-center mt-5" style={{ height: "10rem", width: "50rem" }}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Studio Ghibli Wiki-Style Project</h5>
                    <p className="card-text">
                        My main goal with this application is creating a little interface to quickly reach different data using the <a href="https://ghibliapi.vercel.app/" target="_blank">Studio Ghibli API</a>. All of the data used in this project comes from that site.</p>
                    <p>I coded this project using react and styled it all in bootstrap 5. The GitHub repo for the project is <a href="https://github.com/jivemachine/studio-ghibli-routing" target="_blank">here</a>.
                        This project is a coding lab from the <a href="https://covalence.io" target="_blank">covalence</a> react course.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;