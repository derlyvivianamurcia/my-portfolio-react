import React, { Component } from 'react'
import SectionDescription from './sectionDescription'
import SecAcerca from './secAcerca.jsx'
import SecServicios from './secServicios.jsx'
import AreasTrabajo from './areasTrabajo.jsx'
import Proyectos from './proyectos.jsx'
import { Link } from 'react-router-dom';
import { data } from "../utils/mocks/data.js";


class MainPortafolioServicios extends React.Component {
    render() {
        return (
            <>
                <section class="banner_area">
                    <div class="banner_inner d-flex align-items-center">
                        <div class="container">
                            <div class="banner_content text-center">
                                <h2>Portafolio de Servicios</h2>
                                <div class="page_link">
                                <Link to='/' className="link">Inicio</Link>
                                <Link to='/Portafolio_servicios' className="link">Portafolio de Servicios</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <SecServicios SecServicios={data.Main} />

                <AreasTrabajo AreasTrabajo={data.AreasTrabajo} />
                <Proyectos Proyectos={data.Proyectos} />

            </>



        );
    }
}

export default MainPortafolioServicios;