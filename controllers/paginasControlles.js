import { Viaje } from '../models/Viajes.js';
import {Testimonial} from '../models/testimoniales.js';

const paginaInicio = async (req,res)=>{
    
    // Construir 3 viajes del modelo Viaje
    
    const promiseDB = [];
    promiseDB.push( Viaje.findAll({limit:3}));
    promiseDB.push( Testimonial.findAll({limit:3}));
    
    try {
        const resultado = await Promise.all(promiseDB);
      /*
        const viajes = await Viaje.findAll({ limit: 3});
        const testimoniales =await Testimonial.findAll();
      */ 
        res.render('inicio',{
            pagina:'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales:resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
    
}

const paginaNosotros =(req,res)=>{//req - lo que enviamos: res- lo que que express nos reponde

    res.render('nosotros',{
    pagina: 'Nosotros'        
    });
}

const paginaViajes = async (req,res)=>{
        //Consultar BD
    
    const viajes = await Viaje.findAll();
    
    //console.log(viajes);
    
    res.render('viajes',{
    pagina: 'Proximos Viajes',
    viajes,
    });
}


const paginaTestimoniales = async (req,res)=>{//req - lo que enviamos: res- lo que que express nos reponde


    try {
        const testimoniales =await Testimonial.findAll();

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales    
        });
    } catch (error) {
        console.log(error);    
    }
            
    
}
//Muestra un viaje por su slug

const paginaDetalleViaje = async (req,res)=>{
    
    
    const{ slug }=req.params;
    try{

        const viaje =  await Viaje.findOne({where :  {slug} })
        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje,
                    
            });
        

    }catch(error){
        console.log(error);
    }
    
    
    //console.log(req.params);
}


export{
    paginaInicio,
    paginaNosotros,    
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}