import React from "react";

function AreasTrabajo(props) {
    const { AreasTrabajo } = props;
    return (
        <>
            <div className="testimonial_area section_gap_bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>areas de trabajo</h2>
                                <p>Estos son los campos de acción de mis trabajos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {AreasTrabajo.map((item, index) => {
                            return (
                                <div className="testi_item" key={`areas-item-${index}`}>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src={item.icono} alt=""></img>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="testi_text">
                                                <h4>{item.nombreArea}</h4>
                                                <p>{item.descripcionArea}
                                                </p>
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