/* global pdfMake */

const DEBUG = false;          
const ServidorRoute = "/inicio"; 

/*----------FUNCIONES----------*/

function arrayMove(data,from, to) {
  var f = data.splice(from, 1)[0];  
  data.splice(to, 0, f);
}

function format0000(numero){    
    if(numero<10)
        return "000"+numero;
    if(numero<100)
        return "00"+numero;
    if(numero<1000)
        return "0"+numero;    
    return numero.toString();
}

function formDatatoString(formData){    
    const data = [...formData.entries()];
    const asString = data
        .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join('&');
    return asString;
}
function formatDate(date) {

     if (isNaN(date.getTime()))
         return "";
    
    let mes = '' + (date.getMonth() + 1),
        dia = '' + date.getDate(),
        anio = date.getFullYear();

    if (mes.length < 2) 
        mes = '0' + mes;
    if (dia.length < 2) 
        dia = '0' + dia;

    return [dia, mes, anio].join('/');
}
function formatDateTime(date) {

     if (isNaN(date.getTime()))
         return "";
    
    let mes = '' + (date.getMonth() + 1),
        dia = '' + date.getDate(),
        anio = date.getFullYear();

    if (mes.length < 2) 
        mes = '0' + mes;
    if (dia.length < 2) 
        dia = '0' + dia;

    let tiempo = date.toTimeString().split(" ")[0].split(":");

    return [dia, mes, anio].join('/')+" - "+[tiempo[0],tiempo[1]].join(':')+" hrs";
}
function formatDateTimePHP(date) {

     if (isNaN(date.getTime()))
         return "";
    
    let mes = '' + (date.getMonth() + 1),
        dia = '' + date.getDate(),
        anio = date.getFullYear();

    if (mes.length < 2) 
        mes = '0' + mes;
    if (dia.length < 2) 
        dia = '0' + dia;

    return [anio, mes, dia].join('-')+" "+date.toTimeString().split(" ")[0];
}

function parseDateTimePHP(fechaphp){
    
    let data = fechaphp.split(" ");
    
    let fecha = data[0].split('-');
    let hora  = data[1].split(':');
    
    let anio = Number.parseInt(fecha[0]),
        mes  = Number.parseInt(fecha[1])-1,
        dia  = Number.parseInt(fecha[2]),
        horas = Number.parseInt(hora[0]),
        minutos = Number.parseInt(hora[1]);

    return new Date(anio,mes,dia,horas,minutos);
    
}
function parseDatePHP(fechaphp){
        
    let fecha = fechaphp.split('-');
    
    let anio = Number.parseInt(fecha[0]),
        mes  = Number.parseInt(fecha[1])-1,
        dia  = Number.parseInt(fecha[2]);

    return new Date(anio,mes,dia);
    
}

function modDias(date,dias){
    date.setDate(date.getDate() + dias);
}

function isString(componente){
    return (typeof(componente)==="string");    
}

function isFechaValida(dia,mes,anio){     
    if(dia==="" || mes==="" || anio==="")
        return false;    
    let fecha = new Date(Number.parseInt(anio),Number.parseInt(mes)-1,Number.parseInt(dia));    
    return (fecha.getFullYear() === Number.parseInt(anio) && 
            (fecha.getMonth()+1) === Number.parseInt(mes) && 
            fecha.getDate() === Number.parseInt(dia));
}
function isTextoValido(texto){
    if(texto==="")
        return false;
    if(texto.includes('|') || texto.includes('&') || texto.includes('%') || texto.includes('$') || texto.includes('\"') || texto.includes('\''))
        return false;
    return true;
}

/*----------MODELO----------*/

class Modelo{
    
  
   Solicitud(archivo,form,callback){
           
       if(DEBUG){ 
           
           let opciones = {
               url : 'http://jesusgo.c1.biz/php/'+archivo,
               method : 'POST',
               data : formDatatoString(form)
           };        
           
           var solicitud = new XMLHttpRequest();
           solicitud.open(opciones.method, 'http://cors-anywhere.herokuapp.com/' + opciones.url);
           solicitud.onload = function() {
                 console.log(opciones.data+" ["+solicitud.responseText+"]");
                 if(callback !== null && callback !== undefined)
                    callback(                        
                       JSON.parse(solicitud.responseText)
                    );
            };
            solicitud.onerror = function(err){
                if(callback !== null && callback !== undefined)
                    callback({operacion:"error",estado:"-1",mensaje:err});
            };
            //solicitud.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            solicitud.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;  text/html; charset = utf-8');
            
            solicitud.send(opciones.data);
     
     
        }
       else{           
           fetch("/php/"+archivo, {
                method: 'POST',
                body: form
            })
            .then(function(response) {
               if(response.ok) {
                   return response.text();
               } else {
                   throw "Error en la llamada Ajax "+response.statusText;
               }
            })
            .then(function(texto) {
                if(callback !== null && callback !== undefined)
                    callback(JSON.parse(texto));           
            })
            .catch(function(err) {
               callback({operacion:"error",estado:"-1",mensaje:err});
            });
           
       }
       
   }  
   SolicitudSolicitud(nombre,correo,tipo,asunto,mensaje,callback){
        const form = new FormData();
                
        form.append('nombre', nombre);    
        form.append('correo', correo);    
        form.append('tipo', tipo);    
        form.append('asunto', asunto);    
        form.append('mensaje', mensaje);    

        this.Solicitud("solicitud.php", form, callback);
   }
   
};

