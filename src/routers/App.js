import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portafolio_servicios from '../pages/Portafolio_servicios';
import Inicio from '../pages/Inicio';
import ExperienciaPage from '../pages/ExperienciaPage';
import Contacto from '../pages/Contacto';

const App = () => {
  return (

      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Inicio} />
              <Route path='/Portafolio_servicios' component={Portafolio_servicios} />
              <Route path ='/ExperienciaPage' component={ExperienciaPage} />
              <Route path ='/Contacto' component={Contacto} />

          </Switch>
      </BrowserRouter>
  );
}


export default App;