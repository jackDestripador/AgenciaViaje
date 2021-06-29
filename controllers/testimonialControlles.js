import {
    Testimonial
} from '../models/testimoniales.js';

const guardarTestimoniales = async (req, res) => {

    //validar
    const {
        nombre,
        correo,
        mensaje
    } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({
            mensaje: `El nombre esta vacio`
        });
        //console.log('El nombre esta vacio');
    }
    if (correo.trim() === '') {
        errores.push({
            mensaje: `El correo esta vacio`
        });
        //console.log('El correo esta vacio');
    }
    if (mensaje.trim() === '') {
        errores.push({
            mensaje: `El mensaje esta vacio`
        });
        //console.log('El mensaje esta vacio');
    }

    //console.log(req.body);

    if (errores.length > 0) {
        // Consultar Testimoniales Existente
        const testimoniales =await Testimonial.findAll();

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales

        })
    } else {
        //almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje

            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }

    }
}



export {
    guardarTestimoniales

}