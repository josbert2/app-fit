import React from 'react'
import Header from '../components/Header'

import EspaldaPecho from './Rutinas/SetOne/EspaldaPecho';
import HombrosBrazos from './Rutinas/SetOne/HombrosBrazos';
import PiernasAbdominales from './Rutinas/SetOne/PiernasAbdominales';

const Home = () => {
  
  return (
    <React.Fragment>
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1>Variante de ejercicios mezclada <strong>SET 1</strong></h1>
      </div>
      
     
      <main>
        <Header rutina="Lunes" title="Pecho y Espalda"  />
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <EspaldaPecho/>
        </div>

        <Header rutina="Miercoles" title="HOMBROS Y BRAZOS"  />
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <HombrosBrazos/>
        </div>

        <Header rutina="Viernes" title="PIERNAS Y ABDOMINALES"  />
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <PiernasAbdominales/>
        </div>

        
      </main>
    </React.Fragment>
  );
};

export default Home
