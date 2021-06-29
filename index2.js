const express=require('express');
const app=express();

//Definir puerto
//variables de entorno process.env.PORT
const port=process.env.PORT || 4000;
pp.get('/',(req,res)=>{//req- lo qe enviamos: res-lo que no responde
    res.send('Inicio');
    //res.render();
    /* Mandar objeto
    res.json({
        id:1
    });
    */
});

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})