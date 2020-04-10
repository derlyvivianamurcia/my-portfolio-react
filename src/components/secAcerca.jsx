import React from "react";
import ImagenPersonal from '../img/personal2.jpg';

const secAcerca = () => {

    return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="main_title">
                        


                            <h2 className='title text-fluid'>SOBRE MI</h2>
                            <p className='perfil'>
                                <strong>  Ingeniera de sistemas </strong> con conocimiento y habilidad para planear, analizar, diseñar, implementar, medir y verificar sistemas de información. Además, con capacidad Investigativa para identificar determinadas
                características y poder analizar los posibles problemas en un contexto determinado, y de esta manera proponer y generar soluciones. Me caracterizo por ser una persona responsable, honesta, dinámica con buenas relaciones interpersonales,
                con profesionalismo y objetividad, para lograr las metas de productividad trazadas por la empresa. </p>

                            <p><strong>Actualmente:</strong> Me encuentro en formación Front-End con enfoque React, en la Academia GEEK. </p>

                            <img className='img-fluid'src={ImagenPersonal} ></img>
                        </div>
                   

                </div>
                </div>

            </div>
    );
};
export default secAcerca;