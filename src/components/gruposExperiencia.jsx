import React from "react";
import { Router } from "react-router-dom";
import ImagenUniversidad from '../img/universidad.jpg'
import Sigepi from '../img/sigepi.png'
import Giecom from '../img/giecom.png'

function gruposExperiencia() {
    return (
        <>
           <div class="testimonial_area section_gap_bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <div class="main_title">
                        <h2>Grupos de trabajo</h2>
                        <p>Estos son los prupos de trabajo</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="testi_slider owl-carousel">
                    <div class="testi_item">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src={ImagenUniversidad}  alt="" className='iconogrupo'></img>
                            </div>
                            <div class="col-lg-8">
                                <div class="testi_text">
                                    <h4>Universidad de la Amazonia</h4>
                                    <p>Departamento de Tecnología Informática - Vicerrectoría de Investigaciones </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testi_item">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src={Sigepi}
                                    ></img>
                            </div>
                            <div class="col-lg-8 ">
                                <div class="testi_text ">
                                    <h4>SIGEPI </h4>
                                    <p>Sistema de Informacón para la gestión de prpyectos de Investigación</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testi_item">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src={Giecom}  alt=" "></img>
                            </div>
                            <div class="col-lg-8 ">
                                <div class="testi_text ">
                                    <h4>GIECOM</h4>
                                    <p> GRUPO DE INVESTIGACIÓN. Gestión del Conocimiento, Informática, Electrónica y Comunicaciones </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default gruposExperiencia;