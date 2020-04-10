import React from "react";

function Educacion(props) {
    const { Educacion } = props;
    return (
        <>
            <section className="portfolio_area" id="portfolio">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2> formación académica </h2>
                                <p>
                                En está sección se encuentra mi breve recorrido académico. En el se especifica los estudios que he realizado, indicando las fechas, el lugar en el que los he realizado, entre otros datos. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner ">
                        {Educacion.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6">

                                    <div className="feature_item " key={`educacion-item-${index}`}>

                                    <img src="https://img.icons8.com/dusk/64/000000/student-center.png"></img>
                                    <h4 className='tipoFormacion' > {item.nombreCard}</h4>
                                    <p className='titulo'><strong>Titulación:</strong> {item.titulacion}</p>
                                    <p className='añoInico'><strong>Año de inicio:</strong> {item.añoInico} </p>
                                    <p className='añoGraaduacion'><strong>Año de graduación:</strong>{item.añoGraduacion} </p>
                                    <p className='numSemestres'><strong>Nº de Semestres aprobados:</strong> {item.numSemestre}</p>
                                    <p className='institucion'><strong>Institución:</strong>{item.Institucion}</p>
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

export default Educacion;