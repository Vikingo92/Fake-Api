
    //Formulario
    const form = document.getElementById('formulario');
    let btn = document.getElementById('boton2');
    let tbl = document.getElementById('table');

  

    form.addEventListener('submit', enviar);

    function enviar(eve) {
        eve.preventDefault();

        let n1, n2, n3, n4, msg;

        n1 = document.getElementById('dato1').value;
        n2 = document.getElementById('dato2').value;
        n3 = document.getElementById('dato3').value;
        n4 = document.getElementById('dato4').value;

       console.log(n1,n2,n3,n4);

    };


    // msg = document.getElementById('alerta');

    // if (isNaN(n4)) {
    //     msg.textContent = 'En el campo teléfono de ingresar un número.'
    // } else {
    //     msg.textContent = 'Registro exitoso.'
    // }

    // let datos = {
    //     nombre: n1,
    //     emal: n2,
    //     contrasena: n3,
    //     telefono: n4
    // }
    // registro.push(datos);


    // function guardar() {
    //     localStorage.setItem('info', JSON.stringify(datos));
    // }
    // guardar(datos);

    // form.reset();