import React from "react";
import { Router } from "react-router-dom";

function AreasTrabajo(props) {
    const { AreasTrabajo } = props;
    return (
        <>
            <div class="testimonial_area section_gap_bottom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <div class="main_title">
                                <h2>areas de trabajo</h2>
                                <p>Estos son los campos de acción de mis trabajos.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        {AreasTrabajo.map((item, index) => {
                            return (
                                <div class="testi_slider owl-carousel">

                                    <div class="testi_item" key={`educacion-item-${index}`}>
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <img src="https://img.icons8.com/dusk/64/000000/service.png" alt=""></img>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="testi_text">
                                                    <h4>{item.nombreArea}</h4>
                                                    <p>{item.descripcionArea}
                                                    </p>
                                                    <a class="primary_btn" href="#">{item.btbProyectos}</a>
                                                </div>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>


                            );

                        })}
                    </div>
                </div>
            </div>


        </>
    )
}

export default AreasTrabajo;