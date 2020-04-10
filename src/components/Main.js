import React, { Component } from 'react'
import SectionDescription from './sectionDescription'
import SecAcerca from './secAcerca.jsx'
import SecServicios from './secServicios.jsx'

import { data } from "../utils/mocks/data.js";
import Educacion from './educacion';
import Cursos from './cursos.jsx';
import Experiencia from './experiencia.jsx';

class Main extends React.Component {
    render() {
        return (
            <div>

                <SectionDescription dataSectionDescription={data.Main} />
                <SecAcerca dataSecAcerca={data.Main} />
                <Educacion Educacion={data.Educacion} />
                <Cursos Cursos={data.Cursos} />
                <SecServicios SecServicios={data.Main} />
                <Experiencia Experiencia={data.Experiencia} />

            </div>


        );
    }
}

export default Main;