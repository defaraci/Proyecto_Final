/**Boton de Contactar */
document.getElementById('boton_contactar').addEventListener('click',function(){
    if (document.getElementById('formulario').style.display ==='none'){
        document.getElementById('formulario').style.display ='block'
    }else{
        document.getElementById('formulario').style.display ='none'
    }
    document.getElementById('msj_agradecimiento').style.display ='none'
});
/**Mensaje de Agradecimiento */
document.getElementById('boton_enviar').addEventListener('click',function(){
    document.getElementById('msj_agradecimiento').style.display ='block'
})
/**Boton de Ver Video */
document.getElementById('boton_video_pres').addEventListener('click',function(){
    if (document.getElementById('video').style.display ==='none'){
        document.getElementById('video').style.display ='block'
    }else{
        document.getElementById('video').style.display ='none'
    };
});
/**Modo Nocturno */
document.getElementById('modo_nocturno').addEventListener('click',function(){
    if (document.getElementById('documento').style.backgroundColor==='white'){
        document.getElementById('documento').style.backgroundColor='black';
        document.getElementById('documento').style.color='white';
    }else{
        document.getElementById('documento').style.backgroundColor ='white';
        document.getElementById('documento').style.color ='black';
    };
});
/**Animación Titulos */
    /**informacion personal */
document.getElementById('animacion_inf_personal').addEventListener('click',function(){
    document.getElementById('titulo_inf_personal').innerHTML='1nf0rm4c10n P3rs0n41';
    setTimeout(titulo, 2000)
    function titulo(){
        document.getElementById('titulo_inf_personal').innerHTML='Información Personal';
    }
});
    /**experiencia */
document.getElementById('animacion_exp').addEventListener('click',function(){
    document.getElementById('titulo_exp').innerHTML='3xp3r13nc14';
    setTimeout(titulo, 2000)
    function titulo(){
        document.getElementById('titulo_exp').innerHTML='Experiencia';
    }
});
    /**experiencia */
    document.getElementById('animacion_habilidades').addEventListener('click',function(){
        document.getElementById('titulo_habilidades').innerHTML='H4b1l1d4d35';
        setTimeout(titulo, 2000)
        function titulo(){
            document.getElementById('titulo_habilidades').innerHTML='Habilidades';
        }
    });