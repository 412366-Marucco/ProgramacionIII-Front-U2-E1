const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;


    const datos = {
        nombre,
        email,
        mensaje
    }

    console.log(datos);

    formulario.style.display = "none";

    const mensajeGracias = document.createElement("p");
    mensajeGracias.textContent = "¡Gracias por tu mensaje!";
    mensajeGracias.className = "text-green-600 text-lg mt-4";
    formulario.parentNode.appendChild(mensajeGracias);

})


