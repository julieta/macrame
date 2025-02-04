function cargarProyectos() {
    console.log(proyectos);

    const container = document.getElementsByClassName("grid-container-proyectos")[0];
    let contenido = "";

    proyectos.forEach((element, $id) => {
        contenido += `<div class="proyectos" onClick="displayModal(${$id})">
            <img src="images/${element.imagen}" alt="${element.proyecto}" width="200" height="270" />
            <h5>${element.proyecto}</h5>
          </div>`;;

    })
    container.innerHTML = contenido;
}

function displayModal(numberCert) {
    const modal = document.getElementById("proyectos-modal");
    modal.style.display = "block";

    const element = proyectos[numberCert];
    modal.innerHTML = `<h5>${element.proyecto}</h5>
                        <img src="images/${element.imagen}" alt="${element.proyecto}" />
                        <p>${element["descripcion"]}</p>
                        <button type="button" onclick="closeModal()">Cerrar</button>`;
}

function closeModal() {
    document.getElementById("proyectos-modal").style.display = "none";
}

/**Buscador */
function buscarProyecto() {
    let input = document.getElementById("search").value.toLowerCase();
    console.log(input)
    let proyectos = document.querySelectorAll(".proyecto");

    proyectos.forEach(proyecto => {
        let nombre = proyecto.getAttribute("proyectos").toLowerCase();

        if (nombre.includes(input)) {
            proyecto.style.display = "block"; // Muestra el proyecto si coincide
        } else {
            proyecto.style.display = "none"; // Oculta si no coincide
        }
    });
}

// También detecta búsqueda al escribir en el input
document.getElementById("search").addEventListener("keyup", buscarProyecto);