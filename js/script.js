
$('#btn-cargar').on('click', function (evento) {
    // Hacer la solicitud a la API
    $.get("http://192.168.16.90:8000/api/solicitudes", function (data) {
        // Iterar sobre los datos de la API
        $.each(data.data, function (index, elemento) {
            // Generar el HTML con tu diseño para cada elemento
            let tipo_sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
            let source = "img/" + tipo_sangre[elemento.tipo_sangre - 1] + ".png";
            var html =  ` <div class="border border-2 rounded-3 w-50 bg-white mx-auto mt-5 mb-2 p-2">
            <div class="row">
  
              <p class="d-flex justify-content-between">
                <span><strong>${elemento.nombre_apellido_donatario}</strong></span>
                <span><i class="bi bi-trash-fill"></i><i class="bi bi-share text-danger"></i></span>
              </p>
              <p class="d-flex justify-content-between">
                <span>Telefono: </span>
                <span>${elemento.telefono_contacto}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span>C.I: </span>
                <span>${elemento.cedula_donatario}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span>Lugar de donacion: </span>
                <span>${elemento.establecimiento}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span>R.H: </span>
                <span>${elemento.tipo_sangre}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span>Volumenes: </span>
                <span>${elemento.volumenes_necesarios}</span>
              </p>
              <p class="text-center">
                ${elemento.solicitud}
              </p>
              
            </div>
          </div>`

            // Agregar el HTML generado al contenedor
            $('.container').append(html);
        });
    });
})



