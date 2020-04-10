import React from "react";
import ImagenSecundaria from '../img/imgsecundaria.png';

const secServicio = () => {

    return (
        <>
            <section className="portfolio_area" id="portfolio">
                <div className="container">
                    <div className="row justify-content-start align-items-center ">
                        <div className="col-lg-5 ">
                            <div className="about_img ">
                                <img className="img-fluid " src={ImagenSecundaria} alt=" "></img>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-5 ">
                            <div className="main_title text-left ">
                                <h2>Portafolio de Servicios  </h2>
                                <p>
                                    En esta sección encontrarás todo en relación a lo que he realizado en el transcurso de mi vida Académica - Profesional, a nivel de resultados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default secServicio;