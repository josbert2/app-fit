import React, { useState, useEffect } from 'react'



interface Props {
  img: string
  title: string
  levels: string
}

const Ejercicios: React.FC<Props> = ({ img, title, levels }) => {
  
  const text = 'Completar'
  const [buttonText, setButtonText] = useState(text)
  useEffect(()=> {
    const timer = setTimeout(()=> {
       //setButtonText(text);
    }, 1000);
    return ()=> clearTimeout(timer);
 }, [buttonText])

  return (
    <div>
        <div className='px-3 py-3 border rounded shadow'>
            <div className="border-b h-44">
            <img className='w-full h-full' src={img} />
            </div>
            <div className='mt-4'>
                <h2>{title}</h2>
            </div>
            <div className='mt-5'>
                Niveles: <span className="text-sm text-gray-600 text-opacity-60">{levels}</span>
            </div>
            <button onClick={() => setButtonText("Completado")} className='w-full px-5 py-3 mt-5 text-sm text-green-500 uppercase border border-green-500 rounded'>
                {buttonText}
            </button>
        </div>
       
    </div>
  );
};

export default Ejercicios
