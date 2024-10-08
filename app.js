function efectoIconos(contenedor)
{
    var imagen = "";
    if(contenedor == 1)
    {
        imagen = "url('fondosYPortadas/ninias.jpg')";
    }
    else if(contenedor == 2)
    {
        imagen = "url('fondosYPortadas/ninios.jpg')";
    } 
    else if(contenedor == 3)
    {
        imagen = "url('fondosYPortadas/temporada.jpg')";
    }
    else
    {
        imagen = "url('fondosYPortadas/eventos.jpg')";
    }

    setTimeout(() =>{document.body.style.backgroundImage = imagen},200);
}

function aclararFoto(id)
{
    var codigo = "foto" + id; 
    var foto = document.getElementById(codigo);
    foto.style.opacity = "1";
}

function apagarFoto(id)
{
    var codigo = "foto" + id; 
    var foto = document.getElementById(codigo);
    foto.style.opacity = "0.3";
}

function galeriaNinias()
{
    var contenedorPadre = document.querySelector("#seccionNinias");
    for(var i = 1; i<=58; i++)
    {
        var contenedor = document.createElement("div");
        contenedor.className = "contenedorMini";
    
        contenedor.innerHTML = `<img src='galeriaNinias/${i}.jpg' class='imagenContenedorMini' id='foto${i}'><img src='fondosYPortadas/fondoCorazon.png' class='marcoContenedorMini' onmouseover='aclararFoto(${i})' onmouseleave='apagarFoto(${i})'>`;
        contenedorPadre.appendChild(contenedor);   
    }
}

function mostrarOcultarGaleria(id)
{
    var galeria = document.getElementById(id);
    if(galeria.className === "seccionesOculto")
    {
        galeria.className = "seccionesGaleria";   
    }

    else
    {
        galeria.className = "seccionesOculto";
    }
}