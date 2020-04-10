import React from "react";
import Central from '../images/imgcentral.png';

function sectionDescription() {
    return (
        
             <section className="home_banner_area">
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner_content">
                                <h3 className="text-uppercase">Hell0</h3>
                                <h1 className="text-uppercase">I am Derly Viviana Murcia Serrano</h1>
                                <h5 className="text-uppercase">SYSTEMS ENGINEER AND FRONT-END DEVELOPER </h5>
                                <div className="d-flex align-items-center">
                                    <a className="primary_btn" href="https://drive.google.com/file/d/1IbYlGl1t76FqJ4HXDbNbXZ9uj--8QJ83/view?usp=sharing"><span>visualizar cv</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="home_right_img">
                                <img className="img-fluid" src={Central} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default sectionDescription;