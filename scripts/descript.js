// const temp = document.getElementById('template-movie').content;
// const frag = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', async () => {
    let id = localStorage.getItem('id');
    let res = await fetch(`http://localhost:4000/series/${id}`);
    let data = await res.json();
    let container = document.getElementById('division');
    // series = JSON.parse(localStorage.getItem('id'));

    almacenar();
    
    container.innerHTML = `
    <div align="center">
        <img src="../${data.image}" width="380px">
        <h2> ${data.name}</h2>
        <p><b>Descripción:</b> ${data.description} </p>
        <p><b>Categoría:</b> ${data.category} </p>
        <p><b>Género:</b> ${data.genre} </p>
    </div><br>
    `
})







function almacenar() {
//     divi.innerHTML = '';
//     series = JSON.parse(localStorage.getItem('id'));
//     const {id,name,description,category,image,genre} = series;

//     divi.innerHTML = `
//     <table>
//     <tr>
//         <td><img="${image}" width="200"  height="400"></td>
//     </tr>
//     <tr>
//         <td><h2>${name}  </h2>
//             <h3>${description}  </h3>
//             <h5>${category} </h5>
//             <h4>${genre}  </h4>
//         </td>
//     </tr>
// </table>
//     `

}





   


