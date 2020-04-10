import React from "react";
import Data from "../utils/mocks/data";
import { Link } from 'react-router-dom';

function contactame() {
    return (
        <>
            <section class="banner_area">
                <div class="banner_inner d-flex align-items-center">
                    <div class="container">
                        <div class="banner_content text-center">
                            <h2>Contacto</h2>
                            <div class="page_link">
                            <Link to='/' className="link">Inicio</Link>
                            <Link to='/Contacto' className="link">Contacto</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="contact_info">
                                <div class="info_item">
                                    <i class="lnr lnr-home"></i>
                                    <h6>Antioquia, Colombia</h6>
                                    <p>Medellín</p>
                                </div>
                                <div class="info_item">
                                    <i class="lnr lnr-phone-handset"></i>
                                    <h6><a href="#">57 (313) 314 4090</a></h6>

                                </div>
                                <div class="info_item">
                                    <i class="lnr lnr-envelope"></i>
                                    <h6><a href="#">derlyvivianamurcia@gmail.com</a></h6>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Nombre"></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email"></input>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" id="message" rows="1" placeholder="Mensaje"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12 text-right">
                                    <button type="submit" value="submit" class="primary_btn">
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