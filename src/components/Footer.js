import React, { Component } from 'react'


class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer_area ">
                    <div className="container ">
                        <div className="row justify-content-center ">
                            <div className="col-lg-12 ">
                                <div className="footer_top flex-column ">
                                    <div className="footer_logo ">
                                        <h4>SÍGUEME</h4>
                                    </div>
                                    <div className="footer_social ">
                                        <a href="https://www.linkedin.com/in/derly-viviana-murcia-bb2652168/ "><i className="fa fa-linkedin "></i></a>
                                        <a href="https://github.com/derlyvivianamurcia "><i className="fa fa-github "></i></a>
                                        <a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin "><i className="fa fa-envelope "></i></a>
                                        <a href="https://twitter.com/DerlyVivianaMur "><i className="fa fa-twitter "></i></a>
                                        <a href="https://www.facebook.com/derlyvivianamurcia "><i className="fa fa-facebook "></i></a>
                                        <a href="https://www.instagram.com/derlyvivianams/ "><i className="fa fa-instagram "></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row footer_bottom justify-content-center ">
                            <p className="col-lg-8 col-sm-12 footer-text ">
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