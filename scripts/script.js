let temp = document.getElementById('template-movie').content;
const frag = document.createDocumentFragment();
const divi = document.getElementById('division');
const contenedor = document.getElementById('contenedor');
let s = document.getElementById('series');
let p = document.getElementById('peliculas');
let r = document.getElementById('registro');
let data;

document.addEventListener('DOMContentLoaded', async() => {
    let res = await fetch('http://localhost:4000/series');
    data = await res.json();
    localStorage.setItem('Series', JSON.stringify(data));

    cargarInfo(data);

})

const cargarInfo = data => {

    data.forEach(series => {
        const {id,name,description,category,image,genre} = series;

        temp.querySelector('h4').textContent = name;
        // temp.querySelector('h6').textContent = category;
        // temp.querySelector('h7').textContent = genre;
        temp.querySelector('img').setAttribute('src', image);
        temp.querySelector('img').setAttribute('id', id);

        const clone = temp.cloneNode(true);
        frag.appendChild(clone);

    })
    divi.appendChild(frag);
}

//Se envia la referencia del id al local Storage y se redirige a otra pagina
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('card-img-top')) {
        localStorage.setItem('id', e.target.id);
        window.location.href ='../pages/descript.html';
    }
})

//Filtrar por Genero
p.addEventListener('click', (eve) => {
    eve.preventDefault();
    let f1 = data.filter(m => m.genre == 'Movie');
    divi.innerHTML = '';
    cargarInfo(f1);
 
})

//Filtrar por Serie.
s.addEventListener('click', (e) => {
    e.preventDefault();
   
    let f2 = data.filter(t => t.genre == 'Serie');
    divi.innerHTML = '';
    cargarInfo(f2);

})

