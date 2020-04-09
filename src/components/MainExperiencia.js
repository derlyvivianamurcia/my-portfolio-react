import React, { Component } from 'react'
import SectionDescription from './sectionDescription'
import SecAcerca from './secAcerca.jsx'
import SecServicios from './secServicios.jsx'
import AreasTrabajo from './areasTrabajo.jsx'
import Proyectos from './proyectos.jsx'

import { data } from "../utils/mocks/data.js";
import ItemsExperiencia from './itemsExperiencia'


class MainExperiencia extends React.Component {
    render() {
        return (
            <>
            <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="container">
                <div class="banner_content text-center">
                    <h2>Experiencia</h2>
                    <div class="page_link">
                        <a href="index.html">Inicio</a>
                        <a href="services.html">Experiencia</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
                <ItemsExperiencia ItemsExperiencia={data.Experiencia} />

            

            </>



        );
    }
}

export default MainExperiencia;