import React from "react";
import Data from "../utils/mocks/data";

function Proyectos(props) {
    const { Proyectos } = props;
    return (
        <>
        <section class="features_area" id="project_pw">
        <div class=" container ">
            <div class="row justify-content-center ">
                <div class="col-lg-8 text-center ">
                    <div class="main_title ">
                        <h2>proyectos
                            
                             Diseño de páginas web
                        </h2>
                        <p>A continuación se encuentran algunos de mis favoritos.</p>
                    </div>
                </div>
            </div>
                    <div classNameName="row feature_inner ">

                        {Proyectos.map((item, index) => {
                            return (

                                <div class="col-lg-3 col-md-6 ">
                                    <div class="feature_item " key={`proyect-item-${index}`}>>
                                        <img src="https://img.icons8.com/dusk/64/000000/web.png "></img>
                                        <h4>{item.nombreProyecto}</h4>
                                        <p>{item.descriptionProject} </p>
                                        <a class=" primary_btn " href="https://derlyvivianamurcia.github.io/tribute_page/ ">{item.viewProject}</a>
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

export default Proyectos;