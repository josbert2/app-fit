import React from "react";
import Ejercicios from '../../../../components/Ejercicios';


const EspaldaPecho = () => {
  
    return (
      <React.Fragment>
        <main>
            <div className="px-4 py-6 sm:px-0"> 
                <div className="grid grid-cols-5 gap-5">
                    <div>
                    <Ejercicios 
                    title='Sentadillas'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sentadillas-1601979375.gif"/>
                    </div>

                    <div>
                    <Ejercicios 
                    title='Peso muerto rumano'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/dumbbelldeadlift-1457044319.gif?resize=480:*"/>
                    </div>
                    
                    <div>
                    <Ejercicios 
                    title='Tijera Doble (atrás y adelante)'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://www.yomeentreno.com/wp-content/uploads/2017/03/dumbbell-lunge_STATIC.gif"/>
                    </div>

                    <div>
                    <Ejercicios 
                    title='Sentadilla Sumo'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://i.pinimg.com/originals/7c/8d/0f/7c8d0fcd212c531e86e32e187b9a1263.gif"/>
                    </div>

                    <div>
                    <Ejercicios 
                    title='Elevación de talones de pie'
                    levels='3×10-12 -> 3×8-12 -> 3×6-8'
                    img="https://www.foodspring.de/magazine/wp-content/uploads/2020/11/Wadenheben-3.gif"/>
                    </div>

                    <div>
                    <Ejercicios 
                    title='Elevaciones de cadera con rodillas dobladas'
                    levels='3×10-12 -> 3×8-12 -> 3×6-8'
                    img="https://www.cambiatufisico.com/wp-content/uploads/Elevaciones-de-cadera-con-rodillas-dobladas.jpg"/>
                    </div>

                    <div>
                    <Ejercicios 
                    title='Encogimientos para oblicuos'
                    levels='3×10-12 -> 3×8-12 -> 3×6-8'
                    img="https://www.cambiatufisico.com/wp-content/uploads/Encogimientos-para-oblicuos-tumbado-de-lado.jpg"/>
                    </div>
                </div>
            </div>
        </main>
      </React.Fragment>
    );
  };
  
  export default EspaldaPecho
  