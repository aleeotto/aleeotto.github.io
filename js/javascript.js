//estas son las dos funciones para cambiar la imagen de perfil al pasar el mouse
function cambiarimg(imagen) {
   document.getElementById(imagen).src = 'https://media.tenor.com/1DgKXzT0hgcAAAAC/michael-scott.gif';
}

function imagendefault(imagen) {
    document.getElementById(imagen).src = 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png';
}
//estas son las dos funciones que cambian el tamaño de los iconos al pasar con el mouse
function aumentar(icono) {
    document.getElementById(icono).width = 35;
    document.getElementById(icono).height=30;
}

function tamañodefault(icono) {
    document.getElementById(icono).width=30;
    document.getElementById(icono).height=24;
}