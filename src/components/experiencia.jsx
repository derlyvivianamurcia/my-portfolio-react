import React from "react";
import Data from "../utils/mocks/data";

function Experiencia(props) {
    const { Cursos } = props;
    return (
        <>
        <section class=" features_area ">
            <div class="container ">
                <div class="row justify-content-center ">
                    <div class="col-lg-8 text-center ">
                        <div class="main_title ">
                            <h2>cursos </h2>
                                <p>
                                    En está sección se encuentra una descripción de cada uno de los cursos que he desarrollado, indicando las fechas, el lugar en el que los he realizado, entre otros datos.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner ">

                        {Cursos.map((item, index) => {
                            return (

                                <div className="col-lg-3 col-md-6">

                                <div className=" feature_item " key={`educacion-item-${index}`}>
                                   

                                    <img src="https://img.icons8.com/dusk/64/000000/augmented-reality.png "></img>
                                    <h4>{item.nombreCurso}</h4>
                                    <p><strong>Intensidad:</strong>{item.intensidad}</p>
                                    <p><strong>Fecha de aprobación:</strong> {item.fechaAprobacion}</p>
                                    <p><strong>Institución:</strong> {item.organizacion} </p>
                                       <div class="col-lg-3 col-md-6">
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