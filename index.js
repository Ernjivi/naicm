var tabla = document.getElementById('tabla')
var encabezadoTabla = document.getElementById('#encabezadoTabla')
var cuerpo = document.getElementById('#cuerpo')

fetch('bbdd.json')
.then(res => res.json())
.then(data => {
    for(i = 0; i < data.length; i++){
        cuerpo.innerHTML += (`
        <tr>
                <th scope="row">1</th>
                <td>${(data.[i])}</td>
                </tr>`)}
})
