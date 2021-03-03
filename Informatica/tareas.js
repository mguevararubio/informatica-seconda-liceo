let tareas = [
    {Materia:"", Descripción:"", Fecha:""}
]

let tarea= document.querySelector(`#tareas`)
function llenarTabla() {
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas) {
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.Materia}</td><td>${tarea.Descripción}</td><td>${tarea.Fecha}</td></tr>`
    }
    tareas.innerHTML = contenidoTabla;
}

let form= document.querySelector ('#formulario')
function añadirTarea() {
    let MateriaNueva = document.querySelector('#formulario')
    function añadirTarea() {
        let MateriaNueva = document.querySelector ("input[name=Materia]").value
        let DescripciónNueva = document.querySelector ("input[name=Descripción]").value
        let FechaNueva = document.querySelector ("input[name=Fecha]").value

        let tareaNueva = {Materia:MateriaNueva, Descripción:DescripciónNueva, Fecha:FechaNueva}
        console.log ("Añadir la siguiente tarea");
        console.log (tareaNueva)

        tareas.push(tareaNueva)
        llenarTabla()
        return false
    }
}
form.onsubmit = añadirTarea