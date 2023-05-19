
$('#btn-cargar').on('click', function (evento) {
    // Hacer la solicitud a la API
    $.get("http://192.168.16.90:8000/api/solicitudes", function (data) {
        // Iterar sobre los datos de la API
        $.each(data.data, function (index, elemento) {
            // Generar el HTML con tu diseño para cada elemento
            let tipo_sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
            let source = "img/" + tipo_sangre[elemento.tipo_sangre - 1] + ".png";
            var html =
                '<div class="tablas border border-2 rounded-3 w-50 bg-white mt-5">' +
                '<div class="row">' +
                '<div class="col-6">' +
                '<label class="form-label"><strong>' + elemento.nombre_apellido_donatario + '</strong></label>' +
                '</div>' +
                '<div class="col-6">' +
                '<p class="text-end"><i class="bi bi-trash-fill"></i>' + '<i class="bi bi-share text-danger"></i></p>' +
                '</div>' +
                '<div>' +

                '<div class="row">' +
                '<div class="col-6">' +
                '<label class="form-label">Telefono: </label>' +
                '</div>' +
                '<div class="col-6">' +
                '<p class="text-end">' + elemento.telefono_contacto + '</p>' +
                '</div>' +
                '<div>' +
                '<div class="row">' +
                '<div class="col-6">' +
                '<label class="form-label">C.I: </label>' +
                '</div>' +
                '<div class="col-6">' +
                '<p class="text-end">' + elemento.cedula_donatario + '</p>' +
                '</div>' +
                '<div>' +
                '<div class="row">' +
                '<div class="col-6">' +
                '<label class="form-label">Lugar de donacion: </label>' +
                '</div>' +
                '<div class="col-6">' +
                '<p class="text-end">' + elemento.establecimiento + '</p>' +
                '</div>' +
                '<div>' +
                '<div class="row">' +
                '<div class="col-6">' +
                '<label class="form-label">R.H: </label>' +
                '</div>' +
                '<div class="col-6">' +
                '<p class="text-end">' + elemento.tipo_sangre + '</p>' +
                '</div>' +
                '<div>' +
                '<div class="row">' +
                '<div class="col-6">' +
                '<label class="form-label">Volumenes: </label>' +
                '</div>' +
                '<div class="col-6">' +
                '<p class="text-end">' + elemento.volumenes_necesarios + '</p>' +
                '</div>' +
                '<div>' +
                '<div class="row">' +
                '<div class="col-12">' +
                '<p class="text-center">' + elemento.solicitud + '</p>' +
                '</div>' +
                '<div>' +
                '</div>'

            // Agregar el HTML generado al contenedor
            $('.container').append(html);
        });
    });
})



