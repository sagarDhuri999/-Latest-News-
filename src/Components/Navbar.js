import React from 'react'
import {
    Link
} from "react-router-dom";


const Navbar = (props) => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ">
                    <Link className="navbar-brand " to="/">NEWS MONKS  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-7" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2"> <Link className="nav-a active" to="/">Home</Link></li>
                            <li className="nav-item mx-2">  <Link className="nav-a" to="business/"> Business </Link> </li>
                            <li className="nav-item mx-2"> <Link className="nav-a" to="health/"> Health </Link> </li>
                            <li className="nav-item mx-2">  <Link className="nav-a" to="science/"> Science  </Link> </li>
                            <li className="nav-item mx-2">  <Link className="nav-a" to="general/"> General  </Link> </li>
                            <li className="nav-item mx-2">  <Link className="nav-a" to="technology/">Technology  </Link> </li>
                            <li className="nav-item mx-2">  <Link className="nav-a" to="sports/">Sports  </Link> </li>
                            <li className="nav-item mx-2">  <Link className="nav-a" to="entertainment/">Entertainment </Link> </li>

                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar