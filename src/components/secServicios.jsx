import React from "react";
import ImagenSecundaria from '../img/imgsecundaria.png';

const secServicio = () => {
   
    return (
        <section class="portfolio_area" id="portfolio">
            <div class="container">
                <div class="row justify-content-start align-items-center ">
                    <div class="col-lg-5 ">
                        <div class="about_img ">
                            <img class="img-fluid " src={ImagenSecundaria} alt=" "></img>
                        </div>
                    </div>
                    <div class="offset-lg-1 col-lg-5 ">
                        <div class="main_title text-left ">
                            <h2>Portafolio de Servicios  </h2>
                            <p>
                                En esta sección encontrarás todo en relación a lo que he realizado en el transcurso de mi vida Académica - Profesional, a nivel de resultados.
                                </p>

                                <a class="primary_btn" href="/about.html"><span>Proyectos</span></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    };
    export default secServicio;