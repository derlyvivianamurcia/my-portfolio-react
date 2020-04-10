import React from "react";
import Data from "../utils/mocks/data";

function Experiencia(props) {
    const { Experiencia } = props;
    return (
        <>
            <section className=" features_area ">
                <div className="container ">
                    <div className="row justify-content-center ">
                        <div className="col-lg-8 text-center ">
                            <div className="main_title ">
                                <h2>Experiencia </h2>
                                <p>
                                    En está sección se encuentra la experiencia laboral y academica en diferentes campos del área de Ingeniería a fin de aplicar los conocimientos adquiridos en el trancurso de mi formación profesional.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner ">

                        {Experiencia.map((item, index) => {
                            return (

                                <div className="col-lg-3 col-md-6">

                                    <div className=" feature_item " key={`educacion-item-${index}`}>


                                        <img src={item.icono}></img>
                                        <h4>{item.nombreExperiencia}</h4>
                                        <p>{item.descripcion}</p>
                                        <p><strong>Empresa:</strong>{item.empresa} </p>
                                        <p><strong>Periodo:</strong> {item.periodo} </p>
                                        <div className="col-lg-3 col-md-6">
                                        </div>

                                    </div>
                                </div>




                            );
                        })}
                    </div>
                </div>
            </section>

        </>
    );
}

export default Experiencia;