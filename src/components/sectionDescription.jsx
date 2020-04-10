import React from "react";
import { data } from "../utils/mocks/data";
import ImagenCentral from '../img/imgcentral.png';
import BannerInicial from '../img/bannerInicial.JPG';

function sectionDescription() {
    return (
        
        // <div className="banner_inner">

        //     <img className="img-fluid" src={BannerInicial} alt=""></img>
        //     <div className="d-flex align-items-center">
        //         <a className="" href="https://drive.google.com/file/d/1daldM8lqdmKEBht1v60x9SiWvBhGCoDX/view?usp=sharing"><span></span></a>
              
        //         </div>
        //     </div>

   <section className="banner_area">
                    <div className="banner_area d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content text-center">
                            <img className="img-fluid" src={BannerInicial} alt=""></img>
                                <div className="page_link">
                             

                                </div>
                            </div>
                        </div>
                    </div>
                </section>






    );
};
export default sectionDescription;