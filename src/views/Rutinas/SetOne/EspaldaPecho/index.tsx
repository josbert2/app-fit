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
                    title='Press inclinado'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://www.fitcron.com/wp-content/uploads/2021/03/03011301-Dumbbell-Decline-Bench-Press_Chest_720.gif"/>
                    </div>
                    <div>
                    <Ejercicios 
                    title='Remo con mancuerna a una mano'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dumbbell-single-arm-row-1547729333.gif?crop=1xw:1xh;center,top&resize=480:*"/>
                    </div>
                    <div>
                    <Ejercicios 
                    title='Press de banca'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://www.yomeentreno.com/wp-content/uploads/2018/03/07.gif"/>
                    </div>
                    <div>
                    <Ejercicios 
                    title='Remo con mancuernas en banco inclinado'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://moda-hombre.com/wp-content/uploads/2020/03/Remo-con-mancuernas-al-pecho-1.gif"/>
                    </div>
                    <div>
                    <Ejercicios 
                    title='Aperturas en banco inclinado'
                    levels='3×10-12 -> 3×8-12 -> 3×6-8'
                    img="https://i0.wp.com/www.gimnasiogym.net/wp-content/uploads/2021/03/aperturas-con-mancuernas-5.gif?resize=628%2C419&ssl=1"/>
                    </div>
                </div>
            </div>
        </main>
      </React.Fragment>
    );
  };
  
  export default EspaldaPecho
  