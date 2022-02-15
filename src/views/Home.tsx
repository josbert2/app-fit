import React from 'react'
import Header from '../components/Header'

import EspaldaPecho from './Rutinas/SetOne/EspaldaPecho';

const Home = () => {
  
  return (
    <React.Fragment>
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1>Variante de ejercicios mezclada</h1>
      </div>
      
     
      <main>
        <Header rutina="Lunes" title="Pecho y Espalda"  />
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <EspaldaPecho/>
        </div>

        
      </main>
    </React.Fragment>
  );
};

export default Home
