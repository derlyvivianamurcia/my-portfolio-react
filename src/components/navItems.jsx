import React from "react";
import Data from "../utils/mocks/data";
import { Link } from 'react-router-dom';
import Portafolio_servicios from '../pages/Portafolio_servicios'

function navItems(props) {
    const { dataItems } = props;
    console.log(dataItems)
    return (
        <>
            <div className="container">
                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul className="nav navbar-nav menu_nav justify-content-end">
                        {dataItems.map((item, index) => {
                            return (
                                <li className="nav-item active" key={`nav-item-${index}`}>
                                    {/* <a className="nav-link" href={item.link}>{item.titulo} */}
                                    <Link to={item.link} className="link">{item.titulo}</Link>

                                    {/* </a> */}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

        </>
    );
}

export default navItems;