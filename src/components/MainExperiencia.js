import React, { Component } from 'react'


import { data } from "../utils/mocks/data.js";
import ItemsExperiencia from './itemsExperiencia'
import GruposExperiencia from './gruposExperiencia.jsx'
import { Link } from 'react-router-dom';


class MainExperiencia extends React.Component {
    render() {
        return (
            <>
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content text-center">
                                <h2>Experiencia</h2>
                                <div className="page_link">
                                    <Link to='/' className="link">Inicio</Link>
                                    <Link to='/ExperienciaPage' className="link">Experiencia</Link>

                                </div>
                            </div>
            </div>
        </div>
    </section>
                <ItemsExperiencia ItemsExperiencia={data.Experiencia} />
                <GruposExperiencia GruposExperiencia={data.Experiencia} />

            

            </>



        );
    }
}

export default MainExperiencia;