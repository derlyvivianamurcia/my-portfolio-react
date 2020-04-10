import React from "react";
import { Link } from 'react-router-dom';

function contactame() {
    return (
        <>
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div className="banner_content text-center">
                            <h2>Contacto</h2>
                            <div className="page_link">
                                <Link to='/' classNameName="link">Inicio</Link>
                                <Link to='/Contacto' classNameName="link">Contacto</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact_info">
                            <div className="info_item">
                                <i className="lnr lnr-home"></i>
                                <h6>Antioquia, Colombia</h6>
                                <p>Medellín</p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-phone-handset"></i>
                                <h6><a href="#">57 (313) 314 4090</a></h6>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-envelope"></i>
                                <h6><a href="#">derlyvivianamurcia@gmail.com</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Nombre"></input>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email"></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Mensaje"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-right">
                                <button type="submit" value="submit" className="primary_btn">
                                    <span>Enviar mensaje</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default contactame;