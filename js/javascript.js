function cambiarimg(imagen) {
   document.getElementById(imagen).src = 'https://media.tenor.com/1DgKXzT0hgcAAAAC/michael-scott.gif';
   
}

function imagendefault(imagen) {
    document.getElementById(imagen).src = 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png';
}

function aumentar(icono) {
    document.getElementById(icono).width = 35;
    document.getElementById(icono).height=30;
}

function tamañodefault(icono) {
    document.getElementById(icono).width=30;
    document.getElementById(icono).height=24;
}