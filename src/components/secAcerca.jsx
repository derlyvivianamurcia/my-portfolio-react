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
                            <strong>  Ingeniera de sistemas, Desarrolladora Web Front-End con énfasis en React.js, HTML, CSS y JavaScript;  </strong> con habilidades para planear, diseñar e implementar sistemas de información. Soy una profesional proactiva, con buenas relaciones interpersonales y alta motivación por aprender.  </p>
                       
                        <img className='img-fluid' src={ImagenPersonal} ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default secAcerca;