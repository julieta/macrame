function cargarProyectos(proyectosAmostrar = proyectos) {
    console.log(proyectos);

    const container = document.getElementsByClassName("grid-container-proyectos")[0];
    let contenido = "";

    proyectosAmostrar.forEach((element, $id) => {
        contenido += `<div class="proyectos" onClick="displayModal(${$id})">
            <img src="images/${element.imagen}" alt="${element.proyecto}" width="200" height="270" />
            <h5>${element.proyecto}</h5>
          </div>`;;

    })
    container.innerHTML = contenido;
}

function displayModal(numberProyecto) {
    const modal = document.getElementById("proyectos-modal");
    modal.style.display = "block";

    const element = proyectos[numberProyecto];
    modal.innerHTML = `<h5>${element.proyecto}</h5>
                        <img src="images/${element.imagen}" alt="${element.proyecto}" />
                        <p>${element["descripcion"]}</p>
                        <button type="button" onclick="closeModal()">Cerrar</button>`;
}

function closeModal() {
    document.getElementById("proyectos-modal").style.display = "none";
}

/**Buscador */
function buscarProyecto(proyecto) {
    const proyectosFiltrados = proyectos.filter((proyectos) =>
        proyectos.proyecto.toLocaleLowerCase().includes(proyecto.toLocaleLowerCase())
    );
    console.log(JSON.stringify(proyectosFiltrados));
    cargarProyectos(proyectosFiltrados);
}