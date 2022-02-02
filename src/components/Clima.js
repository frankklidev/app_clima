import React from 'react';
const Clima = ({resultadoApi}) => {

    //extraer los valores de la clima
    const{name,main}=resultadoApi;
    if (!name) return null;
    // Grados Kelvin
    const kelvin= 273.15;


        
    return ( 
   <div className="card-panel white col s12">
     <div className="black-text">
    <h2>El clima de {name}:</h2>
    <p className="temperatura">
     {parseFloat(main.temp-kelvin,10).toFixed(1)} <span>&#x2103;</span>
    </p>
    <p>Temperatura Max : 
     {parseFloat(main.temp_max-kelvin,10).toFixed(1)} <span>&#x2103;</span>
    </p>
    <p>Temperatura Min :
     {parseFloat(main.temp_min-kelvin,10).toFixed(1)} <span>&#x2103;</span>
    </p>
     </div>
   </div>
    );
}
 
export default Clima;