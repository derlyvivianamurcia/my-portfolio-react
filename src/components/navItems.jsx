import React from "react";
import { Link } from 'react-router-dom';

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
                                <li className="nav-item " key={`nav-item-${index}`}>
                                    <Link to={item.link} className="nav-link">{item.titulo}</Link>
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