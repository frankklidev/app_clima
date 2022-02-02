
import React,{useState,useEffect} from 'react';
import Fomulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';
import { Header } from './components/Header';



function App() {

  //Funcion que Toma la busqueda 

  const [busqueda,guardarBusqueda] = useState({
    ciudad:'',
    pais:  ''
});

const [consultar,guardarConsultar]=useState(false);
const [resultadoApi,guardarResultadoApi]=useState({});
const [error, guardarError]=useState(false);

 const {ciudad,pais}= busqueda;
 useEffect(()=>{
   const consultarApi=async()=>{
      if (consultar){
        const appId='7950ab7bd8fcbd246085f2fa3448d151';
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultadoApi(resultado);
      guardarConsultar(false);

      //Detecta si hubo rsultados Correctos
      if(resultadoApi.cod==='404'){
        guardarError(true);
       }else{
         guardarError(false);
       }
   }
      }
   consultarApi();
 },[consultar]);

 let componente;
 if(error){
  componente=<Error mensaje="no hay resulados que mostrar"/>
 }else{
   componente=<Clima
      resultadoApi={resultadoApi}
   />
 }
 
 
  return (
   <>

   <Header
     titulo='Clima App'
   />

   <div className='contenedor-form'>
     <div className='row'>
     <div className='col m6 s12'>
       <Fomulario
         busqueda={busqueda}
         guardarBusqueda={guardarBusqueda}
         guardarConsultar={guardarConsultar}
       />
     </div>
     <div className='col m6 s12'>
      {componente}
      
     </div>
     </div>
   </div>
   </>
  );
}

export default App;
