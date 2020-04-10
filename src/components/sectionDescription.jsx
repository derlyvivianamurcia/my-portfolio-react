import React from "react";
import { data } from "../utils/mocks/data";
import Central from '../images/imgcentral.png';

function sectionDescription() {
    return (
        
        // <div className="banner_inner">

        //      <img className="img-fluid" src={BannerInicial} alt=""></img>
        //     <div className="d-flex align-items-center">
        //         <a className="" href="https://drive.google.com/file/d/1daldM8lqdmKEBht1v60x9SiWvBhGCoDX/view?usp=sharing"><span></span></a>
              
        //        </div>
        // </div>

       <section className="home_banner_area">
            <div className="banner_inner d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="banner_content">
                                <h3 class="text-uppercase">Hell0</h3>
                                <h1 class="text-uppercase">I am Derly Viviana Murcia Serrano</h1>
                                <h5 class="text-uppercase">SYSTEMS ENGINEER AND FRONT-END DEVELOPER </h5>
                                <div class="d-flex align-items-center">
                                    <a class="primary_btn" href="https://drive.google.com/file/d/1daldM8lqdmKEBht1v60x9SiWvBhGCoDX/view?usp=sharing"><span>visualizar cv</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="home_right_img">
                                <img class="img-fluid" src={Central} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


 /*   <section className="banner_area">
                    <div className="banner_area d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content text-center">
                            <img className="img-fluid" src={BannerInicial} alt=""></img>
                                <div className="page_link">
                             

                                </div>
                            </div>
                        </div>
                    </div>
                </section> */






    );
};
export default sectionDescription;