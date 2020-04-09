import React, { Component } from 'react'
import SectionDescription from './sectionDescription'
import SecAcerca from './secAcerca.jsx'
import SecServicios from './secServicios.jsx'

import { data } from "../utils/mocks/data.js";
import Educacion from './educacion';
import Cursos from './cursos.jsx';

class Footer extends React.Component {
    render() {
        return (
            <>
                  <footer class="footer_area ">
        <div class="container ">
            <div class="row justify-content-center ">
                <div class="col-lg-12 ">
                    <div class="footer_top flex-column ">
                        <div class="footer_logo ">
                            <h4>SÍGUEME</h4>
                        </div>
                        <div class="footer_social ">
                            <a href="https://www.linkedin.com/in/derly-viviana-murcia-bb2652168/ "><i class="fa fa-linkedin "></i></a>
                            <a href="https://github.com/derlyvivianamurcia "><i class="fa fa-github "></i></a>
                            <a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin "><i class="fa fa-envelope "></i></a>
                            <a href="https://twitter.com/DerlyVivianaMur "><i class="fa fa-twitter "></i></a>
                            <a href="https://www.facebook.com/derlyvivianamurcia "><i class="fa fa-facebook "></i></a>
                            <a href="https://www.instagram.com/derlyvivianams/ "><i class="fa fa-instagram "></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer_bottom justify-content-center ">
                <p class="col-lg-8 col-sm-12 footer-text ">
                    Copyright &copy; Derly Viviana Murcia Serrano
                    <script>
                        document.write(new Date().getFullYear());
                    </script>
                </p>
            </div>
        </div>
    </footer>


            </>



        );
    }
}

export default Footer;