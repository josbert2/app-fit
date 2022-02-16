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
                    title='Press Arnold'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://thumbs.gfycat.com/DamagedVengefulLark-size_restricted.gif"/>
                    </div>
                    <div>
                    <Ejercicios 
                    title='Elevaciones laterales'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://i.imgur.com/Qmpzczz.gif"/>
                    </div>
                    <div>
                    <Ejercicios 
                    title='Pájaros con mancuernas'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://www.fitcron.com/wp-content/uploads/2021/04/03781301-Dumbbell-Rear-Fly_Shoulders_720.gif"/>
                    </div>

                    <div>
                    <Ejercicios 
                    title='Extensiones de tríceps con mancuerna por encima de la cabeza'
                    levels='3×10-12 -> 3×8-10 -> 3×6-8'
                    img="https://www.womenshealthlatam.com/wp-content/uploads/2019/10/74b-tricep-extension-1550754542.gif"/>
                    </div>
                    <div>
                    <Ejercicios 
                    title='Curl con mancuernas en banco inclinado'
                    levels='3×10-12 -> 3×8-12 -> 3×6-8'
                    img="https://www.deportrainer.com/img/cms/Post%20de%20blog/curl_de_biceps/curl-biceps-en-banco-inclinado.gif"/>
                    </div>

                    <div>
                    <Ejercicios 
                    title='Fondos entre bancos'
                    levels='3×10-12 -> 3×8-12 -> 3×6-8'
                    img="https://www.fitcron.com/wp-content/uploads/2021/03/13991301-Bench-dip-on-floor_Upper-Arms_720.gif"/>
                    </div>

                    <div>
                    <Ejercicios 
                    title='Curl de bíceps agarre martillo'
                    levels='3×10-12 -> 3×8-12 -> 3×6-8'
                    img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/curl-martillo-1573207328.gif?resize=320:*"/>
                    </div>
                </div>
            </div>
        </main>
      </React.Fragment>
    );
  };
  
  export default EspaldaPecho
  